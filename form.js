const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');
function checkPasswords() {
  confirmation.setCustomValidity(confirmation.value && confirmation.value !== password.value ? 'Hai mật khẩu chưa khớp. Vui lòng kiểm tra lại.' : '');
}
password.addEventListener('input', checkPasswords);
confirmation.addEventListener('input', checkPasswords);
form.addEventListener('submit', event => {
  checkPasswords();
  if (!form.checkValidity()) { event.preventDefault(); form.reportValidity(); }
});
