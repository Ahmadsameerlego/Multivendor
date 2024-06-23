<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> {{  $t('profile.main')  }} </router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor"> {{ $t('profile.profile') }} </p>

        <section class="loginSection" style="width: 93%; margin: auto">
          <h3 class="fw-bold mb-3"> {{ $t('profile.changePassword') }} </h3>
          <p class="registerParagraph fw-bold d-flex align-items-center">
            <span class="step flex_center">2</span>
            {{ $t('profile.changeEdit') }}
          </p>

         <form class="flex flex-wrap gap-3 p-fluid" @submit.prevent="resetPassword()">
            <div class="row">
              <div class="col-md-12 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold d-block mb-2 text-end"> {{ $t('auth.oldPassword') }} </label>
                    <Password v-model="old_password" toggleMask   :feedback="false" class="defaultInput" :placeholder="$t('auth.oldPassDesc')" />

                    <!-- icon  -->
                    <!-- <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div> -->


                </div>


            <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold d-block mb-2 text-end mb-2"> {{ $t('auth.newPassword')  }} </label>
                    <Password v-model="password"  toggleMask class="defaultInput" :placeholder="$t('auth.newPassDesc')" />

                    <!-- icon  -->
                    <!-- <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div> -->


                </div>

                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold d-block mb-2 text-end mb-2"> {{  $t('auth.confirmPass')  }} </label>
                    <Password v-model="password_confirmation" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.confirmDesc')" />

                    <!-- icon  -->
                    <!-- <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div> -->


                </div>

                <div v-if="showValid">
                  <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check"></i>
                    <span> {{  $t('auth.iden')  }} </span>
                  </p>
                  <p v-else class="passwordWrong d-flex align-items-center text-danger">
                      <i class="fa-regular fa-circle-xmark"></i>
                      <span > {{  $t('auth.dontIden')  }} </span>
                  </p>
                </div>
              </div>



              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5" :disabled="disabled"> 
                  
                    <span v-if="!disabled"> {{  $t('auth.reset')  }}  </span>
                    <div class="spinner-border mx-2" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
              </div>



            </div>
          </form>
        </section>
      </div>
    </div>
  </section>

  <Toast />
  <!--  <sendOtp :openOtp="openOtp"/> -->



</template>

<script>
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import axios from 'axios';
export default {
    data(){
        return{
            open : false,
            password_confirmation : null,
            password: null,
            old_password : null ,
            disabled : false
        }
    },  
    components:{
        Password,
        Toast
    },
    methods:{
      async resetPassword(){
        this.disabled = true ;
            const fd = new FormData();
        fd.append('old_password', this.old_password)
        fd.append('password', this.password);
        fd.append('password_confirmation', this.password_confirmation);

            await axios.post('user/update-password', fd , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                lang : 'ar'
            }
            })
            .then((res) => {
            if( res.data.key ==='success' ){
                this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                this.disabled = false ;

                setTimeout(() => {
                    this.$router.push('/profile')
                }, 2000);

              
            }else{
                this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                this.disabled = false ;
            }
        })
        
      }

    },
    watch:{
        openReset(){
            if(this.openReset == true || this.openReset == false){
                this.open = true ;
            }
        },
        password_confirmation(){
           
            this.showValid = true ;
        }
    },
    props:{
        openReset : Boolean
    },
    computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        }
    },
}
</script>

<style scoped lang="scss">
.profile_pic{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
  .uploadInput{
    position: absolute;
    top : 0;
    right:0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
:deep(.p-inputtext){
  width: 100% !important;
}
:deep(.p-dropdown){
      background: #f6f6f6 !important;
}
.profile_image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .image{
    position: absolute;
    widows: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 50%;
    opacity: 0;
  }
}
.p-dropdown {
  position: absolute !important;
  width: 25%;
  top: 32px !important;
}
.checkCondition {
  accent-color: #2a3255;
  width: 16px;
  height: 16px;
}
</style>

<style lang="scss">
.registerParagraph {
  position: relative;
  font-size: 17px !important;
  .step {
    width: 35px;
    height: 35px;
    margin-left: 9px;
    background-color: #feede7;
    border-radius: 50%;
    border: 1px solid #e57d61;
    color: #e57d61;
    font-size: 21px !important;
  }
}
</style>
