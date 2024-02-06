<template>
    <div class="footer">
        <div class="container">
            <div class="container p-0 px-md-3">
                <div class="home-footer d-flex flex-wrap">
                    <div class="section footer-links w-100 py-6 fs-13 d-flex flex_between border-bottom">
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3" target="_blank" rel="noreferrer">وظائف</a>
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3" target="_self" rel="noreferrer">الشروط و الأحكام</a>
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3" target="_self" rel="noreferrer">أسئلة متكررة</a>
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3 text-uppercase" target="_self" rel="noreferrer">خصوصية الموقع</a>
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3" target="_self" rel="noreferrer">إتصل بنا</a>
                        <a href="#" class="btn btn-link o-5 f-14 pt-4 pl-5 mt-3" target="_self" rel="noreferrer">خريطة الموقع</a>
                    </div>
                    <div class="section poppular-links border-bottom w-100 py-5 pb-md-0">
                        <div class="fs-13 row">
                            <div class="col-sm-4 p-0">
                                <div class="accordion accordion-flush" id="restaurantAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="restaurantHeading">
                                            <button class="accordion-button f-14 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRestaurants" aria-expanded="true" aria-controls="collapseRestaurants">متاجر</button>
                                        </h2>
                                        <div id="collapseRestaurants" class="accordion-collapse collapse show" aria-labelledby="restaurantHeading" data-bs-parent="#restaurantAccordion">
                                            <div class="accordion-body d-flex flex-column justify-content-start align-items-start">
                                                <a href="-zamalek" class="btn btn-link pl-5 pt-3">طابون</a>
                                                <a href="-africa-city-stars" class="btn btn-link pl-5 pt-3">بلانت أفريكا</a>
                                                <a href="-yuan-maadi" class="btn btn-link pl-5 pt-3">لان يوان - المعادى</a>
                                                <a href="-heliopolis" class="btn btn-link pl-5 pt-3">حضرموت</a>
                                                <a href="-food-heliopolis" class="btn btn-link pl-5 pt-3">ويلد هاوس باي كريزي فوود</a>
                                                <a href="/ar" class="btn btn-link pl-5 pt-3 more-link">مطاعم أخرى</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 p-0">
                                <div class="accordion accordion-flush" id="cuisineAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="cuisineHeading">
                                            <button class="accordion-button f-14 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCuisines" aria-expanded="true" aria-controls="collapseCuisines">كافيهات مشهورة</button>
                                        </h2>
                                        <div id="collapseCuisines" class="accordion-collapse collapse show" aria-labelledby="cuisineHeading" data-bs-parent="#cuisineAccordion">
                                            <div class="accordion-body  d-flex flex-column justify-content-start align-items-start">
                                                <a href="/egypt/cuisine/italian" class="btn btn-link pl-5 pt-3">المأكولات الإيطاليـة</a>
                                                <a href="/egypt/cuisine/american" class="btn btn-link pl-5 pt-3">المأكولات الأمريكية</a>
                                                <a href="/egypt/cuisine/chinese" class="btn btn-link pl-5 pt-3">المأكولات الصينيـة</a>
                                                <a href="/egypt/cuisine/indian" class="btn btn-link pl-5 pt-3">المأكولات الهنديـة</a>
                                                <a href="/egypt/cuisine/lebanese" class="btn btn-link pl-5 pt-3">المأكولات اللبنانيـة</a>
                                                <a href="/ar/egypt/cuisines" class="btn btn-link pl-5 pt-3 more-link">مطابخ أخرى</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 p-0">
                                <div class="accordion accordion-flush" id="aboutAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="aboutHeading">
                                            <button class="accordion-button f-14 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAbout" aria-expanded="true" aria-controls="collapseAbout">عن تطبيقنا </button>
                                        </h2>
                                        <div id="collapseAbout" class="accordion-collapse collapse show" aria-labelledby="aboutHeading" data-bs-parent="#aboutAccordion">
                                            <div class="accordion-body  d-flex flex-column justify-content-start align-items-start">
                                                <a href="/ar/egypt/about-us" class="btn btn-link pl-5 pt-3">من نحن</a>
                                                <a href="/ar/egypt/contact-us" class="btn btn-link pl-5 pt-3">إتصل بنا</a>
                                                <a href="/ar/egypt/privacy" class="btn btn-link pl-5 pt-3">سياسة الخصوصية</a>
                                                <a href="/ar/egypt/terms" class="btn btn-link pl-5 pt-3">الشروط و الأحكام</a>
                                                <a href="/ar/egypt/faq" class="btn btn-link pl-5 pt-3">أسئلة متكررة</a>
                                                <a href="/ar/egypt/sitemap" class="btn btn-link pl-5 pt-3 more-link">خريطة الموقع</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex_center w-100 pb-3">
                        <div class="pt-4 flex_center">  
                            <h4 class="whiteColor fs-6 o-5 text-center flex_center">
                                جميع الحقوق محفوظة
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MultivendorFooterComponent',

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
    .footer{
        background-color:  #262626;
        color: rgb(255, 255, 255);
        position: relative;
        .btn-link{
            color: #fff !important;
            text-decoration: none !important;
        }
        .accordion-item , .accordion-button{background-color: transparent !important; color: #fff !important; box-shadow: none !important;}
        .accordion-button::after{
            color: #fff !important;
            margin-right: auto !important;
            margin-left: 0 !important;
                filter: invert(1);
        }
    }
</style>