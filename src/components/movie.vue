<template>
    <div class="movie clearfix">
        <div class="wrap">
            <section class="movie_showing border-1px">
              <header>
                  <h2>影院热映</h2>
                  <router-link :to="{name: 'showingMore',params:{type : 'movie_showing'}}">更多</router-link>
              </header>
              <div class="section-content items clearfix" ref='movieShowing'>
                <div class="content-wrap"  ref="contentWrap">
                  <div class='item' v-for="(subject,index) in movieShowingList" v-if="index < 7" >
                    <router-link class="item-content" :to="{name:'MovieSubject',params:{id:subject.id}}" >
                      <div class="item-img" :style="'background-image:url('+subject.images.large +')'">
                      </div>
                      <div class="item-text">
                        <p>{{subject.title}}</p>
                        <p class="item-star" v-if="subject.rating.average > 0">
                          <star :size="24" :score="subject.rating.average"></star>
                          <span class="item-rating">{{subject.rating.average}}</span>
                        </p>
                        <p class="item-star" v-else="subject.rating.average == 0">
                          <span>暂无评分</span>
                        </p>

                      </div>
                    </router-link>
                  </div>
                </div>

              </div>
            </section>
            <section class="movie_free_stream border-1px">
              <header>
                  <h2>即将上映</h2>
                  <router-link :to="{name: 'showingMore',params:{type : 'movie_free_stream'}}">更多</router-link>
              </header>
              <div class="section-content items clearfix" ref='movieComingSoon'>
                <div class="content-wrap"  ref="contentWrap">
                  <div class='item' v-for="(subject,index) in movieComingSoonList" v-if="index < 7" >
                    <router-link class="item-content" :to="{name:'MovieSubject',params:{id:subject.id}}" >
                      <div class="item-img" :style="'background-image:url('+subject.images.large +')'">
                      </div>
                      <div class="item-text">
                        <p>{{subject.title}}</p>
                        <p class="item-star" v-if="subject.rating.average > 0">
                          <star :size="24" :score="subject.rating.average"></star>
                          <span class="item-rating">{{subject.rating.average}}</span>
                        </p>
                        <p class="item-star" v-else="subject.rating.average == 0">
                          <span>暂无评分</span>
                        </p>

                      </div>
                    </router-link>
                  </div>
                </div>

              </div>
            </section>
            <section class="movie_latest border-1px">
              <header>
                  <h2>top250</h2>
                  <router-link :to="{name: 'showingMore',params:{type : 'movie_latest'}}">更多</router-link>
              </header>
              <div class="section-content items clearfix" ref='movieNewMovies'>
                <div class="content-wrap"  ref="contentWrap">
                  <div class='item' v-for="(subject,index) in movieNewMoviesList" v-if="index < 7" >
                    <router-link class="item-content" :to="{name:'MovieSubject',params:{id:subject.id}}" >
                      <div class="item-img" :style="'background-image:url('+subject.images.large +')'">
                      </div>
                      <div class="item-text">
                        <p>{{subject.title}}</p>
                        <p class="item-star" v-if="subject.rating.average > 0">
                          <star :size="24" :score="subject.rating.average"></star>
                          <span class="item-rating">{{subject.rating.average}}</span>
                        </p>
                        <p class="item-star" v-else="subject.rating.average == 0">
                          <span>暂无评分</span>
                        </p>

                      </div>
                    </router-link>
                  </div>
                </div>

              </div>
            </section>
            <section class="interests">

            </section>
            <section class="types">

            </section>
        </div>

</div>
</template>
<script>
import  {mapGetters , mapState} from 'vuex'
import Star from './star/star.vue'
import BScroll from 'better-scroll'

export default {
    created() {
     this.getMovieShowing();
     this.getMovieComingSoon();
     this.getMovieNewMovies();
    },
    computed : {
      ...mapGetters({
          movieShowingList : 'getMovieShowing',
          movieComingSoonList : 'getMovieComingSoon',
          movieNewMoviesList : 'getMovieNewMovies'
      })

    },
    update(){
        /*this.$nextTick(() =>{
            this._initScroll();
           })*/
    },
    methods : {
      getMovieShowing(){
        if (this.movieShowingList.length == 0) {
          this.$store.dispatch('getMovieShowing');
          /*this.$nextTick(() =>{
            this._initScroll();
           })*/
        }
      },
      getMovieComingSoon(){
        if (this.movieComingSoonList.length == 0) {
          this.$store.dispatch('getMovieComingSoon');
         /* this.$nextTick(() =>{
            this._initScroll();
           })*/
        }
      },
      getMovieNewMovies(){
        if (this.movieNewMoviesList.length == 0) {
          this.$store.dispatch('getMovieNewMovies');
          /*this.$nextTick(() =>{
            this._initScroll();
           })*/
        }
      },

      /*_initScroll(){
        this.movieShowingScroll = new BScroll(this.$refs.movieShowing,{
            scrollX: 'true'
        });
        this.movieComingSoonScroll = new BScroll(this.$refs.movieComingSoon,{
            scrollX: 'true'
        });
         this.movieNewMoviesScroll = new BScroll(this.$refs.movieNewMovies,{
            scrollX: 'true'
        });
        console.log(this.$refs);
      }*/
    },
    components : {
      Star
    }
}
</script>
<style lang="less" scoped>
  .movie{
    font-size:0;
    width:100%;
    header{
      padding:0 1.2rem;
      line-height:2.4rem;
      h2{
        display:inline-block;
        font-size:1.6rem;

      }
      a{
        float: right;
        font-size:1.4rem;
        color:#42bd56;
      }
    }
    .wrap{
      font-size:0;
      width:100%;
      position:relative;
    }
  }
  .movie_showing,.movie_free_stream,.movie_latest{
    position:relative;
    &:after{
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      border-bottom:1px solid #f3f3f3;
      content:"";
    }
    padding:.5rem 0;
    width:100%;
    overflow:hidden;
    .section-content{
      .content-wrap{
        font-size: 0;
        white-space: nowrap;
        overflow-x: auto;
        width: 100%;
        height: 100%;
        padding-bottom:5px;
      }

      .items{

      }
    }
  }
  .item{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width:80px;
    font-size: 1rem;
    white-space: normal;
    margin-left: 1.2rem;
    // -webkit-box-shadow : 2px 2px 6px #ccc;
    // -moz-box-shadow : 2px 2px 6px #ccc;
    // box-shadow: 2px 2px 6px #ccc;
    // width: 33.3%;
    // box-sizing: border-box;
    // padding:1rem 1rem;

    .item-img{
      padding-top: 141%;
      overflow: hidden;
      position: relative;
      box-sizing:border-box;
      background-size:cover;
    }
  }
    .item-text{
      p{
        &:first-child{
        margin:1rem 0 .5rem 0;
        }
        margin:.5rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:1.2rem;
        line-height:16px;
      }
      .item-star{
        .star{
          display:inline-block;
        }
        .item-rating{
          display:inline-block;
          color:#ffb816;
      }
      }

    }

  @media (max-width: 992px) and (min-width: 601px){
    .item{
      width:25%;
    }
  }
  @media (min-width: 993px){
    .item{
      width:20%;
    }
  }
</style>