import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import UtilisateursModule from './modules/auth/index'
import ModuleParametrageMenu from './modules/parametrage_menu/index'
import ModuleApplication from "./modules/application/index"
// import MenuModule from './modules/parametre/index'
//
// //import ProjetModule from './modules/projet/index'
// import ParamModule from "./modules/param/index"
//
//import Utilisateur from './modules/user/index'
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        Utilisateurs: UtilisateursModule,
        parametrageMenu: ModuleParametrageMenu,
        Application:ModuleApplication
      //  GestionUser:Utilisateur
    }
})
