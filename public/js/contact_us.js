//���Ҵ����¼���Ԫ��
var canvas=document.getElementById("c1");
//���¼�������
canvas.onclick=function() {
//1.�½�һ���������������
    function rn(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

//2.�½�һ���������������ɫ
    function rc(min, max) {
        var r = rn(min, max);
        var g = rn(min, max);
        var b = rn(min, max);
        return `rgb(${r}, ${g}, ${b})`;
    }

//3.��䱳����ɫ,��ɫҪǳһ��
    var w = 120;
    var h = 40;
    var ctx = c1.getContext("2d");
    ctx.fillStyle = rc(180, 230);
    ctx.fillRect(0, 0, w, h);
//4.��������ַ���
    var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
    for (var i = 0; i < 4; i++) {
        var c = pool[rn(0, pool.length)];//�������
        var fs = rn(18, 40);//����Ĵ�С
        var deg = rn(-30, 30);//�������ת�Ƕ�
        ctx.font = fs + 'px Simhei';
        ctx.textBaseline = "top";
        ctx.fillStyle = rc(80, 150);
        ctx.save();
        ctx.translate(30 * i + 15, 15);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(c, -15 + 5, -15);
        ctx.restore();
    }
//5.�������5��������,�����ߵ���ɫҪǳһ��
    for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(rn(0, w), rn(0, h));
        ctx.lineTo(rn(0, w), rn(0, h));
        ctx.strokeStyle = rc(180, 230);
        ctx.closePath();
        ctx.stroke();
    }
//6.�������40�����ŵ�С��
    for (var i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = rc(150, 200);
        ctx.fill();
    }
}