(function () {
    new Typed('#chat1', {
        strings: [' What is his name?<br>'],
        typeSpeed: 50,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("answer1")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 1800);   
    new Typed('#chat2', {
        strings: ['^2320 What about his education?<br>'],
        typeSpeed: 40,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("answer2")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 4500);
    new Typed('#chat3', {
        strings: ['^5000 What is he looking for?<br>'],
        typeSpeed: 40,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("answer3")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 7000);
    new Typed('#chat4', {
        strings: ['^7500 Tell me more about his skills and experiences<br>'],
        typeSpeed: 40,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("answer4")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 11000);

    new Typed('#chat5', {
        strings: ['^11000 How can I contact him?<br>'],
        typeSpeed: 40,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("answer5")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 13500);
})();