// basic landing page with info about the app
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

//main user dashborad where users are created 
function generateDashboard() {
  return `
  <header class="js-header header" role="banner">
    <i class="far fa-caret-square-down notShowing more-actions"></i>
    <i class="logo fas fa-user-secret"></i>
    <h1 class="app-name">Fake User Generator</h1>
    <i class="js-mobile-settings mobile-bars fas  fa-bars"></i>
    <section class="js-mobile-tool-bar mobile-tool-bar" role="search">
  <form class="js-mobile-form mobile-form form active">
  <label class="users-text" for="how-many">How many users do you want to create ?</label>
    <input id="how-many" class="js-mobile-input number-of-users-input" type="number" min="1" max="100" required />
    <h2 class="filters-text">Filters<span class="optional-text">(optional)</span></h2>
    <fieldset class="radio-buttons" role="radiogroup">
      <legend class="gender-text">Gender</legend>
      <input class="mobile-gender" type="radio" name="gender" id="male" value="male"/>
      <label for="male">Male</label>
      <input class="mobile-gender" type="radio" name="gender" id="female" value="female"/>
      <label for="female">Female</label>
      <input class="mobile-gender" type="radio" name="gender" id="any" value="any" checked="checked"/>
      <label for="any">Any <span class="default">(default)</span></label>
   </fieldset>
   <h3 class="nationality-text">Nationality</h3>
   <select label="nationalities" class="js-mobile-nationality nationality-dropdown">
    <option label="Any (default)" value="any">Any<span class="default">(default)</span></option>
    <option label="Australia" value="au">Australia</option>
    <option label="Brazil" value="br">Brazil</option>
    <option label="Canada" value="ca">Canada</option>
    <option label="Switzerland" value="ch">Switzerland</option>
    <option label="Germany" value="de">Germany</option>
    <option label="Denmark" value="dk">Denmark</option>
    <option label="Spain" value="es">Spain</option>
    <option label="Finland" value="fi">Finland</option>
    <option label="France" value="fr">France</option>
    <option label="Great Britain" value="gb">Great Britain</option>
    <option label="Iran" value="ir">Iran</option>
    <option label="Norway" value="no">Norway</option>
    <option label="New Zealand" value="nz">New Zealand</option>
    <option label="Turkey" value="tr">Turkey</option>
    <option label="United States" value="us">United States</option>
   </select>  
   <button class="generate-users-form">Generate</button>
  </form>   
</section>


  </header>

<section class="js-tool-bar tool-bar" role="search">
  <form class="js-form form">
  <label class="users-text" for="how-many">How many users do you want to create ?</label>
    <input id="how-many" class="js-input number-of-users-input" type="number" min="1" max="100" required />
    <h2 class="filters-text">Filters<span class="optional-text">(optional)</span></h2>
    <fieldset class="radio-buttons" role="radiogroup">
      <legend class="gender-text">Gender</legend>
      <input class="gender" type="radio" name="gender" id="male" value="male"/>
      <label for="male">Male</label>
      <input class="gender" type="radio" name="gender" id="female" value="female"/>
      <label for="female">Female</label>
      <input class="gender" type="radio" name="gender" id="any" value="any" checked="checked"/>
      <label for="any">Any <span class="default">(default)</span></label>
   </fieldset>
   <h3 class="nationality-text">Nationality</h3>
   <select label="nationalities" class="js-nationality nationality-dropdown">
    <option label="Any (default)" value="any">Any<span class="default">(default)</span></option>
    <option label="Australia" value="au">Australia</option>
    <option label="Brazil" value="br">Brazil</option>
    <option label="Canada" value="ca">Canada</option>
    <option label="Switzerland" value="ch">Switzerland</option>
    <option label="Germany" value="de">Germany</option>
    <option label="Denmark" value="dk">Denmark</option>
    <option label="Spain" value="es">Spain</option>
    <option label="Finland" value="fi">Finland</option>
    <option label="France" value="fr">France</option>
    <option label="Great Britain" value="gb">Great Britain</option>
    <option label="Iran" value="ir">Iran</option>
    <option label="Norway" value="no">Norway</option>
    <option label="New Zealand" value="nz">New Zealand</option>
    <option label="Turkey" value="tr">Turkey</option>
    <option label="United States" value="us">United States</option>
   </select>  
   <button class="generate-users-form">Generate</button>
  </form>   
</section>

<main class="js-main main" role="main" aria-live="polite">
  <div class="js-user-container user-container">
  <!-- Users go here -->
  </div>
</main>

<footer class="footer">   
</footer>

  `;
}

//transition between landing page and user dashboard
function getStarted() {
  $(".js-body").on("click", ".js-app-btn", event => {
    $(".js-body").empty();
    $(".js-body").append(generateDashboard());
  });
}

// randomises email domain name to a more creible domain insted of just @example.com
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
     if(randomNumber === domains.length-1) {
       domainName =  firstName + "." + lastName + randNum + domains[randomNumber][(Math.floor(Math.random() * 5))];
     } else {
       domainName = firstName + "." + lastName + randNum +  domains[randomNumber];
     }
     return domainName;
  }
 
 // spells out the full nationality of a user instead of using its iso country code 
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
 
 // generates a user from a passed data object that contains data from api call
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
      <pre class="js-user-info user-info" id="mobile-info"> 
      Name: ${data.name.title} ${data.name.first} ${data.name.last}
      Gender: ${data.gender} 
      Email: ${randomEmailDomain(data.name.first, data.name.last)}
      UserName: ${data.login.username}
      Password: ${data.login.salt}
      City: ${data.location.city}
      Address: ${data.location.street}
      State: ${data.location.state}
      Zip Code: ${data.location.postcode}
      Age: ${data.dob.age}
      Date of Birth: ${data.dob.date} 
      Cell Phone: ${data.cell}
      Nationality: ${nationality(data.nat)}
      </pre>
    </div>   
    <button class="js-clipboard-btn user-btn notShowing">Copy to clipboard <i alt="copy icon" class="far fa-copy"></i></button>
   </section>
   `;
 }
 
 // call the server with the following parameter, if provied; gender, number and nationality.
 function getDataFromApi(gender, nat, numberOfUsers){
   // constructed query string
   const url = `https://randomuser.me/api/?results=${numberOfUsers}&gender=${gender}&nat=${nat}`;
   // ajax call to json api (GET default)
   $.ajax({
     url: url,
     success: function(data) {
      //recieves data in array of objects, each object is a user.
      data.results.forEach(obj => {
        //appends each user to main dashboard view
        $(".js-user-container").append(generateUser(obj));
      });
     }
   });
 }
 
 //Event listener; Submmit the form with required, and optional parameters if provided. 
 function formSubmit() {
   $(".js-body").on("submit", ".js-form", event => {
     // stops default behaviour of trying to submmit to a server.
     event.preventDefault();
     //get number of desired users.
     const numberOfUsers = $(".js-input").val();
     // clear input, for good ux.
     $(".js-input").val("");
     // (optional) select user's nationality if selected.
     const nationality = $(".js-nationality").val();
     // (optional) select user's gender if selected.
    //  const gender = $("input[name=gender]:checked").val();
    const gender = $(event.target).find("input[name='gender']:checked").val()
    // calls ajax function with appropiate parameters.
     getDataFromApi(gender, nationality, numberOfUsers);
    // shows option to delete all users that were rendered in first load. 
   });  
 }

 function mobileFormSubmit() {
  $(".js-body").on("submit", ".js-mobile-form", event => {
    // stops default behaviour of trying to submmit to a server.
    event.preventDefault();
    //get number of desired users.
    const numberOfUsers = $(".js-mobile-input").val();
    // clear input, for good ux.
    $(".js-input").val("");
    // (optional) select user's nationality if selected.
    const nationality = $(".js-mobile-nationality").val();
    // (optional) select user's gender if selected.
    const gender = $(event.target).find("input[name='gender']:checked").val();
   // calls ajax function with appropiate parameters.
    getDataFromApi(gender, nationality, numberOfUsers);
   // shows option to delete all users that were rendered in first load. 
  });  
}
 
 //Event listener; shows more info about user dropdown fashion.
 function viewMoreInfo() {
   $(".js-body").on("click", ".js-more-info", event => {
     //Toggles user information.
     $(event.target).closest(".user").find(".content").toggleClass("notShowing");
     // Toggles arrow icon up or down. 
     $(event.target).closest(".user").find(".js-more-info > i").toggleClass("fa-angle-up");
     // Toggles; display: none, on copy to clipboard button.
     $(event.target).closest(".user").find(".js-clipboard-btn").toggleClass("notShowing");
   });
 }
 
// Removes an user individually from dashboard view. 
function removeUser() {
  $(".js-body").on("click", ".js-remove", event => {
    // Removes clicked on user, when x button is clicked. 
    $(event.target).closest(".user").remove();
  });
}

// copy to clipboar code here

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}


function copyToClipboard(){
  $(".js-body").on('click', ".js-clipboard-btn", event => {
    const userText = $(event.target).prev().find(".js-user-info").text();
    // console.log(userText);
    copyTextToClipboard(userText);
  });
}

// copy to cliboard code ends here


// what to do if user resizes the screen down to mobile view 
function toggleForm() {
  $(".js-body").on("click", ".mobile-bars", event => {
    // toglles form in and out of view
    $(".mobile-form").toggleClass("active");
    $(".mobile-bars").toggleClass("fa-times", "fa-bars");
  })
}
 
 function appInstance(){
  $(".js-body").append(generateLandingPage());
   getStarted();
   formSubmit();
   mobileFormSubmit();
   copyToClipboard();
   randomEmailDomain();
   viewMoreInfo();
   removeUser();
   toggleForm();
 }
 
 $(appInstance);