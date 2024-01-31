const subMenus = document.querySelectorAll(".sub-menu");

subMenus.forEach((subMenu) => {
    subMenu.addEventListener("mouseover", () => {
        subMenu.style.display = "block";
    });

    subMenu.addEventListener("mouseout", () => {
        subMenu.style.display = "none";
    });
});
const searchBooks = () =>{
    const searchbox = document.getElementById("searchItem").value.toUpperCase();
    const storeItems = document.getElementById("booksId");
    const product = document.querySelectorAll(".productBook");
    const pname = storeItems.getElementsByTagName("h4")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

const searchMovies = () =>{
    const searchbox = document.getElementById("searchItem").value.toUpperCase();
    const storeItems = document.getElementById("moviesId");
    const product = document.querySelectorAll(".productMovie");
    const pname = storeItems.getElementsByTagName("h4")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

/*
const leaves = document.querySelectorAll(".leaves").getElementsByTagName("img");

leaves.forEach((treeLeaf) => {
    treeLeaf.addEventListener("mouseclick", () => {
        treeLeaf.style.display = "none";
        hideLeaves.style.display = "none";
        showLeaves.style.display = "show";
    });

    treeLeaf.addEventListener("mouseclick", () => {
        treeLeaf.style.display = "none";
    });
});

const hideLeaves = document.getElementsByClassName('hideLeaves');
const treeLeaf = document.getElementById('treeLeaf');

hideLeaves.addEventListener('click', () => {
  treeLeaf.style.display = 'none';
});
*/

/* Comment Section */
"use strict";

const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".userComment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", e => {
    if(!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled")
    }else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled")
    }
})

function addPost() {
    console.log("The button works!")
    if(!userComment.value) return;
    userId.name = userName.value;
    if(userId.name === "Anonymous") {
        userId.identity = false;
        userId.image = "#"
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();
    let published = 
    `<div class="parents">
        <img src="$(userID.image)">
        <div>
            <h1>${userId.name}</h1>
            <p>${userId.message}</p>
            <div class="engagements"><img src="like.png"><img src="share.png"></div>
            <span class="date">${userId.date}</span>
        </div>
    </div>`;

    comments.innerHTML += published;
    userComment.value = "";

    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comments").textContent = commentsNum;
}

publishBtn.addEventListener("click", addPost)

function validateSignUpForm() {
    var username = document.getElementById('signUpNameInput').value;
    var email = document.getElementById('signUpEmailInput').value;
    var password = document.getElementById('signUpPasswordInput').value;
    var confirmPassword = document.getElementById('signUpConfirmPasswordInput').value;
    var errorMessage = document.querySelector('.noMatch p');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
    } else {
        // Perform further validation or submit the form to the server
        // For demonstration purposes, simply show an alert
        alert('Sign up successful!');
        // You can also submit the form to the server using AJAX or other methods.
    }
    // Hide the error message after 5 seconds
    setTimeout(function() {
        errorMessage.textContent = '';
    }, 5000); // 5000 milliseconds = 5 seconds
}