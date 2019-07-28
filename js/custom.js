function tableResize(){
	$(".type-33").colResizable({
		liveDrag:true, 
		resizeMode:'fit', 
		minWidth:100,
		postbackSafe:true,
		partialRefresh:true
	});
}
function treeTable() {
		var depth = true;
	$('.depth').on('click' , function(){
		if( depth ){
			$(this).siblings('.depth-1').find('.toggle-wrap').stop().slideDown();
			$(this).find('span').removeClass('icon-plus-square').addClass('icon-minus-square')
			return depth = false;
		} else {
			$(this).siblings('tr[class^=depth-]').find('.toggle-wrap').stop().slideUp();
			$(this).find('span').removeClass('icon-minus-square').addClass('icon-plus-square')
			return depth = true;
		}
	})
	$('.depth-1').on('click' , function(){
		$(this).next('tr.depth-2').find('.toggle-wrap').stop().slideToggle();
		if( $(this).find('span').is('.icon-plus-square-o') == true ){
			$(this).find('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
		} else {
			$(this).find('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
		}
	})
	$('.depth-2').on('click' , function(){
		$(this).next('tr.depth-3').find('.toggle-wrap').stop().slideToggle();
		if( $(this).find('span').is('.icon-plus-square-o') == true ){
			$(this).find('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
		} else {
			$(this).find('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
		}
	})
	$('.depth-3').on('click' , function(){
		$(this).next('tr.depth-4').find('.toggle-wrap').stop().slideToggle();
		if( $(this).find('span').is('.icon-plus-square-o') == true ){
			$(this).find('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
		} else {
			$(this).find('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
		}
	})
}
	//treeTable();


	function slideNav() {

		$('.depth li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square') == true ){
				$(this).children('span').removeClass('icon-plus-square').addClass('icon-minus-square')
			} else {
				$(this).children('span').removeClass('icon-minus-square').addClass('icon-plus-square')
			}
			$(this).find('.depth-1').stop().slideToggle('fast');
		})
		$('.depth-1 li').on('click' , function(e){
			$(this).children('.depth-2').stop().slideToggle();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
		$('.depth-2 li').on('click' , function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
			$(this).children('.depth-3').stop().slideToggle();
		})
		$('.depth-3 li').on('click' , function(e){
			e.stopPropagation();
			$(this).children('.depth-4').stop().slideToggle();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
		$('.depth-4 li').on('click' , function(e){
			e.stopPropagation();
			$(this).children('.depth-5').stop().slideToggle();
			if( $(this).siblings('span').is('.icon-plus-square-o') == true ){
				$(this).siblings('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).siblings('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
	}

	function slideNavCheck(){
		
		$('.depth li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square') == true ){
				$(this).children('span').removeClass('icon-plus-square').addClass('icon-minus-square')
			} else {
				$(this).children('span').removeClass('icon-minus-square').addClass('icon-plus-square')
			}
			$(this).find('.depth-1').stop().slideToggle('fast');
		})
		$('.depth-1 li label').on('click' , function(e){
			e.stopPropagation();
			if( $(this).children('input').is(":checked") == true) {
				$(this).siblings('.depth-2').stop().slideDown();
				$(this).siblings('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).siblings('.depth-2').stop().slideUp();
				$(this).siblings('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
		$('.depth-2 li label').on('click' , function(e){
			e.stopPropagation();
			if( $(this).children('input').is(":checked") == true) {
				$(this).siblings('.depth-3').stop().slideDown();
				$(this).siblings('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).siblings('.depth-3').stop().slideUp();
				$(this).siblings('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
		$('.depth-3 li label').on('click' , function(e){
			e.stopPropagation();
			if( $(this).children('input').is(":checked") == true) {
				$(this).siblings('.depth-4').stop().slideDown();
				$(this).siblings('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).siblings('.depth-4').stop().slideUp();
				$(this).siblings('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
	}
