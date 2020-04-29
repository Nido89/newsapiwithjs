//console.log("This is my index.js file");


// Initialize the news api parameters
let source = 'pakistan';
let apiKey = 'fd99d0d15215417aa1018a540ee6414a'


// Grab the News Container
let newsAccordion = document.getElementById('newsAccordion');


// creating an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/everything?q=${source}&from=2020-04-27&to=2020-04-27&sortBy=popularity&apiKey=${apiKey}`,true);


// what to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
       let json =  JSON.parse(this.responseText);  
       let articles = json.articles;
       let newsHtml = "";
      articles.forEach(function(element,index) {
      
        
          let news = `<div class="card">
                      <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News </b> ${index+1} <span class="badge badge-success">${element["title"]}</span>
                          </button>
                        </h2>
                      </div>


                          <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Learn more here</a></div>
                          </div>
                    </div>`;
         newsHtml += news;
       
      });
       newsAccordion.innerHTML = newsHtml;
       

    }
    else {
        console.log("Some error occured");
        
    }
}


xhr.send()
