

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
   $(".js-main").on("submit", ".js-form", event => {
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
   $(".js-main").on("click", ".js-more-info", event => {
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
  $(".js-main").on("click", ".js-remove", event => {
    $(event.target).closest(".user").remove();

  });
}
 
 function appInstance(){
   howManyUsers();
   randomEmailDomain();
   viewMoreInfo();
   removeUser();
 }
 
 $(appInstance);