define(function () {

    var routes = [
        { hash: "#begin", controller: "BeginController" },
        { hash: "#Yes", controller: "YesController" },
        { hash: "#No", controller: "NoController" }];
    var defaultRouter = "#begin";
    var currentHash = "";

    function startRouting() {
        window.location.hash = defaultRouter;
        setInterval(hashCheck, 100);
        hashCheck();
    }

    function hashCheck() {
        if (window.location.hash != currentHash) {
            for (var i = 0, currentRoute; currentRoute = routes[i++];) {
                if (window.location.hash == currentRoute.hash)
                    loadController(currentRoute.controller);
            }
            currentHash = window.location.hash;
        }
    }

    function loadController(controllerName) {
        require(["Controllers/" + controllerName], function (controller) {
            controller.start();
        });
    }

    return { startRouting: startRouting };
});