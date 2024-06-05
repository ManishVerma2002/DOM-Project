// document.addEventListener("DOMContentLoaded", function() {
//     var isstatus = document.querySelector("h5");
//     var addFriend = document.querySelector("#add");
//     var removeFriend = document.querySelector("#remove");

//     addFriend.addEventListener("click", function(){
//         isstatus.innerHTML = "Friends";
//         isstatus.style.color = "blue";
//     });

//     removeFriend.addEventListener("click", function(){
//         isstatus.innerHTML = "stranger";
//       isstatus.style.color = "blue";
//     })

// });


document.addEventListener("DOMContentLoaded", function() {
    var isstatus = document.querySelector("h5");
    var addFriend = document.querySelector("#add");

    addFriend.addEventListener("click", function(){
        if (isstatus.innerHTML === "Friends") {
            isstatus.innerHTML = "stranger";
            isstatus.style.color = "red";
        } else {
            isstatus.innerHTML = "Friends";
            isstatus.style.color = "blue";
        }
    });
});
