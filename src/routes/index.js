import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

import AuthRoutes from './auth/AuthRoutes'
import AppRoutes from "./app/AppRoutes"

Vue.use(VueRouter);


const regroupementDesRoutes = [

  AuthRoutes,
  AppRoutes


];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});


router.beforeEach((to, from, next) => {
  // console.log(store)
   // check if the route requires authentication and user is not logged in
   const publicPages = ['/connexion',"/accueil"];
   const authRequired = !publicPages.includes(to.path);
   const loggedIn = localStorage.getItem('user-token');
 
   // trying to access a restricted page + not logged in
   // redirect to login page
   if (authRequired && !loggedIn) {
    
     next('/accueil');
   } else {

    if(to.path === '/' && loggedIn) {
      next({ name: 'Home' })
        return
    }
  
    next()
    
   }

 })

export default router;