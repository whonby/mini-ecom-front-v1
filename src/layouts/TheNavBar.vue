<template>
   <div>
   <div id="sidebar" class="sidebar">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<ul class="nav">
					<li class="nav-profile">
						<a href="javascript:;" data-toggle="nav-profile">
							<div class="cover with-shadow"></div>
							<div class="image">
								<img src="assets/img/user/user-13.jpg" alt="" />
							</div>
							<div class="info">
								<b class="caret pull-right"></b>
								SUPER ADMIN
								<small></small>
							</div>
						</a>
					</li>
					<li>
						<ul class="nav nav-profile">
							<li><a href="javascript:;"><i class="fa fa-cog"></i> Settings</a></li>
							<li><a href="javascript:;"><i class="fa fa-pencil-alt"></i> Send Feedback</a></li>
							<li><a href="javascript:;"><i class="fa fa-question-circle"></i> Helps</a></li>
						</ul>
					</li>
				</ul>
				<!-- end sidebar user -->
				<!-- begin sidebar nav -->
				<ul class="nav">
					<li class="nav-header">Navigation</li>
					<li class="has-sub active">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-th-large"></i>
							<span>Tableau de bord</span>
						</a>
						<ul class="sub-menu">
							<li :class="{active: menu_active == 1 }" @click.prevent="activedOptionMenu(1,'Home')" ><a href="#">Tableau de bord 1</a></li>
							
						</ul>
					</li>
					<!--<li class="has-sub">
						<a href="javascript:;">
							<span class="badge pull-right">10</span>
							<i class="fa fa-hdd"></i> 
							<span>Requête de recevabilite</span>
						</a>
						<ul class="sub-menu">
							<li><a href="email_inbox.html">Inbox</a></li>
							<li><a href="email_compose.html">Compose</a></li>
							<li><a href="email_detail.html">Detail</a></li>
						</ul>
					</li>-->
					<li :class="{active: menu_active == 3 }" @click.prevent="activedOptionMenu(3,'Commande')">
						<a href="widget.html">
						<i class="fas fa-book fa-fw"></i>
							<span>GESTION COMMANDE</span> 
						</a>
					</li>
					<li :class="{active: menu_active == 4 }" @click.prevent="activedOptionMenu(4,'Article')">
						<a href="widget.html">
							<i class="fas fa-spinner fa-pulse"></i>
							<span>GESTION ARTICLE </span> 
						</a>
					</li>
					<li :class="{active: menu_active == 5 }" @click.prevent="activedOptionMenu(5,'Categorie')">
						<a href="widget.html">
							<i class="fas fa-folder-open"></i> 
							<span>GESTION  CATEGORIE</span> 
						</a>
					</li>
                
					
				
					
				
				
				
					<li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
					<!-- end sidebar minify button -->
				</ul>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
   </div>



</template>
<script>
 

import { mapState, mapActions ,mapMutations} from "vuex";
    export default {
		components: {
			
		},
        name: "TheNavBar",
        data() {
            return {
menu_active:1,
            }
        },
		 created(){
			 
			 
        },

computed: {

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
},
        methods: {
        ...mapActions('Utilisateurs', ['logoutUser']),
			afficheMenu(value){
	this.activate(value)
			},
				activedOptionMenu(value,route_name){
		  this.menu_active= value
		  this.$router.push({
        name: route_name
      })
	   }
        }
    }
</script>

<style scoped>

</style>
