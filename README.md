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
