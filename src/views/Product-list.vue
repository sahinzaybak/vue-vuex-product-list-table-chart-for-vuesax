<template>
  <div class="product">
    <!-- header comp.-->
    <headerMenu />
    <!-- header comp.-->
    <div class="product-wrp">
      <div class="custom-container">
        <div class="product-top d-flex align-items-center justify-content-between">
          <div class="product-top__left d-flex align-items-center">
            <div
              class="product-top__item d-flex align-items-center"
              v-for="item in productTop"
              :key="item.id"
            >
              <p>{{item.name}}</p>
              <span>{{item.value}}</span>
            </div>
          </div>
          <div class="product-top__right">
            <search />
          </div>
        </div>
      </div>
      <div class="product-title d-flex align-items-center">
        <div class="custom-container">{{title}}</div>
      </div>

      <!-- table comp.-->
      <div class="custom-container">
        <tables :active=active />
      </div>
      <!-- table comp.-->
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import search from "../components/search";
import tables from "../components/table";
export default {
  components: { headerMenu, tables, search },
  name: "product-list",
  data() {
    return {
      title: "Competitor Comparative Product Availability",
      active:'Table',
      productTop: [
        {
          name: "Dates",
          value: "01-31 Jul 2018"
        },
        {
          name: "Project",
          value: "All"
        },
        {
          name: "Channel",
          value: "All"
        }
      ]
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
  &-top {
    color: white;
    padding: 16px 0;
    &__item {
      font-size: 12px;
      letter-spacing: 0.4px;
      margin-right: 23px;
      span {
        background-color: rgba(45, 60, 90, 0.78);
        padding: 3px 13px;
        border-radius: 4px;
        margin-left: 9px;
      }
    }
  }
}
</style>
