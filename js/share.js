;(function($){
	$(".content").on('click','.show',function(e){
		e.preventDefault();
		$(this).closest("p").next(".wx").toggleClass("hied");
		$(this).css({textDecoration:"none"})
	
	})
	
	$(".content").on("click",".cang",function(e){
		e.preventDefault();
		$(this).find("em").toggleClass("bank");
		$(this).css({textDecoration:"none"})
		
		
	})

})(jQuery);
