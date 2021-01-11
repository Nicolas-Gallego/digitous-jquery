$(document).ready(function () {
    $(".btn").click(function () {
        console.log("1ere technique donné dans le notion")
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (data) {
                $("#country").text(data[0].name);
                $("#capital").text(data[0].capital);
            }
        });
    })
})