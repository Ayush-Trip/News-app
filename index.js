

//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = 'dde1cd1060644fc2a8a46be11962275b'
//Grab the news container
let newsaccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
//What to do when response is ready

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles); 
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index} ">
                                    <b> Breaking NEWS ${index + 1}:  </b>
                                    ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse show" data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target ="_blank" >  Read more here </a>  </div>
                            </div>
                        </div>`
            newsHtml += news;

        });


        newsaccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

