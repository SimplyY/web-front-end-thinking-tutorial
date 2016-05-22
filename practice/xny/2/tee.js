/**
 * Created by Khalil on 2016/4/6.
 */
var input=document.getElementById('search');
var data=[
    {
        key:'alibaba',
        value:'阿里巴巴'
    },
    {
        key:'baidu',
        value:'百度'
    },
    {
        key:'sexi',
        value:'色系'
    },
    {
        key:'sejie',
        value:'色戒'
    },
    {
        key:'sina',
        value:'sina'
    },
    {
        key:'secai',
        value:'色彩'
    },
    {
        key:'sennv',
        value:'森女'
    },
    {
        key:'secaixinggeceshi',
        value:'色彩性格测试'
    },
    {
        key:'seo',
        value:'seo'
    },
    {
        key:'sem',
        value:'sem'
    },
    {
        key:'22cunxianshiqi',
        value:'22寸显示器'
    },
    {
        key:'22cunlaganxiang',
        value:'22寸拉杆箱'
    },
    {
        key:'zhizhang',
        value:'智障'
    },
];
var result=[];
var msg=document.createElement('div');
msg.id="msg";
input.parentNode.appendChild(msg);

input.onfocus=function(event){

    result=[];
    msg.innerHTML='';
    auto();
};
input.onkeyup=auto;
input.onblur=function(event){
    if(msg){
        document.body.removeChild(msg);
    }
};
function auto(event){
    var reg=new RegExp('^'+input.value);
    var i;
    result=[];
    msg.innerHTML='';
    if(input.value===''){
        msg.innerHTML='';
        return;
    }
    if(msg){
        for(i=0;i<data.length;i++){
            if(reg.test(data[i].key)){
                result.push(data[i].value);
            }
        }
    }
    var ul=document.createElement('ul');
    msg.appendChild(ul);
    for(i=0;i<result.length;i++){
        var li=document.createElement('li');
        li.innerHTML=result[i];
        ul.appendChild(li);
    }
}
