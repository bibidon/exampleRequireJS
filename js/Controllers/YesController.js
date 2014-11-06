define(["Views/YesView"], function (YesView) {

    function start() {
        YesView.render();
        YesView.bindEvents();
    }

    return {
        start: start
    };
});