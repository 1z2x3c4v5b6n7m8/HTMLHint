/**
 * Copyright (c) 2013, Yanis Wang <yanis.wang@gmail.com>
 * Copyright (c) 2014, Takeshi Kurosawa <taken.spc@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'alt-not-empty',
    description: 'Alt of area[href] and input[type=image] must set value.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName.toLowerCase(),
                attrs = event.attrs,
                attrMap = {},
                attr,
                col = event.col + tagName.length + 1,
                selector;
            if (tagName !== 'area' && tagName !== 'input'){
                return;
            }
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                attrMap[attr.name.toLowerCase()] = attr.value;
            }
            if ((tagName === 'area' && 'href' in attrMap) ||
                (tagName === 'input' && attrMap['type'] === 'image')) {
                if (!('alt' in attrMap) || attrMap['alt'] === '') {
                    selector = tagName === 'area' ? 'area[href]' : 'input[type=image]';
                    reporter.warn('Alt of ' + selector + ' must be set value.', event.line, col, self, event.raw);
                }
            }
        });
    }
});
