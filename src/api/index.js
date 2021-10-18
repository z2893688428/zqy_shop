/* 
包含n个接口请求函数的模块
函数的返回值: promise对象
*/
import ajax from './ajax'

// 01.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geohash}')
// 02.获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 03.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
// 04.根据经纬度和关键字搜索商铺列表
// 05.获取一次性验证码
// 06.用户名密码登陆
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
  }, 'POST')
// 07.发送短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
// 08.手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
// 09.根据会话获取用户信息
export const reqUser = () => ajax('/api/userinfo')
// 10.用户登出
export const reqLogout = () => ajax('/api/logout')


