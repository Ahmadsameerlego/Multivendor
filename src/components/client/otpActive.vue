<template>
  <section id="otp" class="pt-4 px-5">
    <h5 class="fw-bold main_color text-center">رمز التفعيل</h5>

    <!-- gif  -->
    <div class="otp_gif mx-auto d-flex mt-4">
      <img
        :src="require('@/assets/imgs/PGdkpvJS0N.gif')"
        class="image"
        alt=""
      />
    </div>

    <form @submit.prevent="sendCode" class="mt-5">
      <h6 class="text-center fs-20 mb-4">
        ادخل رمز التفعيل المرسل لك عبر الجوال
      </h6>
      <div class="form-group position-relative">
        <!-- otp  -->
        <div class="position-relative flex-auto">
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
            "
          >
            <v-otp-input
              ref="otpInput"
              v-model:value="code"
              name="code"
              input-classes="otp-input"
              separator=""
              :num-inputs="6"
              :should-auto-focus="true"
              autofocus
              input-type="letter-numeric"
              style="flex-direction: row-reverse"
            />
          </div>
        </div>
      </div>

      <div class="mt-3 mb-3 flex_between">
        <div class="resend" v-if="!isCodeSent">
          <span
            class="cursor-pointer main_color fs-18"
            @click.prevent="resendOtp"
          >
            إعادة إرسال الرمز
          </span>
        </div>
        <div class="time" v-if="isCodeSent">
          <span class="counter main_color fs-17">
            سيتم إعادة ارسال الكود في{{ timer }} ثانية
          </span>
        </div>
      </div>

      <div class="flex_between mt-4">
        <button class="main_btn btn pt-3 pb-3 w-50" @click.prevent="sendCode">
          تأكيد
        </button>
        <button
          class="border_btn btn pt-3 pb-3 w-50 mx-2 btn-danger"
          type="button"
          @click="closeOtp"
        >
          الرجوع
        </button>
      </div>
    </form>
  </section>
  <Toast />
</template>

<script>
import { ref, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

export default {
  setup(props, context) {
    const store = useStore();
    const code = ref("");
    const disabled = ref(true);
    const loader = ref(false);
    const timer = ref(60);
    const isCodeSent = ref(true);
    const intervalId = ref(null);

    const toast = useToast();

    // ================= watchers =================
    watch(code, () => {
      if (code.value.length == 6) {
        disabled.value = false;
      } else {
        disabled.value = true;
      }
    });

    // ================= methods ==========================
    const startTimer = () => {
      isCodeSent.value = true;
      intervalId.value = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(intervalId.value);
          disabled.value = false;
          isCodeSent.value = false;
        }
      }, 1000);
    };

    const closeOtp = () => {
      context.emit("closeOtpModal", false);
    };

    // main active otp
    const sendCode = async () => {
      const fd = new FormData();
      fd.append("code", code.value);
      fd.append("entity_id", localStorage.getItem("entity_id"));

      try {
        const response = await store.dispatch("auth/sendCode", fd);
        if (response.success == true) {
          toast.add({
            severity: "success",
            summary: response.message,
            life: 3000,
          });
          // close otp modal
          setTimeout(() => {
            context.emit("closeOtpModal", false);
            context.emit("responsibleData", true);
            localStorage.setItem("responsibleDataDone", true);
          }, 1000);

          // save id of entity
          localStorage.setItem("entity_id", response.entity_id);
        } else {
          toast.add({
            severity: "errpr",
            summary: response.message,
            life: 3000,
          });
        }
      } catch (error) {
        toast.add({ severity: "errpr", summary: error, life: 3000 });
      }
    };

    // main resend
    const resendOtp = async () => {
      const fd = new FormData();
      fd.append("entity_id", localStorage.getItem("entity_id"));

      try {
        const response = await store.dispatch("auth/resendCode", fd);
        if (response.success == true) {
          toast.add({
            severity: "success",
            summary: response.message,
            life: 3000,
          });
          setTimeout(() => {
            timer.value = 60;
            startTimer();
          }, 1000);
        } else {
          toast.add({
            severity: "error",
            summary: response.message,
            life: 3000,
          });
        }
      } catch (error) {
        toast.add({ severity: "error", summary: error, life: 3000 });
      }
    };
    // ================= mounted ==========================

    onBeforeMount(() => {
      startTimer();
    });

    return {
      code,
      disabled,
      loader,
      timer,
      intervalId,
      startTimer,
      closeOtp,
      sendCode,
      isCodeSent,
      resendOtp,
    };
  },

  components: {
    Toast,
  },
};
</script>

<style lang="scss">
#otp {
  .otp_gif {
    width: 220px;
    height: 207px;
  }
}

.otp-input {
  width: 60px;
  height: 50px;
  margin: 0 10px;
  border: 1px solid #346cf6;
  border-radius: 15px;
  text-align: center;
}
</style>
