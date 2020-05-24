<template>
  <div class="table">
    <div class="table-wrp">
      <div class="table-top d-flex align-items-center justify-content-between">
        <a href="#" class="table-top__download d-flex align-items-center">
          <img src="../assets/images/download-ico.png" alt />
          <p>Download</p>
        </a>

        <!-- Tree, Map, Chart, Table, List alanı begin -->
        <div class="table-filter d-flex">
          <router-link
            to="#"
            v-for="items in filters"
            :key="items.id"
            :class="{'active' : items.name == active}"
            class="table-filter__item d-flex align-items-center"
          >
            <b-icon :icon="items.icon" />
            <p>{{items.name}}</p>
          </router-link>
        </div>
      </div>
      <!-- Tree, Map, Chart, Table, List alanı end -->

      <!--Tabloada arama alanı begin-->
      <b-input-group size="sm">
        <b-form-input
          v-model="filter"
          type="search"
          id="filterInput"
          placeholder="Herhangi bir veriyi tabloda arayabilirsiniz.."
        ></b-form-input>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Temizle</b-button>
        </b-input-group-append>
      </b-input-group>
      <!--Tabloada arama alanı end-->

      <div class="table-container">
        <!--tablo begin  -->
        <b-table
          id="my-table"
          hover
          :filter="filter"
          :filterIncludedFields="filterOn"
          @filtered="onFiltered"
          :items="tableRow"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
        <!--tablo end  -->

        <!-- sayfalama -->
        <vs-pagination not-margin :color="colorx" v-model="currentPage" :length="2" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import {
  BIconTable,
  BIconListUl,
  BIconGeoAlt,
  BIconListNested,
  BIconBarChartFill
} from "bootstrap-vue";
export default {
  components: {
    BIconTable,
    BIconListUl,
    BIconGeoAlt,
    BIconListNested,
    BIconBarChartFill
  },
  props: ["active"],
  name: "tables",
  data: () => ({
    isActive: true,
    colorx: "#ee337c",
    perPage: 5,
    currentPage: 1,
    filter: null,
    filterOn: [],
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
        url: "#"
      },
      {
        name: "Table",
        icon: "table  ",
        url: "#"
      },
      {
        name: "List",
        icon: "list-ul",
        url: "#"
      }
    ]
  }),

  created() {
    this.fetchTableList;
  },
  computed: {
    rows() {
      return this.items.length;
    },
    ...mapState(["tableRow"]),
    ...mapActions(["fetchTableList"])
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style lang="scss" scope>
.table {
  &-wrp {
    background-color: rgba(255, 255, 255, 0.79);
    padding-bottom: 50px;
    padding: 25px 40px;
    padding-bottom: 35px;
  }
  th {
    background-color: #efefef;
    border-bottom: 0;
    padding: 0.75rem;
    div {
      color: #5b5b5b;
      font-weight: 600;
      font-size: 17px;
    }
  }
  td {
    padding: 0.55rem;
    font-size: 15px;
    font-weight: 400;
    color: #757575;
  }
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
  &-container {
    background-color: white;
    padding-bottom: 30px;
    border-radius: 4px;
  }
  .vs-pagination {
    &__button {
      font-weight: 600;
    }
    &__active {
      border-radius: 7px;
    }
  }
  .input-group {
    button {
      height: 57px !important;
      background-color: #ee337c;
      border: 0;
      opacity: 0.8;
      transition: all 0.3s;
      padding: 16px !important;
      font-size: 16px !important;
      letter-spacing: 0.6px;
      font-weight: 600;
      &:hover {
        opacity: 1;
      }
    }
    &-append {
      margin-left: 0px;
    }
  }
  #filterInput {
    height: 56px;
    border: 0;
    border-radius: 4px;
    outline: 0;
    transition: all 0.3s;
    margin-bottom: 20px;
    &:focus {
      box-shadow: none;
      border-radius: 4px;
    }
  }
}
</style>
