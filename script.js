let btn = document.querySelectorAll(".button");
let item = document.querySelector("#item");
let send = document.querySelector("#send");
let cartCount = Number(sessionStorage.getItem("cartCount")) || 0;
if (item) {

    item.textContent = `CART (${cartCount})`;

}

btn.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        sessionStorage.setItem("cartCount", cartCount);

        if (item) {

            item.textContent = `CART (${cartCount})`;

        }

    });

});



send.addEventListener("click", function() {
    alert("MESSAGE HAS BEEN SENT");
    send.textContent = "send message ✔";

});