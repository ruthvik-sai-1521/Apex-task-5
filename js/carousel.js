function scrollCarousel(direction) {
  const c = document.getElementById('modal-carousel');
  if (!c) return;
  const amount = 240; 
  c.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
}
