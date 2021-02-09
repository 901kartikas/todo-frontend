import axios from "axios";


const baseUrl = "http://192.168.43.13:5000/api/";

export default {
    

    todoCategory(url = baseUrl + 'TodoCategory/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}