
    (function($) {
        $.fn.parallax = function(op){
            return this.each(function(){
                var _this = $(this);
                _this.css({
                    position:'relative',
                    overflow:'hidden'                    
                }).children().css({
					width:'100%',
					height:'100%',
					position:'absolute',
					'top':'100%',
					left:0
				}).addClass('down').eq(0).attr('class','show').css({'top':0});
                
				var options = {
					speed:300,
					pages:true
				}
				
                for(key in op){ options[key] = op[key]; }
				var speed = options.speed;

				
				//=== 마우스휠 이벤트 ===
				var mouseWheelEvent = true;
				_this.on('mousewheel DOMMouseScroll', function(event, delta){
					if(mouseWheelEvent == true){
					if(delta>0){ pageMoveAction('down'); }
					else{ pageMoveAction('up'); }
					//현재페이지 표시
					currentPage();
					}	
				});
                
                //=== 모바일 스와이프 기능 ===
				var swipeEvent = true;
				var swipeWidth = 75;  //Setting
				var touchstartY = 0;
				var touchDeltaY = 0;
				_this.bind('touchstart', function(e){
					touchstartY = e.targetTouches[0].pageY;
					$(this).bind('touchmove', function(e){ touchDeltaY = e.targetTouches[0].pageY - touchstartY; });
				}).bind('touchend',function(){
					if(swipeEvent == true){
					  if(Math.abs(touchDeltaY)>=swipeWidth){
						   if(touchDeltaY>0){pageMoveAction('down'); }
						   else{ pageMoveAction('up'); }
						   touchDeltaY = 0;
						   currentPage(); //현재페이지 표시
					  }
					}
				});
				
				
				
				//=== 페이지 이동 작업 ===
				function pageMoveAction(index){
					mouseWheelEvent = false;
					swipeEvent = false;
					
					//애니메이션 - (페이지 전환 효과)
					switch(index){
						case 'up': 
							if($('.show').next(':not(#parallax_pages)').length){ 
								$('.show').attr('class','up').animate({'top':'-100%', 'z-index':0}, speed+10).next().attr('class','show').animate({'top':0, 'z-index':7}, speed, function(){ mouseWheelEvent = true; swipeEvent = true; }); 
							}else{ mouseWheelEvent = true; swipeEvent = true; }
						break;
						case 'down': 
							if($('.show').prev().length){ 
								$('.show').attr('class','down').animate({'top':'100%', 'z-index':0}, speed+10).prev().attr('class','show').animate({'top':0, 'z-index':7}, speed, function(){ mouseWheelEvent = true; swipeEvent = true; }); 
							}else{ mouseWheelEvent = true; swipeEvent = true; }
						break;
						case undefined: break;    
					}
				}
				
		

	
		//=== 페이지 셋팅 ===
		var $sct = _this.children();	
		
		if(options.pages){		
			var pages = '<ul id="parallax_pages" style="position:absolute; right:30px; top:50%; transform:translateY(-50%); z-index:9; list-style:none;">';
			$sct.each(function(i){  
				if(i == 0){pages += '<li class="active" style="background:#333; width:15px; height:15px; border-radius:13px; margin:10px 0; cursor:pointer;"></li>';} 
				else{pages += '<li style="background:#fff; width:15px; height:15px; border-radius:13px; margin:10px 0; cursor:pointer;"></li>';}
			});
			pages += '</ul>';
			_this.append(pages);
		}		
				
		//페이지 클릭
		$('#parallax_pages li').click(function(){
			if(mouseWheelEvent == true && swipeEvent == true){
				mouseWheelEvent = false;
				swipeEvent = false; 
				
				$('#parallax_pages li').removeClass('active').css({"background":"#fff"});
				$(this).addClass('active').css({"background":"#333"});
				var index = $(this).index();

				
				$sct.css({'z-index':0}).eq(index).css({'z-index':7}).attr('class','show').animate({'top':0}, speed, function(){ 
					$(this).nextAll(':not(#parallax_pages)').css({'top':'100%'}).attr('class','down');
					$(this).prevAll().css({'top':'-100%'}).attr('class','up');

					mouseWheelEvent = true; swipeEvent = true; 
				});
			}
			
		});
				
		//현재페이지 표시
		function currentPage(){
			$sct.each(function(i){ 
				var has = $(this).hasClass('show');
				if(has){ 
					$('#parallax_pages li').removeClass('active').css({"background":"#fff"}).eq(i).addClass('active').css({"background":"#333"});
					return false;
				}
			});
		}
                
                
		});
	};
    })(jQuery);