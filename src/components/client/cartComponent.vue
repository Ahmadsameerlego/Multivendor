<!-- CartShopping.vue -->
<template>
  <div class="cart-shopping pt-5 pb-5 container">
    <h4 class="fw-bold text-center">عربة التسوق</h4>
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="cart-item border-bottom d-flex justify-content-between align-items-center"
    >
      <div class="d-flex justify-content-start align-items-center w-100">
        <div class="d-flex align-items-center order-product">
          <img
            src="@/assets/imgs/cake.jpg"
            :alt="item.name"
            class="product-image"
          />
          <div
            class="product-info mx-5 d-flex justify-content-start flex-column align-items-start"
          >
            <h6 class="fw-6 fs-17">{{ item.name }}</h6>
            <p class="fw-6 fs-17">السعر: {{ item.price }} ر.س</p>

            <p class="fw-bold fs-19">
              الاجمالي:{{ item.price * item.quantity }} ر.س
            </p>
          </div>
        </div>
        <div class="quantity-controls mx-5">
          <button @click="decreaseQuantity(index)" class="btn btn-primary">
            -
          </button>
          <span class="quantity mx-4 fs-16 fw-bold">{{ item.quantity }}</span>
          <button @click="increaseQuantity(index)" class="btn-info btn">
            +
          </button>
        </div>
      </div>

      <div class="button-list d-flex flex-column">
        <h5 class="font-bold mainColor">اختر الاضافات</h5>
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="increasePrice(button.amount)"
          class="btn additional-buttons"
        >
          {{ button.text }} ({{ button.amount }} ر.س )
        </button>
      </div>
    </div>
    <div class="cart-summary mb-5">
      <p class="fw-bold mainColor fs-18">
        السعر الإجمالي: {{ getTotalPrice() }} ر.س
      </p>
    </div>

    <form action="">
      <div class="row">
        <div class="col-md-6 mb-2">
          <div class="form-group">
            <label for="" class="d-flex align-items-start fw-bold mb-2">
              اختر تاريخ الاستلام
            </label>
            <input type="date" class="form-control" />
          </div>
        </div>

        <div class="col-md-6 mb-2">
          <div class="form-group">
            <label for="" class="d-flex align-items-start fw-bold mb-2">
              اختر موعد الاستلام
            </label>
            <input type="time" class="form-control" />
          </div>
        </div>

        <div class="flex-center mt-3">
          <button @click="checkout" class="main_btn px-5">اتمام الطلب</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { text: "اضافة نكهة", amount: 10 },
        { text: "اضافة كريمة", amount: 20 },
        { text: "اضافة شوكلاته", amount: 30 },
      ],
      cartItems: [
        {
          name: "Expresso",
          title: "Title 1",
          price: 10,
          image: "path/to/image1.jpg",
          quantity: 1,
        },
        {
          name: "Molton Cake",
          title: "Title 2",
          price: 15,
          image: "path/to/image2.jpg",
          quantity: 1,
        },
        // Add more products as needed
      ],
    };
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    increasePrice(amount) {
      this.cartItems.forEach((item) => {
        item.price += amount;
      });
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    checkout() {
      // Handle checkout logic
      this.$router.push("/complete");
    },
  },
};
</script>

<style scoped>
.additional-buttons {
  width: 200px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.order-product {
  border: 1px solid #cccccc4f;
  border-radius: 10px;
  padding: 10px 20px;
  margin-block: 20px;
  box-shadow: 0px 0px 10px #33333342;
}
/* Add your awesome CSS styles here */
.cart-item {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc !important;
}

.product-image {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 5px;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.btn-quantity {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px;
}

.cart-summary {
  margin-top: 20px;
  padding-top: 10px;
}

.btn-checkout {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
