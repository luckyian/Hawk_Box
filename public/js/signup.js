$("#signUpPageBtn").on("click", (event) => {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var userInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  // Does a post to the signup route. If successful, we are redirected to the homepage
  // Otherwise we log any errors
  function signUpUser(username, password) {
    console.log(username, password);
    $.post("/api/signup", {
      username: username,
      password: password
    })
      .then(function (data) {
        window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }




  // When the signup button is clicked, we validate the user and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {

      username: userInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);
    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an user and password, run the signUpUser function
    signUpUser(userData.username, userData.password);
    userInput.val("");
    passwordInput.val("");
  });

});
