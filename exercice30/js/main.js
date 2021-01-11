$(document).ready(function () {
    $("input").keyup(function () {
        var value = $('input').val();
        if (value.length > 5) {
            $('input').removeClass('is-invalid')
            $('input').addClass('is-valid')
        } else {
            $('input').removeClass('is-valid')
            $('input').addClass('is-invalid')
        }
    });
});