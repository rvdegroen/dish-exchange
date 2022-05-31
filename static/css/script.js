// source: https://usefulangle.com/post/352/javascript-capture-image-from-camera
const autodetectFoodButton = document.getElementById("autodetectFoodButton");
const dishNameInput = document.getElementById("dishName");
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");

// show button if mediDevices is supported
if (navigator.mediaDevices) {
  autodetectFoodButton.classList.remove("hidden");
  autodetectFoodButton.addEventListener("click", async (e) => {
    // e.preventdefault is used, because any button in a form will automatically submit the form, but I don't want that
    e.preventDefault();
    // if the buttons gets clicked on, then show the video that will capture the image
    canvas.classList.add("hidden");
    video.classList.remove("hidden");
    // permission to use media with only video | source: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // assign the camera to video | source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
    video.srcObject = stream;

    // time-out, after 3000 miliseconds it captures .drawimage and turns it into an image/jpeg
    setTimeout(async () => {
      video.classList.add("hidden");
      canvas.classList.remove("hidden");
      // draw img onto the canvas, as source we have the video, 00 means it paints the whole canvas with 0 0
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/jpeg");

      // i get a blob, but I need a binary file, as spoonacular specifies this | source: source https://stackoverflow.com/a/65669404/4409162
      const blob = await (await fetch(imageData)).blob();
      const file = new File([blob], "fileName.jpg", {
        type: "image/jpeg",
        lastModified: new Date(),
      });

      // upload file | source: source https://stackoverflow.com/a/40826943
      const formData = new FormData();
      formData.append("file", file);

      // into my spoonacular
      const response = await fetch(
        "https://api.spoonacular.com/food/images/classify?apiKey=<%= process.env.API_KEY %>",
        {
          method: "POST",
          body: formData,
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
