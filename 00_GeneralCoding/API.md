What is an API?

API stands for Application Programming Interface. It is a set of rules that allows different software applications to communicate with each other. APIs define how requests and responses should be structured so that programs can exchange data efficiently.

What does API stand for?

API = Application Programming Interface
	•	Application: A software program.
	•	Programming: The logic behind communication between apps.
	•	Interface: The way different apps or systems interact.

API Formats

APIs can return data in different formats, but the most common ones are:
	1.	JSON (JavaScript Object Notation) – Most Common
	•	Lightweight and easy to read.
	•	Example:

        {
        "name": "Sumit",
        "age": 22,
        "city": "Faridabad"
        }


	2.	XML (Extensible Markup Language)
	•	Older format, looks like HTML.
	•	Example:

        <person>
        <name>Sumit</name>
        <age>22</age>
        <city>Faridabad</city>
        </person>


	3.	Others (less common)
	•	YAML, CSV, etc.

How & Why APIs Are Used

APIs are used for various purposes, such as:
	•	Fetching data from a server (e.g., getting weather info, stock prices).
	•	Sending data to a server (e.g., submitting a form, making a payment).
	•	Connecting different applications (e.g., login via Google or Facebook).
	•	Automating tasks (e.g., scheduling posts on social media).

How APIs Work (Step-by-Step)
	1.	Client (You/Your App) sends a request to an API URL (also called an endpoint).
	2.	API Server processes the request and sends a response.
	3.	Client receives the response and processes the data.

Example:

Imagine you want to get weather data from an API.
	1.	You send a request:

        GET https://api.weather.com/current?city=Faridabad


	2.	The API responds with JSON data:

        {
        "temperature": "30°C",
        "humidity": "60%",
        "condition": "Sunny"
        }


	3.	Your app displays:

Weather in Faridabad: 30°C, Sunny

How to Decode & Understand an API Response
	1.	Check the Structure
	•	Look at the keys ("temperature", "humidity", etc.).
	•	Understand the data types (strings, numbers, lists, etc.).
	2.	Use a JSON Formatter (for readability)
	•	Websites like jsonformatter.org help format JSON properly.
	3.	Read API Documentation
	•	Every API comes with documentation explaining how to use it.
	•	Example: OpenWeather API docs show how to get weather data.
	4.	Test with Tools
	•	Postman (best tool for testing APIs).
	•	cURL (command-line tool).

## Some APIs require headers (like Accept: application/json) or must be accessed via a proper HTTP client (Postman, cURL, or a programming language like Python or JavaScript).

Quick Summary

Concept	Explanation
API	Interface for communication between applications.
Stands for	Application Programming Interface.
Formats	JSON (most common), XML, etc.
Use cases	Fetch data, send data, connect apps, automate tasks.
How it works	Send request → API processes → Get response.
Decoding API response	Check structure, use formatters, read docs, test with Postman.

Want to try calling an actual API in JavaScript? 🚀

##  is it like, for differentat complex tasks, different api has been built, which stores pre-evaluated and collected data in their respected api servers and send the data when we want want to recieve them through api request

Yes, exactly! APIs are designed to handle different complex tasks by providing pre-collected or dynamically processed data when requested.

How Different APIs Work for Different Tasks
	1.	Data APIs – Store pre-evaluated or real-time data and provide it when requested.
	•	Example: Weather API stores live weather data and sends it when you request.
	•	Example request:

        GET https://api.weather.com/current?city=Faridabad

	•	Server checks its database → fetches the latest weather → sends response.

	2.	Processing APIs – Perform real-time calculations or actions.
	•	Example: Google Maps API doesn’t just send stored data; it calculates routes dynamically.
	•	Example request:

        GET https://maps.googleapis.com/directions?from=Delhi&to=Mumbai

	•	Server processes route → calculates distance, time, and traffic → sends response.

	3.	Authentication APIs – Manage logins and user verification.
	•	Example: Google Login API
	•	When you log in using “Sign in with Google,” Google verifies your credentials and sends back authentication data.
	4.	Payment APIs – Process transactions securely.
	•	Example: PayPal, Razorpay APIs handle payments between customers and businesses.

How API Servers Work
	1.	API servers collect, store, and process data.
	2.	When you send an API request, the server:
	•	Finds pre-stored data (like weather, stock prices, news).
	•	Processes calculations if required (like Google Maps route planning).
	•	Sends the response in JSON/XML format.

So, APIs act as intermediaries between you and the database or service, simplifying complex tasks by providing ready-to-use data or processing it dynamically when needed. 🚀


## github api:    curl -H "Authorization: Bearer YOUR_GITHUB_TOKEN" https://api.github.com/user => CLI command

## Does API request similar to http request

Is an HTTP Request the Same as an API Request?

👉 Short Answer: An API request is a type of HTTP request, but not all HTTP requests are API requests.

1️⃣ What is an HTTP Request?

An HTTP request is any communication sent from a client (like a browser or app) to a server over the Hypertext Transfer Protocol (HTTP/HTTPS).

📌 Examples of HTTP Requests:
	•	Visiting a website:
	•	When you type https://github.com in your browser, your browser sends an HTTP request to GitHub’s web server, which responds with an HTML page.
	•	Downloading an image:
	•	Your browser requests https://example.com/image.png, and the server returns the image file.

🔹 Types of HTTP Requests (Methods):
	•	GET – Fetch data (e.g., view a webpage, download an image).
	•	POST – Send data (e.g., submit a form, create a GitHub issue).
	•	PUT – Update existing data (e.g., edit a GitHub profile).
	•	DELETE – Remove data (e.g., delete a repo).

2️⃣ What is an API Request?

An API request is a special type of HTTP request made to an API endpoint (like api.github.com). Instead of returning a web page or an image, the server responds with structured data (usually JSON or XML).

📌 Example of an API Request:

curl https://api.github.com/users/sumitattri

	•	This sends an HTTP GET request to GitHub’s API server.
	•	The API responds with JSON data about the user sumitattri.

📌 Example Response (JSON):

{
  "login": "sumitattri",
  "id": 68212695,
  "public_repos": 3,
  "followers": 2
}

💡 Unlike normal HTTP requests (which return webpages), API requests return raw data for applications to process.

3️⃣ Key Differences Between HTTP Requests and API Requests

Feature					HTTP Request (General)	                API Request
purposes				Fetch websites, images, etc.			Retrieve/send structured data (JSON, XML)
Example 				URL	https://github.com					https://api.github.com/users/sumitattri
Response Type			HTML, images, videos					JSON, XML
Use Creates 			Browsing the web						Fetching data programmatically
Authentication			Usually not needed						Often requires API keys/tokens
   
4️⃣ Are API Requests Always HTTP Requests?

🔸 Most modern APIs use HTTP (REST APIs).
🔸 But some APIs use other protocols like:
	•	WebSockets (real-time communication, e.g., chat apps).
	•	GraphQL (alternative to REST, e.g., GitHub GraphQL API).
	•	gRPC (efficient API communication, used by Google services).

💡 So, while most API requests use HTTP, not all APIs rely on HTTP.

🔹 TL;DR

✅ An API request is a type of HTTP request that retrieves or sends structured data from an API server.
✅ Not all HTTP requests are API requests (e.g., loading a webpage is an HTTP request but not an API request).
✅ API requests are mostly used for data exchange, while normal HTTP requests load websites, images, etc.

Let me know if you need more details! 🚀


## API ENDPOINT

An API endpoint is a specific URL where an API receives requests and sends responses. It represents a particular function or resource within an API.

Key Concepts:
	1.	API (Application Programming Interface): A way for different software systems to communicate.
	2.	Endpoint: A URL that a client (frontend, app, or another system) interacts with to request or send data.
	3.	Request Methods: Common HTTP methods used with API endpoints:
	•	GET: Retrieve data
	•	POST: Send new data
	•	PUT: Update existing data
	•	DELETE: Remove data

Example of an API Endpoint:

1. REST API Example

If a website has a user system, an API endpoint might look like this:
	•	https://example.com/api/users → Retrieves a list of users (GET)
	•	https://example.com/api/users/1 → Retrieves user with ID 1 (GET)
	•	https://example.com/api/users → Creates a new user (POST)

2. JSON Response Example

A GET request to https://example.com/api/users/1 might return:

{
    "id": 1,
    "name": "Sumit Attri",
    "email": "sumit@example.com"
}

Would you like to try making API calls using JavaScript or Postman?