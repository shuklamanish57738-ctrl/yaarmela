let likes = 0;
let followed = false;

function openReel() {
  document.getElementById("reelView").style.display = "block";
}

function closeReel() {
  document.getElementById("reelView").style.display = "none";
}

function likeReel(e) {
  e.stopPropagation();
  likes++;
  document.getElementById("likeCount").innerText = likes;

  let btn = document.getElementById("likeBtn");
  btn.style.transform = "scale(1.3)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 200);
}

function followUser(e) {
  e.stopPropagation();
  let btn = document.getElementById("followBtn");

  if (!followed) {
    btn.innerText = "Following";
    btn.style.background = "green";
    btn.style.transform = "scale(1.2)";
    followed = true;
  }
}
