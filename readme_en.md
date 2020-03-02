# SiplPen - A minimalist writing zone

Block out distractions and focus on writing.

## Intro

ZenpenPlus is a web app for writing minimally, and getting into the Zone.

Compared with original project "Zenpen", SiplPen comes with a few improvements.

All information is persistent locally, using HTML5 local storage.

Applink：[GitHub Page](https://imbearchild.github.io/SiplPen/index.html)

README：[中文](https://github.com/ImBearChild/SiplPen/blob/master/readme.md)

## Improvements

* Fix: Word count for Asian language characters now works properly
* Add: Flowstate mode.
* Add: Support for touch screen device.
* Add: Optional loading of Chinese font.
* Add: Muti-language support.
    (Now there are only Chinese and English, but adding new translation is more esay now.)
* Improvement: More UI animation.
* Improvement: Show exact number of word count.

---------

## File

`src`: Source code
`docs`: Minified web page

`makedoc.py`: Tool to creat minified web page from source code.

Attention: Files in two folders act same, but you need to install node.js package (`clean-css-cli`,`uglify-js`) to run `makedoc.py`.

---------

## Copright information

### Third partly library

* translater.js (MIT License)[Link](https://github.com/jaywcjlove/translater.js)
* FontAwesome (SIL OFL 1.1 and MIT License)
* FileSaver.js [Link](http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js)
* Blob.js [Link](http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js)
* screenfull.js (Sindre Sorhus; MIT License)

### License

The MIT License

Copyright (C) 2020 ~ [ImBearChild](https://github.com/ImBearChild/)

Origin: [ZenPen](https://github.com/tholman/zenpen) (MIT License)
