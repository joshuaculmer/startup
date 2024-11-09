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