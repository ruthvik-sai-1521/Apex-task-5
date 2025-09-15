const container=document.getElementById("destinations-container");
if(container){
  destinations.forEach(dest=>{
    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
      <img src="assets/images/${dest.thumbnail}" alt="${dest.name}">
      <div class="card-content">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <button class="btn view-btn">View More</button>
      </div>`;
    container.appendChild(card);
    card.querySelector(".view-btn").addEventListener("click",()=>openModal(dest));
  });
}
