$(document).ready(function () {

    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("changed devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // Send the PUT request.
    $("#submit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});