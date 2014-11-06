define(function () {

    function render() {
        $("body *").remove();
        $("body").append("<div class='request'><h4>Вы знаете кто такой АГЛ ?</h4>" +
        "<div id='Yes' class='button'><input type='button' value='Да' /></div>" +
        "<div id='No' class='button'><input type='button' value='Нет' /></div></div>");
        window.location.hash = "#begin";
    }


    function bindEvents() {
        $("#Yes").click(function () {
            require(["Controllers/YesController"], function (YesController) {
                YesController.start();
            });
        });

        $("#No").click(function () {
            require(["Controllers/NoController"], function (NoController) {
                NoController.start();
            });
        });
    }

    return {
        render: render,
        bindEvents: bindEvents
    };
})