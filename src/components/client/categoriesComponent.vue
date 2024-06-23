<template>
    <div class="container pt-5 pb-5">
        <h4 class="text-center fw-bold"> {{ $t('home.discover') }} </h4>
        <p class="fs-5 fw-6">
                {{  $t('home.discoverDesc')  }}
        </p>
        <div class="">
            <div class="row">
                <div class="col-md-4 mb-3" v-for="(cat, index) in categories" :key="index">
                    <Card style="pt-3">
                        <template #header>
                            <img v-if="cat.image!==''" alt="user header" class="category-image " :src="cat.image" />
                            <img v-else alt="user header" class="category-image " :src="require('@/assets/imgs/logo.png')" />
                        </template>
                        <template #title>{{cat.name}}</template>
                        <template #content>
                            <p class="m-0">
                                {{  cat.description  }}
                                </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <router-link to="/markets" class="main_btn px-5"> {{  $t('home.explore')  }} </router-link>
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
    props: {
        categories : Array  
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