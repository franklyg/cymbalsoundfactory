$(document).ready(function(){
	
	var menu        = $("#menu-btn"),
		menu_items  = $(".logo"),
	    logo_menu   = $("#logo-nav");
	
	menu.on("click", function(e){
		slider();
	});
	

	function slider(){
		var delay_num = 0;
		
		var new_placement = menu_items.css("top");
		
		if(new_placement == "-200px"){
			$(menu_items).each(function(){
				$(this).stop().fadeIn().delay(delay_num).animate({
					top: "0px"
				}, 500)
				delay_num += 150;
			});
		}else{
			$(menu_items).each(function(){
				$(this).stop().delay(delay_num).animate({
					top: "-200px"
				}, 200)
				$(this).hide(500);
				delay_num += 35;
			});
		}
	}

	
	$(window).resize(function(e){
		var w      = $(window).width();
		var search = $("#search-bar")
			
			if ( w <= 480){
				
				menu.on("click", function(e){
					e.preventDefault();
					search.animate({
						top: '235px'
					})
					search.prepend('<div class = "la"></div>')
					
				});
				//alert('480');
			}
			
		});
	
	
	
});