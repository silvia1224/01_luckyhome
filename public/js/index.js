//(function(){
//    ajax({
//        url:"http://localhost:3000/index",
//        type:"get",
//        dataType:"json"
//    }).then(result=>{
//        console.log(result);
//        var [p1,p2,p3]=result
//        var {title,price, href, pic}=p1;
//        var html=`<img class="w-100" src="${pic}" alt=""/>
//    <div class="details bg-white text-center">
//    <p class="m-0 mt-3"><a class="text-muted font-weight-bold" href="${href}">��${price.toFixed(2)}</a></p>
//    <p class="mt-3 text-muted font_family text-truncate pb-2 px-2">${title}</p>
//    </div> `;
//    document.getElementById("p1").innerHTML=html;
//    })
//})();

$(function(){//function前加$
    //去掉index.html结尾的<script src="js/ajax.js">
    //因为jQuery中自带 了$.ajax函数
    $.ajax({//ajax前加$.
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json",
        // }).then(result=>{
        //.then里面内容全部剪切到success中
        //.then和success都相当于xhr.onreadystatechange=function这一步
        success:function(result){
            console.log(result);
            var [p1,p2,p3,p4,p5,p6]=result;
            var {title,details,price,href,pic}=p1;
            // 动态获取商品p1数据
            var html=`<img class="w-100" src="${pic}" alt=""/>
                <div class="details bg-white text-center">
                <p class="m-0 mt-3"><a class="text-muted font-weight-bold" href="${href}">￥${price.toFixed(2)}</a></p>
                <p class="mt-3 text-muted font_family text-truncate pb-2 px-2">${title}</p>
                </div> `;
            document.getElementById("p1").innerHTML=html;
        }
    })
});