// Get the button and caption elements
const changeButton = document.getElementById("change-caption-btn");
const caption = document.getElementById("caption");

// Set an array of possible captions
const captions = [
  "When the meme is life-changing!",
  "This is why I don't dive!",
  "Why did the chicken meme cross the road?",
  "Meme level: Expert!",
  "This meme just made my day!",
];

// Function to change the caption when the button is clicked
changeButton.addEventListener("click", () => {
  // Pick a random caption from the array
  const randomIndex = Math.floor(Math.random() * captions.length);
  caption.textContent = captions[randomIndex];
});
