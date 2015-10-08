/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'title-require',
    description: '<title> must be present in <head> tag.',
    init: function(parser, reporter){
        var self = this;
        var hasTitle = false;
        function onTagStart(event){
            if(event.tagName.toLowerCase() === 'title'){
                hasTitle = true;
            }
        }
        function onTagEnd(event){
            if(event.tagName.toLowerCase() === 'head'){
                if(hasTitle === false){
                    reporter.error('<title> must be present in <head> tag.', event.line, event.col, self, event.raw);
                }
                parser.removeListener('tagstart', onTagStart);
                parser.removeListener('tagend', onTagEnd);
            }
        }
        parser.addListener('tagstart', onTagStart);
        parser.addListener('tagend', onTagEnd);
    }
});
