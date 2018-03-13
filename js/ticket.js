//------门票预订


$(function () {
    //性别赋值
    $("input[name='sex']").click(function () {
        if ($(this).prop("checked") == true) {
            $("input[name='accept_sex']").val($(this).val());
        }
    })
    //发票
    $(".usefp .oneselecton").click(function () {
        if ($(this).is(":checked")) {
            $("input[name='isfp']").val("1");
            $(".fapiao").show();
        }
    })
    $(".usefp .oneselect").click(function () {
        if ($(this).is(":checked")) {
            $("input[name='isfp']").val("0");
            $(".fapiao").hide();
        }
    })
    //---------订单支付
    //    $("input[type='radio']").click(function () {
    //        alert(1);
    //        if ($(this).prop("checked") == true) {
    //            $("from").attr("action", $(this).attr("data-url"));
    //        }
    //    })
  
})

function payurl(url) {
    if (url == "weixin") {
        $("#Wxpay").show();
        $("#btnSubmit").hide();
    } else {
        $("#Wxpay").hide();
        $("#btnSubmit").show();
        $("form").attr("action", url);
        AjaxInitForm('order_form', 'btnSubmit', 0);
    }
   
}


function uncompile(code) {
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    return c;
} 