<template>
  <router-view/>
</template>



<script>
export default {
  mounted(){
        if (localStorage.getItem("locale") == "en") {
          document.querySelector("body").classList.add("ltr");
        } else {
          document.querySelector("body").classList.remove("ltr");
        }
    
      }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
    .header .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width:100% !important;
    }


</style>
