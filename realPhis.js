(function () {
    // 1. Clear the existing page content
    document.documentElement.innerHTML = "";

    // 2. Create and inject the CSS
    const style = document.createElement("style");
    style.innerHTML = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
            min-height: 100vh;
            display: flex; justify-content: center; align-items: center; padding: 20px;
        }
        .container {
            width: 100%; max-width: 450px; background: white;
            padding: 60px 40px; border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .logo { text-align: center; margin-bottom: 40px; font-size: 32px; font-weight: 300; letter-spacing: 2px; color: #333; }
        h1 { text-align: center; font-size: 28px; font-weight: 600; margin-bottom: 35px; color: #000; }
        .form-group { margin-bottom: 20px; }
        label { display: block; font-size: 14px; color: #666; margin-bottom: 8px; font-weight: 500; }
        input { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 4px; background: #fafafa; }
        .sign-in-btn {
            width: 100%; padding: 14px; background: #4a5fd7; color: white;
            border: none; border-radius: 4px; font-size: 15px; font-weight: 600; cursor: pointer;
        }
        .divider { display: flex; align-items: center; margin: 30px 0; color: #999; font-size: 13px; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #ddd; }
        .divider span { padding: 0 15px; }
        .social-button {
            width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px;
            font-size: 14px; cursor: pointer; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; gap: 10px; background: white;
        }
        .apple-btn { background: #000; color: white; }
    `;
    document.head.appendChild(style);

    // 3. Create and inject the HTML
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
        <div class="logo">roon</div>
        <h1>Welcome!</h1>
        <form id="loginForm">
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="password" required>
            </div>
            <button type="submit" class="sign-in-btn">Sign in</button>
        </form>
        <div class="divider"><span>OR</span></div>
        <button class="social-button">Continue with Google</button>
        <button class="social-button apple-btn">Continue with Apple</button>
    `;
    document.body.appendChild(container);

    // 4. Attach Logic
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        alert('Captured locally for test:\nEmail: ' + email + '\nPassword: ' + pass);
    });
})();
