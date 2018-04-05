
jQuery(document).ready(function() {

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

	// Прокрутка до блока

	$("button").click(function() {
		var $id_block = $(this).attr('data-target');
		var $block_to = $($id_block).offset().top;
		$("html, body").animate({scrollTop: $block_to});
	})

	$(".close").on('click', function() {
	  	$("html,body").css("overflow","visible");
	  	$("#shadow").css({'display': 'none'});
	  	$("#modal-form").css({'display': 'none'});
	  	$("#formResult").css({'display': 'none'});
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