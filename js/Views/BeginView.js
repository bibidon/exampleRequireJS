define(function () {

    function render() {
        $("body").append("<div class='request'><h4>Вы знаете кто такой АГЛ ?</h4>" +
        "<div id='Yes' class='button'><input type='button' value='Да' /></div>" +
        "<div id='No' class='button'><input type='button' value='Нет' /></div></div>");
        window.location.hash = "#begin";
    }


    function bindEvents() {
        $("#Yes").click({

        });
    }

    return {
        render: render,
        bindEvents: bindEvents
    };
})