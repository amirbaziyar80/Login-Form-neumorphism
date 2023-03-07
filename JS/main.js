$(document).ready(function () {
    $(".btn-submit").on("click", function (event) {
        $(".finger-effect").css("top", "0")
        $(".login-form").css("top", "500px")
        event.preventDefault()
        setTimeout(function () {
            $("#LoginForm").submit()
        }, 10000)
    })
})