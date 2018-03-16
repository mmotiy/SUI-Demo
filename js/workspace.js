$(function() {
	'use strict';
	//$.pullToRefreshDone($content); 刷新某个组件
	$(document).on('pageInit', '#workspace', function(e, id, page) {
		$(page).find('.top_btn_span').on('click', function(e) {
			$('.top_btn_span').removeClass('span_active')
			$(e.target).addClass('span_active')
			$('.content').hide();
			if(e.target.innerHTML === '任务') {
				//任务被点击了
				$('#task').show();
				console.log('任务')
			}
			if(e.target.innerHTML === '问题') {
				//任务被点击了
				console.log('问题')
				$('#problem').show();
			}
		})

		//任务 栏中的某个项被点击了
		$('#task .card', page).click(function(e) {
			var $card = e.target
			while(!$($card).hasClass('card')) {
				$card = $card.parentElement;
			}

			$.router.load("resovle_task.html", true);
		})
		//问题栏中的某个项被点击了
		$('#problem .card', page).click(function(e) {
			var $card = e.target
			while(!$($card).hasClass('card')) {
				$card = $card.parentElement;
			}
			$.router.load("resovle_problem.html", true);
		})
	})
	
	//问题处理绑定事件
	$(document).on('pageInit', '#resovle_problem', function(e, id, page) {
		//$.router.load("#resovle_problem");
		console.log(2)
	})
	
	//任务详情绑定事件
	$(document).on('pageInit', '#resovle_task', function(e, id, page) {
		console.log(3)
	})
	
	$.init();
})