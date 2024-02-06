<template>
    <div>
        <h4 class="text-center fw-bold"> اكتشف عروضنا وخصوماتنا </h4>
        <p class="fs-5 fw-6">
            تخفيضات مدهشة، فرصة للتوفير والاستمتاع بالتسوق
        </p>

        <section class="offers">
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
                    <swiper-slide>
                        <div class="offer">
                            <img src="@/assets/imgs/cake.jpg" alt="Offer Image" class="offer-image" />
                            <div class="offer-details">
                                <h2 class="offer-title">الكيك</h2>
                                <p class="offer-description">خصومات علي الكيك</p>
                            </div>
                            <div class="offer_tag">
                                23%
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="offer">
                            <img src="@/assets/imgs/cake.jpg" alt="Offer Image" class="offer-image" />
                            <div class="offer-details">
                                <h2 class="offer-title">الكيك</h2>
                                <p class="offer-description">خصومات علي الكيك</p>
                            </div>
                            <div class="offer_tag">
                                23%
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="offer">
                            <img src="@/assets/imgs/cake.jpg" alt="Offer Image" class="offer-image" />
                            <div class="offer-details">
                                <h2 class="offer-title">الكيك</h2>
                                <p class="offer-description">خصومات علي الكيك</p>
                            </div>
                            <div class="offer_tag">
                                23%
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="offer">
                            <img src="@/assets/imgs/cake.jpg" alt="Offer Image" class="offer-image" />
                            <div class="offer-details">
                                <h2 class="offer-title">الكيك</h2>
                                <p class="offer-description">خصومات علي الكيك</p>
                            </div>
                            <div class="offer_tag">
                                23%
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            
        </section>
    </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
import 'swiper/css';
    import { Autoplay } from 'swiper';


export default {
    name: 'MultivendorOffersComponent',
    components: {
      Swiper,
      SwiperSlide,
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

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.offer {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  position: relative;
  padding-top: 30px;
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
  width: 120px;
  height: 100px;
  margin-right: 20px;
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