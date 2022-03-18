(function ($) {

    window.awe = window.awe || {};

    $(document).ready(function ($) {

        "use strict";
        awe_owl();

    });

    /********************************************************
     # OWL CAROUSEL
     ********************************************************/
    function awe_owl() {
        $('.owl-carousels').each(function () {
            var xs_item = $(this).attr('data-xs-items');
            var md_item = $(this).attr('data-md-items');
            var lg_item = $(this).attr('data-lg-items');
            var sm_item = $(this).attr('data-sm-items');
            var margin = $(this).attr('data-margin');
            var dot = $(this).attr('data-dot');
            var nav = $(this).attr('data-nav');
            var height = $(this).attr('data-height');
            var play = $(this).attr('data-play');
            var loop = $(this).attr('data-loop');
            var animateOut = $(this).attr('animateOut');
            if (typeof margin !== typeof undefined && margin !== false) {
            } else {
                margin = 0;
            }
            if (typeof xs_item !== typeof undefined && xs_item !== false) {
            } else {
                xs_item = 1;
            }
            if (typeof sm_item !== typeof undefined && sm_item !== false) {

            } else {
                sm_item = 3;
            }
            if (typeof md_item !== typeof undefined && md_item !== false) {
            } else {
                md_item = 3;
            }
            if (typeof lg_item !== typeof undefined && lg_item !== false) {
            } else {
                lg_item = 3;
            }
            if (typeof dot !== typeof undefined && dot !== "false") {
                dot = true;
            } else {
                dot = false;
            }
            if (typeof play !== typeof undefined && play !== "false") {
                play = true;
            } else {
                play = false;
            }
            $(this).owlCarousel({
                lazyLoad: false,
                loop: true,
                margin: Number(margin),
                responsiveClass: true,
                pagination: dot,
                navigation: nav,
                autoplay: play,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                autoHeight: false,
                // animateOut: animateOut,
                items : Number(lg_item),
                itemsDesktop      : [1199,Number(lg_item)],
                itemsTablet       : [768, Number(md_item)],
                itemsMobile       : [479,Number(sm_item)]
            })
        });
    }
    window.awe_owl = awe_owl;

})(jQuery);

(function ($){

	$(document).on('click', '.menu-item-has-children a button', function(event){

		event.preventDefault();

		var _this = $(this);

		if(_this.hasClass('open')){

			_this.removeClass('open');
			_this.parent().siblings('.sub-menu').slideUp(500);
		}else{

			_this.addClass('open');
			_this.parent().siblings('.sub-menu').slideDown(500);
		}
	}).on('click', '.close-menu, .wapper-bg, .icon-menu-main', function(){

		body = $('body');

		if(body.hasClass('open-menu')){

			body.removeClass('open-menu overflow-hidden');
		}else{

			body.addClass('open-menu overflow-hidden');
		}

	}).on('click', '#btn-contact', function(){

		open = $(this).children('.open');
		close = $(this).children('.close-ct');	
		if(open.hasClass('hidden')){

			open.removeClass('hidden');
			close.addClass('hidden');
			$('.chaty-widget li').removeClass('translate-x-24');
			$('.chaty-widget li').addClass('translate-x-0');
			$('.chaty-widget').removeClass('z-30');
			$('.chaty-widget').addClass('z-50');
		}else{

			open.addClass('hidden');
			close.removeClass('hidden');
			$('.chaty-widget li').addClass('translate-x-24');
			$('.chaty-widget li').removeClass('translate-x-0');
			$('.chaty-widget').addClass('z-30');
			$('.chaty-widget').removeClass('z-50');
		}
	}).on('click', '#btn-category', function(){

		console.log('demo');
		_this = $(this);
		if(_this.hasClass('open')){

			_this.removeClass('open text-blue-500');
			_this.siblings('.wrap-category').hide();
			_this.find('.icon').children('svg').removeClass('transform rotate-180');
		}else{

			_this.addClass('open text-blue-500');
			_this.siblings('.wrap-category').show();
			_this.find('.icon').children('svg').addClass('transform rotate-180');
		}
		
	});

	$(window).bind('scroll', function() {

		var sticky = $('.sticky-menu').offset().top;

		if ($(window).scrollTop() >= sticky) {

			$('.header').addClass('fixed top-0 w-full');
		}else {

			$('.header').removeClass('fixed top-0 w-full');
		}
	});

	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	    backToTop = function () {
	    	var scrollTop = $(window).scrollTop();
	    	if (scrollTop > scrollTrigger) {
	    		$('#back-to-top').removeClass('translate-x-24');
				$('#back-to-top').addClass('translate-x-0');
	    	} else {
	    		$('#back-to-top').removeClass('translate-x-0');
				$('#back-to-top').addClass('translate-x-24');
	    	}
	    };
	    backToTop();
	    $(window).on('scroll', function () {
	    	backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	    	e.preventDefault();
	    	$('html,body').animate({
	    		scrollTop: 0
	    	}, 700);
	    });
	}

	//    sticky_relocate
	function sticky_relocate() {
	    var window_top = jQuery(window).scrollTop();
	    
	    if(jQuery(".sticky-footer").length != 0){

	    	var footer_top = jQuery(".sticky-footer").offset().top + 100;
	    	var div_top = jQuery('#sticky-anchor').offset().top;
		    var div_height = jQuery(".scrollbar-sticky").height();
		    var header_height = jQuery("header.header").height();
		    var div_width = jQuery(".scrollbar-one").width();

		    var padding = 200;  // tweak here or get from margins etc

		    if (window_top + div_height > footer_top - padding)
		        jQuery('.scrollbar-sticky').css({top: (window_top + div_height - footer_top + 120) * -1})
		    else if (window_top > div_top) {
		        jQuery('.scrollbar-sticky').addClass('stick');
		        jQuery('.scrollbar-sticky').css({top: header_height + 10, width: div_width})
		    } else {
		        jQuery('.scrollbar-sticky').removeClass('stick');
		    }
	    }
	}

	function sticky_silebar() {
	    var window_top = jQuery(window).scrollTop();
	    var footer_top = jQuery(".footer-top").offset().top + 100;
	    var div_top = jQuery('#sidebar-sticky').offset().top;
	    var div_height = jQuery(".sidebar-sticky").height();
	    var header_height = jQuery("header.header").height();
	    var div_width = jQuery(".sidebar-sticky").width();

	    var padding = 180;  // tweak here or get from margins etc

	    if (window_top + div_height > footer_top - padding)
	        jQuery('.sidebar-sticky').css({top: (window_top + div_height - footer_top + 100) * -1})
	    else if (window_top > div_top) {
	        jQuery('.sidebar-sticky').addClass('stick');
	        jQuery('.sidebar-sticky').css({top: header_height + 10, width: div_width})
	    } else {
	        jQuery('.sidebar-sticky').removeClass('stick');
	    }
	}

	var isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	    isMobile = true;
	}
	if (jQuery("#sticky-anchor, #sidebar-sticky")[0] && isMobile == false) {
	    jQuery(function () {

	        jQuery(window).scroll(sticky_relocate);
	        sticky_relocate();

	        jQuery(window).scroll(sticky_silebar);
	        sticky_silebar();
	    });
	//    sticky_relocate
	}

	 // Cache selectors
	 var lastId,
	 topMenu = $(".charticle_left ul"),
	 topMenuHeight = topMenu.outerHeight() + 15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
            	var item = $($(this).attr("href"));
            	if (item.length) {
            		return item;
            	}
            });

    var div_header = jQuery(".header").height() + jQuery(".breadcrumbs").height() + jQuery("header.entry-header").height() + jQuery(".entry-content .charticle-content").height() + 70;

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
    	var href = $(this).attr("href"),
    	offsetTop = href === "#" ? 0 : ($(href).offset().top + div_header - 50) - topMenuHeight;
    	$('html, body').stop().animate({
    		scrollTop: offsetTop - 37
    	}, 300);
    	e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
    	
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
        	if ( ($(this).offset().top + div_header) < fromTop + 100)
        		return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        	lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("font-bold")
            .end().filter("[href='#" + id + "']").parent().addClass("font-bold");
        }
    });

    $('[id*="more"]').each(function(){

    	var _this = $(this);
    	var _parent = _this.closest('.elementor-text-editor, .charticle-content');
    	var _this_offset_top = _this.offset().top;
    	var _parent_offset_top = _parent.offset().top;
    	var _height = _this_offset_top - _parent_offset_top;

    	_this.html('<button class="focus:outline-none text-blue-700 flex items-center lg:hover:text-blue-800">Đọc thêm<div class="icon ml-2"><svg version="1.1" class="fill-current h-4 w-4 duration-150 ease-in-out" viewBox="0 0 20 20"><path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83 c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25 L17.418,6.109z"></path></svg></div></button>');

    	var _this_height = _this.height();

    	_parent.css({
    		'height' : _height + 24,
    		'overflow' : 'hidden'
    	});

    	_this.click(function(){

    		_parent.css({
	    		'height' : 'auto',
	    		'overflow' : 'hidden'
	    	});
    		
    		_this.remove();
    	});
    });

})(jQuery);
