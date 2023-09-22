const likes = document.getElementById("likes");
const cantLikes = document.getElementById("cantLikes");
let count = 0;

likes.addEventListener('click', function () {
    count++;
    cantLikes.textContent = count;
});