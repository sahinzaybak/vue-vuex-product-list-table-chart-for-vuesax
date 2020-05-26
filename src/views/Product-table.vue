<template>
  <div class="product">
    <!-- header component begin-->
    <headerMenu />
    <!-- header component end-->
    <div class="product-wrp">
      <div class="custom-container">
        <div class="product-top d-flex align-items-center justify-content-between">
          <!-- Dates,Project, Channel and search component begin-->
          <product-info />
          <!-- Dates,Project, Channel and search component end-->
        </div>
      </div>
      <div class="product-title d-flex align-items-center">
        <div class="custom-container" v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.2s'}">{{title}}</div>
      </div>
      <!-- table component begin-->
      <div class="custom-container">
        <tables v-wow="{ 'animation-name': 'fadeIn','animation-duration': '1.5s' , 'animation-delay' : '0.4s'}"/>
      </div>
      <!-- table component end-->
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import tables from "../components/table";
import productInfo from "../components/product-info";
export default {
  components: { headerMenu, tables, productInfo },
  name: "product-table",
  data: () => ({
    title: "Competitor Comparative Product Availability",
  })
};
</script>

<style lang="scss">
.product {
  &-wrp {
    position: relative;
    background-image: url("../assets/images/product-list-bg.png");
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 100px);
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(41, 41, 41, 0.31);
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
  &-title {
    height: 115px;
    background-color: rgba(0, 0, 0, 0.36);
    z-index: 9999;
    position: relative;
    font-size: 28px;
    color: white;
    padding: 40px;
    @media (max-width: 1440px){
        height: 80px;
        font-size: 22px;
    }
  }
}
</style>
