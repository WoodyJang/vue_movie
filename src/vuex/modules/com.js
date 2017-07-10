import api from '../../fetch/api'
import * as types from '../types'

const state = {
    movieShowingList : [],  //正在热映列表数据
    movieComingSoonList : [],//即将上映列表数据
    movieNewMoviesList : [],  //新片列表数据
    movie : []
}

const actions = {
    getMovieShowing({commit}){
        api.MovieShowing()
        .then(res =>{
            commit(types.MOVIE_SHOWING,res)
            console.log(res)
        })
    },
    getMovieComingSoon({commit}){
        api.MovieComingSoon()
        .then(res =>{
            commit(types.MOVIE_COMING_SOON,res)
            console.log(res)
        })
    },
    getMovieNewMovies({commit}){
        api.MovieNewMovies()
        .then(res =>{
            commit(types.MOVIE_NEW_MOVIES,res)
            console.log(res)
        })
    },
    getDetail({commit},id){

        api.MovieSubject(id)
        .then(res =>{
            commit(types.COM_SUBJECT_DETAIL,res)
            console.log(res)
        })
    }
}

const getters = {
    getMovieShowing : state => state.movieShowingList,
    getMovieComingSoon : state => state.movieComingSoonList,
    getMovieNewMovies : state => state.movieNewMoviesList,
    getDetail : state => state.movie
}

const mutations = {
    [types.MOVIE_SHOWING](state,res){
        state.movieShowingList = res.subjects;
    },
    [types.MOVIE_COMING_SOON](state,res){
        state.movieComingSoonList = res.subjects;
    },
    [types.MOVIE_NEW_MOVIES](state,res){
        state.movieNewMoviesList = res.subjects;
    },
    [types.COM_SUBJECT_DETAIL](state,res){
        state.movie = res;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}