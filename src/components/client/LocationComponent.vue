<template>
    <div class="location-section">
        <section class="flex_center h-100">
            
            <div>
                <h1 class="mb-4 whiteColor">اطلب قهوتك اونلاين في اي وقت</h1>
                <div class="form-group d-flex position-relative">
                    <input type="text" class="form-control" placeholder="ابحث عن مدينة , عنوان واي ما تريد">
                    <button class="btn main_btn mx-3 w-25 pt-3 pb-3"> اختر موقعك </button>
                    <i class="fa-solid fa-location-crosshairs"></i>
                </div>
            </div>
           
        </section>
    </div>
</template>

<script>
export default {
    name: 'MultivendorLocationComponent',

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
    .location-section{
        background-color: #bfbdbc;
        height: 70vh;
        background-image: url('@/assets/imgs/coffee.webp');
        background-repeat: no-repeat;
        background-size: cover;
        .location_image{
            width: 20%;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .fa-location-crosshairs{
            position: absolute;
            font-size: 20px;
            left: 28%;
            top: 32%;
        }
    }
</style>