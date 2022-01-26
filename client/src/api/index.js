import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertPark = payload => api.post(`/park`, payload)
export const getAllParks = () => api.get(`/parks`)
export const updateParkById = (id, payload) => api.put(`/park/${id}`, payload)
export const deleteParkById = id => api.delete(`/park/${id}`)
export const getParkById = id => api.get(`/park/${id}`)

export const fetchFromIspark = () => api.get(`/parks/fetch-from-ispark`)
export const deleteAll = () => api.get(`/park/deleteAll`)

const apis = {
    insertPark,
    getAllParks,
    updateParkById,
    deleteParkById,
    getParkById,
    fetchFromIspark,
    deleteAll
}

export default apis