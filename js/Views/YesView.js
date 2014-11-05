define(function () {

    function bindEvents() {
        $("#Yes").click(render());
    }

    function render() {
        //$(".request").addClass("hidden");
        $("body").append("<div class='good'>Молодцы, такое должен знать каждый гражданин Беларуси!</div>" +
            "<a href='#start'>Назад</a>");
        window.location.hash = "#Yes";
    }

    return {
        bindEvents: bindEvents,
        render: render
    };
})