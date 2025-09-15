const featuredContainer=document.getElementById("featured-container");
if(featuredContainer){
  destinations.slice(0,3).forEach(dest=>{
    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
      <img src="assets/images/${dest.thumbnail}" alt="${dest.name}">
      <div class="card-content">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <a href="destinations.html" class="btn">View More</a>
      </div>`;
    featuredContainer.appendChild(card);
  });
}
