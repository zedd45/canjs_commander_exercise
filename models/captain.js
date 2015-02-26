steal(
    'can',
    'can/map/define',

    function(can) {

    var captain = can.Model.extend({
        resource: '/captains'
    }, {
        define: {
            fullName: {
                get: function () {
                    return this.attr('firstName') + " " + this.attr('lastName');
                }
            },
            points: {
                get: function () {
                    return this.attr('upvotes') - this.attr('downvotes');
                }
            },
            favorited: {
                type: "boolean",
                value: false,
            }
        },

        upVote: function () {
            this.attr('upvotes', this.attr('upvotes') + 1);
        },
        downVote: function () {
            this.attr('downvotes', this.attr('downvotes') + 1);
        },
        toggleFavorite: function () {
            this.attr('favorited', !this.attr('favorited'));
        }
    });

    // TODO / FIXME: this part still needs work; this is the initial sort
    captain.List = captain.List.extend({
        init: function () {
            [].sort.call(this, function (a,b) {
                // never gets here
                // debugger;
            });
        }
    });

    return captain;

});
