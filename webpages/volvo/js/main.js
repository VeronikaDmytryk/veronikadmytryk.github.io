function valEl(e){e.validate({rules:{"DATA[PHONE_MOBILE]":{required:!0,regex:"^([+]+)*[0-9 ()-]{5,20}$"},"DATA[NAME]":{required:!0}},messages:{"DATA[PHONE_MOBILE]":{required:"Поле обязательно для заполнения",regex:"Телефон может содержать символы + - ()"},"DATA[NAME]":{required:"Поле обязательно для заполнения"}},submitHandler:function(e){$("#myModal").modal("hide"),$(".loader").fadeIn();var t=$(e),n=$(e).attr("name");switch(n){case"popupResult":$.ajax({type:"POST",url:t.attr("action"),data:t.serialize()}).always(function(e){setTimeout(function(){$(".loader").fadeOut()},800),setTimeout(function(){$(".name_label").hide(),$(".phone_label").hide(),$("#myModal .name_label").hide(),$("#myModal .phone_label").hide(),$("#contacts_2 .name_label").hide(),$("#contacts_2 .phone_label").hide(),$(".overlay").fadeIn(),t.trigger("reset")},1100),$(".overlay").on("click",function(e){$("body").removeClass("modal-open"),$(".overlay").hide()})})}return!1}})}$(document).ready(function(){$(".name_label").hide(),$(".phone_label").hide(),$(".anchor").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return $(window).width()<=768?$("html,body").animate({scrollTop:t},1100):$("html,body").animate({scrollTop:t-60},1100),!1}),$(".car-anchor").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return $(window).width()<=768?$("html,body").animate({scrollTop:t-80},1100):$("html,body").animate({scrollTop:t-120},1100),!1}),$(window).scroll(function(){var e=$("#xc60").offset().top-135,t=$("#xc90").offset().top-135,n=$("#v90").offset().top-135,o=$("#reviews").offset().top-95,i=$("#reasons").offset().top-95,a=$("#about").offset().top-95,l=$(window).scrollTop();l<e?($(".car-list__item").removeClass("menu-active"),$(".main-menu__item").removeClass("menu-active")):l>=e&&l<t?($(".car-list__item").removeClass("menu-active"),$(".car-list__item.xc6-link").addClass("menu-active")):l>=t&&l<n?($(".car-list__item").removeClass("menu-active"),$(".main-menu__item").removeClass("menu-active"),$(".car-list__item.xc90-link").addClass("menu-active")):l>=n&&l<a?($(".car-list__item").removeClass("menu-active"),$(".main-menu__item").removeClass("menu-active"),$(".car-list__item.v90-link").addClass("menu-active")):l>=a&&l<i?($(".main-menu__item").removeClass("menu-active"),$(".main-menu__item").removeClass("menu-active"),$(".car-list__item").removeClass("menu-active"),$(".main-menu__item.about").addClass("menu-active")):l>=i&&l<o?($(".main-menu__item").removeClass("menu-active"),$(".car-list__item").removeClass("menu-active"),$(".main-menu__item.reasons").addClass("menu-active")):l>=o&&l<o+500?($(".main-menu__item").removeClass("menu-active"),$(".car-list__item").removeClass("menu-active"),$(".main-menu__item.reviews").addClass("menu-active")):($(".main-menu__item").removeClass("menu-active"),$(".car-list__item").removeClass("menu-active"))}),$(".menu__button").click(function(){$(".menu-dropdown").show(),$(".menu__button").hide(),$(".close__button").show(),$(".menu-dropdown").toggleClass("slideInDown slideOutUp")}),$(".close__button").click(function(){$(".menu__button").show(),$(".close__button").hide(),$(".menu-dropdown").toggleClass("slideInDown slideOutUp")}),$(".menu-dropdown__item a").click(function(){$(".menu-dropdown").toggleClass("slideInDown slideOutUp"),$(".menu__button").show(),$(".close__button").hide()}),$(".xc60").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!1,prevArrow:$(".prev"),nextArrow:$(".next"),dots:!0,swipe:!0}),$(".xc90").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!1,prevArrow:$(".prev_2"),nextArrow:$(".next_2"),dots:!0,swipe:!0}),$(".v90").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!1,prevArrow:$(".prev_3"),nextArrow:$(".next_3"),dots:!0,swipe:!0}),$(".reviews__slider").slick({slidesToShow:2,slidesToScroll:2,arrows:!0,infinite:!1,prevArrow:$(".prev_4"),nextArrow:$(".next_4"),dots:!0,swipe:!0}),$(".reviews__slider_2").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!1,dots:!0,swipe:!0}),$(".product__link_1").click(function(){$(".xc60").slick("slickNext")}),$(".product__link_2").click(function(){$(".xc90").slick("slickNext")}),$(".product__link_3").click(function(){$(".v90").slick("slickNext")}),$.validator.addMethod("regex",function(e,t,n){var o=new RegExp(n);return this.optional(t)||o.test(e)},"Пожалуйста, заполните это поле"),$(".js-form").each(function(){valEl($(this))});var e=$(window).width();e>767&&$(window).scroll(function(){$(".up").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInUp")}),$(".down").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInDown")}),$(".left").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".right").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInRight")}),$(".right-big").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+505&&$(this).addClass("fadeInRightBig")}),$(".left-big").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+505&&$(this).addClass("fadeInLeftBig")}),$(".left_1").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".left_2").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".left_3").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".left_4").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".left_5").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".left_6").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&$(this).addClass("fadeInLeft")}),$(".in").each(function(){var e=$(this).offset().top,t=$(window).scrollTop();e<t+500&&($(this).addClass("zoomIn"),$(this).addClass("visible"))})}),$(".name_input").on("input",function(){""==$(".name_input").val()?$(".name_label").hide():$(".name_label").show()}),$(".phone_input").on("input",function(){""==$(".phone_input").val()?$(".phone_label").hide():$(".phone_label").show()}),$("#myModal .name_input").on("input",function(){""==$("#myModal .name_input").val()?$("#myModal .name_label").hide():$("#myModal .name_label").show()}),$("#myModal .phone_input").on("input",function(){""==$("#myModal .phone_input").val()?$("#myModal .phone_label").hide():$("#myModal .phone_label").show()}),$("#contacts_2 .name_input").on("input",function(){""==$("#contacts_2 .name_input").val()?$("#contacts_2 .name_label").hide():$("#contacts_2 .name_label").show()}),$("#contacts_2 .phone_input").on("input",function(){""==$("#contacts_2 .phone_input").val()?$("#contacts_2 .phone_label").hide():$("#contacts_2 .phone_label").show()}),$("#firstScreen").click(function(){$("#myModal #comment").val("Общая заявка с первого экрана")}),$("#firstScreen").click(function(){$("#myModal #comment").val("Общая заявка с первого экрана")}),$("#xc60-btn").click(function(){$("#myModal #comment").val("Тест драйв XC60")}),$("#xc60-btn2").click(function(){$("#myModal #comment").val("Тест драйв XC60")}),$("#xc90-btn").click(function(){$("#myModal #comment").val("Тест драйв XC90")}),$("#xc90-btn2").click(function(){$("#myModal #comment").val("Тест драйв XC90")}),$("#v90-btn").click(function(){$("#myModal #comment").val("Тест драйв V90")}),$("#v90-btn2").click(function(){$("#myModal #comment").val("Тест драйв V90")}),$("#advantagesBtn").click(function(){$("#myModal #comment").val("Общая заявка с экрана 'Преимущества'")}),$("#advantagesBtn").click(function(){$("#myModal #comment").val("Общая заявка с экрана 'Преимущества'")}),$("#phone").inputmask("+7 (999) 999-9999"),$("#phone1").inputmask("+7 (999) 999-9999"),$("#phone2").inputmask("+7 (999) 999-9999")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidmFsRWwiLCJlbCIsInZhbGlkYXRlIiwicnVsZXMiLCJEQVRBW1BIT05FX01PQklMRV0iLCJyZXF1aXJlZCIsInJlZ2V4IiwiREFUQVtOQU1FXSIsIm1lc3NhZ2VzIiwic3VibWl0SGFuZGxlciIsImZvcm0iLCIkIiwibW9kYWwiLCJmYWRlSW4iLCIkZm9ybSIsIiRmb3JtSWQiLCJhdHRyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiYWx3YXlzIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsImhpZGUiLCJ0cmlnZ2VyIiwib24iLCJlIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJlbGVtZW50Q2xpY2siLCJ0aGlzIiwiZGVzdGluYXRpb24iLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJ3aWR0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGwiLCJYQzYwIiwiWEM5MCIsIlY5MCIsInJldmlld3MiLCJyZWFzb25zIiwiYWJvdXQiLCJjdXJTY3JvbGwiLCJhZGRDbGFzcyIsInNob3ciLCJ0b2dnbGVDbGFzcyIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImRvdHMiLCJzd2lwZSIsInZhbGlkYXRvciIsImFkZE1ldGhvZCIsInZhbHVlIiwiZWxlbWVudCIsInJlZ2V4cCIsInJlIiwiUmVnRXhwIiwib3B0aW9uYWwiLCJ0ZXN0IiwiZWFjaCIsIndpbiIsImVsUG9zIiwidG9wT2ZXaW5kb3ciLCJ2YWwiLCJpbnB1dG1hc2siXSwibWFwcGluZ3MiOiJBQTRXSSxRQUFTQSxPQUFNQyxHQUNYQSxFQUFHQyxVQUNEQyxPQUNFQyxzQkFDRUMsVUFBVSxFQUNWQyxNQUFPLDRCQUVUQyxjQUNFRixVQUFVLElBR2RHLFVBQ0VKLHNCQUNFQyxT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QnNCLE1BQU0sV0FDdEJ0QixFQUFFLHFCQUFxQmlFLElBQUksMENBSS9CakUsRUFBRSxVQUFVa0UsVUFBVSxxQkFDdEJsRSxFQUFFLFdBQVdrRSxVQUFVLHFCQUN2QmxFLEVBQUUsV0FBV2tFLFVBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5uYW1lX2xhYmVsXCIpLmhpZGUoKTtcclxuICAgICQoXCIucGhvbmVfbGFiZWxcIikuaGlkZSgpO1xyXG4vLyBQQUdFIFNDUk9MTFxyXG4gICAgJChcIi5hbmNob3JcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gJChlbGVtZW50Q2xpY2spLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KXtcclxuICAgICAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBkZXN0aW5hdGlvbiB9LCAxMTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGRlc3RpbmF0aW9uIC0gNjB9LCAxMTAwKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jYXItYW5jaG9yXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50Q2xpY2sgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9ICQoZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCl7XHJcbiAgICAgICAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogZGVzdGluYXRpb24gLSA4MH0sIDExMDApOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBkZXN0aW5hdGlvbiAtIDEyMH0sIDExMDApOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4vLyBNRU5VIFNDUk9MTFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgWEM2MCA9ICQoXCIjeGM2MFwiKS5vZmZzZXQoKS50b3AgLSAxMzU7XHJcbiAgICAgICAgdmFyIFhDOTAgPSAkKFwiI3hjOTBcIikub2Zmc2V0KCkudG9wIC0gMTM1O1xyXG4gICAgICAgIHZhciBWOTAgPSAkKFwiI3Y5MFwiKS5vZmZzZXQoKS50b3AgLSAxMzU7XHJcbiAgICAgICAgdmFyIHJldmlld3MgPSAkKFwiI3Jldmlld3NcIikub2Zmc2V0KCkudG9wIC0gOTU7XHJcbiAgICAgICAgdmFyIHJlYXNvbnMgPSAkKFwiI3JlYXNvbnNcIikub2Zmc2V0KCkudG9wIC0gOTU7XHJcbiAgICAgICAgdmFyIGFib3V0ID0gJChcIiNhYm91dFwiKS5vZmZzZXQoKS50b3AgLSA5NTtcclxuXHJcbiAgICAgICAgdmFyIGN1clNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1clNjcm9sbCA8IFhDNjApIHtcclxuICAgICAgICAgICAgJChcIi5jYXItbGlzdF9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tbWVudV9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyU2Nyb2xsID49IFhDNjAgJiYgY3VyU2Nyb2xsIDwgWEM5MCkge1xyXG4gICAgICAgICAgICAkKFwiLmNhci1saXN0X19pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2FyLWxpc3RfX2l0ZW0ueGM2LWxpbmtcIikuYWRkQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3VyU2Nyb2xsID49IFhDOTAgJiYgY3VyU2Nyb2xsIDwgVjkwKSB7XHJcbiAgICAgICAgICAgICQoXCIuY2FyLWxpc3RfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5tYWluLW1lbnVfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jYXItbGlzdF9faXRlbS54YzkwLWxpbmtcIikuYWRkQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1clNjcm9sbCA+PSBWOTAgJiYgY3VyU2Nyb2xsIDwgYWJvdXQpIHtcclxuICAgICAgICAgICAgJChcIi5jYXItbGlzdF9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tbWVudV9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNhci1saXN0X19pdGVtLnY5MC1saW5rXCIpLmFkZENsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJTY3JvbGwgPj0gYWJvdXQgJiYgY3VyU2Nyb2xsIDwgcmVhc29ucykge1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tbWVudV9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tbWVudV9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNhci1saXN0X19pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIubWFpbi1tZW51X19pdGVtLmFib3V0XCIpLmFkZENsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJTY3JvbGwgPj0gcmVhc29ucyAmJiBjdXJTY3JvbGwgPCByZXZpZXdzKSB7XHJcbiAgICAgICAgICAgICQoXCIubWFpbi1tZW51X19pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2FyLWxpc3RfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5tYWluLW1lbnVfX2l0ZW0ucmVhc29uc1wiKS5hZGRDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyU2Nyb2xsID49IHJldmlld3MgJiYgY3VyU2Nyb2xsIDwgcmV2aWV3cyArIDUwMCkge1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tbWVudV9faXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNhci1saXN0X19pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIubWFpbi1tZW51X19pdGVtLnJldmlld3NcIikuYWRkQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIubWFpbi1tZW51X19pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY2FyLWxpc3RfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbi8vIERST1BET1dOIE1FTlVcclxuICAgICQoXCIubWVudV9fYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubWVudS1kcm9wZG93blwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIi5tZW51X19idXR0b25cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuY2xvc2VfX2J1dHRvblwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIi5tZW51LWRyb3Bkb3duXCIpLnRvZ2dsZUNsYXNzKFwic2xpZGVJbkRvd24gc2xpZGVPdXRVcFwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jbG9zZV9fYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubWVudV9fYnV0dG9uXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmNsb3NlX19idXR0b25cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIubWVudS1kcm9wZG93blwiKS50b2dnbGVDbGFzcyhcInNsaWRlSW5Eb3duIHNsaWRlT3V0VXBcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIubWVudS1kcm9wZG93bl9faXRlbSBhXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubWVudS1kcm9wZG93blwiKS50b2dnbGVDbGFzcyhcInNsaWRlSW5Eb3duIHNsaWRlT3V0VXBcIik7XHJcbiAgICAgICAgJChcIi5tZW51X19idXR0b25cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIuY2xvc2VfX2J1dHRvblwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbi8vIFNMSUNLIFNMSURFUlxyXG5cclxuICAgICQoXCIueGM2MFwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgcHJldkFycm93OiAkKCcucHJldicpLFxyXG4gICAgICAgIG5leHRBcnJvdzogJCgnLm5leHQnKSxcclxuXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzd2lwZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi54YzkwXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBwcmV2QXJyb3c6ICQoJy5wcmV2XzInKSxcclxuICAgICAgICBuZXh0QXJyb3c6ICQoJy5uZXh0XzInKSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHN3aXBlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnY5MFwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgcHJldkFycm93OiAkKCcucHJldl8zJyksXHJcbiAgICAgICAgbmV4dEFycm93OiAkKCcubmV4dF8zJyksXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzd2lwZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5yZXZpZXdzX19zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHByZXZBcnJvdzogJCgnLnByZXZfNCcpLFxyXG4gICAgICAgIG5leHRBcnJvdzogJCgnLm5leHRfNCcpLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3dpcGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgJChcIi5yZXZpZXdzX19zbGlkZXJfMlwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3dpcGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9kdWN0X19saW5rXzEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIueGM2MFwiKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5wcm9kdWN0X19saW5rXzInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIueGM5MFwiKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5wcm9kdWN0X19saW5rXzMnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIudjkwXCIpLnNsaWNrKCdzbGlja05leHQnKTtcclxuICAgIH0pO1xyXG5cclxuLy8gRk9STSBWQUxJREFUSU9OIEFORCBPVkVSTEFZIFBPUFVQXHJcbiAgICAoXCJ1c2Ugc3RyaWN0XCIpO1xyXG4gICAgICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcclxuICAgICAgICBcInJlZ2V4XCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCByZWdleHApIHtcclxuICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAocmVnZXhwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHJlLnRlc3QodmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQt9Cw0L/QvtC70L3QuNGC0LUg0Y3RgtC+INC/0L7Qu9C1XCJcclxuICAgICk7XHJcbiAgICAkKFwiLmpzLWZvcm1cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YWxFbCgkKHRoaXMpKTtcclxuICAgIH0pO1xyXG5cclxuLy9BTklNQVRJT05TXHJcblxyXG4gIHZhciB3aW4gPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICBpZiAod2luID4gNzY3KSB7XHJcbiAgICAvL0FOSU1BVElPTiBUUklHR0VSU1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKFwiLnVwXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbFBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChlbFBvcyA8IHRvcE9mV2luZG93ICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZhZGVJblVwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuZG93blwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxQb3MgPCB0b3BPZldpbmRvdyArIDUwMCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmYWRlSW5Eb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIubGVmdFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxQb3MgPCB0b3BPZldpbmRvdyArIDUwMCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmYWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLnJpZ2h0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbFBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChlbFBvcyA8IHRvcE9mV2luZG93ICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZhZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgICAgJChcIi5yaWdodC1iaWdcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDUpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluUmlnaHRCaWdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICQoXCIubGVmdC1iaWdcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDUpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdEJpZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgJChcIi5sZWZ0XzFcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDApIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgJChcIi5sZWZ0XzJcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDApIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgJChcIi5sZWZ0XzNcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDApIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgJChcIi5sZWZ0XzRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDApIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgJChcIi5sZWZ0XzVcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKGVsUG9zIDwgdG9wT2ZXaW5kb3cgKyA1MDApIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLmxlZnRfNlwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxQb3MgPCB0b3BPZldpbmRvdyArIDUwMCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmYWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLmluXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbFBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChlbFBvcyA8IHRvcE9mV2luZG93ICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInpvb21JblwiKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwidmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4vL0ZPUk0gTEFCRUxTICAgICAgXHJcbiAgICAvLyBTaG93IG5hbWVfbGFiZWwgd2hlbiBpbnB1dCBnaXZlblxyXG4gICAgICAgICQoJy5uYW1lX2lucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLm5hbWVfaW5wdXRcIiApLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm5hbWVfbGFiZWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5uYW1lX2xhYmVsXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgIC8vIFNob3cgcGhvbmVfbGFiZWwgd2hlbiBpbnB1dCBnaXZlblxyXG4gICAgICAgICQoJy5waG9uZV9pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5waG9uZV9pbnB1dFwiICkudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQoXCIucGhvbmVfbGFiZWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5waG9uZV9sYWJlbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI215TW9kYWwgLm5hbWVfaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjbXlNb2RhbCAubmFtZV9pbnB1dFwiICkudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbXlNb2RhbCAubmFtZV9sYWJlbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI215TW9kYWwgLm5hbWVfbGFiZWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgLy8gU2hvdyBwaG9uZV9sYWJlbCB3aGVuIGlucHV0IGdpdmVuXHJcbiAgICAgICAgJCgnI215TW9kYWwgLnBob25lX2lucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI215TW9kYWwgLnBob25lX2lucHV0XCIgKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNteU1vZGFsIC5waG9uZV9sYWJlbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI215TW9kYWwgLnBob25lX2xhYmVsXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjY29udGFjdHNfMiAubmFtZV9pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNjb250YWN0c18yIC5uYW1lX2lucHV0XCIgKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250YWN0c18yIC5uYW1lX2xhYmVsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGFjdHNfMiAubmFtZV9sYWJlbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICAvLyBTaG93IHBob25lX2xhYmVsIHdoZW4gaW5wdXQgZ2l2ZW5cclxuICAgICAgICAkKCcjY29udGFjdHNfMiAucGhvbmVfaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjY29udGFjdHNfMiAucGhvbmVfaW5wdXRcIiApLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRhY3RzXzIgLnBob25lX2xhYmVsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGFjdHNfMiAucGhvbmVfbGFiZWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuLy9GT1JNIFZBTFVFU1xyXG4gICAgJChcIiNmaXJzdFNjcmVlblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIjbXlNb2RhbCAjY29tbWVudFwiKS52YWwoXCLQntCx0YnQsNGPINC30LDRj9Cy0LrQsCDRgSDQv9C10YDQstC+0LPQviDRjdC60YDQsNC90LBcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjZmlyc3RTY3JlZW5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI215TW9kYWwgI2NvbW1lbnRcIikudmFsKFwi0J7QsdGJ0LDRjyDQt9Cw0Y/QstC60LAg0YEg0L/QtdGA0LLQvtCz0L4g0Y3QutGA0LDQvdCwXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3hjNjAtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIiNteU1vZGFsICNjb21tZW50XCIpLnZhbChcItCi0LXRgdGCINC00YDQsNC50LIgWEM2MFwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiN4YzYwLWJ0bjJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI215TW9kYWwgI2NvbW1lbnRcIikudmFsKFwi0KLQtdGB0YIg0LTRgNCw0LnQsiBYQzYwXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3hjOTAtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIiNteU1vZGFsICNjb21tZW50XCIpLnZhbChcItCi0LXRgdGCINC00YDQsNC50LIgWEM5MFwiKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiN4YzkwLWJ0bjJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI215TW9kYWwgI2NvbW1lbnRcIikudmFsKFwi0KLQtdGB0YIg0LTRgNCw0LnQsiBYQzkwXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3Y5MC1idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI215TW9kYWwgI2NvbW1lbnRcIikudmFsKFwi0KLQtdGB0YIg0LTRgNCw0LnQsiBWOTBcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjdjkwLWJ0bjJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI215TW9kYWwgI2NvbW1lbnRcIikudmFsKFwi0KLQtdGB0YIg0LTRgNCw0LnQsiBWOTBcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYWR2YW50YWdlc0J0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIjbXlNb2RhbCAjY29tbWVudFwiKS52YWwoXCLQntCx0YnQsNGPINC30LDRj9Cy0LrQsCDRgSDRjdC60YDQsNC90LAgJ9Cf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsCdcIik7XHJcbiAgICB9KTtcclxuICAgICQoXCIjYWR2YW50YWdlc0J0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIjbXlNb2RhbCAjY29tbWVudFwiKS52YWwoXCLQntCx0YnQsNGPINC30LDRj9Cy0LrQsCDRgSDRjdC60YDQsNC90LAgJ9Cf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsCdcIik7XHJcbiAgICB9KTtcclxuXHJcbi8vIFBIT05FIE1BU0tcclxuICAgICQoXCIjcGhvbmVcIikuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5OTlcIik7XHJcbiAgICAkKFwiI3Bob25lMVwiKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTk5OVwiKTtcclxuICAgICQoXCIjcGhvbmUyXCIpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OTk5XCIpO1xyXG59KTtcclxuXHJcbi8vRlVOQ1RJT04gRk9SIEZPUk0gVkFMSURBVElPTlxyXG4gICAgZnVuY3Rpb24gdmFsRWwoZWwpIHtcclxuICAgICAgICBlbC52YWxpZGF0ZSh7XHJcbiAgICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBcIkRBVEFbUEhPTkVfTU9CSUxFXVwiOiB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgcmVnZXg6IFwiXihbK10rKSpbMC05XFx4MjBcXHgyOFxceDI5LV17NSwyMH0kXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJEQVRBW05BTUVdXCI6IHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgXCJEQVRBW1BIT05FX01PQklMRV1cIjoge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPXCIsXHJcbiAgICAgICAgICAgICAgcmVnZXg6IFwi0KLQtdC70LXRhNC+0L0g0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0YHQuNC80LLQvtC70YsgKyAtICgpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJEQVRBW05BTUVdXCI6IHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRj1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICQoXCIjbXlNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGVyXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB2YXIgJGZvcm0gPSAkKGZvcm0pO1xyXG4gICAgICAgICAgICB2YXIgJGZvcm1JZCA9ICQoZm9ybSkuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoJGZvcm1JZCkge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJwb3B1cFJlc3VsdFwiOlxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKClcclxuICAgICAgICAgICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubG9hZGVyXCIpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm5hbWVfbGFiZWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIucGhvbmVfbGFiZWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbXlNb2RhbCAubmFtZV9sYWJlbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNteU1vZGFsIC5waG9uZV9sYWJlbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0c18yIC5uYW1lX2xhYmVsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRhY3RzXzIgLnBob25lX2xhYmVsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm92ZXJsYXlcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v0YHRgtGA0L7QutC4INC00LvRjyDQvtGB0YLQu9C10LbQuNCy0LDQvdC40Y8g0YbQtdC70LXQuSDQsiDQry7QnNC10YLRgNC40LrQtSDQuCBHb29nbGUgQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgIH0sIDExMDApO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm92ZXJsYXlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIub3ZlcmxheVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuIl19
