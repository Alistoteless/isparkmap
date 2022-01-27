import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Backend adresi
})

// Frontend için bağları oluşturan kısım. 
// Backend'e istek gönderip cevap alınacak fonksiyonların root'ları ile tanımlanması.

export const insertPark = inspark => api.post(`/park`, inspark) // Park ekleme fonksiyonu 
export const getAllParks = () => api.get(`/parks`)  // Database'deki tüm parkların çekilmesi fonksiyonu
export const updateParkById = (id, inspark) => api.put(`/park/${id}`, inspark) // Varolan 'bir' parkın güncellenmesi fonksiyonu
export const deleteParkById = id => api.delete(`/park/${id}`) // Varolan 'bir' parkın silinmesi fonksiyonu
export const getParkById = id => api.get(`/park/${id}`) // ID numarasıyla park'ın seçilmesi (silme ve güncelleme fonksiyonları için)
export const fetchFromIspark = () => api.get(`/parks/fetch-from-ispark`) // Ispark database'inden canlı veriyi çeken fonksiyon, Ayrıca varolan veriyi temizleyere başlıyor.

const apis = {  // ilgili fonksiyonların frontend'te kullanılmak üzere exportu.
    insertPark,
    getAllParks,
    updateParkById,
    deleteParkById,
    getParkById,
    fetchFromIspark
}

export default apis