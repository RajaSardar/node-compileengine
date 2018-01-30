# COMPILE ENGINE

This is a simple code compiler created using Nodejs. When the source code and inputs are given this compiles the code and produce the output. Host this on a server and compile your codes.

### System Requirements
- any linux operating system.
- gcc, javac, python, php (Must be installed to compile the code).
- Max 8gb ram( For fast compilation ).

### Installation
1. Clone our repository from github to a local repository (Folder).
`git clone https://github.com/satheesh1997/Compile-Engine.git`

2. Change to Compile-Engine directory.
`cd Compile-Engine`

3. Install required Packages and start the server.
`npm install && npm start app.js

## Compiling the codes
Once the server starts running it will listening to the port 3000.  The server can be accessed from http://yourdomain.com:3000
#### C or CPP Program
URL: http://yourdomain.com:3000/gcc

Post Inputs: {
	code : //user code
	input: //user inputs
}
#### Java Program
URL: http://yourdomain.com:3000/javac

Post Inputs: {
	code : //user code
	
	input: //user inputs
}
#### Python Program
URL: http://yourdomain.com:3000/python

Post Inputs: {
	code : //user code
	input: //user inputs
}
#### Php Program
URL: http://yourdomain.com:3000/php

Post Inputs: {
	code : //user code
	input: //user inputs
}
## Response format
{
            compiler: 'Code Lordz',
            version: '0.0.1',
            envData: envData,
            program: program,
            input: input,
            error: data.error,
            output: data.output
}
