# Personal Notes

public IP for webservice: http://54.82.181.238/

Simon URL: https://simon.dancingdatabase.com/

Startup URL: https://startup.dancingdatabase.com/

# Deployment commands

Command for deployment to production:
./deployService.sh -k ../KeyForAWSServer1.pem -h dancingdatabase.com -s startup

Command for deployment to production for Simon (Need to be in the folder with the right deployment files)
./deployService.sh -k ../KeyForAWSServer1.pem -h dancingdatabase.com -s simon

# Git Notes

debug using gitbash instead of vsCode, terminal is considerably clearer

# TODO/Future Improvements

- Enhance header to display username right justified
- Reformat Jumbotron for mobile display
- Integrate dance moves into database and display them

# Linux Commands
- chmod: Changes the file permissions of a file or directory. Numerical inputs are converted into read, write, share permisions
- pwd: Prints the current working directory. Displays the full path of the directory.
- cd: Changes the current directory.
- ls: Lists the contents of a directory. Options like -l (long format) and -a (show hidden files) can be added, e.g., ls -la.
- vim: Opens vim.
- nano: Opens Nano.
- mkdir: Creates a new directory.
- mv: Moves or renames files and directories. Example: mv file.txt /path/to/directory/ moves the file to a different directory.
- rm: Removes (deletes) files or directories. rm -r directory_name to delete a directory and its contents RECURSIVELY, without checking anything
- man: Displays the manual pages for other commands. Example: man ls
- ssh: Securely connects to a remote server using SSH.
- ps: Displays information about currently running processes.
- wget: Downloads files from the web. Example, wget http://example.com/file will download the specified file to your current directory.
- sudo: Executes a command with superuser (administrative) privileges.

# Notes reference

ssh -i /path/to/private_key username@remote_server_ip
Domain Name: blog.example.com, example.com is the root domain, .com is the top-level domain, and blog is the subdomain.
HTTPS requires a web certificate
DNS A record can't point to another A record
Port 443:HTTPS, 80:HTTP, 22:SSH

# Javascript Reference
JSON (JavaScript Object Notation)
document.getElementById("p2").style.color = "blue";

Example switch statement Syntax:
switch (number) {
    case 1:
        console.log("One");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Other number");
}


Example Object Syntax
const obj = new Object();
obj.key1 = value1;
obj.key2 = value2;
obj.method1 = function() {
    // method code
};

Use <script> tags to invoke Javascript


using a map() function Example: (makes an array with the values after running them through the lambda function)
  const numbers = [1, 4, 9];
  const roots = numbers.map((num) => Math.sqrt(num));

  // roots is now     [1, 2, 3]
  // numbers is still [1, 4, 9]

# DOM
Key Features of the DOM:

Tree Structure: The DOM represents a document as a hierarchical tree structure. Each element, attribute, and piece of text is a node in this tree.
- Document Node: The root of the tree, representing the entire document.
- Element Nodes: Represent HTML elements (e.g., div, p, span).
- Text Nodes: Represent the text inside elements.
- Attribute Nodes: Represent the attributes of elements (like id, class).

Dynamic Interaction: Using JavaScript, you can add, remove, or modify elements and attributes in the document. This allows for dynamic updates to the web page without needing to reload.

Event Handling: The DOM enables the handling of user events (like clicks, key presses, etc.), allowing you to create interactive web applications.

# CSS
![boxmodel](https://github.com/user-attachments/assets/be30396c-2358-4475-8595-54424e650a1d)
default span value is 1

Padding values:    
    - padding-top
    - padding-right
    - padding-bottom
    - padding-left
    
All the padding properties can have the following values:
    - length - specifies a padding in px, pt, cm, etc.
    - % - specifies a padding in % of the width of the containing element
    - inherit - specifies that the padding should be inherited from the parent element
# Vite Commands
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev


# Vite commands

(Configure the environment):
npm init -y
npm install vite@latest -D

*Dont forget to add the node_modules to the git_ignore*

(Add bootstrap):
npm install bootstrap react-bootstrap

(Enable React):
npm install react react-dom react-router-dom

*This needs to be done before configuring anything else. The site should run using npm run dev if properly configured*


make folders for each page to be rendered

include css and jsx file for each

move the content from the <main> section to the jsx file

remove the html file



*IMPORTANT: as you go, make sure you can still render the whole thing perfectly, it should never look any different*

# Service back end

Make sure to install all depencies correctly. run "npm install express"  for service/index.js

Replace react and javascript components with endpoints to get info from backend services


# Issues with Mongodb

Need to ensure that every dependency is installed. So npm install or npm install mongodb and npm install cookie-parser were necessary to sync things up. The fix as suggested on canvas was useful:
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
fixed deployment issues. Atlas was quick to set up, free, and intuitive. Comes with a cool gui to see who has accessed the db. 

It is worth noting that additional endpoints now call the db layer to access the information contained there.

# Websocket Design

I will redo the share portion of the site to be a basic chat feature. In future development, more could be done here to enable users to upload videos of dance moves they like. Or a feature to add a particular dance move to someone else's list


# Final Review note sheet

To Review: Express service code, MongoDB code, 

- Defualt Ports: HTTP:80, HTTPS:443, SSH:22
- Error Codes 300:Error with options, 400: Bad reuest or bad url, 500:internal server error
- content-type indicates what type of content the media is, ie. png or jpg
- Secure Cookie: only sent over HTTPS, Http-only-cookie: can't be accessed by javascript, Same-Site-Cookie: control cross site cookie settings
- HTTP GET request with a URL path of /api/document
- User passwords should be stored as hash values instead of the raw passwords
- Accronymns: JSX-Javascript XML, JS-Javascript, AWS-Amazon Web Service, NPM-Node Package Manager, NVM-Node Version Manager
- React.useState adds a state/variable that can be changed
- State hook: remembers input, like a variable
- Context hook: access information, like media, or a chunk of text
- Ref hook: makes a ref that is not used for rendering, like DOM or timeout ID
- Effect hook: Interacts with an external effect, disengages from the react framework
- Performance hook: prevent rerendering by using cache or skip a rerender
- package.json manages dependencies, versions, filenames
- javascript fetch command sends a request and returns a promise
- node.js executes javascript outside of the browser
- PM2 is a production process manager for Node.js applications
