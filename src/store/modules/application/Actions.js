import apiGuest from '../../../request/auth-request'
import authHeader from '../../../services/auth-header';



/**
 * ACTION CATEGORIE
 * @param {} param0 
 */
export function getCategorie({ commit }) {
    commit("SET_LOADING_CATEGORIE",true)
    
    apiGuest.get('/listeCategorie',{ headers: authHeader() }).then(response => {
        console.log(response.data)
        commit('GET_CATEGORIE', response.data)
        commit("SET_LOADING_CATEGORIE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_CATEGORIE",false)
    })
}

export function ajouterCategorie({ commit }, formData) {
    commit("SET_LOADING_CATEGORIE",true)
    apiGuest.post('/categorie', formData,{ headers: authHeader() }).then(response => {
        if (response.status == 201) {

            commit('AJOUTER_CATEGORIE', response.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type: "success"
            })
            commit("SET_LOADING_CATEGORIE",false)
            commit("SET_ERROR_CATEGORIE",false)
        }

    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_CATEGORIE",false)
        commit("SET_ERROR_CATEGORIE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                ù2title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}


export function supprimerCategorie({ commit }, id) {

    commit("SET_LOADING_CATEGORIE",true)
    commit('SUPPRIMER_CATEGORIE', id)
    apiGuest.delete('/categorie/' + id,{ headers: authHeader() }).then(() => {
        commit("SET_LOADING_CATEGORIE",false)
        this.$app.$notify({
            title: 'success',
            text: 'Suppression effectuer !',
            type: "success"
        })
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_CATEGORIE",false)
        this.$app.$notify({
            title: 'error',
            text: "Une erreur c'est produite lors de la suppression ",
            type:"warning"
        })
    })

}



export function modificationCategorie({ commit }, formData) {
    commit("SET_LOADING_CATEGORIE",true)
    apiGuest.put('/categorie/'+formData.id, formData,{ headers: authHeader() }).then(response => {
        commit('MODIFIER_CATEGORIE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type: "success"
        })
        commit("SET_LOADING_CATEGORIE",false)
        commit("SET_ERROR_CATEGORIE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_CATEGORIE",false)
        commit("SET_ERROR_CATEGORIE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}




 export function getArticle({ commit }) {
    commit("SET_LOADING_ARTICLE",true)
    
    apiGuest.get('/listeArticle',{ headers: authHeader() }).then(response => {
        commit('GET_ARTICLE', response.data)
        commit("SET_LOADING_ARTICLE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_ARTICLE",false)
    })
}

export function ajouterArticle({ commit }, formData) {
    commit("SET_LOADING_ARTICLE",true)
    apiGuest.post('/article', formData,{ headers: authHeader() }).then(response => {
        if (response.status == 201) {

            commit('AJOUTER_ARTICLE', response.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type: "success"
            })
            commit("SET_LOADING_ARTICLE",false)
            commit("SET_ERROR_ARTICLE",false)
        }

    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_ARTICLE",false)
        commit("SET_ERROR_ARTICLE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                ù2title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}


export function supprimerArticle({ commit }, id) {

    commit("SET_LOADING_ARTICLE",true)
    commit('SUPPRIMER_ARTICLE', id)
    apiGuest.delete('/article/' + id,{ headers: authHeader() }).then(() => {
        commit("SET_LOADING_ARTICLE",false)
        this.$app.$notify({
            title: 'success',
            text: 'Suppression effectuer !',
            type: "success"
        })
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_ARTICLE",false)
        this.$app.$notify({
            title: 'error',
            text: "Une erreur c'est produite lors de la suppression ",
            type:"warning"
        })
    })

}



export function modificationArticle({ commit }, formData) {
    commit("SET_LOADING_ARTICLE",true)
    apiGuest.put('/article/'+formData.id, formData,{ headers: authHeader() }).then(response => {
        commit('MODIFIER_ARTICLE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type: "success"
        })
        commit("SET_LOADING_ARTICLE",false)
        commit("SET_ERROR_ARTICLE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_ARTICLE",false)
        commit("SET_ERROR_ARTICLE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}






 export function getCommande({ commit }) {
    commit("SET_LOADING_COMMANDE",true)
    
    apiGuest.get('/commande',{ headers: authHeader() }).then(response => {
        commit('GET_COMMANDE', response.data)
        commit("SET_LOADING_COMMANDE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_COMMANDE",false)
    })
}

export function ajouterCommande({ commit }, formData) {
    commit("SET_LOADING_COMMANDE",true)
    apiGuest.post('/commande', formData,{ headers: authHeader() }).then(response => {
        if (response.status == 201) {

            commit('AJOUTER_COMMANDE', response.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type: "success"
            })
            commit("SET_LOADING_COMMANDE",false)
            commit("SET_ERROR_COMMANDE",false)
        }

    }).catch(error => {
      
        commit("SET_LOADING_COMMANDE",false)
        commit("SET_ERROR_COMMANDE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                ù2title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}


export function supprimerCommande({ commit }, id) {

    commit("SET_LOADING_COMMANDE",true)
    commit('SUPPRIMER_COMMANDE', id)
    apiGuest.delete('/commande/' + id,{ headers: authHeader() }).then(() => {
        commit("SET_LOADING_COMMANDE",false)
        this.$app.$notify({
            title: 'success',
            text: 'Suppression effectuer !',
            type: "success"
        })
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_COMMANDE",false)
        this.$app.$notify({
            title: 'error',
            text: "Une erreur c'est produite lors de la suppression ",
            type:"warning"
        })
    })

}



export function modificationCommande({ commit }, formData) {
    commit("SET_LOADING_COMMANDE",true)
    apiGuest.put('/commande/'+formData.id, formData,{ headers: authHeader() }).then(response => {
        commit('MODIFIER_COMMANDE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type: "success"
        })
        commit("SET_LOADING_COMMANDE",false)
        commit("SET_ERROR_COMMANDE",false)
    }).catch(error => {
        console.log(error)
        commit("SET_LOADING_COMMANDE",false)
        commit("SET_ERROR_COMMANDE",true)
        if(error.response==undefined){
            this.$app.$notify({
                title: 'error',
                text: "Veuillez verifier votre connexion et réessayer ",
                type:"warning"
            })
        }else{
            this.$app.$notify({
                title: 'error',
                text: error.response.data.message,
                type:"warning"
            })
        }
    })
}



