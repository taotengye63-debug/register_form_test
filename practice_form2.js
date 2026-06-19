const iframe = document.getElementById("hidden_iframe2");

let submitted = false;

document
.getElementById("reservation_form2")
.addEventListener("submit", function() {
    submitted = true;
});

iframe.onload = function() {
    if(submitted) {
        document.body.innerHTML = 
        `<div>
        <h1>予約が完了しました<h1>
        <p>メールをご確認ください。</p>
        <style>
        * {
        align-items: center;
        }
        </style>
        </div>`;
    }
};