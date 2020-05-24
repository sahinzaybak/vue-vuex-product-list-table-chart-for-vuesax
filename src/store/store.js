import service from "../services/services";

const state = {
    fields: [],
    tableRow: [],
}

const mutations = {
    SET_TABLE_LİST(state, setValue) {
        state.fields = setValue.headers; // tablo başlıklarını doldurdum ve state'e gönderdim.
        const tableRow = setValue.rows.map(item => {
            let availability;
            let variant;
            item.availability == true ? availability = "Var" : availability = "Yok";
            item.availability == true ? variant = "" : variant = "danger";
            return {
                urunKodu: item.salesPointNumber,
                sehir: item.city,
                satışNoktasıAdı: item.salesPointName,
                araştımaAdı: item.researchGroupName,
                stoktaVarmı: availability,
                _rowVariant: variant
            }
        })
        state.tableRow = tableRow; //tablo detaylarını doldurdum.
    },
}

const actions = {
    fetchTableList({ commit }) {
        service.tableList().then(data => {
            commit("SET_TABLE_LİST", data[0]);
        })
    },
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
};
