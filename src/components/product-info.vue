<template>
<div class="d-flex justify-content-between w-100">
  <div class="product-top__left d-flex align-items-center">
    <div class="product-top__item d-flex align-items-center" v-for="item in productTop" :key="item.id">
      <p>{{item.name}}</p>
      <span>{{item.value}}</span>
    </div>
  </div>
   <div class="product-top__right">
        <div class="search d-flex align-items-center">
            <p>Search</p>
            <div class="search-icon">
                <b-icon-search />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { BIconSearch } from "bootstrap-vue";
export default {
  name: "product-table",
components: { BIconSearch},
  data() {
    return {
      title: "Competitor Comparative Product Availability",
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

<style lang="scss">
.product {
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
.search {
  cursor: pointer;
  &-icon {
    background-color: white;
    color: #ee337c;
    padding: 6px 13px;
    border-radius: 4px;
    display: flex;
    font-size: 15px;
    margin-left: 12px;
    box-shadow: rgba(21, 21, 21, 0.2196078431372549) 0px 5px 14px 2px;
    transition: all 0.5s;
  }
  &:hover {
    .search-icon {
      background-color: #ee337c;
      color: white;
    }
  }
}
</style>
