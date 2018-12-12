$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        if ($("#burger-name").val()) {

            var newBurger = {
                burger_name: $("#burger-name").val().trim(),
                devoured: 0
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
        }
    })


    $(".devour").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: 1 }
        }).then(
            function () {
                console.log("updated burger status");
                // Reload the page to get the updated list
                location.assign("/");
            }
        );
    });

});