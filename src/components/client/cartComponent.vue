<!-- CartShopping.vue -->
<template>
  <div class="cart-shopping pt-5 pb-5 container">
    <h4 class="fw-bold text-center"> {{  $t('cart.name')  }} </h4>
    <div
      v-for="(item, itemIndex) in carts"
      :key="itemIndex"
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
            <!-- <p class="fw-6 fs-17">السعر: {{ item.price }} ر.س</p> -->  

            <p class="fw-bold fs-19" >
              {{  $t('cart.prodTotal')  }}:{{ item.price* item.qty }} ر.س
            </p>
          </div>
        </div>
        <div class="quantity-controls mx-5">
          <button @click="decreaseQuantity(itemIndex)" class="btn btn-primary">
            -
          </button>
          <span class="quantity mx-4 fs-16 fw-bold">{{ item.qty }}</span>
          <button @click="increaseQuantity(itemIndex)" class="btn-info btn">
            +
          </button>
        </div>
      </div>

      <div class="button-list d-flex flex-column mx-3">
        <h5 class="font-bold mainColor"> {{ $t('cart.chooseSize') }} </h5>
        <button
          v-for="(button, index) in item.sizes"
          :key="index"
          @click="increasePrice(button.price, itemIndex, button.id, button)"
          class="btn additional-buttons"
          :class="{'btn-primary': button.selected}"
        >
          {{ button.size }} ({{ button.price }} ر.س )
        </button>
      </div>


      <div class="button-list d-flex flex-column">
        <h5 class="font-bold mainColor"> {{ $t('cart.chooseAdd') }} </h5>
        <button
          v-for="(button, index) in item.additives"
          :key="index"
          @click="togglePriceAdditives(button.price , itemIndex, index, button.id, button)"
          class="btn additional-buttons position-relative"
          :class="{'btn-danger' : button.selected == true}"
        >
         <input
          class="additivesChecked"
          type="checkbox"
          :checked="isAdditiveSelected(itemIndex, addIndex)"
        />
          {{ button.name }} ({{ button.price }} ر.س )
        </button>
      </div>


      <div class="mx-3">
        <button class="btn btn-danger" @click="deleteCart(item.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="cart-summary mb-5">
      <p class="fw-bold mainColor fs-18">
        {{ $t('cart.total') }} : {{ getTotalPrice() }} ر.س
      </p>
    </div>

    <form @submit.prevent="createOrder" ref="createForm">
      <div class="row">
        <div class="col-md-6 mb-2">
          <div class="form-group">
            <label for="" class="d-flex align-items-start fw-bold mb-2">
              {{ $t('cart.date') }}
            </label>
            <input type="date" name="date" class="form-control" />
          </div>
        </div>

        <div class="col-md-6 mb-2">
          <div class="form-group">
            <label for="" class="d-flex align-items-start fw-bold mb-2">
              {{ $t('cart.time') }}
            </label>
            <input type="time" name="time" class="form-control" />
          </div>
        </div>

        <div class="flex-center mt-3">
           <button class="main_btn px-5 pt-2 pb-2" :disabled="disabled">
            <span v-if="!disabled">
              {{ $t('cart.confirm') }}
            </span>
          <div class="spinner-border mx-2" role="status" v-if="disabled">
            <span class="visually-hidden">Loading...</span>
          </div>
          </button>
        </div>
      </div>
    </form>
  </div>

  <!-- most order  -->
  <div class="mt-5 container">
    <h5 class="fw-bold mainColor text-end"> {{ $t('cart.similar') }} </h5>
    <p class="fw-bold  text-end">
      {{ $t('cart.simDesc') }}
    </p>
    <div class="row">
      <div class="col-md-6" v-for="prod in similar_products" :key="prod.id">
        <div class="single_menu mb-3 flex_between">
          <div class="prod-image">
            <img :src="prod.image" alt="" />
          </div>

          <div class="mx-3 d-flex align-items-start flex-column">
            <h6 class="fw-bold">{{ prod.name }}</h6>

            <div>
              <span class="grayColor fw-6 fs-6">
                {{ prod.description }}
              </span>
            </div>

            <div class=""></div>
          </div>

          <div class="product-price d-flex flex-column align-items-end">
            <!-- <span class="fw-6">{{  prod.price  }}  </span> -->
              <button class="main_btn"                             @click.prevent="addToCart(prod.id)"
>{{$t('prod.add')}}</button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from "primevue/toast";

export default {
  data() {
    return {
      sizeIds: [],
      additivesIds : [],
      disabled : false ,
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
      carts: [],
      
      TotalPrice: [
        {
          amount : ''
        }
      ],
      addedAdditives: new Set(),
      selectedAdditives: {}, // Track selected additives
              similar_products : []

    };
  },
  computed: {
    itemPrice() {
      return new Array(this.carts.length).fill('');
    },
    // products() {
    //   return this.ca
    // }
  },
  methods: {
     async createOrder() {
      const fd = new FormData(this.$refs.createForm);

     const products = [];

for (let i = 0; i < this.carts.length; i++) {
  // Find the selected size
  const selectedSize = this.carts[i].sizes.find(size => size.selected === true);
  
  // If a selected size is found, use its id, otherwise use null or an appropriate default value
  const sizeId = selectedSize ? selectedSize.id : null;
  
  // Find all selected additives and map their ids into an array
  const selectedAdditives = this.carts[i].additives.filter(additive => additive.selected === true);
  const addId = selectedAdditives.map(additive => additive.id);
  
  products.push({
    cart_id: this.carts[i].id,
    qty: this.carts[i].qty,
    size_id: sizeId,
    additives: addId
  });
}


      fd.append('products', JSON.stringify(products))
      
      this.disabled = true;
       await axios.post('user/create-order', fd, {
        headers: {
           lang: 'ar',
          Authorization  : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            localStorage.setItem('order_id', res.data.data.order_id)
            setTimeout(() => {
              this.$router.push('/complete')
            }, 2000);
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
             this.disabled = false ;

        }
        )

    },
    isAdditiveSelected(itemIndex, addIndex) {
      const additiveKey = `${itemIndex}-${addIndex}`;
      return this.selectedAdditives[additiveKey] || false;
    },
    increaseQuantity(index) {
      this.carts[index].qty++;
    },
    decreaseQuantity(index) {
      if (this.carts[index].qty > 1) {
        this.carts[index].qty--;
      }
    },
    increasePrice(price, itemIndex, id, button) {
    // Set the price for the selected cart item
    this.carts[itemIndex].price = price;

    // Add the selected size id to sizeIds array
    this.sizeIds.push(id);

    // Unselect all other buttons in the current item's sizes array
    this.carts[itemIndex].sizes.forEach((size) => {
      size.selected = false;
    });

    // Select the clicked button
    button.selected = true;

    // Unselect all additives for the current item
   this.addedAdditives = new Set()
  //     document.querySelectorAll('.additional-buttons:has(.additivesChecked:checked)').forEach((el) => {
  //   el.style.backgroundColor = '#fff'
      //  } )

       this.carts[itemIndex].additives.forEach((el) => {
      el.selected = false;
    });
  },
    togglePriceAdditives(price, itemIndex, addIndex, id , button) {
      button.selected = !button.selected
    const additiveKey = `${itemIndex}-${addIndex}`;
    
    if (this.addedAdditives.has(additiveKey)) {
        this.carts[itemIndex].price -= price;
        this.addedAdditives.delete(additiveKey);
    } else {
        this.carts[itemIndex].price += price;
        this.addedAdditives.add(additiveKey);
  }
    },
    getTotalPrice() {
      return this.carts.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
    checkout() {
      // Handle checkout logic
      this.$router.push("/complete");
    },
async getCart() {
  try {
    const res = await axios.get('user/get-cart', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });

    if (res.data.key === 'success') {
      const carts = res.data.data.carts;

      // Ensure each size has a selected property
      carts.forEach(cart => {
        cart.sizes = cart.sizes.map(size => ({
          ...size,
          selected: false
        }));
      });
      carts.forEach(cart => {
        cart.additives = cart.additives.map(size => ({
          ...size,
          selected: false
        }));
      });

      // Assign the processed carts to the reactive data property
      this.carts = carts;

      console.log('tag', this.carts);
      this.similar_products = res.data.data.similar_products;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

 ,
     async addToCart(id) {
      const fd = new FormData();

      await axios.post(`user/add-to-cart?product_id=${id}`,fd , {
         headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
                     lang: 'ar',

        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
           this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
           });
            setTimeout(() => {
              this.getCart()
            }, 1000);
          } else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    },
     async deleteCart(id) {
      const fd = new FormData();
      fd.append('cart_id', id)
      await axios.post(`user/delete-cart`,fd , {
         headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
                     lang: 'ar',

        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
           this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
           });
            setTimeout(() => {
              this.getCart()
            }, 1000);
          } else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    },
  },
  mounted() {
    this.getCart()
  },
  components: {
    Toast
  }
};
</script>

<style scoped>
.additivesChecked{
  position: absolute;
  width: 100%; 
  height: 100%;
  top: 0;
  right: 0;
  opacity: 0;
}
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
