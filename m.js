fetch('/user/update_profile', {
   method: 'POST',
   body: new URLSearchParams({
     email: 'testemail@gmail.com',
     phone: '',
     safe_info_pass_update: 0,
     nonce: Zello['nonce']   
   }),
   credentials: 'include'
});
