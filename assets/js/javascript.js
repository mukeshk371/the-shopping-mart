// load html
$(document).ready(function () {
    $("#load-electronics-content").on("click", function () {
        $("#content").load("components/electronics.html");
    });
});

$(document).ready(function () {
    $("#load-groceries").on("click", function () {
        $("#content").load("components/kirana-supermarket.html");
    });
}); 