steal(
    'can',
    './utility-control.stache!',

    'can/view/stache',
    './utility-control.less!',

    function (can, template) {

        can.Component.extend({
            tag: "utility-control",
            template: template,

            events: {
                '.glyphicon-remove click': function () {
                    this.scope.attr('captain').destroy();
                },
                '.glyphicon.favorite click': function () {
                    this.scope.attr('captain').toggleFavorite();
                }
            }
        });
    }
);
