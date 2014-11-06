define(function () {

    function render() {
        $("body *").remove();
        $("body").append("<div class='good'>Молодцы, " +
            "если вы конечно не Александр Янчарук) .Такое " +
            "должен знать каждый гражданин Беларуси!</div>" +
            "<div class='goodBtn'><input type='button' value='Назад' /></div>");
        window.location.hash = "#Yes";
    }

    function bindEvents() {
        $(".goodBtn input").click(function () {
            require(["Controllers/BeginController"], function (BeginController) {
                BeginController.start();
            });
            window.location.hash = "#begin";
        });
    }

    return {
        bindEvents: bindEvents,
        render: render
    };
})