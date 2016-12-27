$(document).ready(function(){
//tab切start
    $(function(){
        $("#tablist li").click(function(){
            $("#tablist li").removeClass("active");
            $(this).addClass("active");
            $("#tabcon .tab-item").hide();
            var _index=$(this).index();
            $("#tabcon .tab-item:eq("+_index+")").show();
        });
    });
//tab切换end
});