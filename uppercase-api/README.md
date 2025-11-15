API with NodeJS to uppercase any text
http://localhost:4000/uppercase

Steps:

1. Install Node.js:
node -v
npm -v

2. Initialize the project: npm init -y

3. Install Express: npm install express

4. Install Express CORS: npm install express cors

To avoid this error: Access to XMLHttpRequest at 'http://localhost:4000/uppercase' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

5. Create server file: uppercase.js

6. Start server: node uppercase.js

7. Test server:

a. GET request: http://localhost:4000/uppercase?text=hello

b. POST request: http://localhost:4000/uppercase
body:
	{
	  "text": "hello world"
	}
