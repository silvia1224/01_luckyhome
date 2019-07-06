window.onload=function(){

    var div2=document.getElementById("div2");

    var imgs=div2.getElementsByTagName("img");

    var imgBig=document.getElementById("big");

    for(var i=0;i<imgs.length;i++){

        imgs[i].onclick=function(){

            imgBig.src=this.src;
        }
    }
}