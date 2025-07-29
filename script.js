// مكتبة بسيطة لطباعة نص بـ style مصفوفة
const codeEl = document.getElementById('code');
const message = document.getElementById('message');
const text = "15-07-2004"; // عد تنازلي أو تاريخ الميلاد
let pos = 0;
function type() {
  codeEl.textContent += text[pos++];
  if (pos < text.length) {
    setTimeout(type, 150);
  } else {
    setTimeout(showMessage, 800);
  }
}
function showMessage() {
  message.style.display = 'block';
}
type();
