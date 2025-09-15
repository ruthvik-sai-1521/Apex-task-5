const modal=document.getElementById("modal");
const modalBody=document.getElementById("modal-body");
const modalClose=document.getElementById("modal-close");

function openModal(destination){
  modal.style.display="flex";
  const galleryHTML=destination.images.map(img=>`<img src="assets/images/${img}" alt="${destination.name}">`).join("");
  modalBody.innerHTML=`
    <h2>${destination.name}</h2>
    <p>${destination.description}</p>
    <div class="gallery">${galleryHTML}</div>
    <h3>Book Your Trip</h3>
    <form class="booking-form" id="booking-form">
      <input type="text" id="fullname" placeholder="Full Name" required />
      <input type="email" id="email" placeholder="Email Address" required />
      <input type="date" id="date" required />
      <select id="guests" required>
        <option value="">Select Guests</option>
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
        <option value="5+">5+ Guests</option>
      </select>
      <button type="submit" class="btn">Confirm Booking</button>
    </form>
    <div id="booking-success" class="booking-success" style="display:none;">✅ Your booking has been saved locally!</div>
  `;
  const bookingForm=document.getElementById("booking-form");
  const successMsg=document.getElementById("booking-success");
  bookingForm.addEventListener("submit",e=>{
    e.preventDefault();
    const booking={
      destination:destination.name,
      fullname:document.getElementById("fullname").value,
      email:document.getElementById("email").value,
      date:document.getElementById("date").value,
      guests:document.getElementById("guests").value,
      createdAt:new Date().toISOString()
    };
    const bookings=JSON.parse(localStorage.getItem("bookings")||"[]");
    bookings.push(booking);
    localStorage.setItem("bookings",JSON.stringify(bookings));
    bookingForm.style.display="none"; successMsg.style.display="block";
    setTimeout(()=>{modal.style.display="none";},2500);
  });
}
modalClose.addEventListener("click",()=>{modal.style.display="none";});
window.addEventListener("click",e=>{if(e.target===modal)modal.style.display="none";});
