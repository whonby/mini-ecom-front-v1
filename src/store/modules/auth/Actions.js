import apiGuest from '../../../request/auth-request'
import router from '../../../routes/index'
import authHeader from '../../../services/auth-header';
export function login({commit}, user){
   
    if(user.email && user.password){
   
    commit('SET_LOADER', true)
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
          return apiGuest.post('/login', {
                email: user.email,
                password: user.password
            }).then(response => {
                    commit('LOGIN_USER', response.data.access_token)
                    commit("setRefreshToken", response.data.access_token);
                    commit("setAccessToken", response.data.access_token);
                    localStorage.setItem('user-token', JSON.stringify(response.data.access_token))
           ///   localStorage.setItem('User', JSON.stringify(response.data.user))
              commit('SET_LOADER', false)
              router.push({ name: 'Home' })
              window.location.reload()
               }).catch((error) => {
                 if(error.response==undefined){
                  commit('SET_LOADER', false)

                  this.$app.$notify({
                    title: 'error',
                    text: "Veuillez verifier votre connexion et réessayer ",
                    type:"error"
                })
                 }
               
                   if (error.response.status === 401 || error.response.status === 403) {
                       
                    this.$app.$notify({
                      title: 'warning',
                      text: "Vous n'êtes pas autorisé a vous connecter ",
                      type:"warning"
                  })
                    commit('SET_LOADER', false)
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    //this.$router.push({name: 'login'})
                }
                

                if(error.response.status===500){
                  commit('SET_LOADER', false)

                  this.$app.$notify({
                    title: 'warning',
                    text: "Une erreur c'est produite lors de la connexion",
                    type:"warning"
                })
                }

                if(error.response.status===404){
                  commit('SET_LOADER', false)
                  this.$app.$notify({
                    title: 'warning',
                    text: "Cette ressource n'existe pas",
                    type:"warning"
                })
                }
m8
               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

export  function refreshToken({ commit }){
   return new Promise((resolve,reject)=>{
     apiGuest
    .post("/refresh",{},{ headers: authHeader() })
    .then(response => {
      if (response.status === 200) {
        localStorage.removeItem('user-token')
        commit("LOGIN_USER", response.data.access_token);
        localStorage.setItem('user-token', JSON.stringify(response.data.access_token))
        resolve(response)
      }
    }).catch(error=>{
    
localStorage.removeItem('user-token')
router.push({ name: 'Login' })
window.location.reload() 
      reject(error)
    });
   })
}
    export function logoutUser({commit}){
     
      localStorage.removeItem('user-token')
     

      commit('LOGOUT_USER')
     
      router.push({ name: 'Login' })                   

    }

