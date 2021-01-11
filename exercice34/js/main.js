$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${$("input").val()}`,
            success: function (data) {
                $("#country").text(data[0].name);
                $("#capital").text(data[0].capital);
            }
        });
    })
})