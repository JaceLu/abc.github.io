$(function () {
	$(".sidebar-toggler").click(function () {
		$("body").addClass("page-sider")
		$(".sider_wrap").addClass("active");
		$(".sider_mask").click(function () {
			$("body").removeClass("page-sider")
			$(".sider_wrap").removeClass("active");
		})
	})
	$(".menu_link").click(function () {
		$(this).closest(".menu_item").toggleClass("open");
	})
})

//导航插件滑动显示
//$(function() {
//	$(".nav-wrap")
//		.mouseleave(function() {
//			$(".menu-info").removeClass("open");
//			$(".navmenu td").removeClass("active");
//		})
//		.mouseenter(function() {
//			$(".menu-info").addClass("open");
//		})
//
//	$(".navmenu td").mouseenter(function() {
//		var index = $(this).index()
//		$(this).addClass("active").siblings().removeClass("active");
//		$(".menu-info .navlist").eq(index).addClass("active").siblings().removeClass("active");
//	});
//
//	$(".menu-info .navlist").mouseenter(function() {
//		var index = $(this).index()
//		$(".navmenu td").eq(index).addClass("active").siblings().removeClass("active");
//		$(this).addClass("active").siblings().removeClass("active");
//	})
//	//滑动块
//	$(".nav .nav_item").mouseenter(function() {
//		var index = $(this).index()
//		$(this).addClass("active").siblings().removeClass("active");
//		$(this).find("a").trigger("click");
//		$(".Js-more").hide();
//		var name = $(this).data("target");
//		console.log(name);
//		$("[name=" + name + "]").show();
//	});
//})
//导航插件点击显示
$(function () {
	//	$(".nav-wrap").mouseleave(function() {
	//			$(".navmenu td").removeClass("active");
	//			$(".menu-info").slideUp("slow");
	//		})
	//	$(".navmenu td").click(function() {
	//		var index = $(this).index();
	//		if($(this).hasClass("active")) {
	//			$(".menu-info").slideUp("slow");
	//			$(this).removeClass("active")
	//		} else {
	//			$(this).addClass("active").siblings().removeClass("active");
	//			$(".menu-info").slideDown("slow");
	//		}
	//	});
	$(".navmenu").click(function () {
		var index = $(this).index();
		if ($(this).hasClass("active")) {
			$(".menu-info").slideUp("slow");
			$(this).removeClass("active")
		} else {
			$(this).addClass("active").siblings().removeClass("active");
			$(".menu-info").slideDown("slow");
		}
	});
	//	$(".navmenu td").mouseenter(function() {
	//		var index = $(this).index()
	//		$(this).addClass("active").siblings().removeClass("active");
	//		$(".menu-info .navlist").eq(index).addClass("active").siblings().removeClass("active");
	//	});
	//	$(".menu-info .navlist").mouseenter(function() {
	//		var index = $(this).index()
	//		$(".navmenu td").eq(index).addClass("active").siblings().removeClass("active");
	//		$(this).addClass("active").siblings().removeClass("active");
	//	})
	//滑动块
	$(".nav .nav_item").mouseenter(function () {
		var index = $(this).index()
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find("a").trigger("click");
		$(".Js-more").hide();
		var name = $(this).data("target");
		console.log(name);
		$("[name=" + name + "]").show();
	});
})
