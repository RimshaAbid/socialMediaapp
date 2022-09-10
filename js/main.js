$(document).ready(function () {
	var clickEvent = false;
	$('carousel').carousel({
		interval:4000
	}).on('click','.list-group li',function() {
		clickEvent=true;
		$('.list-group li').removeClass('active');
		$(this).addClass('active');
	}).on('slide.bs.carousel',function(e){
		if (!clickEvent) {
			var count =$('.list-group').children().length -1;
			var current =$('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id =parseInt(current.data('slide-to'));
			if (count==id) {
				$('.list-group li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
})
$(window).load(function(){
	var boxheight =$('#carousel .carousel-inner').innerHeigth();
	var itemlength =$('#carousel .item').length;
	var triggerheight = Math.round(boxheight/itemlength+1);
	$('#carousel .list-group-item').outerHeight(triggerheight);
});