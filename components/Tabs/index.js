// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
  

const topic = document.querySelector('.topics'); 
const result = axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
result.then(res => {
    console.log(res); 
    const resBody = res.data.topics
    console.log(resBody); 
    resBody.forEach(element => {
        topic.appendChild(Tab(element));
    })
})
.catch(error => {
    console.log('Try Again Later');
})


function Tab (topics)
{
    const tabComp = document.createElement('tab');
    tabComp.classList.add('tab');
    tabComp.textContent = topics;

    tabComp.addEventListener('click' , event => {
        tabComp.classList.toggle('.active-tab');
    })
    return tabComp;  
}  


