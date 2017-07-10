import axios from 'axios'
import Vue from 'vue'

let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});


export function fetch(url,params = {},method = 'GET'){
    return new Promise((resolve,reject) =>{
        axios({
            method:method,
            url : 'api'+ url,
            params : params
        }).then((response) =>{
          console.log(response)
            resolve(response.data)
        }).catch((error) =>{
            reject(error)
        })
    })
}

export default {

    /**
     * 获取正在热映的影片信息
     * [MovieShowing description]
     * @param {[type]} parms [description]
     */
    MovieShowing(){
      return fetch(`/movie/in_theaters`,{city:'南京' ,start:0})
    },

    MovieComingSoon(){
      return fetch(`/movie/coming_soon`)
    },
    MovieNewMovies(){
      return fetch(`/movie/top250`)
    },
    MovieSubject(id){
      return fetch(`/movie/subject/${id}`)
    }
}