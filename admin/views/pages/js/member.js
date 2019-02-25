$('#member-form').on("submit", (e) => {
    e.preventDefault();
    let body = {
        email: $('#member-email').val(),
        password: $('#member-password').val()
    }

    $.ajax({
        url: "/api/admin/member/create",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        data: body,
        type: "POST",
        success: (result) => {
            console.log(result);
            if (result.success) {
                var message = `${body.email} is successfully created`;
            } else {
                var message = `Failed to add ${body.email}`;
            }

            alert(message);
        }
    });
});

function getCookie(cookiename) {
    var cookiestring = RegExp(""+cookiename+"[^;]+").exec(document.cookie);

    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}