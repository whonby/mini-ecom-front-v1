<template>
   <v-app id="inspire">
        <notifications/>
     
 
 <div id="page-container" class="fade">
		<!-- begin login -->
		<div class="login login-with-news-feed">
			<!-- begin news-feed -->
			<div class="news-feed">
				<div class="news-image" style="background-image: url(cie_sodeci.jpg)"></div>
				<div class="news-caption">
				<!--	<h4 class="caption-title"><b>GESTICE</b></h4>
					<p>
							GESTION DE L'ACCES A LA JUSTICE DES PERSONNES LES PLUS VULNERABLES EN REPUBLIQUE DE GUINEE

					</p>-->
				</div>
			</div>
			<!-- end news-feed -->
			<!-- begin right-content -->
			<div class="right-content">
				<!-- begin login-header -->
	
				<div class="login-header" style="margin-top:-100px">
	<div style="text-align: center">
	<img src="a2.png" style="height:150px; ">
					</div>
					
				</div>
				<!-- end login-header -->
				<!-- begin login-content -->
				<div class="login-content">
					<form method="GET" class="margin-bottom-0">
						<div class="form-group m-b-15" style="width:100%">
							<input type="text" v-model="user.email" name="email" v-validate="'required'" class="form-control form-control-lg" placeholder="Email Address" required />
						<div
                        v-if="errors.has('email')"
                      class="alert alert-danger"
                        role="alert"
                      >Email est obligatoire!</div>
						</div>
						<div class="form-group m-b-15" style="width:100%">
							<input v-model="user.password" v-validate="'required'" name="password" type="password" class="form-control form-control-lg" placeholder="Password" required />
						<div
                        v-if="errors.has('password')"
                      class="alert alert-danger"
                        role="alert"
                      >Le mot de passe est obligatoire</div>
						</div>
						<div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
						<div class="login-buttons" style="width:100%">
						
								 <v-btn
				:disabled="getterLoader"
				:loading="getterLoader"
				class="btn btn-dark btn-block btn-lg white--text"
				color="blue-grey darken-3"
				elevation="8"
				@click="connexion()">
      Connexion
    </v-btn>
						</div>
						
						
					</form>
					<div style="text-align: left !important">
		<!-- <img src="a1.png" >  -->
					</div>
				
				</div>
				<!-- end login-content -->
			</div>
			<!-- end right-container -->
		</div>
		<!-- end login -->

		
	</div>
	<!-- end page container -->










  



	
            
   </v-app>
</template>

<script>
   import { mapGetters, mapActions} from 'vuex'
    import { required, email, minLength } from "vuelidate/lib/validators";
export default {
   name: 'Login',
   props: {
      source: String,
   },
   data(){
            return {
                 dialog: false,
                passwordFieldType: 'password',
                isVisible: false,
                user: {
                    email: '',
                    password: '',
                   
                },
				message: '',
                loading: false,
                loading2: false
            }
        },
         created(){

        },
         computed: {
            ...mapGetters('Utilisateurs', ['loader', 'champVide', 'error', 'errorMessage',"getterLoader"]),
        },
         validations: {
           
        },
        methods:{
          ...mapActions('Utilisateurs', ['login',]),
            changePasswordVisibility(){
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
                this.isVisible = !this.isVisible
            },


           connexion() {
   


  this.$validator.validateAll().then(isValid => {
	 
        if (!isValid) {
			 console.log(isValid)
          this.loading2 = false;
          return;
        }

        if (this.user.email && this.user.password) {
         this.login(this.user).then(
            () => {
              this.$router.push('/accueil');
            },
            error => {
              this.loading2 = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
            },

        },
        watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },

};
</script>

<style scoped>
 .input {
        background-color: #f7f7f7;
        border: 1px solid #c7c7c7;
        padding: 0.3rem 0.5rem;
        border-radius: 2px;
    }
    .hasError .input {
        border: red;
    }
    .hasErroInpu{
        border: 1px red solid;
    }
    .hasError label {
        color: red;
    }

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	background: #cfccd3 ;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #2e3599;
	background-color:#2e3599;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container_form {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #2e3599;
	background: -webkit-linear-gradient(to right, #494eaa, #2e3599);
	background: linear-gradient(to right, #494eaa, #2e3599);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 210%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

</style>
