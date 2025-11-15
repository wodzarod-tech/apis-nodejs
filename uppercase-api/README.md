API with NodeJS to uppercase any text
http://localhost:4000/uppercase

Steps:

1. Install Node.js:
node -v
npm -v

2. Initialize the project: npm init -y

3. Install Express: npm install express

4. Create server file: uppercase.js

5. Start server: node server.js

6. Test server:

a. GET request: http://localhost:4000/uppercase?text=hello

b. POST request: http://localhost:4000/uppercase
body:
	{
	  "text": "hello world"
	}
