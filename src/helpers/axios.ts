import axios from "axios";
import { store } from '../app/store'
const baseUrl = process.env.BASE_URL


const token = store.getState().user.auth.token
console.log({ token })
export default axios.create({
    baseURL: baseUrl + '/api',
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token || ''}`,
    },
});