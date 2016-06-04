
///滚动主方法
///参数:o 滚动块对象
///参数:d 每次滚屏高度
///参数:c 当前已滚动高度
function scrollup(o,d,c){
    if(d==c){
        var t=getFirstChild(o.firstChild).cloneNode(true);
        o.removeChild(getFirstChild(o.firstChild));
        o.appendChild(t);
        t.style.marginTop="0px";
    }else{
        c+=2;
        getFirstChild(o.firstChild).style.marginTop=-c+"px";
        window.setTimeout(function(){scrollup(o,d,c)},20);
    }
}
//解决firefox下会将空格回车作为节点的问题
function getFirstChild(node){
    while (node.nodeType!=1)
    {
        node=node.nextSibling;
    }
    return node;
}