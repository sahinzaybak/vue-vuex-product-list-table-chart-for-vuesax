<template>
  <div class="table">
    <div class="table-wrp">
      <div class="table-top d-flex align-items-center justify-content-between">
        <a href="#"></a>
        <choose-view :active="active" />
      </div>
      <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart">></vue-highcharts>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions } from "vuex";
import VueHighcharts from "vue2-highcharts";
import Drilldown from "highcharts/modules/drilldown.js";
import Highcharts from "highcharts";
import chooseView from "./choose-view";
Drilldown(Highcharts);
Highcharts.setOptions({
  lang: {
    drillUpText: "Geri Dön"
  }
});

export default {
  components: { VueHighcharts, chooseView },
  name: "product-chart",
  data : () => ({
      active: "Chart",
      Highcharts: Highcharts
  }),
  created() {
    this.fetchChartData;
  },
  computed: {
    ...mapState(["drilldownSeries", "series"]), // hem ürünleri ve ürün detay bilgilerini state'ten aldık.
    ...mapActions(["fetchChartData"]),

    drilldownOptions() {
      return {
        chart: {
          type: "column"
        },
        xAxis: {
          type: "category",
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true
            }
          }
        },

        series: [
          {
            name: "Ürünler",
            colorByPoint: true,
            data: this.series // State'ten çektiğimiz ürünleri "series" alanında bastırdık.
          }
        ],

        drilldown: {
          series: this.drilldownSeries // State'ten çektiğimiz üürn detay bilgilerini "drilldown" alanında bastırdık.
        }
      };
    }
  }
};
</script>

<style lang="scss"></style>