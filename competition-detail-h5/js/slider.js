/// 我的滑动事件
/// 戴鹏云
/// 2016/8/10
var MySlide = {
    begin: 0,
    P: 0,
    ISSLIDE_L: true,
    ISSLIDE_R: true,
    ISCLICK: true,
    BaseSize: 1,
    init: function (boxClassName, callbacking, callbacked, callbackclick) {
        MySlide.BaseSize = parseInt($('html').css('font-size'));
        $('.' + boxClassName).bind('touchstart', function (e) {
            MySlide.ISCLICK = true;
            MySlide.ISSLIDE_L = true;
            MySlide.ISSLIDE_R = true;
            MySlide.p = e.originalEvent.changedTouches[0].clientX;
            var obj = $('.'+boxClassName);
            MySlide.begin = obj.css('left') &&  obj.css('left') != "auto" ? parseInt(obj.css('left')) : 0;
            e.preventDefault();
        });
        $('.' + boxClassName).bind('touchmove', function (e) {
            var tempp = e.originalEvent.changedTouches[0].clientX - MySlide.p;
            var obj = $(e.target);
            if (!obj.attr('class') || obj.attr('class').indexOf(boxClassName) == -1) obj = obj.parents('.' + boxClassName);

            if (tempp < 0) {
                // 向左 <-
                if (MySlide.ISSLIDE_L == false) return;	// 不滑动
            } else if (tempp > 0) {
                // 向右 ->
                if (MySlide.ISSLIDE_R == false) return;	// 不滑动
            }

            // 在滑动，不是点击事件
            if (Math.abs(tempp) > MySlide.BaseSize / 2) MySlide.ISCLICK = false;

            // 滑动中事件
            callbacking(obj, tempp);
        });
        $('.' + boxClassName).bind('touchend', function (e) {
            //console.info(e.originalEvent.changedTouches[0].clientX, e.originalEvent.changedTouches[0].clientY);
            var tempp = e.originalEvent.changedTouches[0].clientX - MySlide.p;
            var obj = $(e.target);
            if (!obj.attr('class') || obj.attr('class').indexOf(boxClassName) == -1) obj = obj.parents('.' + boxClassName);

            // 小于0.5rem为点击事件
            if (MySlide.ISCLICK && Math.abs(tempp) < MySlide.BaseSize / 2) { callbackclick(obj, $(e.target)); return; }

            // 是否激发滑动结束事件
            if (tempp < 0) {
                // 向左 <-
                if (MySlide.ISSLIDE_L == false) return;	// 不滑动
            } else if (tempp > 0) {
                // 向右 ->
                if (MySlide.ISSLIDE_R == false) return;	// 不滑动
            }

            // 滑动结束事件
            callbacked(obj, tempp);
            MySlide.p = 0;
            MySlide.begin = 0;
        });
    }
}  