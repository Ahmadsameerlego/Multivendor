<template>
    <div class="container pt-5 pb-5">
        <h4 class="text-center fw-bold"> اكتشف منتجاتنا </h4>
        <p class="fs-5 fw-6">
عالم مدهش من النكهات والروائح واللذة المبهر        
        </p>
        <div class="">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <Card style="pt-3">
                        <template #header>
                            <img alt="user header" class="category-image " src="@/assets/imgs/download.jpeg" />
                        </template>
                        <template #title>مخبوزات</template>
                        <template #content>
                            <p class="m-0">
اكتشف عالم المخبوزات، حيث تتلاقى النكهات والروائح لتخلق تجربة لا تُنسى. في عالم المخبوزات، تجد الدفء والراحة                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <button class="main_btn px-5"> اكتشف </button>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="col-md-4 mb-3">
                    <Card style="pt-3">
                        <template #header>
                            <img alt="user header" class="category-image" src="@/assets/imgs/coffee1.webp" />
                        </template>
                        <template #title>قهوة</template>
                        <template #content>
                            <p class="m-0">
استمتع بلحظة من السحر مع كل رشفة قهوة تشتريها، حيث تتسلل رائحة البن المحمص وتنعشك بنكهتها الغنية                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <button class="main_btn px-5"> اكتشف </button>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="col-md-4 mb-3">
                    <Card style="pt-3">
                        <template #header>
                            <img alt="user header" class="category-image" src="@/assets/imgs/cake.jpg" />
                        </template>
                        <template #title>كيك</template>
                        <template #content>
                            <p class="m-0">
استمتع بلذة الكيك، فهو ليس مجرد حلوى، بل هو قطعة فنية من الطهي تجمع بين النكهات الغنية والقوام الهش                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <button class="main_btn px-5"> اكتشف </button>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>     
        </div>
    </div>
   
</template>

<script>
import Card from 'primevue/card';

export default {
    name: 'MultivendorCategoriesComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        Card
    }
};
</script>

<style lang="scss" scoped>
    .category-image{
        height: 150px;
        width: 150px;
        margin-top: 20px;
    }
</style>