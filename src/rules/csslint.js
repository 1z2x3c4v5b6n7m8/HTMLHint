/**
 * Copyright (c) 2013, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'csslint',
    description: 'Scan css with csslint.',
    init: function(parser, reporter, options){
        var self = this;
        parser.addListener('cdata', function(event){
            if(event.tagName.toLowerCase() === 'style'){

                var cssVerify = options.verify,
                    cssOptions = options.options;

                if(cssVerify !== undefined && cssOptions !== undefined){
                    var styleLine = event.line - 1,
                        styleCol = event.col - 1;
                    var messages = cssVerify(event.raw, cssOptions).messages;
                    messages.forEach(function(error){
                        var line = error.line;
                        reporter[error.type==='warning'?'warn':'error'](error.message, styleLine + line, (line === 1 ? styleCol : 0) + error.col, self, error.evidence);
                    });
                }

            }
        });
    }
});