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
            $.post("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    })


    $(".eat").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
        var devouredStatus = parseInt($(this).data("devoured"));

        if (devouredStatus === 0) {
            devouredStatus = 1;
        } else {
            devouredStatus = 0;
        };

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: devouredStatus }
        }).then(
            function (data, status) {
                // Reload the page to get the updated list
                location.reload(true);
            }
        );
    });

});