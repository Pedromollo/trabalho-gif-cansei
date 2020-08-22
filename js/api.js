//Tudo do site Dias 

// Isso tem que rodar no começo, independente de qualquer outro evento ou função
let urls = JSON.parse(localStorage.getItem('salvarurl')) || [];

function httpGetAsync(theUrl, callback)
{
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}



// callback for the top 20 GIFs of search
function tenorCallback_search(responsetext)
{
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];
    

    let num = Math.floor(Math.random() * 20)


    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)


    urls.push(document.getElementById("share_gif").src = top_10_gifs[num]["media"][0]["tinygif"]["url"]);
    localStorage.setItem('salvarurl', JSON.stringify(urls));
    
    

    for(url of urls) { 
        
        
    }
    createElementgif(url);
}


function createElementgif(){
    var img = document.createElement('img');
    img.src = url;
    teste1.appendChild(img);

}

function cleargifs(){
    localStorage.removeItem('salvarurl');
    urls = [];
    teste1.innerHTML = '';
}

const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', cleargifs)





// função que faz a parada toda funcionar
function grab_data()
{
    var apikey = "HPPU0WKI9Q14"; // adicionando a chave registrada 
    var lmt = 20; // quantidade de gifs que irá retornar

    // definindo como vai ser pesquisado o gif
    var tema = document.querySelector("#tema").value;
    var search_term = tema;

    // using default locale of en_US
    var search_url = "https://api.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

    

    httpGetAsync(search_url,tenorCallback_search);

    // data will be loaded by each call's callback
    return;

}