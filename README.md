# CNI College Database
## Project Description: 
Database of the faculty, staff, and students at CNI College. Project is run using MERN stack. Utilizes MongoDB for back-end development and React Native for front-end.
### IDE: 
Visual Studio Code
### Programming Language: 
Javascript

## Back-End Development
For the back-end software, we used MongoDB to create the database for the school. The DB components are stored in the folder **Server**. The folder consists of four components.
1. server.js
2. record.js
3. conn.js
4. config.env

### server.js
Connects the database to the server using a driver connection. Displays the port that the server is connected to.

### record.js
Stores the records entered for staff/students and stores them in the internal database. Stores both newly created records and updated records and it also deletes records from the database. Any changes made are notified to the user in the server terminal. <br/>

Ex. If a record is updated, the program will output "1 document updated". If deleted, it will output "1 document deleted".

### conn.js
Indicates a successful connection to the database. If succesfull, the program will output "Successfully connected to MongoDB".

### config.env
Consists of the cluster used to connect to MongoDB.

ATLAS_URI=mongodb+srv://mern:mongodb@cluster0.izoaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000

## Front-End Development
We used React Native to create the front-end side of the application. The key components we implemented on the front-end were the record list which displays the base information on employees and students, the create feature which allows users to create a new entry which is then added to the record list, the edit list which allows users to edit/update existing records, and the Navbar component which will utilize the router capabilities in React which allows users to be re-directed to the edit page.

### recordList.js 
Displays the faculty/student name and information in a list with a column that allows users to edit or delete a record from the database. Record information is fetched from the database on the server side and displayed on the front-end side.

### create.js
Once the user is redirected to the create page, the program rompts the user to create a new entry. Displays the form that will take the input from the user. Once the user hits "Create person" the information entered is stored in the database and displayed in the record list. The user will then be redirected to the homepage.

### edit.js
Functions similarly to "create.js". Information stored in the create feature is saved in the input form. Once the user has made their changes and hit "Update Record", they will be redirected to the homepage and the updated information will be saved on the database to be transferred to the record list.

### navbar.js
Utilizes the Navlink component to use the react router. This router is used to create the "Add Employee/Student" link that redirects users to the create page.

## Features to be Implemented
- Search Engine/Filter
