

VIVO_UIMIX.main.high = {
	data: {
		stages: [],
		current: -1,
		next: -1,
		delay_timeout: 200,
		delay_hander: false,
		auto_play_handler: false,
		auto_play_timeout: 5000
	},

	next: function() {
		VIVO_UIMIX.main.high.data.delay_hander = false;
		if (VIVO_UIMIX.main.high.data.current == VIVO_UIMIX.main.high.data.next) {
			return;
		}
		if (VIVO_UIMIX.main.high.data.current >= 0) {
			VIVO_UIMIX.main.high.data.stages[VIVO_UIMIX.main.high.data.current].outStage(VIVO_UIMIX.main.high.data.stages[VIVO_UIMIX.main.high.data.next].inStage);
		} else {
			VIVO_UIMIX.main.high.data.stages[VIVO_UIMIX.main.high.data.next].inStage();
		}
		VIVO_UIMIX.main.high.data.current = VIVO_UIMIX.main.high.data.next;
	},

	autoplay: function(enable) {
		if (VIVO_UIMIX.main.high.data.auto_play_handler) {
			clearInterval(VIVO_UIMIX.main.high.data.auto_play_handler);
			VIVO_UIMIX.main.high.data.auto_play_handler = false;
		}
		if (enable) {
			VIVO_UIMIX.main.high.data.auto_play_handler = setInterval(function() {
				var ls = $("#vivo-contain .focus-gallery .switch-high a");
				var index = $("#vivo-contain .focus-gallery .switch-high a.current").index();
				ls.eq(index).removeClass('current');
				var next = (index + 1) % ls.size();
				ls.eq(next).addClass('current');
				VIVO_UIMIX.main.high.switchTo(next, true);
			}, VIVO_UIMIX.main.high.data.auto_play_timeout);
		}
	},

	switchTo: function(index, force) {
		if (VIVO_UIMIX.main.high.data.delay_hander) {
			clearTimeout(VIVO_UIMIX.main.high.data.delay_hander);
		}
		VIVO_UIMIX.main.high.data.next = index;
		if (force) {
			VIVO_UIMIX.main.high.next();
		} else {
			VIVO_UIMIX.main.high.data.delay_hander = setTimeout(VIVO_UIMIX.main.high.next, VIVO_UIMIX.main.high.data.delay_timeout);
		}
	},

	init : function(){
		var highBox=$("#vivo-contain .focus-gallery"),
		sildeBox=highBox.find(".vivo-box .vivo-li"),
		totalHigh=sildeBox.size(),
		switchHigh=highBox.find(".switch-high"),
		curHigh=oldHigh=0,
		delay=4000,
		t=null,
		isPlay=false;

		if(!$("body").hasClass("home")) return;

		var html = '';
		for(var i=0; i<totalHigh; i++){
			html+="<a><b></b></a>";
		}
		switchHigh.append(html);

		sildeBox.each(function(i,j){
			$(j).css({opacity:0,zIndex:1,display:"none"});
		});

		VIVO_UIMIX.main.high.data.stages = [
			VIVO_UIMIX.main.high.x5,
			VIVO_UIMIX.main.high.x3v,
			VIVO_UIMIX.main.high.imageSearch3,
			VIVO_UIMIX.main.high.xshot

		];

		for (var i in VIVO_UIMIX.main.high.data.stages) {
			VIVO_UIMIX.main.high.data.stages[i].init();
		}

		switchHigh.on({
			mouseenter : function(){
				VIVO_UIMIX.main.high.autoplay(false);
			},
			mouseleave : function(){
				VIVO_UIMIX.main.high.autoplay(true);
			},
			hover : function(){
				if($(this).hasClass("current")) return;
				$(this).addClass("current").siblings('.current').removeClass("current");
				VIVO_UIMIX.main.high.switchTo($(this).index());
				return false;
			}
		},"a").find("a").first().addClass("current");
		//鼠标移到图片上，轮播停止
		sildeBox.on({
			mouseenter : function(){
				VIVO_UIMIX.main.high.autoplay(false);
			},
			mouseleave : function(){
				VIVO_UIMIX.main.high.autoplay(true);
			},
		},"a")
		VIVO_UIMIX.main.high.switchTo(0, true);
		VIVO_UIMIX.main.high.autoplay(true);
	},


	x5 : {
		timehandle : false,
		stop: function() {
			if(VIVO_UIMIX.main.high.x5.timehandle){
				clearTimeout(VIVO_UIMIX.main.high.x5.timehandle);
				VIVO_UIMIX.main.high.x5.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-x5");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			VIVO_UIMIX.main.high.x5.stop();
			var ebox=$(".high-x5");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},200, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			VIVO_UIMIX.main.high.x5.stop();
			var ebox=$(".high-x5");

			setTimeout(function(){
				ebox.animate({opacity:0},200);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},

	x3v : {
		timehandle : false,
		stop: function() {
			if(VIVO_UIMIX.main.high.x3v.timehandle){
				clearTimeout(VIVO_UIMIX.main.high.x3v.timehandle);
				VIVO_UIMIX.main.high.x3v.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-x3v");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			VIVO_UIMIX.main.high.x3v.stop();
			var ebox=$(".high-x3v");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},200, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});

		},
		outStage: function(cb) {
			VIVO_UIMIX.main.high.x3v.stop();
			var ebox=$(".high-x3v");

			setTimeout(function(){
				ebox.animate({opacity:0},200);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);

		}
	},


	imageSearch3 : {
		timehandle : false,
		stop: function() {
			if(VIVO_UIMIX.main.high.imageSearch3.timehandle){
				clearTimeout(VIVO_UIMIX.main.high.imageSearch3.timehandle);
				VIVO_UIMIX.main.high.imageSearch3.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-imageSearch3");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			VIVO_UIMIX.main.high.imageSearch3.stop();
			var ebox=$(".high-imageSearch3");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},200, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			VIVO_UIMIX.main.high.imageSearch3.stop();
			var ebox=$(".high-imageSearch3");

			setTimeout(function(){
				ebox.animate({opacity:0},200);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},

	xshot : {
		timehandle : false,
		stop: function() {
			if(VIVO_UIMIX.main.high.xshot.timehandle){
				clearTimeout(VIVO_UIMIX.main.high.xshot.timehandle);
				VIVO_UIMIX.main.high.xshot.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-xshotnew");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			VIVO_UIMIX.main.high.xshot.stop();
			var ebox=$(".high-xshotnew");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},200, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});

		},
		outStage: function(cb) {
			VIVO_UIMIX.main.high.xshot.stop();
			var ebox=$(".high-xshotnew");

			setTimeout(function(){
				ebox.animate({opacity:0},200);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);

		}
	}





};
