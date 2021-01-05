$("#logInPageBtn").on("click", (event) => {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var userInput = $("input#user-input");
  var passwordInput = $("input#password-input");

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(user, password) {
    $.post("/api/login", {
      user: user,
      password: password
    })
      .then(function () {
        window.location.replace("/");
        // If there's an error, log the error
      })
      .catch(handleLoginErr);
  }
  // When the form is submitted, we validate there's an user and password entered
  loginForm.on("submit", function (event) {
    console.log(event);
    event.preventDefault();
    var userData = {
      user: userInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.user || !userData.password) {
      console.log("line 17");
      return;
    }

    // If we have an user and password we run the loginUser function and clear the form
    loginUser(userData.user, userData.password);
    userInput.val("");
    passwordInput.val("");
  });


});
