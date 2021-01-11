
$(document).ready(function () {
    $(".btn").click(function () {
        console.log("1ere technique donné dans le notion")
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (data) {
                console.log(data[0].name);
                console.log(data[0].capital);
            }
        });
    })
})

$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            method: "GET",
            dataType: "json",
        })
            .done(function (response) {
                var data = JSON.stringify(response)
                var dataArray = $.parseJSON(data)
                console.log("2nde technique expliqué par Ines")
                console.log(dataArray[0].name)
                console.log(dataArray[0].capital)
            })
    })
})