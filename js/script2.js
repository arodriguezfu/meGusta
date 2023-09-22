const likes1 = document.getElementById("likes1");
const cantLikes1 = document.getElementById("cantLikes1");
let count = 0;

likes1.addEventListener('click', function () {
    count++;
    cantLikes1.textContent = count;
});

const likes2 = document.getElementById("likes2");
const cantLikes2 = document.getElementById("cantLikes2");
let count2 = 0;

likes2.addEventListener('click', function () {
    count2++;
    cantLikes2.textContent = count2;
});

const likes3 = document.getElementById("likes3");
const cantLikes3 = document.getElementById("cantLikes3");
let count3 = 0;

likes3.addEventListener('click', function () {
    count3++;
    cantLikes3.textContent = count3;
});