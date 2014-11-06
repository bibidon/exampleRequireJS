define(["Views/NoView"], function (NoView) {

    function start() {
        NoView.render();
        NoView.bindEvents();
    }

    return {
        start: start
    };
});