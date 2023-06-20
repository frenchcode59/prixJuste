document.addEventListener("DOMContentLoaded", function () {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var remainingAttempts = 10;

  var btn = document.getElementById("btn");
  var input = document.getElementById("numero");
  var message = document.getElementById("message");

  btn.addEventListener("click", checkGuess);
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });

  function checkGuess() {
    var userGuess = parseInt(input.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = "Veuillez saisir un nombre entre 1 et 100.";
      input.value = "";
      return;
    }

    if (userGuess === randomNumber) {
      message.textContent = "Félicitations ! Vous avez gagné !";
      input.value = "";
      if (confirm(" Félicitations vous avez gagner ! Voulez-vous rejouer ?")) {
        location.reload();
      }
    } else if (userGuess < randomNumber) {
      remainingAttempts--;
      input.value = "";
      if (remainingAttempts > 0) {
        message.textContent = "C'est plus ! Il vous reste " + remainingAttempts + " tentative(s).";
      } else {
        message.textContent = "Désolé, vous avez épuisé toutes vos chances. Le nombre était : " + randomNumber;
        if (confirm("Voulez-vous rejouer ?")) {
          location.reload();
        }
      }
    } else {
      remainingAttempts--;
      input.value = "";
      if (remainingAttempts > 0) {
        message.textContent = "C'est moins ! Il vous reste " + remainingAttempts + " tentative(s).";
      } else {
        message.textContent = "Désolé, vous avez épuisé toutes vos chances. Le nombre était : " + randomNumber;
        if (confirm("Voulez-vous rejouer ?")) {
          location.reload();
        }
      }
    }
  }
});
