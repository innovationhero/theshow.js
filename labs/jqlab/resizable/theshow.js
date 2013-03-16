/* 
                  _____   _                              __   _              __                
                 / ___ \ (_)___   ___  ___  _  __ ___ _ / /_ (_)___   ___   / /  ___  ____ ___ 
                / / _ `// // _ \ / _ \/ _ \| |/ // _ `// __// // _ \ / _ \ / _ \/ -_)/ __// _ \
                \ \_,_//_//_//_//_//_/\___/|___/ \_,_/ \__//_/ \___//_//_//_//_/\__//_/   \___/
                 \___/                                                                         

  
                                 _   _._|_|_|_|_ o._ (~|  o _   _ ._   o _| _ _ |
                                }_\/}_|  _| | | ||| | _|  |_\  (_|| |  |(_|}_(_|o
*/ 
    $.ui.plugin.add("resizable", "alsoResizeReverse", {

        start: function(event, ui) {

            var self = $(this).data("resizable"), o = self.options;

            var _store = function(exp) {
                $(exp).each(function() {
                    $(this).data("resizable-alsoresize-reverse", {
                        width: parseInt($(this).width(), 10), height: parseInt($(this).height(), 10),
                        left: parseInt($(this).css('left'), 10), top: parseInt($(this).css('top'), 10)
                    });
                });
            };

            if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.parentNode) {
                if (o.alsoResizeReverse.length) { o.alsoResize = o.alsoResizeReverse[0];    _store(o.alsoResizeReverse); }
                else { $.each(o.alsoResizeReverse, function(exp, c) { _store(exp); }); }
            }else{
                _store(o.alsoResizeReverse);
            }
        },

        resize: function(event, ui){
            var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

            var delta = {
                height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
                top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
            },

            _alsoResizeReverse = function(exp, c) {
                $(exp).each(function() {
                    var el = $(this), start = $(this).data("resizable-alsoresize-reverse"), style = {}, css = c && c.length ? c : ['width', 'height', 'top', 'left'];

                    $.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
                        var sum = (start[prop]||0) - (delta[prop]||0);
                        if (sum && sum >= 0)
                            style[prop] = sum || null;
                    });

                    //Opera fixing relative position
                    if (/relative/.test(el.css('position')) && $.browser.opera) {
                        self._revertToRelativePosition = true;
                        el.css({ position: 'absolute', top: 'auto', left: 'auto' });
                    }

                    el.css(style);
                });
            };

            if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.nodeType) {
                $.each(o.alsoResizeReverse, function(exp, c) { _alsoResizeReverse(exp, c); });
            }else{
                _alsoResizeReverse(o.alsoResizeReverse);
            }
        },

        stop: function(event, ui){
            var self = $(this).data("resizable");

            //Opera fixing relative position
            if (self._revertToRelativePosition && $.browser.opera) {
                self._revertToRelativePosition = false;
                el.css({ position: 'relative' });
            }

            $(this).removeData("resizable-alsoresize-reverse");
        }
    });





$(function() {

    $(".resizable").resizable({
        alsoResizeReverse: ".resizable, .myframe1"
    });

});

var initDiagonal;
var initFontSize;

$(function() {
    $("#resizable").resizable({
        alsoResize: '#content',
        create: function(event, ui) {
            initDiagonal = getContentDiagonal();
            initFontSize = parseInt($("#content").css("font-size"));
        },
        resize: function(e, ui) {
            var newDiagonal = getContentDiagonal();
            var ratio = newDiagonal / initDiagonal;
            
            $("#content").css("font-size", initFontSize + ratio * 3);
        }
    });
});

function getContentDiagonal() {
    var contentWidth = $("#content").width();
    var contentHeight = $("#content").height();
    return contentWidth * contentWidth + contentHeight * contentHeight;
}
