import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Movie from '../components/movie'
import Book from  '../components/book'
import Status from '../components/status'
import Group from '../components/group'
import MovieSubject from '../components/moviesubject'
import ShowingMore from '../components/showingmore'


Vue.use(Router)

const  routes = [
    {
        path:'/',
        name: 'Hello',
        component:Hello
    },
    {
        path:'/movie',
        name: 'movie',
        component:Movie
    },{
        path:'/book',
        name:'book',
        component:Book
    },{
        path:'/status',
        name:'status',
        component:Status
    },{
        path:'/group',
        name:'group',
        component:Group
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieSubject',
      component: MovieSubject,
    },
    {
      path:'/movie/showing_move/:type',
      name:'showingMore',
      component: ShowingMore
    }
  ]

 const router = new Router({
    linkActiveClass : 'app-active',
    routes
})

export default router;