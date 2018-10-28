	
$(document).ready(function(){

		//Project 1 section
		for(var i = 0; i < works1.length; ++i){
			$("#work1tmp").append("\
				<div class='col-md-6 col-xs-12 col-sm-6'>\
					<div class='card-container hvr-float'>\
					<a href='"+ works1[i].url +"'target='_blank' 'class='work-img'>\
						<div class='overlay'></div>\
						<img class='img-responsive' src='"+ works1[i].pic +"'>\
						<h2 class='info'> "+ works1[i].title +" </h2></span>\
						</a>\
						<div class='card-details'>\
							<h2 class='teaser-caption'> "+ works1[i].caption +"</h2>\
							<h3 class='teaser-subtitle'> "+ works1[i].type +"</h3>\
							<p class='desc'> "+ works1[i].desc +"</p>\
						</div>\
						<div class='card-actions'>\
							<a href='"+ works1[i].link +"' class='hvr-underline-from-left' target='_blank'>\
								<img src='img/medium.svg' alt='medium'>\
							</a>\
							<h4 class='hvr-underline-from-left'><a href='"+ works1[i].url +"'> "+ works1[i].action +" </a></h4>\
						</div>\
					</div>\
				</div>\
				");
			$(".work-img").mouseenter(function(){
				$(".info", this).show();
			}).mouseleave(function(){
				$(".info", this).hide();
			});
		};

		//Project 2 section
		for(var i = 0; i < works2.length; ++i){
			var str = "";

			if(works2[i].nda == false){
				str = "<div class='card-actions'>\
							<a href='"+ works2[i].link +"' class='hvr-underline-from-left' target='_blank'>\
								<img src='img/medium.svg' alt='medium'>\
							</a>\
							<h4 class='hvr-underline-from-left'><a href='"+ works2[i].url +"'> "+ works2[i].action +" </a></h4>\
						</div>\
						"
			};

			$("#work2").append("\
				<div class='col-md-6 col-xs-12 col-sm-6'>\
					<div class='card-container hvr-float'>\
						<a href='"+ works2[i].url +"'target='_blank' 'class='work-img'>\
						<div class='overlay'></div>\
						<img class='img-responsive' src='"+ works2[i].pic +"'>\
						<h2 class='info'> "+ works2[i].title +" </h2></span>\
						</a>\
						<div class='card-details'>\
							<h2 class='teaser-caption'> "+ works2[i].caption +"</h2>\
							<h3 class='teaser-subtitle'> "+ works2[i].type +"</h3>\
							<p class='desc'> "+ works2[i].desc +"</p>\
						</div>\
						"+ str +"\
					</div>\
				</div>\
			");
			$(".work-img").mouseenter(function(){
				$(".info", this).show();
			}).mouseleave(function(){
				$(".info", this).hide();
			});
		};


		//Project 3 section
		for(var i = 0; i < works3.length; ++i){
			$("#work3").append("\
				<div class='col-md-6 col-xs-12 col-sm-6'>\
					<div class='card-container hvr-float'>\
					<a href='"+ works3[i].url +"'class='work-img'>\
						<div class='overlay'></div>\
						<img class='img-responsive' src='"+ works3[i].pic +"'>\
						<h2 class='info'> "+ works3[i].title +" </h2></span>\
						</a>\
						<div class='card-detail'>\
							<h2 class='teaser-caption'> "+ works3[i].caption +"</h2>\
							<h3 class='teaser-subtitle'> "+ works3[i].type +"</h3>\
						</div>\
						<div class='card-action'>\
							<h4 class='hvr-underline-from-left'><a href='"+ works3[i].url +"'> "+ works3[i].action +" </a></h4>\
						</div>\
					</div>\
				</div>\
				");
			$(".work-img").mouseenter(function(){
				$(".info", this).show();
			}).mouseleave(function(){
				$(".info", this).hide();
			});
		};
});