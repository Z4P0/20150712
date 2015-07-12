(function ($, window, document, undefined) {

    'use strict';


    
    window._20150712 = {
    


        tag: '20150712',

        settings: {},

        modules: {},



        init: function() {

            console.log(this.tag);

            // initialize all modules
            for (var module in this.modules) {
                this.modules[module].init();
            }


            // add smooth scroll
            this.utils.smooth_scroll();


            // konami /* play sound effect */
            var easter_egg = new Konami(this.utils.konami);

        },



        utils: {

            drupal_test: function () {
                var drupal_land = false;
                // recon to see if we're in Drupal-land
                if (typeof Drupal !== 'undefined') {
                    drupal_land = true;
                }

                return drupal_land;
            },

            smooth_scroll: function () {
                // smooth scroll - original source below
                // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);

                            return false;
                        }
                    }
                });
            },

            konami: function () {

                // file urls
                var mp3s = [
                    'misc/internet.mp3',
                    'misc/mario.mp3',
                    'misc/seinfeld.mp3'
                ];

                
                // load Howler
                if (_20150712.sound === undefined) {
                    _20150712.sound = new Howl({
                        urls: [mp3s[Math.floor(Math.random() * 3)]]
                    }).play();
                } else {
                    // play new sound. stop other one
                    _20150712.sound.unload();
                    _20150712.sound = new Howl({
                        urls: [mp3s[Math.floor(Math.random() * 3)]]
                    }).play();
                }
                
            }
        }

    };



    // initialize the things
    $(document).ready(function () {
        $(document).foundation();
        
        _20150712.init();
        
    });

}($ || jQuery, window, window.document));
