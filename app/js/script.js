
jQuery(document).ready(function() {

	// положение блока formResult

	var formResult_width = $("#formResult").width();

	$("#formResult").css({"margin-left": -formResult_width/2});

	// кнопка наверх

	$('#scroll-top').click(function() {
   		$('body,html').animate({scrollTop: 0},400);
   	})

   	$(window).scroll(function() {
   		if ($(window).scrollTop() > 400) {
	   		$("#scroll-top").show();
	   	} else {
	   		$("#scroll-top").hide();
	   	}
   	})

   	// попап

	// $(function() {
	// 	$('.popup-link').magnificPopup({
	// 		type: 'image';
	// 	});
	// });

	//Скрыть блоки сервиса

	$(".cases__close").on('click', function() {
	 	var hide_block = $(this).parents(".cases__block").find(".cases__hide");
	 	if (hide_block.attr("data-status") == "closed") {
	 		$(this).parents(".cases__block").find(".cases__hide").slideDown();
	 		$(this).html("Скрыть &uarr;");
	 		hide_block.attr("data-status", "opened");
	 	} else {
	 		$(this).parents(".cases__block").find(".cases__hide").slideUp();
	 		$(this).html("Показать &darr;");
	 		hide_block.attr("data-status", "closed");
	 	}
	})

	// Прокрутка до блока

	$("button").click(function() {
		var $id_block = $(this).attr('data-target');
		var $block_to = $($id_block).offset().top;
		$("html, body").animate({scrollTop: $block_to});
	})

	// // модальные окна форм

	// $(".open-modal").on('click', function() {
	//   	$("#shadow").css({'display': 'block'});
	//   	$("html,body").css("overflow","hidden");
	//   	$("#modal-form").css({'display': 'block'});
	//   	if ($(window).width() > 768) {
	//   		$("#modal-form").addClass('modal-form--effects');
	//   	}
	// })

	// $("#shadow").on('click', function() {
	//   	$(this).css({'display': 'none'});
	//   	$("html,body").css("overflow","visible");
	//   	$("#modal-form").css({'display': 'none'});
	//   	$("#formResult").css({'display': 'none'});
	// })

	// модальные окна форм

	$(".cases__link").on('click', function() {
		var target = $(this).attr("data-target");
	  	$("#shadow").css({'display': 'block'});
	  	$(".case-modal").css({'display': 'block'});
	  	$(".case-modal img").attr("src", "images/cases-" + target + ".jpg");
	})

	$("#shadow").on('click', function() {
	  	$(this).css({'display': 'none'});
	  	$("html,body").css("overflow","visible");
	  	$("#modal-form").css({'display': 'none'});
	  	$("#formResult").css({'display': 'none'});
	  	$(".case-modal").css({'display': 'none'});
	})

	$(".close").on('click', function() {
	  	$("html,body").css("overflow","visible");
	  	$("#shadow").css({'display': 'none'});
	  	$("#modal-form").css({'display': 'none'});
	  	$("#formResult").css({'display': 'none'});
	  	$(".case-modal").css({'display': 'none'});
	})

	// bxslider

	jQuery('.bxslider').bxSlider({
		pager: false
	});

	// отправка формы

	$('form').submit(function() {
	 $.ajax({
	  	type: "POST",
	  	url: "../mail.php",
	  		data: $(this).serialize()
	 }).done(function() {
	 	$("#shadow").css({'display': 'block'});
	 	$("#modal-form").css({'display': 'none'});
	 	$("html,body").css("overflow","hidden");

	 	$('#formResult').show();
	  	});
	 	return false;
	})

	// очистка полей форм

	$(".form-input").focus(function() {
	 	$(this).attr('placeholder', '');
	})

	$(".main-form__input, .modal-form__input").focusout(function() {
	 	$(".modal-form__left").removeClass("modal-form__left--hide");
	})

	// маска для ввода телефона

	$(function(){
	 	$("input[name='tel']").mask("8(999) 999-9999");
	});

});