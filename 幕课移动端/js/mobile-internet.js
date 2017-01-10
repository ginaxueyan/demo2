
/* 切图移动js框架：mobile-internet.js*/
(function($){
	
	var a = function(){
			
		}
		
		var methods = {
			init:function(){
				
			},
			destory: function(){
				
			},
			val:function(){
					
			}
		}
	
	$.fn.QietuMobileJS = function(){
		
		var b= function(){
			alert(3);	
		}
		
	}
	/*QietuMobile.prototype = {
		plugins: {},
		aa: function() {
			
		},
		isSupportTouch: function() {
			
		},
		isSupport3D: function() {
			
		},
		getTranslate: function(f) {
			
		},
		ie8: function() {
		
		}
	};*/
})(jQuery);



function mask(){
	/*遮罩*/
		$('.layout').prepend('<div id="mask"></div>').find('#mask').css({opacity:0.5, 
	cursor:'pointer', background:'black', position:'absolute', zIndex:999, width:'100%', top:0, left:0, 'bottom':0});	
		
		$('#mask').on('click',function(){
				closeDialog();
				removeMask();					   
		})
		
	}
	function removeMask(){
		$('#mask').remove();	
	}
	
	function closeDialog(){
		$('.dialog').fadeOut();	
		removeMask();
	}
	
	function closeAside(){
		
	
		
		if($('.layout').hasClass('active')){
			
		
				$('.aside').animate({ 'left' :'-=260'});
				$('.layout').removeClass('active');
					
		}
	}
	function openAside(){
		
			$('.aside').animate({'left':'+=260'});
			$('.layout').addClass('active');
			
			
	}
	function toggleAside(){
		
		
		
	
		
		if($('.layout').hasClass('active')){
		
			closeAside();
		
		}
		else{
			
			openAside();
			
		}		
		
	
		
	}
	
	
$(function(){
		   
	
		   
	/*var miqie =  new QietuMobileJS();	
	
	miqie.b();*/
	
	$('.menu, .toggleAside').click(function(){
		toggleAside();
		return false;
	})
	
	
	
	/*点击菜单以外的任意地方，菜单消失*/
	$(document).bind("click",function(e){
		var target = $(e.target);
		if(target.closest(".layout .aside").length == 0){
			
			closeAside();
			
		}
	}) 
	
	
	
	$('#back').click(function(){
		history.back();				  
	})
	
	
	
	$('a[rel=dialog]').click(function(){
									 
		mask();
		$($(this).attr('href')).fadeIn();
		
	})
	
	
	
	$('#closeDialog').on('click',function(){
		closeDialog();
		removeMask();										
	})
	
	$('.tab-link').click(function(){
		$(this).parent().find('.tab-link').removeClass('active').eq($(this).index()).addClass('active');		
		
		$('.tabs .tab').slideUp().parent().find($(this).attr('href')).slideDown();
		return false;
	})
	
	
	/*幻灯片*/
	$('.slider li').eq($('.slider .num span.selected').index()).addClass('selected');
		$('.slider .tip').html($('.slider li.selected').attr('title'));
		$('.slider .num span').tap(function(){
			
			if($(this).hasClass('selected')){
				return false;	
			}
			var curr = $('.slider li').eq($(this).index());
			curr.show();
			$('.slider li.selected').stop().fadeOut(1000,function(){
				$(this).removeClass('selected');
				curr.addClass('selected');
			}); 
			
			$('.slider .num span').removeClass('selected');
			$(this).addClass('selected');
			
			/*tip*/
			$('.slider .tip').html(curr.attr('title'));
			
			return false;
		})	
		
		$.extend({
			sliderAutoChange:function(){
				
				var curr = $('.slider li').eq($('.slider .num span.selected').index());
				
				if($('.slider .num span.selected').next().size()==0){
					var next = $('.slider li:first');
					
					// 状态
					$('.slider .num span').removeClass('selected');
					$('.slider .num span:first').addClass('selected');
				}
				else{
					var next = curr.next('li');
					
					// 状态
					var light = $('.slider .num span.selected');
					$('.slider .num span').removeClass('selected');
					light.next().addClass('selected');
				}
				next.show();
				curr.fadeOut(1000,function(){
					curr.removeClass('selected');
					next.addClass('selected');
				}); 
				
			/*tip*/
			$('.slider .tip').html(next.attr('title'));
				
				 
				return false;
				
			}
		})
		_sliderAutoChange = setInterval("$.sliderAutoChange()",3000);
		
		$('.slider').mouseover(function(){
			clearInterval(_sliderAutoChange);
		})
		$('.slider').mouseout(function(){
			_sliderAutoChange = setInterval("$.sliderAutoChange()",3000);					 
		}) 
	
	
	
	
	
})