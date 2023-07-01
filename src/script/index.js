function toggleSidebar() {
    let display = document.getElementById("sidebar").style.display
    if (display === "block") {
        document.getElementById("sidebar").style.display = "none"
    } else {
        document.getElementById("sidebar").style.display = "block"
    }
}

function onSubmit() {
    if (document.getElementById("formName").value.length < 3) {
        document.getElementById("nameLabel").style.color = "red"
        document.getElementById("nameLabel").innerText = "не менее 3 символов"
    } else {
        document.getElementById("nameLabel").style.color = "black"
        document.getElementById("nameLabel").innerText = "Ваше имя"
    }
    if (document.getElementById("formMail").value.length < 6) {
        document.getElementById("mailLabel").style.color = "red"
        document.getElementById("mailLabel").innerText = "не менее 6 символов"
    } else {
        document.getElementById("mailLabel").style.color = "black"
        document.getElementById("mailLabel").innerText = "Ваша почта"
    }
    if (document.getElementById("formMessage").value.length < 2) {
        document.getElementById("messageLabel").style.color = "red"
        document.getElementById("messageLabel").innerText = "введите сообщение"
    } else {
        document.getElementById("messageLabel").style.color = "black"
        document.getElementById("messageLabel").innerText = "Ваше сообщение"
    }
    submit()
}


async function submit() {

    let response = await fetch('/article/formdata/post/user', {
        method: 'POST',
        body: new FormData(document.getElementById("form"))
    });

    let result = await response.json();
    alert(result.message);

}