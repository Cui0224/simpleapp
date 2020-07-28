/* 
接口文档
规则：
    每一个接口函数都要备注  功能  参数  返回值  以及添加人，
    使用export 导出
*/
/* 
举例：
    获取用户信息接口
    功能:  获取用户详情
    参数： id: 用户id
    返回： 相关用户详情信息
*/
export async function get_userList(id) {
  return await axios(url, id);
}
