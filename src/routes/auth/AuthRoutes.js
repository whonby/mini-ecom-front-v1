import Login from '../../views/auth/Login.vue'
import Logout from '../../views/auth/Logout.vue'


import store from '../../store/index'


const AuthRoutes = [
    {
        path: '/connexion',
        name:"Login",
        meta: {layout: "no-sidebar"},
       component: Login
     },
     {
      path: '/logout',
     name:"Logout",
     component: Logout,
     meta: { requiresAuth: true }  

   }
   
]

export default AuthRoutes;
