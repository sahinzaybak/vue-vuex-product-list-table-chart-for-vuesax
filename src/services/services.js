import axios from "axios";
//Tablo'lara verileri çekme.
async function tableList() {
    try {
        const response = await axios.get('table.json')
        const data = await Object.values(response.data); //objeye çevirdim.
        return data;
    }
    catch (error) {
        console.log("API'den veri çekilirken bir hata oluştu ! Lütfen kontrol ediniz. ");
    }
}
export default{tableList}

