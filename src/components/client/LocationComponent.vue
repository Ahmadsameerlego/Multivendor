<template>
  <div class="location-section">
    <section class="flex_center h-100">
      <div>
        <h1 class="mb-4 whiteColor"> {{  $t('home.order')  }} </h1>
        <div class="form-group d-flex position-relative">
          <input
            v-model="address"
            @focus="googleMap = true"
            type="text"
            class="form-control"
            :placeholder="$t('home.search')"
          />
          <button class="btn main_btn mx-3 w-25 pt-3 pb-3" @click="googleMap = true"> {{  $t('home.choose')  }} </button>
          <i class="fa-solid fa-location-crosshairs"></i>
        </div>
      </div>
    </section>
  </div>

  <!-- google map modal  -->
  <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
    <GMapMap
      :center="locations"
      :zoom="11"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
    >
      <GMapAutocomplete
        :placeholder="$t('home.search')"
        @place_changed="onPlaceChanged"
      >
      </GMapAutocomplete>
      <GMapMarker
        :position="locations"
        :clickable="true"
        :draggable="true"
        @mouseover="onMarkerDragEnd($event)"
      />
    </GMapMap>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
  name: "MultivendorLocationComponent",

  data() {
    return {
      address: "",
      googleMap: false,
      locations: {
        lat: 0,
        lng: 0,
      },
      currentLocation: {},
    };
  },
  components: {
    Dialog,
  },
  mounted() {
    this.geolocation();
  },

  methods: {
    // get current location
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        localStorage.setItem('lat', position.coords.latitude)
        localStorage.setItem('lng', position.coords.longitude)

      });
    },
    // get new value after dragged
    onMarkerDragEnd(event) {
      // get new lat lang value
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();
      this.locations = {
        lat: newLat,
        lng: newLng,
      };

      // get format_address
      const latLng = event.latLng;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          this.address = results[0].formatted_address;
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    },

    onPlaceChanged(place) {
      if (place.geometry) {
        this.locations = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.address = place.formatted_address;
      }
    },
  },
};
</script>

<style lang="scss">
.pac-container {
  z-index: 9999 !important;
}
.vue-map-hidden {
  position: absolute !important;
  top: 92px !important;
  right: 50% !important;
  transform: translate(50%, 50%) !important;
}

.location-section {
  background-color: #bfbdbc;
  height: 70vh;
  background-image: url("@/assets/imgs/coffee.webp");
  background-repeat: no-repeat;
  background-size: cover;
  .location_image {
    width: 20%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .fa-location-crosshairs {
    position: absolute;
    font-size: 20px;
    left: 28%;
    top: 32%;
  }
}
  .vue-map{
    width: 100% !important;
    height: 72vh !important;
    position: relative;
    overflow: hidden;
  }

</style>
