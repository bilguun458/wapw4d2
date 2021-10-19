$(() => {
    const addedSuccess = (res) => {
        $("#question").val(res);
        $("#question").focus();
    }
    // add focus callback
    $("#question").focus(function () {
        this.select();
    });

    const noSuccess = () => {
        $("#question").text("Unable to reach server");
    }

    $("#add").submit(() => {
        $.get({
            url: "/8ball",
            data: JSON.stringify({}),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});