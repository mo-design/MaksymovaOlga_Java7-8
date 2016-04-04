 function add_tooltip(className, num){

	var target_item = ".inputDiv" + num + " input";
	
	$(".inputDiv" + num).append("<div class='"+className+"' id='"+className+num+"'><p>"+$(target_item).attr('title')+"</p></div>");
	
	
	var my_tooltip = $("#"+className+num);
	

	
	my_tooltip.hide();

	
	$(target_item).removeAttr("title")
		.mouseover(function(){
			my_tooltip.fadeIn(400);})
		.mouseout(function(){
			my_tooltip.fadeOut(400);});
}






$(document).ready(function() {

	$('.tabsDiv ul li').css('cursor', 'pointer');

	$('.tabsDiv li a').click(function(){
	
	
		var a = $(this).attr('href');
	
		$('ul li').removeClass('tab_current');
		$(this).parent().addClass('tab_current');
		
		$('.tabs_container div').hide();
		$(a).fadeIn(1000);
	
  });

	add_tooltip("tooltip", 1);
	add_tooltip("tooltip", 2);
	add_tooltip("tooltip", 3);
  
});





 
 