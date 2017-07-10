<template>
  <div id="app">
    <header class="header-wrap">
    <div class="header border-1px">
      <div class="logo-wrap">
        <router-link to="/movie"><span>电影俱乐部</span></router-link>
      </div>
      <!-- <nav>
        <ul>
          <li><router-link to="/movie" style="color: #2384E8;">电影</router-link></li>
          <li><router-link to="/book" style="color: #9F7860;">图书</router-link></li>
          <li><router-link to="/status" style="color: #E4A813;">照片</router-link></li>
          <li><router-link to="/group" style="color: #2AB8CC;">小组</router-link></li>
        </ul>
          <span class="search"></span>
        </nav> -->
      </div>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer class='footer'>
        <div class="info">
            Powered By WoodyJang
            <p>&copy;2017</p>

        </div>
    </footer>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  @import "./assets/common.less";
.header-wrap{
  position:fixed;
  left:0;
  right: 0;
  top: 0;
  height:47px;
  z-index: 999;
  background: #fff;

}
  .header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 18px;
    height: 47px;
    align-content:center;
    position:relative;
    background-color: #474a4f;
    &:after{
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      border-bottom:1px solid #f3f3f3;
      content:"";
    }
    .logo-wrap{
      position:relative;

      a{
        font-size:0;
        display:inline-block;
      }
      span{
        // color: #00b600;
        color:#fff;
        font-size: 16px;
        // background: url("assets/icon.png") no-repeat;
        background-size: cover;
       /*  height: 22px;
       width: 46px; */

        display: inline-block;
      }
    }
    nav{
      display:flex;
      align-items:center;
      ul{
        display:inline-block;
        vertical-align: middle;
        li{
          display: inline-block;
          zoom: 1; /* Fix for IE7 */
          *display: inline; /* Fix for IE7 */
          font-size: 14px;
          margin-right: 17px;

        }

      }
      .search{
          display:inline-block;
          background: url('assets/search.png') no-repeat;
          background-size: cover;
          width: 24px;
          height: 18px;
          margin-top: 4px;
          position: relative;
      }
    }
  }
  .footer{
    font-size:16px;
    margin:20px 0;
    text-align:center;
    color:#ccc;
      .info {

      p{
        text-align:center;
        margin:10px 0;
      }
    }

  }

</style>
