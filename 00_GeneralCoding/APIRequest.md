## API REquest


API Requests: Everything You Need to Know 🚀

An API request is a message sent from a client (frontend, app, or another system) to an API to fetch or send data. APIs (Application Programming Interfaces) act as a bridge between different software systems, allowing them to communicate.

1️⃣ Components of an API Request

An API request typically consists of:
✅ Endpoint (URL) → The address where the request is sent.
✅ Method (HTTP Verb) → Defines the action (GET, POST, etc.).
✅ Headers → Extra information like authentication tokens, content type, etc.
✅ Body (optional) → Data sent with requests like POST, PUT (usually JSON).

Example API Request Structure:

POST https://example.com/api/users
Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body:
  {
    "name": "Sumit",
    "email": "sumit@example.com"
  }

2️⃣ HTTP Methods (Verbs) in API Requests

Each method defines what action will be performed on the API resource.

Method	                        Purpose	               Example
GET	                        Retrieve data	        GET /api/users
POST	                    Create new data	        POST /api/users
PUT	                        Update existing data	PUT /api/users/1
PATCH	                    Partially update data	PATCH /api/users/1
DELETE                  	Remove data	            DELETE /api/users/1

3️⃣ API Request Formats

APIs support multiple data formats:

a) JSON (Most Common)

{
  "name": "Sumit",
  "age": 22
}

b) XML

<user>
  <name>Sumit</name>
  <age>22</age>
</user>

c) Form Data (Used in HTML Forms)

name=Sumit&age=22

4️⃣ Making API Requests Using JavaScript

Using Fetch API (Modern & Recommended)

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data)) // Handle data
  .catch(error => console.error("Error:", error)); // Handle errors

Using XMLHttpRequest (Old Method)

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();

5️⃣ API Authentication & Security

Some APIs require authentication before accepting requests.

Authentication Methods:

🔹 API Keys → A unique key (?api_key=YOUR_KEY)
🔹 OAuth Tokens → Secure authentication via tokens (Authorization: Bearer TOKEN)
🔹 Basic Auth → Username/password in request headers
🔹 JWT (JSON Web Token) → A secure token that encodes user information

6️⃣ Status Codes in API Responses

When you send an API request, the server responds with a status code:

Code	Meaning
200 OK	Request was successful
201 Created	Resource was created successfully
400 Bad Request	Client-side error (wrong data)
401 Unauthorized	Authentication failed
403 Forbidden	You don’t have permission
404 Not Found	Resource not found
500 Internal Server Error	Server-side error

7️⃣ Types of APIs

1️⃣ REST API (Most common, uses HTTP methods)
2️⃣ GraphQL (Flexible query-based API)
3️⃣ SOAP API (XML-based, older API standard)
4️⃣ WebSockets (Real-time data communication)

8️⃣ Example Real-World API Request

Fetching User Data from GitHub API

fetch("https://api.github.com/users/sumit-attri")
  .then(response => response.json())
  .then(data => console.log(data));

Conclusion

API requests are the backbone of web and app development. They enable systems to interact, fetch, update, and delete data dynamically. Mastering API requests is essential for web development, backend development, and working with third-party services.

Would you like to practice with a real API or build one yourself? 🚀