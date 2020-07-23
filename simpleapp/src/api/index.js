import axios from "axios";
let fetchData = axios.create({
    baseURL: "http://127.0.0.1:3001", //路径
});
export async function show() {
    return await fetchData.get("/show");
}