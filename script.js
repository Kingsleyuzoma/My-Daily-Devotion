


function openModal(type) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

  let content;
  if (type === 'devotion') {
    const devotion = devotions[dayOfYear % devotions.length];
    content = `<h2>Today's Devotion</h2>
     <p><em>Day ${dayOfYear + 1}: <strong>${devotion.verse}</strong> ${devotion.message} </em></p>`;
  } else {
    const affirmation = affirmations[dayOfYear % affirmations.length];
    content = `<h2>Today's Affirmation</h2>
      <p><em>Day ${dayOfYear + 1}: <strong>${affirmation.verse}</strong> ${affirmation.message} </em></p>`;
  }

 // content += `<button class="share-btn" onclick="share()">Share</button>`;

  modalBody.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//function share() {
 // const text = document.getElementById("modal-body").innerText;
 // if (navigator.share) {
   // navigator.share({
    //  title: "Daily Devotion & Affirmation",
    //  text: text
    //}).catch(console.error);
 // } else {
  //  alert("Share not supported on this browser.");
 // }
//}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
