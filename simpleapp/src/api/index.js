import axios from "axios";
let fetchData = axios.create({
    baseURL: "http://127.0.0.1:3001", //路径
});
// 热门演出
export async function show() {
    return await fetchData.get("/show");
}
// 演唱会
export async function singsong() {
    return await fetchData.get("/singsongs");
}
// 演唱会上部
export async function singsongtop() {
    return await fetchData.get("/singsongstop");
}
// 展览休闲
export async function exhibition() {
    return await fetchData.get("/exhibition");
}
// 展览休闲上部
export async function exhibitiontop() {
    return await fetchData.get("/exhibitiontop");
}
// 儿童剧
export async function child() {
    return await fetchData.get("/child");
}

// 为你推荐
export async function recommend() {
    return await fetchData.get("/recommend");
}