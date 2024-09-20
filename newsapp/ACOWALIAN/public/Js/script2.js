var countimgvalue = 0;
let SubPopular1 = document.getElementById("SubPopular1");
let SubPopular2 = document.getElementById("SubPopular2");
let arr = [
  "Business",
  "Entertainment",
  "Technology",
  "Health",
  "Sports",
  "Science",
];
let imgvalue = [
  "business.jpg",
  "Entertainment.jpg",
  "Tech.jpg",
  "health.jpg",
  "Sports.jpg",
  "Science.jpg",
];

fetchPopulardata();

function fetchPopulardata()
{
 
    //Fetch Api
    fetch(
      `https://gnews.io/api/v4/search?q=categories&lang=en&country=in&max=6&token=${key2}`
    )
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        let finalresult = result.articles;
          
         finalresult.forEach(function(item,index){


          let item2 = item.content;
          let original = item2.slice(0, item2.length - 15);
          let title = item.title;
          let url = item.url;

          InsertData(arr[index], title, original,url);

         })
      
         
        
      })
      .catch((error) => {
        SubPopular1.innerHTML =`<h1 class="text-center text-danger">Some Error Occured Try Again Later!!</h1>
                                <h2 class="text-center text-danger">Sorry For Inconvenience</h2>`;
        console.log(error);
      });
   
}

let InsertData = (queryValue, title, original,url) => {
  if (countimgvalue < 3) {
    SubPopular1.innerHTML += ` <div class="col-md-4 col-12 my-2">
     <div class="card" style="width: 100%">

       <div class="subcard">
       <img
         src="Images/${imgvalue[countimgvalue]}"
         class="card-img-top img-fluid"
         alt="..."
       />
     
       <h3><a href="Query.html" class="hide">${queryValue}</a></h3>
       </div>
       <div class="card-body">
         <h5 class="card-title">${title}</h5>
         <p class="card-text">
         ${original}
         </p>
         <a href=${url} class="btn btn-primary">Read More</a>
       </div>
     </div>
   </div>`;
  } else {
    SubPopular2.innerHTML += ` <div class="col-md-4 col-12 my-2">
      <div class="card" style="width: 100%">

        <div class="subcard">
        <img
          src="Images/${imgvalue[countimgvalue]}"
          class="card-img-top img-fluid"
          alt="..."
        />
      
        <h3><a href="Query.html" class="hide">${queryValue}</a></h3>
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
          ${original}
          </p>
          <a href=${url} class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;
  }

  countimgvalue++;
};