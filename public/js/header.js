$(function(){
    //����ҳͷ.htmlƬ��
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            //���ص���һ��htmlƬ��
            console.log(result);
            //��Ƭ�δ����µ�<header>Ԫ�أ��滻����<header>Ԫ��
            $(result).replaceAll("#header");
            //���Զ����header.css��ҳ��
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
        }
    })
})