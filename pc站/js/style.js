$(function(){
	//第一板块滑动效果
	var main1h=$('.main1').height();
	$('.main2').css({
		'top':main1h-22,
	});
	$('.title').addClass('new-show');
	var allh=$('.main1').height()+$('.main2').height()+420;
	$('body').css({
		'height':allh,
	});
	//首页产品展示效果
	$('.product-block').hover(function(){
		$(this).find('.product-txt').stop().fadeToggle(500);
	});
	//login
	$('#login').click(function(){
		$('.login-all').fadeIn();
	});
	$('.login-all').click(function(){
		$(this).fadeOut();
	});
	$(".login-all .login-area").click(function(event){
	  event.stopPropagation();
	});

	//swiper
	var swiper = new Swiper('.jianjie-swiper .swiper-container', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 4,
	    paginationClickable: true,
	    spaceBetween: 30,
	    prevButton:'.swiper-button-prev',
	    nextButton:'.swiper-button-next',
	});

	//返回顶部
	$(".goback").click(function() {
	    $("html,body").animate({scrollTop:0}, 500);
	}); 
    //首页右侧悬浮小企鹅
	$(".fix-touch").hover(function() {
	    $(".fix-touch img").addClass('animated bounce');
	},function(){
		$(".fix-touch img").removeClass('animated bounce');
	}); 
	//about-swiper
	var swiper = new Swiper('.about-swiper .swiper-container', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 3,
	    paginationClickable: true,
	    spaceBetween: 80,
	    prevButton:'.about-prev',
	    nextButton:'.about-next',
	});
	//superslider
	jQuery(".news-sld").slide();
	//订购和历史
	jQuery(".buy").slide();
	//招商页中间图片部分div高度
	var midh=$('.customs-block2-box1').height()*0.5;
	$('.customs-block2-box2 div').css({
		'height':midh,
	})
	//招商页swiper
	    var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.wai-next',
        prevButton: '.wai-prev',
        parallax: true,
        speed: 600,
    });
	    //嵌套的swiper
    //联系我们小企鹅
    //
    //





    $(window).scroll(function(){
    	//底部滑动效果
    	var fooh=$('.fooh').offset().top - $(window).scrollTop();
    	if(fooh>=0){
    		$('.main1').show();
    	}else{
    		$('.main1').hide();
    	}


    	//about页面显示效果
    	var scroll=$(window).scrollTop();
		if(scroll>=200){//企业简介文字
			$('.about-block1 .w-1170').addClass('animated fadeInUp op1');
		}else{
			$('.about-block1 .w-1170').removeClass('animated fadeInUp op1');
		}
		if(scroll>=500){//企业简介文字
			$('.about-block2').addClass('animated fadeInUp op1');
		}else{
			$('.about-block2').removeClass('animated fadeInUp op1');
		}
		// if(scroll>=740){//企业简介文字
		// 	$('.about-block2 h4').addClass('animated fadeInUp op1');
		// }else{
		// 	$('.about-block2 h4').removeClass('animated fadeInUp op1');
		// }
		if(scroll>=1260){//企业简介文字
			$('.about-block3-txt').addClass('animated fadeInUp op1');
		}else{
			$('.about-block3-txt').removeClass('animated fadeInUp op1');
		}
		if(scroll>=1800){//企业简介文字
			$('.about-block4 .op').addClass('animated fadeInUp op1');
		}else{
			$('.about-block4 .op').removeClass('animated fadeInUp op1');
		}

		//招商页面显示效果
		if(scroll>=100){//企业简介文字
			$('.customs-block1 img').addClass('animated fadeInLeft op1');
			$('.customs-block1-txt').addClass('animated fadeInRight op1');
		}else{
			$('.customs-block1 img').removeClass('animated fadeInLeft op1');
			$('.customs-block1-txt').removeClass('animated fadeInRight op1');
		}
		if(scroll>=1000){//企业简介文字
			$('.customs-block3-box1').addClass('animated fadeInLeft op1');
		}else{
			$('.customs-block3-box1').removeClass('animated fadeInLeft op1');
		}
		if(scroll>=1400){//企业简介文字
			$('.customs-block3-box2').addClass('animated fadeInRight op1');
		}else{
			$('.customs-block3-box2').removeClass('animated fadeInRight op1');
		}

		console.log($('.loading').offset().top-$(window).scrollTop());

		//首页企鹅
		if($('.loading').offset().top-$(window).scrollTop()<=600){
			$('.loading').removeClass('load0');
			$('.loading').addClass('animated bounceInUp load1')
		}

    })


    //地图
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom:11,
      center: [121.551978,36.872403]
         
    });

})
