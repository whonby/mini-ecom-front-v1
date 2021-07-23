
<template>
<v-app>
    <notifications/>
    <v-main>
    
    <div id="content" class="content">
			<!-- begin breadcrumb -->
			<ol class="breadcrumb pull-right">
				<li class="breadcrumb-item"><a href="javascript:;">Acceuil</a></li>
				<li class="breadcrumb-item"><a href="javascript:;"></a></li>
				<li class="breadcrumb-item active">Articles </li>
			</ol>
			<!-- end breadcrumb -->
			<!-- begin page-header -->
			<h1 class="page-header">Gestion <small> Articles</small></h1>
			<!-- end page-header -->
			<!-- begin panel -->
			<div class="panel panel-inverse">
				<div class="panel-heading">
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
					</div>
					<h4 class="panel-title">Liste des Articles</h4>
				</div>
				<div class="panel-body">
          <div class="row">
             <div class="col-md-5"></div>
              <div class="col-md-7" style="text-align: right">
                	<button type="button"  @click="gotoModale()" class="btn btn-inverse">NOUVEAU</button>
              </div>
          </div>
		
        
 <v-data-table
    :headers="headers"
    :items="getterArticle"
    sort-by="code"
    class="elevation-1"
  >
   <template v-slot:item.images="{ item }">
      
<div class="widget-table-img" :style="'background-image: url('+imageArticle(item.images)+');'"></div>


    </template>

 <template v-slot:item.prix="{ item }">
      
<money  v-model="item.prix" disabled class="form-control"></money>


    </template>


    <template v-slot:item.actions="{ item }">
      


<div class="btn-group btn-group-justified">
  <a class="btn btn-default" @click="editItem(item)"><i class="fas fa-edit"></i></a>
  <a class="btn btn-default" @click="deleteItem(item)"><i class="fas fa-trash-alt"></i></a>
  
</div>

    </template>
  </v-data-table>
				</div>
			</div>
		


<v-dialog 
        max-width="600"
         v-model="dialog"
           persistent
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
             
              dark
            >Formulaire d'enregistrement</v-toolbar>
            <v-card-text>
                <br>
                

                   <div class="form-group">
                         <label class="form-label semibold" for="libelle">Libelle</label>
							<input type="text" :class="{ 'hasErroInpu': $v.formData.libelle.$error }" v-model="formData.libelle" name="libelle" class="form-control" id="libelle" placeholder="Libelle">
							 <div style="color: red;" class="" v-if="$v.formData.libelle.$error">
                                Veillez entrer le libelle
                            </div>
                     </div>
            	
               
              <div class="form-group">
                         <label class="form-label semibold" for="prix">Prix</label>
							    <money :class="{ 'hasErroInpu': $v.formData.prix.$error }" v-model="formData.prix" name="prix" class="form-control" id="libelle"></money>
							 <div style="color: red;" class="" v-if="$v.formData.prix.$error">
                                Veillez entrer le prix
                            </div>
                     </div>
                 
                      <div class="form-group">
                         <label class="form-label semibold" for="description">Description</label>
						
							
                            <textarea id="description" :class="{ 'hasErroInpu': $v.formData.description.$error }" v-model="formData.description" class="form-control" name="description" rows="5" cols="33"></textarea>
                             <div style="color: red;" class="" v-if="$v.formData.description.$error">
                                Veillez entrer le description
                            </div>
                     </div>


                     
                      <div class="form-group">
                         <label class="form-label semibold" for="description">Catégorie</label>
							<select class="form-control"  :class="{ 'hasErroInpu': $v.formData.categorie_id.$error }" v-model="formData.categorie_id">
                                <option></option>
                                <option v-for="item in getterCategorie" :value="item.id" :key="item.id">{{item.libelle}}</option>
                            </select>
                             <div style="color: red;" class="" v-if="$v.formData.categorie_id.$error">
                                Veillez entrer la categorie
                            </div>
                            
                     </div>
							
                <div class="form-group" >
                  <label>Image</label>
                  <input type="file"   @change="OnchangeFichier"  class="form-control" >
                </div>
            <div class="card-user-photo" align="center" style="" v-if="fichier">
                <img :src="fichier" style="height: 250px;border: solid 5px #0A0A0A" alt="">
            </div>

            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Fermer</v-btn>
              <v-btn
            :disabled="loading"
           :loading="loading"
            text
      @click="enregistrement()"
          >
            Enregistre
          </v-btn>
            </v-card-actions>
          </v-card>
        </template>
  </v-dialog>
     



<!--DIALOG LOADING--->
        <v-dialog
              v-model="loading"
              persistent
              width="250"
              height="200"
            >
              <v-card
                color="#2d353c"
                dark
                class="text-center"
              >
                <v-card-text  class="white--text">
                  Requête en cour de traitement<br>
                  <v-progress-circular
                    indeterminate
                    color="white"
                    class="mb-0"
                    size="50"
                  ></v-progress-circular>
                </v-card-text>
              </v-card>
        </v-dialog>

    <!---DIALOGUE DE SUPPRESION-->

         <v-dialog
              v-model="dialogDelete"
              max-width="290"
            >
              <v-card >
                <v-card-title class="headline">
                Suppression !!
                </v-card-title>

                <v-card-text>
                  Voulez vous réellement effectuer cette action
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green"
                    text
                    @click="dialogDelete = false"
                  >
                    Annuler
                  </v-btn>

                  <v-btn
                    color="red"
                    text
                    @click="deleteItemConfirm(edite)"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
        </v-dialog>



         <v-dialog
        max-width="600"
         v-model="dialogEdite"
      >
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar
              dark
            >Modification</v-toolbar>
            <v-card-text>
                <br>
                

                <div class="form-group">
                  <label class="form-label semibold" for="libelle">Libelle</label>
						     	<input type="text"  v-model="edite.libelle" name="libelle" class="form-control" id="libelle" placeholder="Libelle">
							
                </div>
            	




 <div class="form-group">
                         <label class="form-label semibold" for="prix">Prix</label>
							    <money  v-model="edite.prix" name="prix" class="form-control" id="libelle"></money>
							 
                     </div>
                 
                      <div class="form-group">
                         <label class="form-label semibold" for="description">Description</label>
						
							
                            <textarea id="description"  v-model="edite.description" class="form-control" name="description" rows="5" cols="33"></textarea>
                            
                     </div>


                     
                      <div class="form-group">
                         <label class="form-label semibold" for="description">Catégorie</label>
							<select class="form-control"   v-model="edite.categorie_id">
                                <option></option>
                                <option v-for="item in getterCategorie" :value="item.id" :key="item.id">{{item.libelle}}</option>
                            </select>
                             
                            
                     </div>
							
               
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogEdite.value = false"
              >Fermer</v-btn>
          <v-btn
            :disabled="loading"
            :loading="loading"
              text
            @click="modification(edite)"
          >
            Modification
          </v-btn>
            </v-card-actions>
          </v-card>
        </template>
  </v-dialog>
		</div>
    </v-main>
    </v-app>
</template>



<script>
import { mapGetters, mapActions} from 'vuex'
    import { required, minLength } from "vuelidate/lib/validators";
    export default {
        name: "MotifPartie",
        data() {
            return {
               dialog:false,
               test:true,
               nameImage: "",
                fichier: "",
                image:"",
               formData:{
                   libelle:"",
                   description:"",
                   prix:"",
                   categorie_id:""
               },
               edite:"",



     dialogEdite: false,
      dialogDelete: false,
       urlImage:process.env.VUE_APP_IMAGE,
      headers: [
         { text: 'Image', value: 'images' },
         { text: 'Libelle', value: 'libelle' },
         { text: 'Prix FCFA', value: 'prix' },
         { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
      
        libelle: "",
      },
      defaultItem: {
       code: '',
        libelle: "",
      },



            }
        },
        created(){
 
        },
        computed:{
            ...mapGetters('Application', ['getterCategorie','getterArticle', 'getterLoadingArticle',"getterErrorArticle"]),
              formTitle () {
             return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
           },
           loading(){
               return this.getterLoadingArticle
           },
            imageArticle(){
                return img=>{
                    if(img){
                        // return this.urlImage+"/"+img
                        return this.urlImage+""+img
                    }
                    return ""
                }
            }
        
        },
        validations: {
            formData: {
                   libelle: { required },
                   description:{ required },
                   prix:{ required },
                   categorie_id:{ required }
                   
            }
        },
        methods:{
             ...mapActions('Application', ['ajouterArticle',"supprimerArticle",
             "modificationArticle"]),
            gotoModale(){
              
               this.dialog=true 
            }
            ,
             OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
              
                Array.from(files).forEach(file => this.addFichier(file));
            },
            addFichier(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                  
                    vm.nameImage = file.name;
                    vm.fichier = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            enregistrement () {

                this.$v.formData.$touch();
                if(this.$v.formData.$error) {

                    return
                }
                const form = new FormData();
                form.append('fichier', this.selectedFile, this.selectedFile.name);
                form.append('libelle', this.formData.libelle);
                form.append('description',this.formData.description)
                 form.append('prix', this.formData.prix);
                form.append('categorie_id',this.formData.categorie_id)
                this.ajouterArticle(form)
                if(this.getterErrorArticle==false){
                    this.$v.formData.$reset();
                  this.formData={
                         libelle: "",
                        description:"",
                        prix:"",
                       categorie_id:""
                     }
                     this.fichier=''
                }
               

            },
              

modification(item){
this.modificationArticle(item)
},
      editItem (item) {
       this.edite=item
        this.dialogEdite = true
      },

      deleteItem (item) {
      this.edite=item
      console.log(this.edite)
      this.dialogDelete=true
      },

      deleteItemConfirm (item) {
         this.dialogDelete=false
        this.supprimerArticle(item.id)
      },

    

      
        },
        watch: {
      
     },
    }
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
</style>
