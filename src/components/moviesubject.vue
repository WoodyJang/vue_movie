<template>
  <div class="moviesubject">

    <div class="image-wrap" :style="'background-image: url('+movie.images.large+')'">
    </div>
    <div class="title-border">
      <div class="title-info">
        <div class="title-image">
          <img :src='movie.images.large' />
        </div>
        <div class="title-text">
          <p>{{movie.title}}</p>
          <p>{{movie.rating.average}}</p>
        </div>
      </div>
    </div>

    <div class="star">
      <star :size="48" :score="movie.rating.average"></star>
    </div>
    <div class="info">
      <p class="info-content"><span class="info-title">原名</span><span class="info-text">{{movie.original_title}}</span></p>
      <p class="info-content"><span class="info-title">类型</span><span class="info-text">{{movie.genres}}</span></p>
      <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span></p>
      <p class="info-content"><span class="info-title">地区</span><span class="info-text">{{movie.countries }}</span></p>
      <p class="info-content"><span class="info-title">又名</span><span class="info-text">{{movie.aka}}</span></p>
      <p class="info-content"><span class="info-title">想看人数</span><span class="info-text">{{movie.wish_count}}</span></p>
      <p class="info-content"><span class="info-title">看过人数</span><span class="info-text">{{movie.collect_count}}</span></p>
      <p class="info-content"><span class="info-title">评分人数</span><span class="info-text">{{movie.ratings_count}}</span></p>
      <p class="info-content"><span class="info-title">短评数量</span><span class="info-text">{{movie.comments_count}}</span></p>
      <p class="info-content"><span class="info-title">影评数量</span><span class="info-text">{{movie.reviews_count}}</span></p>
    </div>
    <div class="summary">{{movie.summary}}</div>
    <div class="author ">
      <p class="author-type">导演</p>
      <div class="clearfix author-wraper">
        <div class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors" :key="subject.id">
          <div class="clearfix">
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="author clearfix">
      <p class="author-type">主演</p>
      <div class="clearfix author-wraper">
        <div class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.casts" :key="subject.id">
          <div class="clearfix">
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import  {mapGetters , mapState} from 'vuex'
  import Star from './star/star.vue'
export default {
  components: {
      Star,
  },
   watch: {
      $route(to) {
        this.getDetailData(to.params.id);
      },
    },
  mounted(){
    this.getDetailData(this.$route.params.id);
  },
  computed : {
     ...mapGetters({
          movie : 'getDetail'
      }),

  },
  methods: {
      getDetailData(id) {
        this.$store.dispatch('getDetail', id)
      }
    }
}
</script>

<style lang="less" scoped>
.moviesubject{
  font-size:16px;
}
  .image-wrap{
  width: 100%;
  padding-top: 80%;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  overflow: hidden;
}
.icon-back{
  position: absolute;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 3px #ddd;
}
.title-border{
  padding: 20px;
  box-shadow: 0 0px 15px 5px #ccc;
}
.title-info{
  position: relative;
}
.title-image{
  width: 30%;
  position: absolute;
  bottom: 0;
}
.title-image>img{
  width: 100%;
  display: block;
}
.title-text{
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 0 4px 30%;
}
.title-text>p{
  padding-left: 15px;
  margin: 0;
}
.star{
  display: flex;
  justify-content: center;
  background: #eee;
  font-size: 42px;
  color: #ff6f00;
  padding: 8px 0;
}
.star-icon{
  margin: 20px 0;
  color: #ff6f00;
}
.info{
  margin: 30px;
}
.info-content{
  margin: 10px 0;
}
.info-content>span{
  display: block;
  font-size:14px;
  padding-bottom:6px;
}
.info-text{
  color: #888;
}
.summary{
  padding: 30px 20px;
  background: #eee;
  line-height: 24px;
  font-size: 14px;
}
.author{
  display:block;
  margin: 25px;
}
.author-type{
  padding: 0px 5px;
  margin: 0;
}
.author-elem{
  padding:5px;
  width:50%;
  box-sizing:border-box;
  float: left;

}
.author-wrap{
  position: relative;
  display: block;
  overflow: hidden;
  box-shadow:1px 2px 2px #999;
}
.author-image{
  float: left;
  width: 50%;
  border-radius: 2px  0 0 2px;
  overflow: hidden;
}
.author-wraper{
  height: 100%;
  position: relative;
  display: block;
  overflow: hidden;

}
.author-padding{
  width: 100%;
  padding-top: 141%;
  background-size: cover;
  -moz-background-size: cover;
}
.author-name{
  float: left;
  width: 50%;
  padding: 10px 6px;
  box-sizing: border-box;
}
@media (max-width: 992px) and (min-width: 601px){
    .author-elem{
      width:33.3%;
    }
  }
  @media (min-width: 993px){
    .author-elem{
      width:25%;
    }
  }
</style>