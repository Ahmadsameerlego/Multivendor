<template>
    <div>
        <h4 class="text-center fw-bold"> {{  $t('home.offers')  }} </h4>
        <p class="fs-5 fw-6">
            {{  $t('home.offersDesc')  }}
        </p>

        <section class="offers" v-if="ads.length>0">
            <div class="container">
                <swiper
                    :slides-per-view="3"
                     :loop="true"
                    :space-between="50"
                        :modules="modules"

                     :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        }"
                >
                    <swiper-slide v-for="(ad, index) in ads" :key="index">
                        <div class="offer">
                            <img :src="ad.image" alt="Offer Image" class="offer-image" />
                            <!-- <div class="offer-details">
                                <h2 class="offer-title">الكيك</h2>
                                <p class="offer-description">خصومات علي الكيك</p>
                            </div>
                            <div class="offer_tag">
                                23%
                            </div> -->
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            
        </section>
          <div v-else>
                <div class="container">
                   <Message severity="info" > {{  $t('order.noOffers')  }} </Message>
                </div>

        </div>
    </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
import Message from 'primevue/message';

  // Import Swiper styles
import 'swiper/css';
    import { Autoplay } from 'swiper';


export default {
    name: 'MultivendorOffersComponent',
    components: {
      Swiper,
      SwiperSlide,
      Message
    },
    setup() {
         return {
        modules: [Autoplay],
      };
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    props: {
      ads : Array  
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.offer {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  position: relative;
}
.offer_tag{
    background-color: red;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 56px;
    border-radius: 4px;
    font-size: 13px;
    padding: 3px;
}
.offer-image {
  width: 100%;
  height: 100px;
  border-radius: 10px;
}

.offer-details {
  flex-grow: 1;
}

.offer-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.offer-description {
  font-size: 16px;
}
</style>