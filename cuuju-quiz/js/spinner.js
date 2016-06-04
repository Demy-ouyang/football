/**
 * Created by ouyangdemy on 16/6/4.
 */

function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length/2);
        var ctx = canvas.getContext("2d");
        //在给定矩形内清空一个矩形
        ctx.clearRect(0,0,422,422);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = '14px Microsoft YaHei';
        for(var i = 0; i < turnplate.restaraunts.length; i++) {
            var angle = turnplate.startAngle + i * arc;
            ctx.fillStyle = turnplate.colors[i];
            ctx.beginPath();
            //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
            ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();
            //锁画布(为了保存之前的画布状态)
            ctx.save();

            //----绘制奖品开始----
            ctx.fillStyle = "#E5302F";
            var text = turnplate.restaraunts[i];
            var line_height = 17;
            //translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

            //rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2);

            /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
            if(text.indexOf("M")>0){//流量包
                var texts = text.split("M");
                for(var j = 0; j < texts.length; j++){
                    ctx.font = j == 0?'bold 20px Microsoft YaHei':'16px Microsoft YaHei';
                    if(j == 0){
                        ctx.fillText(texts[j]+"M", -ctx.measureText(texts[j]+"M").width / 2, j * line_height);
                    }else{
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                    }
                }
            }else if(text.indexOf("M") == -1 && text.length>8){//奖品名称长度超过一定范围
                text = text.substring(0,8)+"||"+text.substring(8);
                var texts = text.split("||");
                for(var j = 0; j < texts.length; j++){
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                }
            }else{
                //在画布上绘制填色的文本。文本的默认颜色是黑色
                //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            }

            //添加对应图标
            if(text.indexOf("布朗熊")>=0){
                var img= document.getElementById("img1");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }else if(text.indexOf("马克杯")>=0){
                var img= document.getElementById("img2");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("足球耳机")>=0){
                var img= document.getElementById("img3");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("手环耳机")>=0){
                var img= document.getElementById("img4");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("小米耳机")>=0){
                var img= document.getElementById("img5");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("iphone6s")>=0){
                var img= document.getElementById("img6");
                img.onload=function(){
                    ctx.drawImage(img,-30,60);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("乐视电视")>=0){
                var img= document.getElementById("img7");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("暴风魔镜")>=0){
                var img= document.getElementById("img8");
                img.onload=function(){
                    ctx.drawImage(img,-30,10);
                };
                ctx.drawImage(img,-30,10);
            }
            else if(text.indexOf("谢谢参与")>=0){
                var img= document.getElementById("img9");
                img.onload=function(){
                    ctx.drawImage(img,-15,10);
                };
                ctx.drawImage(img,-15,10);
            }
            else if(text.indexOf("特色电商礼品")>=0){
                var img= document.getElementById("img10");
                img.onload=function(){
                    ctx.drawImage(img,-15,10);
                };
                ctx.drawImage(img,-15,10);
            }
            //把当前画布返回（调整）到上一个save()状态之前
            ctx.restore();
            //----绘制奖品结束----
        }
    }
}