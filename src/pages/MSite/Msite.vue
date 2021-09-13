<template>
   <div class="msite">
        <!--首页头部-->
        <HeaderTop title="浙江省衢州市江山市双塔街道凤栖苑228号">
          <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.png">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.png">
                  </div>
                  <span>面食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/3.png">
                  </div>
                  <span>汉堡</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/4.png">
                  </div>
                  <span>炸鸡</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/5.png">
                  </div>
                  <span>早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/6.png">
                  </div>
                  <span>下午茶</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/7.png">
                  </div>
                  <span>蔬果</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/8.png">
                  </div>
                  <span>药品</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/cft_1.jpg">
                  </div>
                  <span>阿涛专送</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/jlb_1.jpg">
                  </div>
                  <span>理贝叉烧</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/yyxzz.jpg">
                  </div>
                  <span>小新专送</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/xjj.jpg">
                  </div>
                  <span>难吃合集</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/cft.jpg">
                  </div>
                  <span>法涛专卖</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/jlb.jpg">
                  </div>
                  <span>理贝特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/xyy.jpg" >
                  </div>
                  <span>喜羊羊早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img class="tp" src="./images/nav/wwq.jpg" >
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
         <ShopList/>
        </div>
      </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    mounted(){
      //创建一个swiper实例对象，来实现轮播
      new Swiper('.swiper-container',{
        loop:true,//可以循环轮播
         // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    components:{
      HeaderTop,
      ShopList
    } 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tp
    border-radius: 50%;
  .msite  //首页
    width 100%
    
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      
</style>