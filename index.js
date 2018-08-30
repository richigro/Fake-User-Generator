function generateLandingPage() {
  return `
  <main class="js-landing landing-page" role="main">
    <h1 class="hero-text">Welcome to Fake User Generator</h1>
    <p class="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eveniet quasi rerum odio tempora fuga, et maiores mollitia, deleniti dolorum perferendis enim amet exercitationem! Architecto reiciendis ipsam recusandae esse consectetur.</p>
    <button class="js-app-btn get-started-btn">Get Started Now</button>
  </main>
  `;
}






function generateDashboard() {
  return `
  <header class="js-header header" role="banner">
  <i class="far fa-caret-square-down notShowing more-actions"></i>
  <i class="logo fas fa-user-secret"></i>
  <h1 class="app-name">Fake_User_Generator</h1>
  <div class="search-box">
    <i class="mag-glass fas fa-search"></i>
    <input class="main-search" type="text" placeholder="Search for user"/>
  </div>
  <div class="login">
    <p>Log In</p>
    <p>Sign Up</p>
  </div>   
</header>

<section class="js-tool-bar tool-bar" role="Toolbar">
  <form class="js-form">
      <fieldset>
        <legend>How many users would you like to generate?</legend>
        <input class="js-input" type="number" min="1" max="20" required />
        <button>Submit</button>
      </fieldset>  
    </form>
</section>

<main class="js-main main" role="main" aria-live="polite">

</main>  

<footer class="footer">   

</footer>
  
  `;
}

function getStarted() {
  $(".js-body").on("click", ".js-app-btn", event => {
    $(".js-body").empty();
    $(".js-body").append(generateDashboard());
  })
  
}




 function randomEmailDomain() {
    let domainName = "@example.com";
    let randomNumber = Math.floor(Math.random() * 5);
    const domains = ["@outlook.com", "@gmail.com", "@hotmail.com", "@yahoo.com", [
      "@harvard.student.edu",
       "@watchstore.com",
       "@aol.com",
       "@lala.com.mx",
       "@wellsworth.co.uk" 
    ]];
   console.log(randomNumber);
     if(randomNumber === domains.length) {
       domainName =  domains[randomNumber][Math.floor(Math.random() * 5)];
     } else {
       domainName = domains[randomNumber];
     }
     console.log(domainName);
     return domainName;
  }
 
 
 
 
 
 function generateUser(data) {
   return `

   <section class="user" id="${data.login.md5}">
   <i class="js-remove far fa-times-circle"></i>
   <img class="js-img  user-img" src="${data.picture.large}" alt="user photo">
   <h1 class="userFullName">${data.name.title} ${data.name.first} ${data.name.last}</h1>

   
     <div class="js-more-info selector">
         <i class="fas fa-angle-down"></i>
         <p>More Info</p>
     </div>
     <div class="js-content notShowing content">
     <p class="name">Name: ${data.name.title} ${data.name.first} ${data.name.last}</p>
     <p class="gender">Gender: ${data.gender}</p> 
     <p class="email">Email: ${data.email}</p>
     <p class="userName">UserName: ${data.login.username}</p>
     <p class="password">Password: ${data.login.salt}</p>
     <p class="city">City: ${data.location.city}</p>
     <p class="address">Address: ${data.location.street}</p>
     <p class="state">State: ${data.location.state}</p>
     <p class="zipCode">Zip Code: ${data.location.postcode}</p>
     <p class="age">Age: ${data.dob.age}</p>
     <p class="dob">Date of Birth: ${data.dob.date}</p> 
     <p class="cell">Cell Phone: ${data.cell}</p>
     <input type="text">
   </div>   
   
   <button class="js-btn user-btn notShowing">Copy to clipboard <i alt="copy icon" class="far fa-copy"></i></button>
 </section>
   `;
 }
 
 
 
 
 
 function getDataFromApi(){
   const url = "https://randomuser.me/api/";
 
   $.ajax({
     url: url,
     success: function(data) {
       data = data.results[0];
       console.log(data);
       console.log("=====================================");
       $(".js-main").append(generateUser(data));
     }
   });
 }
 
 function renderUser(numOfUsers) {
   for(let i =0; i < numOfUsers; i++) {
     getDataFromApi();
   }
 }
 
 //event listener 
 function howManyUsers() {
   $(".js-body").on("submit", ".js-form", event => {
     event.preventDefault();
     //get number of desired users
     const numberOfUsers = $(".js-input").val();
     // clear input
     $(".js-input").val("");
     // console.log(numberOfUsers);
     //clear current view
     // $(".js-main").remove().children();
     renderUser(numberOfUsers);
   })
   
   
 }
 
 
 
 //event listener for click
 function viewMoreInfo() {
   $(".js-body").on("click", ".js-more-info", event => {
     // toggle class display none
     console.log(event.target);
    //  $(this).closest(".js-content").toggleClass("notShowing");
     $(event.target).closest(".user").find(".content").toggleClass("notShowing");
     // cange arrow icon 
     $(event.target).closest(".user").find(".js-more-info > i").toggleClass("fa-angle-up");
     // show copy button
     $(event.target).closest(".user").find(".js-btn").toggleClass("notShowing");
   });
 }
 
function removeUser() {
  $(".js-body").on("click", ".js-remove", event => {
    $(event.target).closest(".user").remove();

  });
}
 
 function appInstance(){
  $(".js-body").append(generateLandingPage());
  // generateDashboard(); 
  getStarted();
   howManyUsers();
   randomEmailDomain();
   viewMoreInfo();
   removeUser();
 }
 
 $(appInstance);