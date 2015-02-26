steal(
    'can',
    './vote-control.stache!',

    'can/view/stache',
    './votes-control.less!',

    function (can, template) {

        can.Component.extend({
            tag: "vote-control",
            template: template,

            // TODO: could this be dynaimc events?
            events: {
                '.glyphicon-plus click': function () {
                    this.scope.attr('captain').upVote();
                },
                '.glyphicon-minus click': function () {
                    this.scope.attr('captain').downVote();
                }
            }
        });
    }
);
