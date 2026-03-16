// 1. Kerakli elementlarni tanlab olamiz
const btn = document.querySelector('#change-color');
const text = document.querySelector('.color-code');

// 2. Tasodifiy Hex-rang generatsiya qiluvchi funksiya
function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 3. Tugma bosilganda ishlaydigan hodisa (Event Listener)
btn.addEventListener('click', () => {
  const newColor = getRandomColor();
  
  // 4. Sahifa stili va matnini o'zgartirish
  document.body.style.backgroundColor = newColor;
  text.textContent = `Hozirgi rang: ${newColor}`;
  
  // 5. Konsolga ma'lumot chiqarish
  console.log(`Rang o'zgartirildi: ${newColor}`);
});