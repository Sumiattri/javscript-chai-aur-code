Alright! Let’s go deep into all possible ways to make HTTP/API requests using XMLHttpRequest.

📌 XMLHttpRequest: All Ways to Make Requests

The XMLHttpRequest object allows us to send HTTP requests (GET, POST, PUT, DELETE, etc.) to a server and receive a response.

📢 Key Steps to Make a Request

1️⃣ Create an XMLHttpRequest object.
2️⃣ Open a connection using .open().
3️⃣ Set headers (if needed).
4️⃣ Define a callback to handle the response.
5️⃣ Send the request using .send().

1️⃣ GET Request (Fetching Data)

A GET request is used to retrieve data from a server.

Example: Fetching a Single Post

let xhr = new XMLHttpRequest(); 

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // Parse JSON response
    } else {
        console.error("Error:", xhr.status);
    }
};

xhr.send();  // Send request

✅ GET requests do not send data in .send()
✅ true in .open() makes it asynchronous

🌟 Example: Fetching a List of Posts

let xhr = new XMLHttpRequest(); 

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // List of posts
    } else {
        console.error("Error:", xhr.status);
    }
};

xhr.send();

2️⃣ POST Request (Sending Data)

A POST request is used to send data to the server.

Example: Sending JSON Data

let xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json"); // Set header

xhr.onload = function () {
    if (xhr.status === 201) {  // 201 = Created
        console.log(JSON.parse(xhr.responseText)); // Response from server
    } else {
        console.error("Error:", xhr.status);
    }
};

let data = JSON.stringify({
    title: "My Post",
    body: "This is a new post",
    userId: 1
});

xhr.send(data);  // Send JSON data

✅ POST requests send data inside .send()
✅ xhr.setRequestHeader("Content-Type", "application/json") tells the server we’re sending JSON.

3️⃣ PUT Request (Updating Data)

A PUT request is used to update existing data.

Example: Updating a Post

let xhr = new XMLHttpRequest();

xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // Updated post data
    } else {
        console.error("Error:", xhr.status);
    }
};

let updatedData = JSON.stringify({
    title: "Updated Post",
    body: "This is the updated content",
    userId: 1
});

xhr.send(updatedData);

✅ PUT replaces the entire object
✅ Use PATCH instead if you only want to modify some fields.

4️⃣ PATCH Request (Partially Updating Data)

A PATCH request updates specific fields instead of replacing the whole object.

Example: Partially Updating a Post

let xhr = new XMLHttpRequest();

xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // Partially updated post
    } else {
        console.error("Error:", xhr.status);
    }
};

let partialData = JSON.stringify({
    title: "Partially Updated Post"
});

xhr.send(partialData);

✅ PATCH modifies only the given fields

5️⃣ DELETE Request (Removing Data)

A DELETE request is used to remove data from a server.

Example: Deleting a Post

let xhr = new XMLHttpRequest();

xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("Post deleted successfully!");
    } else {
        console.error("Error:", xhr.status);
    }
};

xhr.send();

✅ DELETE does not need to send data in .send()

6️⃣ Sending Form Data (POST with Form Data)

Instead of JSON, you can send form data.

Example: Sending Form Data

let xhr = new XMLHttpRequest();

xhr.open("POST", "https://example.com/api/users", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

let formData = "name=Sumit&email=sumit@example.com";

xhr.send(formData);

✅ Use application/x-www-form-urlencoded for form submissions

7️⃣ Handling Errors and Timeouts

Handling Network Errors

xhr.onerror = function () {
    console.error("Network error! Check your connection.");
};

Setting a Timeout

If a request takes too long, set a timeout:

xhr.timeout = 5000; // 5 seconds timeout

xhr.ontimeout = function () {
    console.error("Request timed out!");
};

8️⃣ Sending Headers (Authentication)

Some APIs require authentication headers (e.g., Bearer tokens).

Example: Sending Authorization Header

xhr.setRequestHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN");

9️⃣ Working with Synchronous Requests (Not Recommended)

A synchronous request blocks execution until the response is received.

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", false); // false = synchronous
xhr.send();
console.log(xhr.responseText);  // Blocks execution until request is complete

🚨 Warning: Synchronous requests freeze the browser, so avoid using them.

🔟 Summary of All Requests

Method	Purpose	Sends Data?	Example
GET	Retrieve data	❌ No	xhr.open("GET", url, true); xhr.send();
POST	Create new data	✅ Yes (Body)	xhr.open("POST", url, true); xhr.send(data);
PUT	Replace existing data	✅ Yes (Full)	xhr.open("PUT", url, true); xhr.send(data);
PATCH	Partially update data	✅ Yes (Partial)	xhr.open("PATCH", url, true); xhr.send(data);
DELETE	Remove data	❌ No	xhr.open("DELETE", url, true); xhr.send();

💡 Final Thoughts

✔ XMLHttpRequest can send GET, POST, PUT, PATCH, DELETE requests.
✔ It can send JSON, form data, and authentication headers.
✔ Always handle errors, timeouts, and network failures.
✔ Prefer fetch() in modern JavaScript, but XMLHttpRequest is still useful.

Would you like to see a real-world project using this? 🚀



#####  readyState in XMLHttpRequest

The readyState property represents the current state of the request. It tells us whether the request is being set up, sent, processed, or completed.

🚀 Possible Values of readyState

Value	State Name	Description
0	UNSENT	Request created, but .open() not called yet.
1	OPENED	.open() called, request initialized.
2	HEADERS_RECEIVED	.send() called, response headers received.
3	LOADING	Loading response, receiving data from the server.
4	DONE	Request completed, response is ready.

📢 Example: Monitoring readyState Changes

We can use the .onreadystatechange event to track the readyState changes.

🔹 Example: Logging Each readyState Change

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    console.log("ReadyState:", xhr.readyState);

    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Response:", JSON.parse(xhr.responseText));
    }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.send();

🔎 What Happens Here?
	1.	readyState starts at 0 (UNSENT).
	2.	It changes to 1 (OPENED) when .open() is called.
	3.	Then it changes to 2 (HEADERS_RECEIVED) after .send().
	4.	It moves to 3 (LOADING) while the response is being received.
	5.	Finally, it becomes 4 (DONE), meaning the response is ready.

📌 Why Use onreadystatechange Instead of onload?
	•	onload only runs when readyState is 4 (request completed).
	•	onreadystatechange runs multiple times (whenever readyState changes).
	•	If you need to track each stage of the request, use onreadystatechange.

📢 Example: Display Different Messages at Each readyState

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
        case 0:
            console.log("Request not initialized");
            break;
        case 1:
            console.log("Connection established (open() called)");
            break;
        case 2:
            console.log("Request sent, headers received");
            break;
        case 3:
            console.log("Loading response...");
            break;
        case 4:
            if (xhr.status === 200) {
                console.log("Request complete:", JSON.parse(xhr.responseText));
            } else {
                console.error("Error:", xhr.status);
            }
            break;
    }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.send();

✅ This helps you debug network requests and understand each step.

🛠 Summary

✔ readyState tells us what phase the request is in.
✔ Use onreadystatechange to track changes.
✔ Use onload if you only care about completed requests (readyState === 4).

Would you like a real-world use case for readyState? 🚀