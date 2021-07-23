
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER = (state, message) => {
    state.loader = message
}

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true



export const setRefreshToken=(state, refreshToken)=> {
    state.refresh_token = refreshToken;
}
export const setAccessToken=(state, accessToken)=> {
    state.access_token = accessToken;
}

export const setUser=(state, users)=> {
    state.userStore = users;
}

export const msetLoggedInUser=(state, user) =>{
    state.loggedInUser = user;
    state.isAuthenticated = true;
}
// delete all auth and user information from the state
export const clearUserData=(state) =>{
    state.refresh_token = "";
    state.access_token = "";
    state.loggedInUser = {};
    state.isAuthenticated = false;
}


