$(() => {
    const addedSuccess = (res) => {
        $("#cart-quantity").text(res);
        $("#msg").text("Item added");
    }

    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
    }

    $("#add").submit(() => {
        const data = {
            name: $("#name").val(),
            price: $("#price").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});