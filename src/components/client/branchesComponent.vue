<template>
    <div class="pt-5 pb-5">
        <section class="branches">
             <h4 class="text-center fw-bold"> فروعنا في المملكة </h4>
            <p class="fs-5 fw-6">
                اين توجد متاجرنا ؟
            </p>

            <div class="container">
                <section class="row mt-4">
                    <div class="col-md-3 mb-3">
                        <div class="single_branch flex_between">
                            <div class="d-flex justify-content-start flex-column align-items-start">
                                <h5 class="fw-bold"> الدمام </h5>
                                <router-link to="/"> اطلع علي المزيد </router-link>
                            </div>

                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 mb-3">
                        <div class="single_branch flex_between">
                            <div class="d-flex justify-content-start flex-column align-items-start">
                                <h5 class="fw-bold"> جدة </h5>
                                <router-link to="/"> اطلع علي المزيد </router-link>
                            </div>

                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="single_branch flex_between">
                            <div class="d-flex justify-content-start flex-column align-items-start">
                                <h5 class="fw-bold"> مكة </h5>
                                <router-link to="/"> اطلع علي المزيد </router-link>
                            </div>

                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="single_branch flex_between">
                            <div class="d-flex justify-content-start flex-column align-items-start">
                                <h5 class="fw-bold"> الرياض </h5>
                                <router-link to="/"> اطلع علي المزيد </router-link>
                            </div>

                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </div>
                    </div>  

                    
                </section>
            </div>
            
        </section>
    </div>
</template>

<script>
export default {
    name: 'MultivendorBranchesComponent',

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