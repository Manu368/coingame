var coinElement = document.getElementById('coin');
var headImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1687432016/coin_head-removebg-preview_pehn9a.png';
var tailImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1687432015/coin_tail-removebg-preview_btq4dp.png';
var flipsRemaining = 1;
var newSound = new Audio("coinsound.wav");
var headsButton = document.querySelector('.head-button');
var tailsButton = document.querySelector('.tail-button');

headsButton.addEventListener('click', function() {
  flipsRemaining = 1; // Reset the number of flips
  flipCoin(); // Start flipping the coin
});

tailsButton.addEventListener('click', function() {
  flipsRemaining = 1; // Reset the number of flips
  flipCoin(); // Start flipping the coin
});

function flipCoin() {
  coinElement.classList.add('flipped', 'move-animation');

  setTimeout(function() {
    var random = Math.random();
    var imageUrl = random < 0.5 ? headImageUrl : tailImageUrl;

    if (imageUrl === headImageUrl) {
      coinElement.src = imageUrl;
      coinElement.alt = "Coin Head";
      displayResult("Head");
    } else if (imageUrl === tailImageUrl) {
      coinElement.src = imageUrl;
      coinElement.alt = "Coin Tail";
      displayResult("Tail");
    }

    setTimeout(function() {
      coinElement.classList.remove('flipped', 'move-animation');

      flipsRemaining--;

      if (flipsRemaining > 0) {
        setTimeout(flipCoin, 100); // Flip the coin again after a short delay
      }
    }, 1000);
  }, 250);
}

coinElement.addEventListener('animationstart', function() {
  newSound.play();
});

function displayResult(result) {
  setTimeout(function() {
    var modal = document.getElementById('resultModal');
    var resultTextElement = document.getElementById('resultText');
    resultTextElement.textContent = "The Result is: " + result;
    modal.style.display = "block";
  }, 1000);
}
