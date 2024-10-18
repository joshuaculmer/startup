# Personal Notes

public IP for webservice: http://54.82.181.238/

Simon URL: https://simon.dancingdatabase.com/

Startup URL: https://startup.dancingdatabase.com/

# Deployment commands

Command for deployment to production:
./deployFiles.sh -k ../KeyForAWSServer1.pem -h dancingdatabase.com -s startup

Command for deployment to production for Simon (Need to be in the folder with the right deployment files)
./deployFiles.sh -k ../KeyForAWSServer1.pem -h dancingdatabase.com -s simon

# Git Notes

debug using gitbash instead of vsCode, terminal is considerably clearer

# TODO/Future Improvements

- Enhance header to display username right justified
- Reformat Jumbotron for mobile display

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

