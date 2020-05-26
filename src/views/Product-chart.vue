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
        <div class="custom-container">{{title}}</div>
      </div>
      <!-- chart begin-->
      <div class="custom-container">
        <chart />
      </div>
      <!-- chart end-->
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import chart from "../components/chart";
import productInfo from "../components/product-info";
export default {
  components: { headerMenu, chart, productInfo },
  name: "product-chart",
  data: () => ({
    title: "Competitor Comparative Product Availability",
    active: "Chart",
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
  }
}
</style>
