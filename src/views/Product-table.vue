<template>
<div class="product">
    <!-- header component begin-->
    <headerMenu />
    <!-- header component end-->
    <div class="product-wrp">
        <product-detail :page="page" :title="title"/>
    </div>
  </div>
</template>

<script>
import headerMenu from "../components/header";
import productDetail from "../components/product-detail";
export default {
  components: { headerMenu,productDetail },
  name: "product-table",
  data: () => ({
    title: "Table - Competitor Comparative Product Availability",
    page: "table"
  })
};
</script>

<style lang="scss">

</style>
