<template>
    <div class="pt-5 pb-5">
        <section>
            <div class="row rowOVer">
                <div class="col-md-6 mb-3">
                    <div class="downloadapp_image">
                        <img src="@/assets/imgs/app.png" alt="">
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-column align-items-start">
                    <div class="d-flex flex-column align-items-start">
                        <h4 class="fw-bold"> {{  $t('home.App')  }} </h4>
                        <p class="fs-5">
                            {{  $t('home.appDesc')  }}.
                        </p>
                    </div>

                    <div class="download d-flex">
                        <div class="single_download">
                            <a href="#">
                                <img src="@/assets/imgs/googleplay.png" alt="">
                            </a>
                        </div>

                         <div class="single_download mx-3">
                            <a href="#">
                                <img src="@/assets/imgs/appstore.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MultivendorDownloadApp',

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
    .downloadapp_image{
        img{
            width: 100%;
            height: 300px;
            object-fit: contain;
        }
    }
    .single_download{
        img{
            width: 200px;
            height: 120px;
            object-fit: contain;
            border-radius: 10px;
        }
    }
</style>