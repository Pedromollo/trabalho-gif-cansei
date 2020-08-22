document.querySelector("#tema").addEventListener("keydown", function(event) 
{
    var temaBox = document.getElementById("tema");
    if(event.keyCode == 13 && temaBox.value != "") {//se o enter for pressionado
        loading("show");
        grab_data();
    }
    
});

//----------------------------------------------------------------

function loading(state) 
{
    var loading = document.querySelector(".loading");

    if(state == "show") {
        gif("hide");
        loading.style.display = "block";
    } 
    else if(state == "hide") {
        loading.style.display = "none";
    }
}

function gif(state) 
{
    
    var gif = document.querySelector(".cards");

    if(state == "show") {
        gif.style.display = "block";
        loading("hide");
    } 
    else if(state == "hide") {
        gif.style.display = "none";
    }

}

//----------------------------------------------------------------


function loading(state) 
{
    var loading = document.querySelector(".loading");

    if(state == "show") {
        gif("hide");
        loading.style.display = "block";
    } 
    else if(state == "hide") {
        loading.style.display = "none";
    }
}

function gifnova(state) 
{
    
    var gif = document.querySelector('#teste1');

    if(state == "show") {
        gif.style.display = "block";
        loading("hide");
    } 
    else if(state == "hide") {
        gif.style.display = "none";
    }

}



//----------------------------------------------------------------

var menuItens = document.querySelectorAll("button[href^='#']");

menuItens.forEach(item => 
{ 
    item.addEventListener("click", smoothScroll);
});

function smoothScroll(event) 
{
    var element = event.target;
    var id = element.getAttribute("href");
    var section = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: section - 100,
        behavior: "smooth"
    });
}

//----------------------------------------------------------------


