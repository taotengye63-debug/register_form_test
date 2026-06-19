const iframe = document.getElementById("hidden_iframe2");

let submitted = false;

document
    .getElementById("reservation_form2")
    .addEventListener("submit", function () {
        submitted = true;
    });

iframe.onload = function () {
    if (submitted) {
        document.body.innerHTML =
            `<div><h1>ご予約を受け付けました。</h1></div>`;
    }
};