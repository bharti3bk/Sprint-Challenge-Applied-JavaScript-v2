// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCardComponent(body)
{
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgcontainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');
  
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
   
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgcontainer);
  imgcontainer.appendChild(image);
  author.appendChild(span); 

  headline.textContent = body.headline;
  image.src = body.authorPhoto;
  span.textContent = body.authorName;

  return card ;
}  

const cardComponent = document.querySelector('.cards-container');

   
const responce = axios.get(`https://lambda-times-backend.herokuapp.com/articles`);
responce.then(res => {
  console.log(res); 
  let articles = res.data.articles;
  console.log('articles' , articles); 

     for (topic in articles) {
       console.log('topic',topic);
       articles[topic].forEach(article => {
         console.log('articles' , articles); 
          console.log('topic',topic); 
         cardComponent.appendChild(createCardComponent(article));  
             })
    }

    })   
.catch(error => {
  console.log(error);
})   


