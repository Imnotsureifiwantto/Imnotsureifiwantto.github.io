const names=["Ruby Elegance Ring","Golden Nile Necklace","Pearl Whisper Earrings","Ancient Coin Bracelet","Emerald Crown Brooch","Desert Rose Anklet","Twilight Star Pendant","Moonstone Mirage Ring","Ivory Crest Cuff","Goddess Halo Chain","Phoenix Flame Choker","Olive Vine Earrings","Amber Kiss Ring","Sunborn Circle Necklace","Terracotta Spirit Bracelet","Sands of Time Locket","Crimson Bloom Pin","Dawn Horizon Bangle","Mythic Laurel Earcuff","Silken Dune Ring","Jade Monarch Pendant","Orchid Flame Studs","Celestial Crown Anklet","Divine Spiral Chain","Opal Dream Ring","Scarab Echo Necklace","Tigereye Majesty Bracelet","Sunset Relic Cuff","Temple Bloom Brooch","Queen's Ember Pendant","Papyrus Wave Earrings","Royal Mirage Bangle","Nefertari's Touch Choker","Twilight Palm Ring","Sacred Grove Chain","Lapis Legend Pin","Flame Lily Necklace","Ra's Radiance Ring","Desert Gold Drops","Mystic Tide Bracelet"];
const prices=[25000,45000,18000,32000,41000,15000,37000,22000,33000,48000,46000,19500,27000,34500,26500,38500,29500,31000,24000,28500,47500,16500,30500,43500,22000,44000,39000,27500,15000,49500,18000,47000,35500,26000,42500,24500,39000,50000,16000,31500];

const grid = document.getElementById('product-list');
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function render() {
  grid.innerHTML = names.map((n,i)=>`
    <div class="product" data-i="${i}">
      <img src="images/${i+1}.jpg" alt="${n}" loading="lazy">
      <div class="product-info">
        <h3>${n}</h3>
        <p>${prices[i].toLocaleString()} EGP</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `).join('');
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('.add-to-cart').forEach((btn,idx)=>{
    btn.onclick = ()=>add(idx);
  });
}

function updateCart() {
  const items = cart.map((it,i)=>`
    <li>${it.name}<span>${it.price.toLocaleString()} EGP</span>
      <button onclick="remove(${i})">✖</button>
    </li>
  `).join('');
  document.getElementById('cart-items').innerHTML = items;
  const total = cart.reduce((s,a)=>s+a.price,0);
  document.getElementById('cart-total').textContent = total.toLocaleString();
  document.getElementById('cart-count').textContent = cart.length;
  document.getElementById('checkout').disabled = !cart.length;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function add(i) {
  cart.push({name: names[i], price: prices[i]});
  updateCart();
}

function remove(i) {
  cart.splice(i,1); updateCart();
}

document.getElementById('cart-toggle').onclick = ()=>document.getElementById('cart').classList.add('open');
document.getElementById('cart-close').onclick = ()=>document.getElementById('cart').classList.remove('open');
const st = document.getElementById('scroll-top');
window.onscroll = ()=> st.classList.toggle('show', window.scrollY>400);
st.onclick = ()=>window.scrollTo({top:0,behavior:'smooth'});
document.getElementById('shop-now').onclick = ()=>grid.scrollIntoView({behavior:'smooth'});

render();
updateCart();
