steal(
    'can',
    './data-table.stache!',

    './data-table.less!',
    'can/view/stache',
    'components/vote-control',
    'components/utility-control',

    function (can, template) {

        can.Component.extend({
            tag: "data-table",
            template: template,
        });

    }
);
