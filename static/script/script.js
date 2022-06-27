// EJS variable of my API key
const API_KEY = document.currentScript.getAttribute("data-api-key");

// source: https://usefulangle.com/post/352/javascript-capture-image-from-camera
// WEB API's cannot be used in server.js
const autodetectFoodButton = document.getElementById("autodetectFoodButton");
const dishNameInput = document.getElementById("dishName");

// you can draw on canvas
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");

// if mediaDevices is supported, remove hidden class
if (navigator.mediaDevices) {
  autodetectFoodButton.classList.remove("hidden");
  autodetectFoodButton.addEventListener("click", async (e) => {
    // e.preventdefault because any button in a form will automatically submit the form, but that's not what i want to do.
    e.preventDefault();
    canvas.classList.add("hidden");
    video.classList.remove("hidden");
    // permission to use media with only video | source: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    // assign the camera to video | source
    video.srcObject = stream;

    // setTimeout is a global function (javascript API)
    setTimeout(async () => {
      video.classList.add("hidden");
      canvas.classList.remove("hidden");
      // draw img onto the canvas, as source we have the video, 00 means it paints the whole canvas with 0 0 | source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
      // toDataURL will take anything painted on the canvas and turn it into a jpeg in the form of a dataURL
      const imageData = canvas.toDataURL("image/jpeg");

      // toDataUrl sends back a data URL, but the API needs an imageUrl, as stated on their documentation and I can do this by using a "blob" | source https://stackoverflow.com/a/65669404/4409162 and https://spoonacular.com/food-api/docs#Image-Classification-File

      // I can fetch (send http get request) any data URL, so I can fetch imageData
      const blob = await (await fetch(imageData)).blob();

      // you use new because file is a class, you create an array and the only element in the array is blob - file wants an array, hence you make an array with blob in it
      const file = new File([blob], "fileName.jpg", {
        type: "image/jpeg",
        // don't know if it's needed, but just in case
        lastModified: new Date(),
      });

      // source https://stackoverflow.com/a/40826943
      // created a const called formData (name could be anything) and then created a new formData (name needs to be FormData, because it's a class)
      const formData = new FormData();
      // spoonacular expects 1 paramater called file into the body, and the value of that file is the binary data (blob turned into file in line 316)
      // formdata does special encoding, which sets the content type header - spoonacular expects the request body to be in in the format that .append uses
      formData.append("file", file);

      const response = await fetch(
        `https://api.spoonacular.com/food/images/classify?apiKey=${API_KEY}`,
        {
          // form data is the body of the request
          method: "POST",
          body: formData,
          // formdata (parameter file, value = binary data file (line 316)) will be send, with the POST request to the API
        }
      );

      if (response.status === 200) {
        const responseJson = await response.json();
        const category = responseJson.category;
        dishNameInput.value = category;
      } else {
        dishNameInput.value = "Could not autodetect";
      }
    }, 3000);
  });
}
