function generateLandingPage() {
  return `
  <main class="js-landing landing-page" role="main">
    <h1 class="hero-text">Welcome to Fake User Generator</h1>
    <p class="about">Fake user generator; allows you to create fake user, given diferrent creation criteria; such as gender and nationality. Creating a fake user can then be used for diferent purposes; for example, adding user to your database and see how your application looks and works with as many users as you need.</p>
    <p class="about">Fake user generator,  makes it easy for you to import users to any program, database or excel spread sheet by simply using the copy to clipboard button that is provided for each fake generated user. For more info visit the README.md file on our github page. Happy coding. :)</p>
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
      <h2>How many Users</h2>
        <input class="js-input" type="number" min="1" max="50" required />
        <h2>Filters</h2>
        <h3>Gender</h3>
        <input type="radio" name="gender" value="male" checked> Male<br>
        <input type="radio" name="gender" value="female"> Female<br>
        <input type="radio" name="gender" value="any" checked="checked"> Any
        <h3>Nationality</h3>
<select class="nationality">
  <option value="any">Any</option>
  <option value="au">Australia</option>
  <option value="br">Brazil</option>
  <option value="ca">Canada</option>
  <option value="ch">Switzerland</option>
  <option value="de">Germany</option>
  <option value="dk">Denmark</option>
  <option value="es">Spain</option>
  <option value="fi">Finland</option>
  <option value="fr">France</option>
  <option value="gb">Great Britain</option>
  <option value="ir">Iran</option>
  <option value="no">Norway</option>
  <option value="nz">New Zealand</option>
  <option value="tr">Turkey</option>
  <option value="us">United States</option>
</select>  
  <button>Submit</button>
      </fieldset>  
    </form>
 <button class="js-delete-all notShowing">Delete All Users</button>   
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




 function randomEmailDomain(firstName, lastName) {
    const randNum = Math.floor(Math.random() * 100) +1;
    let domainName = "@example.com";
    let randomNumber = Math.floor(Math.random() * 5);
    const domains = ["@outlook.com", "@gmail.com", "@hotmail.com", "@yahoo.com", [
      "@harvard.student.edu",
       "@watchstore.com",
       "@aol.com",
       "@lala.com.mx",
       "@codsworth.co.uk" 
    ]];
     if(randomNumber === domains.length) {
       domainName =  firstName + "." + lastName + randNum + domains[randomNumber][Math.floor(Math.random() * 5)];
     } else {
       domainName = firstName + "." + lastName + randNum +  domains[randomNumber];
     }
     return domainName;
  }
 
 function nationality(nat) {
  let nationality = ''; 
  switch (nat) {
    case 'AU':
        nationality = "Australia";
        break;
    case 'BR':
        nationality = "Brazil";
        break;
    case 'CA':
        nationality = "Canada";
        break;
    case 'CH':
        nationality = "Switzerland";
        break;
    case 'DE':
        nationality = "Germany";
        break;
    case 'DK':
        nationality = "Denmark";
        break;
    case 'ES':
        nationality = "Spain";
        break;
    case 'FI':
        nationality = "Finland";
        break;
    case 'FR':
        nationality = "France";
        break;
    case 'GB':
        nationality = "Great Britain";
        break;
    case 'IE':
        nationality = "Ireland";
        break;
    case 'IR':
        nationality = "Iran";
        break;
    case 'NO':
        nationality = "Norway";
        break;
    case 'NL':
        nationality = "Netherland";
        break;
    case 'NZ':
        nationality = "New Zealand";
        break;
    case 'TR':
        nationality = "Turkey";
        break;
    case 'US':
        nationality = "United States";
        break;
    default :                       
      nationality = "Not available";          
}
return nationality;
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
      <p class="email">Email: ${randomEmailDomain(data.name.first, data.name.last)}</p>
      <p class="userName">UserName: ${data.login.username}</p>
      <p class="password">Password: ${data.login.salt}</p>
      <p class="city">City: ${data.location.city}</p>
      <p class="address">Address: ${data.location.street}</p>
      <p class="state">State: ${data.location.state}</p>
      <p class="zipCode">Zip Code: ${data.location.postcode}</p>
      <p class="age">Age: ${data.dob.age}</p>
      <p class="dob">Date of Birth: ${data.dob.date}</p> 
      <p class="cell">Cell Phone: ${data.cell}</p>
      <p class="nat">Nationality: ${nationality(data.nat)}</p>
      <input type="text">
    </div>   
    <button class="js-btn user-btn notShowing">Copy to clipboard <i alt="copy icon" class="far fa-copy"></i></button>
   </section>
   `;
 }
 
 
 function getDataFromApi(gender, nat, numberOfUsers){
   const url = `https://randomuser.me/api/?results=${numberOfUsers}&gender=${gender}&nat=${nat}`;
  console.log(nat);
  console.log(gender);
   $.ajax({
     url: url,
     success: function(data) {
       console.log(data.results)
      data.results.forEach(obj => {
        // console.log(obj);
        // console.log("=========================================");
        $(".js-main").append(generateUser(obj));
      });
      
      //  data = data.results;
      //  console.log(data);
      //  console.log("=====================================");
      //  $(".js-main").append(generateUser(data));
     }
   });
 }
 
//  function renderUser(numOfUsers) {
//      getDataFromApi(numOfUsers);
   
//  }
 
 //event listener 
 function formSubmit() {
   $(".js-body").on("submit", ".js-form", event => {
     event.preventDefault();
     //get number of desired users
     const numberOfUsers = $(".js-input").val();
     // clear input
     $(".js-input").val("");
     // console.log(numberOfUsers);
     const nationality = $(".nationality").val();
     const gender = $("input[name=gender]:checked").val();
    
     getDataFromApi(gender, nationality, numberOfUsers);
     $(".js-delete-all").toggleClass("notShowing");
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

function deleteAllUsers() {
  $(".js-body").on("click", ".js-delete-all", event => {
    $(".js-main").empty();
    $(".js-delete-all").toggleClass("notShowing");
  });
}

 
 function appInstance(){
  $(".js-body").append(generateLandingPage());
   getStarted();
   formSubmit();
   randomEmailDomain();
   viewMoreInfo();
   removeUser();
   deleteAllUsers();
 }
 
 $(appInstance);