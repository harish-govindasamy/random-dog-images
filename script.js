// Function to fetch a random dog image from the Dog CEO's Dog API
function fetchRandomDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching dog image:", error);
      return "https://via.placeholder.com/300?text=Error+Loading+Image";
    });
}

// Function to update the dog images on the webpage
function updateDogImages() {
  const dogImage1 = document.getElementById("dog-image-1");
  const dogImage2 = document.getElementById("dog-image-2");
  const dogImage3 = document.getElementById("dog-image-3");

  Promise.all([
    fetchRandomDogImage(),
    fetchRandomDogImage(),
    fetchRandomDogImage(),
  ]).then((images) => {
    dogImage1.src = images[0];
    dogImage2.src = images[1];
    dogImage3.src = images[2];
  });
}

// Add event listener to the fetch button
document
  .getElementById("fetch-dog-btn")
  .addEventListener("click", updateDogImages);

// Initial fetch to display dog images on page load
updateDogImages();
