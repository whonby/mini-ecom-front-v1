<template>
  
		<div id="content" class="content">
			<!-- begin breadcrumb -->
			<ol class="breadcrumb pull-right">
				<li class="breadcrumb-item"><a href="javascript:;">Acceuil</a></li>
				<li class="breadcrumb-item active">Tableau de bord </li>
			</ol>
			<!-- end breadcrumb -->
			<!-- begin page-header -->
			<h1 class="page-header">Tableau de bord  </h1>
			<!-- end page-header -->
			
			<!-- begin row -->
			<div class="row">
				<!-- begin col-3 -->
				<div class="col-lg-3 col-md-6">
					<div class="widget widget-stats bg-red">
						<div class="stats-icon"><i class="fa fa-desktop"></i></div>
						<div class="stats-info">
							<h4>TOTAL GENERAL DES COMMANDES </h4>
							<p>1 000</p>	
                             <p>100 %</p>
						</div>
						<div class="stats-link">
							<a href="javascript:;"> Détails <i class="fa fa-arrow-alt-circle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="widget widget-stats bg-primary">
						<div class="stats-icon"><i class="fa fa-clock"></i></div>
						<div class="stats-info">
							<h4>COMMANDES LIVRÉ</h4>
							<p>800</p>
							<p>80%</p>		
						</div>
						<div class="stats-link">
							<a href="javascript:;">Détails <i class="fa fa-arrow-alt-circle-right"></i></a>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-lg-3 col-md-6">
					<div class="widget widget-stats bg-orange">
						<div class="stats-icon"><i class="fa fa-link"></i></div>
						<div class="stats-info">
							<h4>COMMANDES ANNULER</h4>
							<p>50</p>	
							<p>5%</p>
						</div>
						<div class="stats-link">
							<a href="javascript:;"> Détails <i class="fa fa-arrow-alt-circle-right"></i></a>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-lg-3 col-md-6">
					<div class="widget widget-stats bg-success">
						<div class="stats-icon"><i class="fa fa-users"></i></div>
						<div class="stats-info">
							<h4>COMMANDE ATTENTES</h4>
							<p>150</p>	
							<p>15%</p>
						</div>
						<div class="stats-link">
							<a href="javascript:;">Détails <i class="fa fa-arrow-alt-circle-right"></i></a>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				
				<!-- end col-3 -->
			</div>
			<!-- end row -->
			<!-- begin row -->
			<div class="row">
				<!-- begin col-8 -->
				<div class="col-lg-12">
					<!-- begin panel -->
					<div class="panel panel-inverse" data-sortable-id="index-1">
						<div class="panel-heading">
							<div class="panel-heading-btn">
								<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
							</div>
							<h4 class="panel-title">Statistiques des COMMANDES</h4>
						</div>
						<div class="panel-body">
						<div id="chart">
        <apexchart type="pie" width="500" :options="chartOptions" :series="series"></apexchart>
      </div>
						</div>
					</div>
					
				</div>
			
			</div>
			<!-- end row -->
		</div>
		<!-- end #content -->
 
   
</template>

<script>

import VueApexCharts from "vue-apexcharts";
export default {
  name: 'App',

  components: {
    apexchart: VueApexCharts,
  },

  data(){
        return {
            
             items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],


	  series: [800, 50, 150],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['COMMANDES LIVRÉ', "COMMANDES ANNULER", "COMMANDE ATTENTES"],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          

            }
        },
};
</script>
