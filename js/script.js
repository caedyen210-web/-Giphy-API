
console.log("JavaScript is connected!");

// Get the HTML elements
const gifContainer = document.querySelector("#gif-container");
const fetchGifBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

// Save the images with their matching search words
const imageCollections = {
    dogs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFp2f_vwrh61E7ydmNRCH7ZJ5ZHRNd5lrv8rX3vx1jQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhquZlCiOdNXtzz_67DWDXXp_h-TUX_vQTiMDiF4T5BA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaYj5jfzj6-j3ysgEc_ogxrZzi47ejh9jiCx5upnZfA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HtChEkCF4TuPCFPP4987vGUftLcPUc5TfpnVyDK7tg&s=10"
    ],

    cats: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjfSiXKdrIQAA6eOvycTB_OYCmn-jD6UzdyT1ljBGKw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFX8hG6PCo2rs2abQubbYlGCYSPKQp09LsCCiCZ0Eng&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg99dswftd7VXCv9KdFLjEEx8anxtjIcyQEQfMxc3zIA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Oznu8NY3W8liRCvc08IBJeqBbRtySzn551pZipX4Kw&s=10"
    ],

    football: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH66t_Y5QOzXFXefnJxzRvtYA-qpezgKk3OqdpB90ZAg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP07bvK0Y9_lhAJvfk6bLis2tffkJHlSCr5M6P_i4pDw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53ZGqKpt7PQXqUgRCwocPSeDz_pSzTb4o4T-Gk0K2fw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyTnvWZF3YsezwjNrWasR6ndPqyXuFiFApoQdFrD09Q&s"
    ],

    cars: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9AupRAGWvMY07lLjUx0eMxKcwdwHwTBZTB1fb05u5g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r0zgjyuUU4V_p86jbofcQoCmtdijyg2iCqdKCg9W3Q&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaY698zsWDpLAlT_XFmqOaYQw3l0JEXFweDKVoXbMsw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb8wBO01dJzCh19XKgDTnJ0-Y5Ur4hO99pryLT_LWBg&s=10"
    ]
};

// Listen for the button click
fetchGifBtn.addEventListener("click", function() {

    // Get the word typed into the search bar
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Clear the previous images
    gifContainer.innerHTML = "";

    // Find images that match the search word
    const images = imageCollections[searchTerm];

    // Check if the word exists
    if (images) {

        // Display the matching images
        for (let i = 0; i < images.length; i++) {
            gifContainer.innerHTML += `
                <img src="${images[i]}" class="col-3 mb-3 img-fluid">
            `;
        }

        console.log(images);

    } else {
        gifContainer.innerHTML = "<p class='text-center'>No images found. Try Dogs, Cats, Football, or Cars!</p>";
    }
});