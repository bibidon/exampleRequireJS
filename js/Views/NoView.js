define(function () {

    function render() {
        $("body *").remove();
        $("body").append("<div class='bad'>Вот вам ссылка ознакомтесь " +
            "<a href='https://ru.wikipedia.org/wiki/Лукашенко,_Александр_Григорьевич'>" +
            "Нажать</a>" +"</div><div class='badBtn'><input type='button' " +
            "value='Назад' /></div>");
        window.location.hash = "#No";
    }

    function bindEvents() {
        $(".badBtn input").click(function () {
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
});