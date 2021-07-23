import Home from '../../views/home/Home'


import Categorie from "../../views/Categorie";
import Article from "../../views/Article";
import Commande from "../../views/Commande";
import AccueilArticle from "../../views/AccueilArticle";
const AuthRoutes = [
 // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {layout: "no-sidebar"} },
    {
        path: '/accueil',
        name:"AccueilArticle",
        meta: {layout: "no-sidebar"},
        component: AccueilArticle
    },
    {
        path: '/categorie',
        name:"Categorie",
        meta: { requiresAuth: true },
        component: Categorie
    },
    {
        path: '/admin',
        name:"Home",
        meta: { requiresAuth: true },
        component: Home
     },
    {
        path: '/articles',
        name:"Article",
        meta: { requiresAuth: true },
        component: Article
    }
    ,
    {
        path: '/commande',
        name:"Commande",
        meta: { requiresAuth: true },
        component: Commande
    }
  
   
    
]

export default AuthRoutes;
