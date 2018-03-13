$(function(){
	/*单选删除*/
	$(".delete").click(function(){
		$(this).parent().parent().remove()
	})
	/*全选*/
	$(".checkall").click(function(){
		if($(".mtable input").is(":checked")){
			$('input[name="checkId"]').prop("checked",false);
			$(this).text("全选");
		}else{
			$('input[name="checkId"]').prop("checked",true);
			$(this).text("取消");
		}
		
	})
 	/*删除*/
    $(".deleteall").click(function() {
        $("input[name='checkId']:checked").each(function() { // 遍历选中的checkbox
            n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
            $(".mtable").find("tr:eq("+n+")").remove();
        });
    });
})
