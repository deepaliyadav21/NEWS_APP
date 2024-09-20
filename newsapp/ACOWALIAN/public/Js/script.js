// Loader JS 
var Preloader = document.getElementById("loader");
function myFunction() {

    Preloader.style.display = "none";

}



// Global Variable Declaration
var menu = document.getElementById("HamburgerMenu");
var RightSidebar = document.getElementById("RightSidebar");
var close = document.getElementById("Close");
var FetchTrending = document.getElementById("FetchTrending");
var FetchQuery = document.getElementById("FetchQuery");
var SearchIcon = document.getElementById("SearchIcon");
var form = document.getElementById("form");
var SubscribeBtn = document.getElementById("SubscribeBtn");

SearchIcon.addEventListener("click",function(){

  
  let SearchValue = document.getElementById("SearchQueryNews").value;
  console.log(SearchValue);
  SetQuery(SearchValue);
  location.reload();


});

menu.addEventListener("click", function () {
  menu.querySelector("span:nth-child(1)").style.transform = "rotate(45deg)";
  menu.querySelector("span:nth-child(3)").style.opacity = "0";
  let third = menu.querySelector("span:nth-child(2)");
  third.style.marginTop = "-10px";
  third.style.transform = "rotate(-45deg)";

  RightSidebar.style.right = "0%";
});

close.addEventListener("click", hidebar);
document.querySelectorAll(".hide").forEach((item) => {
  item.addEventListener("click", hidebar);
});

function hidebar(e) {
  $("#Categories").hide(1000);
  menu.querySelector("span:nth-child(1)").style.transform = "rotate(0deg)";
  menu.querySelector("span:nth-child(3)").style.opacity = "1";
  let third = menu.querySelector("span:nth-child(2)");
  third.style.marginTop = "0";
  third.style.transform = "rotate(0deg)";

  if (screen.width <= 400) {
    RightSidebar.style.right = "-120%";
  } else {
    RightSidebar.style.right = "-70%";
  }

  let queryValue = e.target.innerText;
  SetQuery(queryValue);
}

const SetQuery = (queryValue) => {
  localStorage.setItem("query", queryValue);
};

const queryfetch = () => {
  let queryValue2 = localStorage.getItem("query");
  if(queryValue2 == "")
  {
    queryValue2 = "World";
  }
  document.getElementById("QueryHead").innerHTML = queryValue2;
  if (queryValue2.toUpperCase() == "BUSINESS") {
         GetSearchQueryValue(queryValue2);
  }
  else if(queryValue2.toUpperCase() == "ENTERTAINMENT")
  {
     GetSearchQueryValue(queryValue2);
  }
  else if(queryValue2.toUpperCase() == "TECHNOLOGY")
  {
     GetSearchQueryValue(queryValue2);
  }
  else if(queryValue2.toUpperCase() == "SPORTS")
  {
     GetSearchQueryValue(queryValue2);
  }
  else if(queryValue2.toUpperCase() == "SCIENCE")
  {
     GetSearchQueryValue(queryValue2);
  }
  else if(queryValue2.toUpperCase() == "HEALTH")
  {
     GetSearchQueryValue(queryValue2);
  }
  else{
     GetSearchQueryValue(queryValue2);
  }

};


const GetSearchQueryValue = (queryValue) =>{

  
    console.log(queryValue);
        //Fetch Api
    fetch(
      `https://gnews.io/api/v4/search?q=${queryValue}&lang=en&country=in&token=${key3}`
    )
      .then((data) => {
        return data.json();
      })
      .then((result) => {
           let finalresult = result.articles;
          
           finalresult.forEach(function(item){

            let item2 = item.content;
            let original = item2.slice(0, item2.length - 15);


            FetchQuery.innerHTML +=`<div class="card mb-3 mx-auto">
            <img src="${item.image}" class="card-img-top img-fluid" alt="..." style="height: 300px; object-fit:cover">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text text-primary">By ${item.source.name}</p>
              <p class="card-text">${original}<a href="${item.url}">Read More</a></p>
              <p class="card-text"><small class="text-muted">Published ${item.publishedAt}</small></p>
            </div>
          </div>`;
          


           });
      })
      .catch((error) => {
        console.log(error);
        FetchQuery.innerHTML =`<h1 class="text-center text-danger">Some Error Occured Try Again Later!!</h1>
        <h2 class="text-center text-danger">Sorry For Inconvenience</h2>`;
      });
};





//Scroll Button BACK TO TOP JS
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 181) {
    document.getElementById("backtotop").style.display = "block";
  } else {
    document.getElementById("backtotop").style.display = "none";
  }
});

const topscroll = document.querySelector("#backtotop");
topscroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Fetching Real Time fetching Data From Google News Api
function BreakingTrending() {
  //Fetch Api
  fetch(
    `https://gnews.io/api/v4/search?q=breaking&lang=en&country=in&max=5&token=${key3}`
  )
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      let result2 = result.articles;

      result2.forEach(function (item) {
        
        let item2 = item.content;
        let original = item2.slice(0, item2.length - 15);

        FetchTrending.innerHTML += `<div class="item">
          <div class="row">
            <div class="col-md-6 col-12">
              <img src="${item.image}" class="img-fluid" alt="" />
            </div>
     
            <div class="col-md-6 col-12 my-2">
              <div class="card-body">
                <h5 class="card-title">
                  ${item.title}
                </h5>
                <p class="card-text">
                  ${original}<a href="${item.url}">Read More</a>
                </p>
                <p class="card-text text-primary">By ${item.source.name}</p>
                <p class="card-text">
                  <small class="text-muted"
                    >Published ${item.publishedAt}</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>`;
      });

      carousel2();
    })
    .catch((error) => {
      FetchTrending.innerHTML = `<div class="item"><h1>Some Error Occured Try Again Later!!</h1></div>`;
      console.log(error);
      
      
    });
}





// Owl Carousel Inilization Function
function carousel2() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
}




// Categories Jquery Toggle Function
$(document).ready(function () {
  $("#CategoriesToggle").click(function () {
    $("#Categories").toggle(1000);
  });
});




form.addEventListener("submit",function(e){

   e.preventDefault();
   this.reset();
   SubscribeBtn.innerHTML = ` <div class="spinner-border text-primary" role="status">
   <span class="visually-hidden">Loading...</span>
 </div>`;

 setTimeout(() => {
   SubscribeBtn.innerHTML = `Thanks For Subscribed <i class="fas fa-check"></i>`;
 }, 2000);


  setTimeout(() => {
    SubscribeBtn.innerHTML = `Subscribe`;
  }, 12000);

});