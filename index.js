$(document).ready(function () {
    $("ul li a").click(function () {
        $.ajax({
            url: $(this).attr("href"),
            datatype: "text",
            success: function (data) {
                console.log(data);
                $(".content").empty();
                $(".content").html(data);
            },
            error: function (status) {
                console.log(status);
            }
        })
        
        return false;
    })
    $("#logoaccueil").click(function () {
        $.ajax({
            url: $(this).attr("href"),
            datatype: "text",
            success: function (data) {
                console.log(data);
                $(".content").empty();
                $(".content").html(data);
            },
            error: function (status) {
                console.log(status);
            }
        })
        
        return false;
    })
})