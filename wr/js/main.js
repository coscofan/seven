$(function(){

	function init_val(){

		clear_all();;
		set_def_val();

	}

	function clear_all(){
		$('.cover-input').val('');
		$('.text-area').val('');
	}

	function set_def_val(){
		$('.cover-input-name').val('  请输入你的用户名方便我们更好服务');

	}

	function set_item_selected(obj){
		$('li.ul-item').removeClass('ul-items-selected');
		$('li.ul-item i').css('display', 'none');
		$(obj).addClass('ul-items-selected');
		//$(obj).parent('li').find('i').style('display','block');
		$(obj).children(':first').css('display','block');
	}

	$(document).ready(function(){
			// 加载执行

					init_val();

					$('#content-3-4-5').hide();

					$('li.ul-item').each(function(){
						if($(this).attr('name') == 'ul-item-1-2'){

							$(this).click(function(){
								//alert('switch');
								$('#content-1-2').show();
								$('#content-3-4-5').hide();
							});

						}
						else if($(this).attr('name') == 'ul-item-3-4-5'){
							$(this).click(function(){
								$('#content-1-2').hide();
								$('#content-3-4-5').show();

							});
						}

						$(this).click(function(){
							set_item_selected(this);
						});

					});

					// 清空默认用户名
					$('.cover-input-name').click(function(){
						if($(this).val() == '  请输入你的用户名方便我们更好服务'){
							$(this).val('');
						}
					});

					// 修正输入框字体颜色
					$('.cover-input').click(function(){
						$(this).removeClass('cover-input');
						$(this).addClass('cover-input-edit');
					});

					// 图片上传
					$('#js-uploader').click(function(){
						$('#upload').click();
					});


					$('li.ul-item:first').click();
				}
				)

		}
	);
