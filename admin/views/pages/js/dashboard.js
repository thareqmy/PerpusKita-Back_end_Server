$(document).ready(() => {
    $.ajax({
        url: "/api/admin/book/list",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        type: "GET",
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let row = $("<tr></tr>");
                    $("#body-table-book").append(row);

                    let id = document.createElement("td");
                    id.innerHTML = data.id;
                    let name = document.createElement("td");
                    name.innerHTML = data.name;
                    let author = document.createElement("td");
                    author.innerHTML = data.author;
                    let library = document.createElement("td");
                    library.innerHTML = data.libraryId;
                    let token = document.createElement("td");
                    token.innerHTML = data.token;


                    let file = document.createElement("td");
                    let fileLink = document.createElement("a");
                    fileLink.setAttribute("href", "/files/" + data.file);
                    fileLink.innerHTML = data.file;
                    file.append(fileLink);

                    let attended = document.createElement("td");
                    attended.innerHTML = data.attended;

                    let removeButton = document.createElement("button");
                    removeButton.classList.add("btn","btn-primary");
                    removeButton.val = data.id;
                    removeButton.innerHTML = "REMOVE";
                    removeButton.onclick = (e) => {
                        e.preventDefault();

                        $.ajax({
                            url: "/api/admin/book/delete",
                            method: "POST",
                            data: {
                                id: data.id
                            },
                            headers: {
                                "Authorization": getCookie("jwtToken")
                            },
                            dataType: "json",
                            success: (result) => {
                                if (result.success) {
                                    var message = `${data.name} is successfully deleted`;
                                    alert(message);
                                    location.reload();
                                } else {
                                    var message = `Failed to delete ${data.name}`;
                                    alert(message);
                                }
                            }
                        });
                    }

                    row.append(id, name, author, library, token, file, attended, removeButton);
                });
            }
        }
    });
    $.ajax({
        url: "/api/admin/library/list",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        type: "GET",
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let row = $("<tr></tr>");
                    $("#body-table-library").append(row);

                    let id = document.createElement("td");
                    id.innerHTML = data.id;
                    let name = document.createElement("td");
                    name.innerHTML = data.name;
                    let location = document.createElement("td");
                    location.innerHTML = data.location;

                    let removeButton = document.createElement("button");
                    removeButton.classList.add("btn","btn-primary");
                    removeButton.val = data.id;
                    removeButton.innerHTML = "REMOVE";
                    removeButton.onclick = (e) => {
                        e.preventDefault();

                        $.ajax({
                            url: "/api/admin/library/delete",
                            method: "POST",
                            data: {
                                id: data.id
                            },
                            headers: {
                                "Authorization": getCookie("jwtToken")
                            },  
                            dataType: "json",
                            success: (result) => {
                                console.log(result);
                                if (result.success) {
                                    var message = `${data.name} is successfully deleted`;
                                    alert(message);
                                    location.reload();
                                } else {
                                    var message = `Failed to delete ${data.name}`;
                                    alert(message);
                                }
                            }
                        });
                    }
                    
                    row.append(id, name, location, removeButton);
                });
            }
        }
    });
    $.ajax({
        url: "/api/admin/member/list",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        type: "GET",
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let row = $("<tr></tr>");
                    $("#body-table-member").append(row);

                    let id = document.createElement("td");
                    id.innerHTML = data.id;
                    let email = document.createElement("td");
                    email.innerHTML = data.email;
                    let password = document.createElement("td");
                    password.innerHTML = data.password;

                    let removeButton = document.createElement("button");
                    removeButton.classList.add("btn","btn-primary");
                    removeButton.val = data.id;
                    removeButton.innerHTML = "REMOVE";
                    removeButton.onclick = (e) => {
                        e.preventDefault();

                        $.ajax({
                            url: "/api/admin/member/delete",
                            method: "POST",
                            data: {
                                id: data.id
                            },
                            headers: {
                                "Authorization": getCookie("jwtToken")
                            },
                            dataType: "json",
                            success: (result) => {
                                console.log(result);
                                if (result.success) {
                                    var message = `${data.email} is successfully deleted`;
                                    alert(message);
                                    location.reload();
                                } else {
                                    var message = `Failed to delete ${data.email}`;
                                    alert(message);
                                }
                            }
                        });
                    }

                    row.append(id, email, password, removeButton);
                });
            }
        }
    });
    $.ajax({
        url: "/api/admin/borrow/list",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        type: "GET",
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let row = $("<tr></tr>");
                    $("#body-table-borrow").append(row);

                    let id = document.createElement("td");
                    id.innerHTML = data.id;
                    let numDay = document.createElement("td");
                    numDay.innerHTML = data.numDay;
                    let memberId = document.createElement("td");
                    memberId.innerHTML = data.memberId;
                    let bookId = document.createElement("td");
                    bookId.innerHTML = data.bookId;
                    let borrowedAt = document.createElement("td");
                    borrowedAt.innerHTML = data.createdAt;

                    let removeButton = document.createElement("button");
                    removeButton.classList.add("btn","btn-primary");
                    removeButton.val = data.id;
                    removeButton.innerHTML = "REMOVE";
                    removeButton.onclick = (e) => {
                        e.preventDefault();

                        $.ajax({
                            url: "/api/admin/borrow/delete",
                            method: "POST",
                            data: {
                                id: data.id
                            },
                            headers: {
                                "Authorization": getCookie("jwtToken")
                            },
                            dataType: "json",
                            success: (result) => {
                                if (result.success) {
                                    var message = `${data.id} is successfully deleted`;
                                    alert(message);
                                    location.reload();
                                } else {
                                    var message = `Failed to delete ${data.name}`;
                                    alert(message);
                                }
                            }
                        });
                    }

                    row.append(id, numDay, memberId, bookId, borrowedAt, removeButton);
                });
            }
        }
    });
    $.ajax({
        url: "/api/admin/bising/list",
        headers: {
            "Authorization": getCookie("jwtToken")
        },
        dataType: "json",
        type: "GET",
        success: (result) => {
            if (result.success) {
                $(result.data).each((_, data) => {
                    let row = $("<tr></tr>");
                    $("#body-table-bising").append(row);

                    let id = document.createElement("td");
                    id.innerHTML = data.id;
                    let sound = document.createElement("td");
                    sound.innerHTML = data.sound;

                    let removeButton = document.createElement("button");
                    removeButton.classList.add("btn","btn-primary");
                    removeButton.val = data.id;
                    removeButton.innerHTML = "REMOVE";
                    removeButton.onclick = (e) => {
                        e.preventDefault();

                        $.ajax({
                            url: "/api/admin/library/delete",
                            method: "POST",
                            data: {
                                id: data.id
                            },
                            headers: {
                                "Authorization": getCookie("jwtToken")
                            },
                            dataType: "json",
                            success: (result) => {
                                console.log(result);
                                if (result.success) {
                                    var message = `${data.name} is successfully deleted`;
                                    alert(message);
                                    location.reload();
                                } else {
                                    var message = `Failed to delete ${data.name}`;
                                    alert(message);
                                }
                            }
                        });
                    }

                    row.append(id, sound);
                });
            }
        }
    });
});

$('a#library-tab').on('click', () => {
    $('a#book-tab').removeClass("active");
    $('a#library-tab').addClass("active");
    $('a#member-tab').removeClass("active");
    $('a#borrow-tab').removeClass("active");

    $('a#bising-tab').removeClass("active");
    $('#book').removeClass("active");
    $('#book').removeClass("fade");
    $('#book').addClass("fade");
    $('#library').removeClass("active");
    $('#library').removeClass("fade");
    $('#library').addClass("active");
    $('#member').removeClass("active");
    $('#member').removeClass("fade");
    $('#member').addClass("fade");
    $('#borrow').removeClass("active");
    $('#borrow').removeClass("fade");
    $('#borrow').addClass("fade");
    $('#bising').removeClass("active");
    $('#bising').removeClass("fade");
    $('#bising').addClass("fade");
});

$('#member-tab').on('click', () => {
    $('a#book-tab').removeClass("active");
    $('a#library-tab').removeClass("active");
    $('a#member-tab').addClass("active");
    $('a#borrow-tab').removeClass("active");
    $('a#bising-tab').removeClass("active");
    $('#book').removeClass("active");
    $('#book').removeClass("fade");
    $('#book').addClass("fade");
    $('#library').removeClass("active");
    $('#library').removeClass("fade");
    $('#library').addClass("fade");
    $('#member').removeClass("active");
    $('#member').removeClass("fade");
    $('#member').addClass("active");
    $('#borrow').removeClass("active");
    $('#borrow').removeClass("fade");
    $('#borrow').addClass("fade");
    $('#bising').removeClass("active");
    $('#bising').removeClass("fade");
    $('#bising').addClass("fade");
});


$('#book-tab').on('click', () => {
    $('a#book-tab').addClass("active");
    $('a#library-tab').removeClass("active");
    $('a#member-tab').removeClass("active");
    $('a#borrow-tab').removeClass("active");
    $('a#bising-tab').removeClass("active");
    $('#book').removeClass("active");
    $('#book').removeClass("fade");
    $('#book').addClass("active");
    $('#library').removeClass("active");
    $('#library').removeClass("fade");
    $('#library').addClass("fade");
    $('#member').removeClass("active");
    $('#member').removeClass("fade");
    $('#member').addClass("fade");
    $('#borrow').removeClass("active");
    $('#borrow').removeClass("fade");
    $('#borrow').addClass("fade");
    $('#bising').removeClass("active");
    $('#bising').removeClass("fade");
    $('#bising').addClass("fade");

});

$('#borrow-tab').on('click', () => {
    $('a#book-tab').removeClass("active");
    $('a#library-tab').removeClass("active");
    $('a#member-tab').removeClass("active");
    $('a#bising-tab').removeClass("active");
    $('a#borrow-tab').addClass("active");
    $('#book').removeClass("active");
    $('#book').removeClass("fade");
    $('#book').addClass("fade");
    $('#library').removeClass("active");
    $('#library').removeClass("fade");
    $('#library').addClass("fade");
    $('#member').removeClass("active");
    $('#member').removeClass("fade");
    $('#member').addClass("fade");
    $('#borrow').removeClass("active");
    $('#borrow').removeClass("fade");
    $('#borrow').addClass("active");
    $('#bising').removeClass("active");
    $('#bising').removeClass("fade");
    $('#bising').addClass("fade");

});

$('#bising-tab').on('click', () => {
    $('a#book-tab').removeClass("active");
    $('a#library-tab').removeClass("active");
    $('a#member-tab').removeClass("active");
    $('a#borrow-tab').removeClass("active");
    $('a#bising-tab').addClass("active");
    $('#book').removeClass("active");
    $('#book').removeClass("fade");
    $('#book').addClass("fade");
    $('#library').removeClass("active");
    $('#library').removeClass("fade");
    $('#library').addClass("fade");
    $('#member').removeClass("active");
    $('#member').removeClass("fade");
    $('#member').addClass("fade");
    $('#borrow').removeClass("active");
    $('#borrow').removeClass("fade");
    $('#borrow').addClass("fade");
    $('#bising').removeClass("active");
    $('#bising').removeClass("fade");
    $('#bising').addClass("active");

});

$('#download-button').on('click', (e) => {
    e.preventDefault();

    window.open('/api/admin/book/download', '_blank');
});

$('#addbook-button').on('click', (e) => {
    e.preventDefault();

    window.open('/api/admin/book/download', '_blank');
});

function getCookie(cookiename) {
    var cookiestring = RegExp(""+cookiename+"[^;]+").exec(document.cookie);

    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
