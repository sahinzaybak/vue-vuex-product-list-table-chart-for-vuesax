<template>
  <div class="product">
    <!-- header component begin-->
    <headerMenu />
    <!-- header component end-->
    <div class="product-wrp">
        <!-- genel ürün detay component begin-->
        <product-detail :page="page" :title="title"/>
        <!-- genel ürün detay component end-->
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import productDetail from "../components/product-detail";
export default {
  components: { headerMenu,productDetail },
  name: "product-chart",
  data: () => ({
    title: "Chart - Competitor Comparative Product Availability",
    page: "chart"
  })
};
</script>

<style lang="scss">

</style>
