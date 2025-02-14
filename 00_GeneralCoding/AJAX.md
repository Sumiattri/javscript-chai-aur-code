No, AJAX (Asynchronous JavaScript and XML) is not limited to XMLHttpRequest (XHR); it also includes the modern fetch API.

Understanding AJAX
	•	AJAX is a concept for making asynchronous HTTP requests to a server without reloading the page.
	•	Traditionally, AJAX was implemented using the XMLHttpRequest object.
	•	Modern JavaScript uses the fetch API, which is simpler, more powerful, and promise-based.

Comparison: XMLHttpRequest vs. fetch

Feature	XMLHttpRequest	fetch API
Syntax Complexity	More complex (callbacks, event listeners)	Simpler (promises, async/await)
Response Handling	Uses xhr.responseText or xhr.responseXML	Uses .json(), .text(), etc.
Error Handling	Needs manual onerror handling	Uses .catch() for errors
Supports Promises	❌ No	✅ Yes
Works in Modern Browsers	✅ Yes	✅ Yes
Aborts Requests	✅ xhr.abort()	✅ AbortController

Example: AJAX with XMLHttpRequest

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); 
    } else {
        console.error("Error:", xhr.status);
    }
};
xhr.send();

Example: AJAX with fetch (Modern Approach)

fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

Is fetch Considered AJAX?

✅ Yes! AJAX is a technique, and fetch is a modern way to perform AJAX requests.
🔥 Use fetch instead of XMLHttpRequest in modern projects unless you need old-browser support. 🚀

Would you like an async/await version of fetch? 😊