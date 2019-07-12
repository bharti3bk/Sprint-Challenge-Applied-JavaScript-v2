// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
 

function Header() 
{
   const headerDiv = document.createElement('div'); 
   const headerspan = document.createElement('span'); 
   const headingDiv = document.createElement('h1'); 
   const headerSpanTwo = document.createElement('span');   

   headerDiv.appendChild(headerspan);
   headerDiv.appendChild(headingDiv);
   headerDiv.appendChild(headerSpanTwo);

   headerDiv.classList.add('header');
   headerspan.classList.add('date');
   headerSpanTwo.classList.add('temp');

   headerspan.textContent = 'SMARCH 28, 2019';
   headingDiv.textContent = 'Lambda Times';
   headerSpanTwo.textContent = '98°'   

   return headerDiv;
}  

const componentHeader = document.querySelector('.header-container'); 
componentHeader.appendChild(Header());