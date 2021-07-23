

/**
 * MUTATION DES STRUCTURE GEOGRAPHIQUE
 * @param {*} state 
 * @param {*} tableau_document 
 */
 export const GET_CATEGORIE = (state, tableau_document) => {
    state.categorie = tableau_document
 }

export const AJOUTER_CATEGORIE = (state, elementAjouter) => {
    state.categorie.unshift(elementAjouter)
}


 export const SUPPRIMER_CATEGORIE = (state, id) => {
     state.categorie = state.categorie.filter(prest => prest.id != id)
 }

 export const MODIFIER_CATEGORIE  = (state, elementModif) => {
     state.categorie = state.categorie.map(response => {
         if (response.id == elementModif.id) {
             response = { ...elementModif }
         }
         return response
     })
 }

export const SET_LOADING_CATEGORIE  = (state, tableau_document) => {
    state.loadingCategorie = tableau_document
}

export const SET_ERROR_CATEGORIE = (state, tableau_document) => {
    state.errorCategorie = tableau_document
}




 export const GET_ARTICLE= (state, tableau_document) => {
    state.article = tableau_document
 }

export const AJOUTER_ARTICLE = (state, elementAjouter) => {
    state.article.unshift(elementAjouter)
}


 export const SUPPRIMER_ARTICLE = (state, id) => {
     state.article = state.article.filter(prest => prest.id != id)
 }

 export const MODIFIER_ARTICLE= (state, elementModif) => {
     state.article = state.article.map(response => {
         if (response.id == elementModif.id) {
             response = { ...elementModif }
         }
         return response
     })
 }

export const SET_LOADING_ARTICLE = (state, tableau_document) => {
    state.loadingArticle = tableau_document
}

export const SET_ERROR_ARTICLE= (state, tableau_document) => {
    state.errorArticle = tableau_document
}







export const GET_COMMANDE= (state, tableau_document) => {
    state.commande = tableau_document
    
 }

export const AJOUTER_COMMANDE = (state, elementAjouter) => {
    state.commande.unshift(elementAjouter)
}


 export const SUPPRIMER_COMMANDE = (state, id) => {
     state.commande = state.commande.filter(prest => prest.id != id)
 }

 export const MODIFIER_COMMANDE= (state, elementModif) => {
     state.commande = state.commande.map(response => {
         if (response.id == elementModif.id) {
             response = { ...elementModif }
         }
         return response
     })
 }

export const SET_LOADING_COMMANDE= (state, tableau_document) => {
    state.loadingCommande = tableau_document
}

export const SET_ERROR_COMMANDE= (state, tableau_document) => {
    state.errorCommande = tableau_document
}
