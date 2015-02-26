steal(
    'can',
    './favorites-display.stache!',

    './favorites-display.less!',
    'can/view/stache',

    function (can, template) {

        can.Component.extend({
            tag: "favorites-display",
            template: template,

            events: {
                '.btn click': function ( el ) {
                    // get the instance the data helper assigned here
                    el.data('captain').toggleFavorite();
                }
            }
        });
    }
);
