setTimeout(() => {
	document.querySelector('.preloader').style.display = 'none';
	document.querySelector('.page').style.opacity = '1';
}, 3000);
jq2 = $.noConflict();
jq2(function( $ ) {
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);

	$(window).scroll(function(){
		if ($(this).scrollTop() > 670) {
			$('.arrow-up').addClass('active');
		} else {
			$('.arrow-up').removeClass('active');
		}
	});

	$('.arrow-up').on( 'click', function(e){
		e.preventDefault();
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if(dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({
					scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
				}, 500 // скорость прокрутки
			);
		}
	});
	$(window).scroll(function() {
		let height_window = $(window).height();
		let speed_animation = height_window / 2.5;
		$('.promo__img').each(function() {
			let imgPos = $(this).offset().top;
			let topOfWindow = $(window).scrollTop();

			if(imgPos < topOfWindow + speed_animation){
				$(this).addClass('animate__animated animate__fadeInUp');
				$(this).css('visibility', 'visible');
			}
		});

        $('#food-1 .food__img, #food-2 .food__text, #food-3 .food__img, #food-post-1 .food-post__img, .food-post__text').each(function() {
			let imgPos = $(this).offset().top;
			let topOfWindow = $(window).scrollTop();

			if(imgPos < topOfWindow + speed_animation){
				$(this).addClass('animate__animated animate__fadeInRight');
				$(this).css('visibility', 'visible');
			}
		});
        $('#food-1 .food__text, #food-2 .food__img, #food-3 .food__text, .food-post__img, .food-post__text').each(function() {
			let imgPos = $(this).offset().top;
			let topOfWindow = $(window).scrollTop();

			if(imgPos < topOfWindow + speed_animation){
				$(this).addClass('animate__animated animate__fadeInLeft');
				$(this).css('visibility', 'visible');
			}
		});
		$('.testimonials').each(function() {
			let imgPos = $(this).offset().top;
			let topOfWindow = $(window).scrollTop();

			if(imgPos < topOfWindow + speed_animation){
				$(this).addClass('animate__animated animate__fadeInTopLeft');
				$(this).css('visibility', 'visible');
			}
		});
	});

	$('#reviews').owlCarousel({
		autoplayTimeout:5000,
		smartSpeed:3000,
		autoplay:true,
		loop:true,
		margin:0,
		nav:false,
		items:1,
		dots:true
	})

	let flagCounter = true;
	$('.number').waypoint(function() {
		if( flagCounter ) {
			animateOnScroll();
			flagCounter = false;
		}
	}, {
		offset: '80%'
	});

	function animateOnScroll () {
		$('.statistic__item-number-value h3').each(function() {
			$(this).rollNumber({
				number: $(this)[0].dataset.number,
				speed: 700,
				interval: 0,
				rooms: $(this)[0].dataset.number.length,
				space: 90,
				fontStyle: {
					'width' : 'auto',
					'font-size': 59,
				}
			})
		});
	}

	// $('.mobile-btn').on('click',function (){
	// 	if ($(this).hasClass('active')){
	// 		$('.menu-list').slideUp('fast')
	// 		$(this).removeClass('active')
	// 	}else{
	// 		$('.menu-list').slideDown('fast')
	// 		$(this).addClass('active')
	// 	}
	// });

	$(document).ready(function(){
		$('.hamburger').click(function(){
			$(this).toggleClass('open');
			$('.menu-overlay').toggleClass('open');
		});
	});
});