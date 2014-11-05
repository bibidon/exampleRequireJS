define(["Views/YesView"], function (YesView) {

    function start() {
        YesView.render();
        bindEvents();
    }

    function bindEvents(parameters) {
        $("#Yes").click(function () {
            $(".request").addClass("hidden");
            $("body").append("<div class='good'>Молодцы, такое должен знать каждый гражданин Беларуси!</div>" +
                "<a href='#start'>Назад</a>");
            window.location.hash = "#Yes";
        });
    }

    return {
        start: start
    };
});