function openBookingForm(destId) {
  const dest = destinations.find(d => d.id === destId);
  const modalCarouselEl = document.getElementById('modal-carousel');
  const modalDescriptionEl = document.getElementById('modal-description');
  const modalPriceEl = document.getElementById('modal-price');

  if (modalCarouselEl) modalCarouselEl.style.display = 'none';
  if (modalPriceEl) modalPriceEl.style.display = 'none';

  modalDescriptionEl.innerHTML = `
    <div style="max-width:720px; margin:0 auto;">
      <h3 style="margin-top:6px;">Booking — ${dest.name}</h3>
      <form id="booking-form" style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
        <input type="text" id="bk-name" placeholder="Full Name" required />
        <input type="email" id="bk-email" placeholder="Email" required />
        <input type="tel" id="bk-contact" placeholder="Contact Number" required />
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <div style="flex:1;"><label>Check-in</label><input type="date" id="bk-checkin" required /></div>
          <div style="flex:1;"><label>Check-out</label><input type="date" id="bk-checkout" required /></div>
        </div>
        <input type="number" id="bk-travelers" min="1" value="1" required />
        <button type="submit" class="btn">Confirm Booking</button>
      </form>
      <div id="booking-success" class="booking-success" style="display:none;">Booking confirmed — saved locally.</div>
    </div>
  `;

  const bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bk-name').value.trim();
    const email = document.getElementById('bk-email').value.trim();
    const contact = document.getElementById('bk-contact').value.trim();
    const checkin = document.getElementById('bk-checkin').value;
    const checkout = document.getElementById('bk-checkout').value;
    const travelers = document.getElementById('bk-travelers').value;

    if (!name || !email || !contact || !checkin || !checkout || !travelers) {
      alert('Please fill all fields correctly.');
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      alert('Check-out must be after check-in.');
      return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      destId, name, email, contact, checkin, checkout, travelers, createdAt: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    bookingForm.style.display = 'none';
    document.getElementById('booking-success').style.display = 'block';
  }, { once: true });
}
