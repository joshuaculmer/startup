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
chmod: Changes the file permissions of a file or directory. Numerical inputs are converted into read, write, share permisions
pwd: Prints the current working directory. Displays the full path of the directory.
cd: Changes the current directory.
ls: Lists the contents of a directory. Options like -l (long format) and -a (show hidden files) can be added, e.g., ls -la.
vim: Opens vim.
nano: Opens Nano.
mkdir: Creates a new directory.
mv: Moves or renames files and directories. Example: mv file.txt /path/to/directory/ moves the file to a different directory.
rm: Removes (deletes) files or directories. rm -r directory_name to delete a directory and its contents RECURSIVELY, without checking anything
man: Displays the manual pages for other commands. Example: man ls
ssh: Securely connects to a remote server using SSH.
ps: Displays information about currently running processes.
wget: Downloads files from the web. Example, wget http://example.com/file will download the specified file to your current directory.
sudo: Executes a command with superuser (administrative) privileges.

# Notes reference

ssh -i /path/to/private_key username@remote_server_ip
Domain Name: blog.example.com, example.com is the root domain, .com is the top-level domain, and blog is the subdomain.
HTTPS requires a web certificate
DNS A record can't point to another A record
Port 443:HTTPS, 80:HTTP, 22:SSH

# Javascript Reference

