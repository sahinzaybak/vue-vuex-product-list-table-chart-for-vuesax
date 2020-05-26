<template>
  <div class="table-filter d-flex">
    <router-link :to="{path : items.url}" v-for="items in filters" :key="items.id" :class="{'active' : items.name == active}" class="table-filter__item d-flex align-items-center">
      <b-icon :icon="items.icon" />
      <p>{{items.name}}</p>
    </router-link>
  </div>
</template>

<script>
import { BIconTable,BIconListUl, BIconGeoAlt, BIconListNested,BIconBarChartFill} from "bootstrap-vue"; //bootstrap iconlar
export default {
  components: {BIconTable,BIconListUl,BIconGeoAlt,BIconListNested,BIconBarChartFill},
  props: ["active"],
  name: "choose-view",
  data: () => ({
    isActive: true,
    filters: [
      {
        name: "Tree",
        icon: "list-nested ",
        url: "#"
      },
      {
        name: "Map",
        icon: "geo-alt",
        url: "#"
      },
      {
        name: "Chart",
        icon: "bar-chart-fill ",
        url: "Product-chart"
      },
      {
        name: "Table",
        icon: "table  ",
        url: "Product-table"
      },
      {
        name: "List",
        icon: "list-ul",
        url: "#"
      }
    ]
  })
};
</script>

<style lang="scss">
.table {
  &-top {
    margin-bottom: 25px;
    &__download {
      padding: 8px 12px;
      background-color: white;
      border-radius: 4px;
      font-size: 14px;
      letter-spacing: 0.4px;
      font-weight: 500;
      transition: all 0.3s;
      p {
        color: #5b5b5b;
      }
      img {
        width: 11px;
        margin-right: 8px;
      }
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
  &-filter {
    &__item {
      margin-right: 20px;
      p {
        color: #5b5b5b;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.5px;
        transition: all 0.3s;
      }
      svg {
        color: #5b5b5b;
        font-size: 15px;
        margin-right: 5px;
        transition: all 0.3s;
      }
      &.active {
        background-color: #ee337c;
        padding: 7px 12px;
        border-radius: 5px;
        pointer-events: none;
        box-shadow: rgba(238, 51, 124, 0.3607843137254902) 0 5px 20px 0;
        p,
        svg {
          color: white;
        }
      }
      &:hover {
        p,
        svg {
          color: #ee337c;
        }
      }
    }
  }
}
</style>
