function changecolor() {
    document.getElementById("submit").innerHTML = "loading..";
}
const btn = document.querySelector(".button-menu");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    const menuIsOpen = menu.getAttribute("class").split(" ");
    if (menuIsOpen.includes("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
});

setTimeout(function start() {

    $('.bar').each(function (i) {
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function () {
            $bar.css('width', $bar.attr('data-percent'));
        }, i * 100);
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });

}, 500)



// const email = document.getElementById("email");

// const message = document.getElementById("message");

// const send = document.getElementById("send")

// const name = document.getElementById("first");
// send.addEventListener("submit", () => {
//     if (name.value.length <= 6) {
//         name.style.borderColor = "red"
//         document.querySelector(".error#name").style.display = "block"
//     } else {
//         name.style.borderColor = "black"
//         document.querySelector(".error#name").style.display = "none"
//     }
// })

$("#send").submit(function () {
    if ($("#first").val().length <= 6) {
        $("#first").css("border-color", "red")
        $(".error#name").css("display", "block")
    } else {
        $("#first").css("border-color", "black")
        $(".error#name").css("display", "none")
    }
    if ($("#email").val().length <= 0) {
        $("#email").css("border-color", "red")
        $(".error#mail").css("display", "block")
    } else {
        $("#email").css("border-color", "black")
        $(".error#mail").css("display", "none")
    }
    if ($("#message").val().length <= 6) {
        $("#message").css("border-color", "red")
        $(".error#box").css("display", "block")
    } else {
        $("#message").css("border-color", "black")
        $(".error#box").css("display", "none")
    }
})