
<template>
  <div class="product">
    <headerMenu />
    <div class="product-wrp">
      <div class="custom-container">
        <div class="product-title d-flex align-items-center">{{title}}</div>
        <tables />
      </div>
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import tables from "../components/table";
export default {
  name: "product-list",
  components: { headerMenu, tables },
  data() {
    return {
      title: "Competitor Comparative Product Availability"
    };
  }
};
</script>

<style lang="scss" scope>
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
