# Country Dance Catalog 


# Elevator Pitch

Lets say you want to learn how to dance but only know two moves. Or you know a ton of moves but aren't sure how to use them together. The country dance catalog is a treasure trove of dance moves that will help dancers of any skill improve their dancing. Dance moves are categorized by difficulty, type, technique for convient sorting and improved learning experience for all skill levels. You will also be able to search for any move, learn it, and add it to a list of learned moves for convient access. For more advanced users, there will be an option to chain moves together by visualizing which moves lead into other moves and it can come up with combination suggestions for you known moves.

# Web Diagram/Sketch
![DanceDatabase](https://github.com/user-attachments/assets/2c4c2ece-cb1d-4222-897f-c7d5a02b7ffa)
https://app.diagrams.net/#G1aoOZHRTqAb0n0Tna7QrM35ZPwMnwb16J#%7B%22pageId%22%3A%22C5RBs43oDa-KdzZeNtuy%22%7D


# Key Features
- Secure Login over HTTPS
- Database tracks user progression and learned moves
- Step by step instruction for each dance move
- Compilation of dance moves
- Ability to filter dance moves
- Ability to show dance move combo
- Share dance moves/website/combo with friends


# Technology Description
- HTML: Homepage, Login and Registration page, Dance List page, my moves page, Combo generator page, a page for each dance move
- CSS: For this project a temporary image will fill the space where videos eventually will go. Effective use of icons and menu design. Contrasting color scheme for engagement and easily navegatable UI.
- Javascript/React: Provides login features and interactivity with menu filters
- Services/API usage: Depending on the implementation from a business standpoint, I will use google maps api to dipslay local dance venues. This feature will primarily fulfil the requirement for the class and not add much to the site until the business aspect is more fleshed out. 
- DB: Stores user login info, credentials, and move state. All dance moves, related videos, and move start and end positions for combination generator
- Websocket: Allows users to share the website/applet, dance move instruction, and combinations to other users.


# HTML Deliverable
Built out the basic structure of my startup

- HTML pages - 7 HTML pages, Home, Dance moves list, my dance moves list,  Combo calculator, Share, About, and Login page all simply implemented.
- Links - All pages are linked via a menu that is displayed across the top of each page. Once we have javascript or some other scripting function working I will implement a changing menu for when users are logged vs unregistered users.
- Text - All pages have filler text summarizing what features will go where.
- Images - I have placed a map of my website on the home page for my convience, it will be replaced with a more elegant layout in the future.
- DB/Login. Login page is implemented. Dance moves list, my dance moves, and combo each summarize how they will require use of a database.
- WebSocket - Live share feature is described on the share page. 


# CSS Deliverable
Implemented CSS for startup
- Header, footer and main content body all with custom formatting for HTML elements
- Used bootstrap to make the navbar that shows active page
- Window resizing adjusts each element of the page
- Placeholders for final content edited with custom CSS
- All text content consistently stylized
- Integrated image for Jumbotron on landing page


# React Deliverable
- Refactored HTML into combined React and Vite project
- Deletion of all HTML files except index.html
- Stubbed out implementation for dance moves displays
- React Router used to dynamically update webpage instead of navigating
- React Hooks used to check Logged status and update Header accordingly