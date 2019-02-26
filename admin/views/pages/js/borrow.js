$(document).ready(() => {

    $.ajax({
        url: "/api/admin/book/list",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let option = document.createElement("option");
                    option.setAttribute("value", data.id);
                    let name = data.name;
                    option.append(name);

                    $('#borrow-book-name').append(option);
                });
            }
        }
    });
    $.ajax({
        url: "/api/admin/member/list",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let option = document.createElement("option");
                    option.setAttribute("value", data.id);
                    let email = data.email;
                    option.append(email);

                    $('#borrow-member-email').append(option);
                });
            }
        }
    });

});

$('#borrow-form').on("submit", (e) => {
    e.preventDefault();
    let numDay = $('#borrow-day').val();
    let bookId = parseInt($('#borrow-book-id option:selected').val());
    let memberId = parseInt($('#borrow-member-id option:selected').val());

    if ((memberId !== -1) && (bookId != -1)) {
        let body = {
            numDay: numDay,
            bookId: bookId,
            memberIdId: memberId
        }

        $.ajax({
            url: "/api/admin/borrow/create",
            method: "POST",
            dataType: "json",
            headers: {
                "Authorization": getCookie("jwtToken")
            },
            data: body,
            success: (result) => {
                console.log(result);
                if (result.success) {
                    var message = `borrow ${bookId} is successfully created`;
                } else {
                    var message = `Failed to create borrow ${name}`;
                }

                alert(message);
            }
        });
    }
});


function getCookie(cookiename) {
    var cookiestring = RegExp(""+cookiename+"[^;]+").exec(document.cookie);

    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}