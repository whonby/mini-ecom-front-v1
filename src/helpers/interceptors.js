

import store from '../store/index'
import apiGuest from '../request/auth-request'

export default function axiosSetUp() {

  
let isRefreshing=false;
let subscribes=[]
  apiGuest.interceptors.response.use(response=>{
    return response
  }, err=>{
   
    const {
      config,
      response:{status,data}
    }=err;
    
    const originalRequest=config;

    if(originalRequest.url.includes("/connexion")){
      return Promise.reject(err)
    }
    if((status==401|| status==400)){
      if(!isRefreshing){
        isRefreshing=true
        store.dispatch("Utilisateurs/refreshToken", null, { root: true }).then(({status})=>{
             if(status==200 || status==204){
              isRefreshing=false
             }
             subscribes=[]
        }).catch(error=>{
          console.error(error)
        })
      }

      const requestSubcribe=new Promise(resolve=>{
        subcribeTokenRefresh(()=>{
          resolve(apiGuest(originalRequest))
        })
      });

      onRefreshed();
      return requestSubcribe
    }
  });

  function subcribeTokenRefresh(cb){
    subscribes.push(cp);
    
  }

  function onRefreshed(){
    subscribes.map(cb=>cb())
  }
  subscribes=[]
}