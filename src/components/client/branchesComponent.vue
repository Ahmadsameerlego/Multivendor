<template>
    <div class="pt-5 pb-5">
        <section class="branches">
             <h4 class="text-center fw-bold"> {{ $t('home.branches') }} </h4>
            <p class="fs-5 fw-6">
                {{  $t('home.whereBranches')  }}
            </p>

            <div class="container">
                <section class="row mt-4" v-if="cities.length>0">
                    <div class="col-md-3 mb-3" v-for="(city , index) in cities" :key="index">
                        <div class="single_branch flex_between">
                            <div class="d-flex justify-content-start flex-column align-items-start">
                                <h5 class="fw-bold"> {{ city.name }} </h5>
                                <router-link to="/"> {{ $t('home.showMore') }} </router-link>
                            </div>

                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>
                </section>
                 <Message severity="info" v-else > {{  $t('home.not_cities')  }} </Message>
            </div>
            
        </section>
    </div>
</template>

<script>

import Message from 'primevue/message';

export default {
    name: 'MultivendorBranchesComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    components: {
      Message  
    },
    props: {
        cities : []  
    },
    methods: {
        
    },
};
</script>

<style lang="scss">
    .single_branch{
        border: 1px solid #ccc;
        border-radius: 15px;
        padding: 20px;
        a{
            color: #4c3424;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            border-bottom: 1px solid #4c3424;
        }
    }
</style>