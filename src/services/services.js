import axios from "axios";
//Tablo'lara verileri çekme.
const tableList = async () => {
    try {
        const response = await axios.get('table.json')
        const result = await Object.values(response.data);
        return result;
    }
    catch (error) { console.log("API'den veri çekilirken bir hata oluştu! Lütfen kontrol ediniz..") }
}
//Chart'lara verileri çekme
const chartData = async () => {
    try {
        const response = await axios.get('drilldown-column-chart.json')
        const result = await Object.values(response.data);
        return result;
    }
    catch (error) { console.log("API'den veri çekilirken bir hata oluştu! Lütfen kontrol ediniz..") }
}

export default { tableList, chartData }

