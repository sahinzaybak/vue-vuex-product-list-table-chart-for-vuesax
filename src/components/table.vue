<template>
  <div class="table">
    <div class="table-wrp">
      <div class="table-top d-flex align-items-center justify-content-between">
        <a href="#" class="table-top__download d-flex align-items-center" v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.4s'}">
          <img src="../assets/images/download-ico.png" alt />
          <p>Download</p>
        </a>
        <choose-view :active="active" />
      </div>

      <!--Tabloda arama alanı begin-->
      <b-input-group size="sm">
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="You can search any information.."></b-form-input>
        <b-input-group-append><b-button :disabled="!filter" @click="filter = ''">Clear</b-button></b-input-group-append>
      </b-input-group>
      <!--Tabloda arama alanı end-->

      <div class="table-container">
        <!--tablo begin  -->
        <b-table id="my-table" hover :filter="filter" :filterIncludedFields="filterOn" @filtered="onFiltered" :items="tableRow" :per-page="perPage" :current-page="currentPage" small></b-table>
        <!--tablo end  -->

        <!-- sayfalama begin -->
        <vs-pagination not-margin :color="colorx" v-model="currentPage" :length="2" />
         <!-- sayfalama end -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import chooseView from "./choose-view";
export default {
  name: "tables",
  components: { chooseView },
  data: () => ({
    active: "Table",
    isActive: true,
    colorx: "#ee337c",
    perPage: 5,
    currentPage: 1,
    filter: null,
    filterOn: [],
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
    onFiltered(filteredItems) { //tablo arama 
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style lang="scss"></style>
