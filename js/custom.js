function tableResize(){
	// $(".type-33").colResizable({
	// 	liveDrag:true, 
	// 	resizeMode:'fit', 
	// 	minWidth:100,
	// 	postbackSafe:true,
	// 	partialRefresh:true
	// });

	$(".drag-table-box").colResizable({
		liveDrag:true, 
		resizeMode:'fit', 
		minWidth:100,
		postbackSafe:true,
		partialRefresh:true
	});
}

function type22(){
	$('.list-group-item button').on('click' , function(e){
		e.stopPropagation();
		var posTop = $(this).offset().top + 45;
		var posLeft = $(this).offset().left - 50;
		$('.layer-pop').stop().fadeOut();
		$('.layer-pop').css({
			top : posTop,
			left: posLeft
		}).stop().fadeIn();

		$('.card-body ').on('scroll touchmove mousewheel', function(e) { 
			e.preventDefault();
			e.stopPropagation();
			return false; 
		});
	})


	$('html,body').on('click' , function(e){
		if (!$('.layer-pop').is(e.target) && $('.layer-pop').has(e.target).length === 0){
			$('.layer-pop').stop().fadeOut();
		}
		$('.card-body ').off('scroll touchmove mousewheel');
	})
	$('.layer-pop').on('click' , function(){
		$(this).stop().fadeOut();
		$('.card-body ').off('scroll touchmove mousewheel');
	})
}

function type23(){
	type22();
	var idx = true
	$('.type-23 tr td:first-child').on('click' , function(e){
		if( idx ) {
			$(this).parents('tr').next('.toggle').show();
			$(this).parents('tr').next('.toggle').find('.toggle-box').stop().slideDown();
			$(this).children('span').removeClass('icon-arrow-circle-down').addClass('icon-arrow-circle-up')
			idx = false;
		} else {
			$(this).parents('tr').next('.toggle').find('.toggle-box').stop().slideUp();
			$(this).children('span').removeClass('icon-arrow-circle-up').addClass('icon-arrow-circle-down')
			idx = true;
		}
	});
}

function tableResize2(){
	var minWidth = 60;

	var MARGINS = 10;

	var clicked = null;
	var onRightEdge, onLeftEdge;

	var b, x, y;
	var redraw = false;
	
	var leftW , rightW;

	var leftBox =$('.left-box');
	leftW = $('.left-box').outerWidth();
	rightW = $('.right-box').outerWidth();
	$('.drag-table-box').width( leftW + rightW);

	$('.left-box').on('mousedown' , onDown)
	$(document).on('mousemove' , onMove)
	$(document).on('mouseup' , onUp)
	

	function onDown(e) {
		calc(e);
		var isResizing = onRightEdge;
		clicked = {
			x: x,
			y: y,
			cx: e.clientX,
			cy: e.clientY,
			w: b.width,
			isResizing: isResizing,
			onLeftEdge: onLeftEdge,
			onRightEdge: onRightEdge,
		};
	}

	function onUp(e) {
		calc(e);
		clicked = null;
	}

	function calc(e) {
		b = leftBox[0].getBoundingClientRect();
		x = e.clientX - b.left;
		y = e.clientY - b.top;
		
		onLeftEdge = x < MARGINS;
		onRightEdge = x >= b.width - MARGINS;
	}

	function onMove(ee) {
		calc(ee);
		e = ee;
		redraw = true;
	}

	function animate() {
		requestAnimationFrame(animate);
		if (!redraw) return;
		redraw = false;
		if (clicked && clicked.isResizing) {
			if (clicked.onRightEdge){
				leftBox.eq(0).css({
					width : Math.max(x, minWidth) + 'px'
				}) 
				leftW = $('.left-box').outerWidth();
				rightW = $('.right-box').outerWidth();
				$('.drag-table-box').width( leftW + rightW);
			}
			return;
		}

		if( onRightEdge ) leftBox.css({cursor : 'ew-resize'})
	}
	animate();
}
function treeTable2() {
	tableResize2()
	$('.drag-table-box .toggle-depth li').on('click' , function(e){
		e.stopPropagation();
		var depth = $(this).parents("ul").attr('depth');

		var depthData = $(this).children("ul").data('dep');
		$('.toggle-depth [data-dep="'+depthData+'"]').stop().slideToggle('fast');

		if(  $(this).children('div').children('span').is('.icon-plus-square-o') == true ){
			$(this).children('div').children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
		} else {
			$(this).children('div').children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
		}
		if( $(this).children('.top').children('span').is('.icon-plus-square') == true ){
			$(this).children('.top').children('span').removeClass('icon-plus-square').addClass('icon-minus-square')
		} else {
			$(this).children('.top').children('span').removeClass('icon-minus-square').addClass('icon-plus-square')
		}
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
			var depth = $(this).parents("ul").attr('depth')

			$(this).children('ul').attr('depth' , Number(depth)+1 ).slideToggle('fast')

			if( $(this).children('span').is('.icon-plus-square') == true ||  $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square').addClass('icon-minus-square')
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
			} else {
				$(this).children('span').removeClass('icon-minus-square').addClass('icon-plus-square')
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
			}
		})
	}


	
	function slideFolder(){
		
		$('.depth li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square') == true ){
				$(this).children('span').removeClass('icon-plus-square').addClass('icon-minus-square')
			} else {
				$(this).children('span').removeClass('icon-minus-square').addClass('icon-plus-square')
			}
			$(this).find('.depth-1').stop().slideToggle('fast');
		})

		$('.depth-1 li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
				$(this).children('img').attr('src' , '../../img/folder-open.jpg')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
				$(this).children('img').attr('src' , '../../img/folder.jpg')
			}
			$(this).find('.depth-2').stop().slideToggle('fast');
		})
	
		$('.depth-2 li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
				$(this).children('img').attr('src' , '../../img/folder-open.jpg')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
				$(this).children('img').attr('src' , '../../img/folder.jpg')
			}
			$(this).find('.depth-3').stop().slideToggle('fast');
		})

		$('.depth-3 li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
				$(this).children('img').attr('src' , '../../img/folder-open.jpg')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
				$(this).children('img').attr('src' , '../../img/folder.jpg')
			}
			$(this).find('.depth-4').stop().slideToggle('fast');
		})

		$('.depth-4 li').on('click' ,function(e){
			e.stopPropagation();
			if( $(this).children('span').is('.icon-plus-square-o') == true ){
				$(this).children('span').removeClass('icon-plus-square-o').addClass('icon-minus-square-o')
				$(this).children('img').attr('src' , '../../img/folder-open.jpg')
			} else {
				$(this).children('span').removeClass('icon-minus-square-o').addClass('icon-plus-square-o')
				$(this).children('img').attr('src' , '../../img/folder.jpg')
			}
			$(this).find('.depth-5').stop().slideToggle('fast');
		})
	}