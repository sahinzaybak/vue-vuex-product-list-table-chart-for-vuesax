import service from "../services/services";

const state = {
    tableRow: [],
    series: [],
    drilldownSeries: []
}

const mutations = {
    //TABLO BİLGİLERİ
    SET_TABLE_LİST(state, setValue) {
        const tableRow = setValue.rows.map(item => { //tabloda sadece istenilen verileri almak için gelen datayı mapledim.
            let availability;
            let variant;
            item.availability == true ? availability = "usable" : availability = "unavailable";
            item.availability == true ? variant = "" : variant = "danger";
            return {
                SalesPointNumber: item.salesPointNumber,
                City: item.city,
                SalesPointName: item.salesPointName,
                ResearchGroupName: item.researchGroupName,
                Product:item.productName,
                Availability: availability,
                _rowVariant: variant
            }
        })
        state.tableRow = tableRow; //tablo detaylarını doldurdum.
    },

    //CHART BİLGİLERİ
    SET_CHART_DATA(state, setValue) {
        state.drilldownSeries = setValue; // chart bilgilerini doldurdum. (drilldownSeries)
        let seriesYIndex = -1;
        const tableSeries = setValue.map(item => { //burada ise json'da chartın açılıştaki default değerleri olmadığı için json'daki verileri kullanarak mapledim. 
            seriesYIndex++
            const seriesY = [60, 40, 20, 38, 48, 30] // series Y'leri buradan düzenleyebiliriz. (JSON dosyasında'da bu bilgiler yoktu)
            return {
                name: item.name,
                drilldown: item.id,
                y: seriesY[seriesYIndex]
            }
        })
        state.series = tableSeries; //tablo serilerini doldurdum. (series)
    }
}

const actions = {
    fetchTableList({ commit }) {
        service.tableList().then(data => {
            commit("SET_TABLE_LİST", data[0]); //tablo bilgilerini aldım mutation'a gönderdim.
        })
    },

    fetchChartData({ commit }) {
        service.chartData().then(data => {
            commit("SET_CHART_DATA", data[0]); //chart bilgilerini aldım mutation'a gönderdim.
        })
    },
}

export default {
    state,
    mutations,
    actions,
};
