function ajax({
    url,//����˽ӿڵ�ַ
    type,//���������
    data,//Я�����������
    dataType//����˷��ؽ�������ͣ����д���ͣ�������Զ�������˷��صĽ����ַ�����תΪ���󣬲���Ҫ�Լ��ٵ���JSON.parse
    }){
    return new Promise(
        function(resolve,reject){
            //1.����xhr����
            var xhr=new XMLHttpRequest();
            //2.�󶨼����¼�
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    if(dataType!==undefined&&dataType.toLowerCase() ==="json")
                      var res=JSON.parse(xhr.responseText)
                    else
                      var res=xhr.responseText
                    resolve(res);
                }
            }
            if(type.toLowerCase()=="get"&&data!=undefined){
                url+="?"+data;
            }
            //3.������
            xhr.open(type,url,true);
            if(type.toLowerCase()==="post")
               //����:����������Ϣͷ
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //4.��������
            if(type.toLowerCase()=="post"&&data!==undefined)
                xhr.send(data);
            else
                xhr.send(null);
        })
}