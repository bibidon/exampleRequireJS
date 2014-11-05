define(["Views/BeginView"], function (BeginView) {

    function start() {
        BeginView.render();
        BeginView.bindEvents();
    }

    return {
        start: start
    };
});