const defaultstate = {
     isLoggedIn: !!localStorage.getItem('user-token'),
     user: "",
    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined,
    projetByUser:[],
    refresh_token: "",
    access_token: "",
    loggedInUser: {},
    isAuthenticated: false,
    userStore:""
};

 export default defaultstate