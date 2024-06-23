<template>
    <section id="orders" class="mt-4">
        <div class="container">
            <!-- breadcrumb  -->
            <div class="breadcrumb d-flex">
                <router-link to="/" class="inActive"> {{  $t('profile.main')  }} </router-link>&nbsp; - &nbsp;
                <p class="active mainColor">{{ $t('order.mine')  }} </p>
            </div>

            <!-- content  -->
            <section>
                <h5 class="fw-bold red mb-3">{{ $t('order.mine')  }} </h5>
                
                <!-- <div v-if="load" class="row">
                    <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton style="width:100%" height="4rem"></Skeleton>
                    </div>
                </div> -->
                <div class="statuses d-flex justify-content-center align-items-center">
                    <div class="w-25 mx-4">
                        <button class="main_btn w-100 " @click="reservationType('pending ')"> {{ $t('order.pending') }} </button>
                    </div>
                    <div class="w-25 mx-4">
                        <button class="main_btn w-100 " @click="reservationType('waiting_payment  ')"> {{ $t('order.waitPayment') }} </button>
                    </div>
                    <div class="w-25 mx-4">
                        <button class="main_btn w-100" @click="reservationType('inprogress ')"> {{  $t('order.inProgress')  }} </button>
                    </div>
                    <div class="w-25 mx-4">
                        <button class="main_btn w-100" @click="reservationType('finished')"> {{ $t('order.finished') }} </button>
                    </div>
                </div>


                <div class="row mt-4" v-if="orders.length > 0">
                    <div class="col-md-6   mb-3" v-for="order in orders" :key="order.id">
                        <router-link :to="'orderDetails/'+order.id" >
                             <section class="single_card">
                                 <!-- single card  -->
                            <div class=" d-flex justify-content-between align-items-baseline">
                                <!-- card image  -->
                               <section>
                                <h6>
                                    {{ $t('order.storeInfo') }}
                                </h6>
                                 <div class="card_image">
                                    <img :src="order.store.image" alt="">
                                </div>

                                <!-- card details  -->
                                <div class="card_details mx-3">

                                    <p class="fw-bold"> {{ order.store.name }}  </p>

                                </div>
                               </section>

                              
                                <section>
                                <h6>
                                    {{ $t('order.clientInfo') }}
                                </h6>
                               

                                <!-- card details  -->
                                <div class="card_details mx-3">

                                    <p class="fw-bold"> {{ order.user.name }}  </p>

                                </div>
                                <div class="card_details mx-3">

                                    <p class="fw-bold"> {{ order.user.phone }}  </p>

                                </div>
                               </section>
                       

                               

                            </div>
                             <!-- time  -->
                                <div class="abs_detailsfw-bold fw-bold">
                                    <!-- <img :src="require('@/assets/imgs/clock.svg')" alt=""> -->
                                    <span class="grayColor mx-2"> {{ $t('order.orderDate') }}: </span>
                                    <span > {{ order.order_date  }} </span>
                                </div>
                             </section>
                        </router-link>
                        
                    </div>
                </div>

                



                <div  class="text-center text-danger" v-else>
                    <Message severity="error" > {{ $t('order.empty') }} </Message>
                </div>
            </section>


            <!-- <paginationComponentVue /> -->
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Message from 'primevue/message';

// import Skeleton from 'primevue/skeleton';

// import paginationComponentVue from '../layout/paginationComponent.vue'
export default {
    data(){
        return{
            orders : [],
            load : true,
            LenghtZero: false,
            type : 'pending'
        }
    },
    components:{
        // paginationComponentVue ,
        // Skeleton
        Message
    },
    methods: {
        reservationType(type) {
            this.type = type  
            this.getOrders()
        },
        // get orders 
        async getOrders(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get(`user/orders?status=${this.type}`, {headers})
            .then( (res)=>{
                if( res.data.key == 'success'){
                    this.orders = res.data.data.orders ;
                    this.load = false ;
                }else{
                    this.LenghtZero = true ;
                    this.load = false ;
                }
            } )
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>

<style lang="scss" scoped>
a{
        color: inherit !important;
        text-decoration: none !important;
    }
.single_card{
    box-shadow: 0px 0px 10px #33333325;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    .card_image{
        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

}
    .orderStatus{
        width: 100px;
        height: 30px;
        border-radius: 4px;
        padding: 5px;
        &.applied{
            background-color: #F1DCC9;
        }
        &.accepted{
            background-color: #D5F2CB;
            span{
                color:#316D27
            }
        }
        &.refused{
            background-color: #F1C9C9;
            span{
             color: #F44336;   
            }
        }
        &.finished{
            background-color: #DCECFF;
            span{
             color: #253974;   
            }
        }
    }
</style>