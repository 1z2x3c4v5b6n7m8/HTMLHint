HTMLHint
=======================

![HTMLHint logo](https://raw.github.com/yaniswang/HTMLHint/master/logo.png)

A Static Code Analysis Tool for HTML

[![Build Status](https://travis-ci.org/yaniswang/HTMLHint.png?branch=master)](https://travis-ci.org/yaniswang/HTMLHint) [![NPM version](https://badge.fury.io/js/htmlhint.png)](http://badge.fury.io/js/htmlhint)

jsCoverage: [98%](http://htmlhint.com/coverage.html)

How to use HTMLHint
=======================

Hint your html code:

    HTMLHint.verify(code, rules);

Read more about all rules: [Rules](https://github.com/yaniswang/HTMLHint/wiki/Rules)

1. With nodejs

        var HTMLHint  = require("htmlhint").HTMLHint;
        var messages = HTMLHint.verify('<ul><li></ul>', {'tag-pair': true});

2. With browser

        <script type="text/javascript" src="htmlhint.js"></script>
        <script type="text/javascript">
            var messages = HTMLHint.verify('<ul><li></ul>', {'tag-pair': true});
        </script>

How to reporting a bug
=======================

You can create a [new issue](https://github.com/yaniswang/HTMLHint/issues/new) in github and describe your problem or suggestion.

How to build HTMLHint
=======================

1. Clone from git

        git clone git://github.com/yaniswang/HTMLHint.git

2. Install nodejs
    
        http://nodejs.org/

3. Install grunt

        npm install grunt-cli -g
        cd HTMLHint && npm install

4. Watch src and test files

        grunt watch

5. Run tests

        grunt test

6. Build

        grunt

License
================

HTMLHint is released under the MIT license:

> The MIT License
>
> Copyright (c) 2012 Yanis Wang \< yanis.wang@gmail.com \>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

Thanks
================

* mocha: [https://github.com/visionmedia/mocha](https://github.com/visionmedia/mocha)
* expect.js: [https://github.com/LearnBoost/expect.js](https://github.com/LearnBoost/expect.js)
* jscover: [https://github.com/fengmk2/jscover](https://github.com/fengmk2/jscover)
* Grunt: [http://gruntjs.com/](http://gruntjs.com/)
* GitHub: [https://github.com/](https://github.com/)