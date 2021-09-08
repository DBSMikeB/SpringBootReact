# SpringBootReact

## Steps to Run:

1. Run <strong>CreateEmployeesDB_AndSeedWithData sql script</strong> (root folder of project) script on your local SQL server
-this will create employees database and
-create tables and seed with data.
2. Get React.js SPA up and running (see below)
3. Get Spring Boot API up and running (see below)



## react-frontend Project

Should be just an 
-npm install and
-npm start

and you are on your way. If you have environment setup to run react.js apps...have nodejs installed etc.....
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


<br>

## springboot2-mssql-jpa-hibernate backend project

This requires SQL Server.
Also requires you have all dependencies for Spring Boot JAVA apps
I "think" the only configuration is in application.properties file<br>
spring.datasource.username=sa<br>
spring.datasource.password=&%$#$%*<br>
<strong>If you run the sql server script employees database/tables will be created/seeded.</strong>
However, at any time you can delete all Tables and they will be re-created dynamically.</strong>

then mvn spring-boot:run should do the trick.
swagger page is localhost://8080/swagger-ui.html
react SPA is configured to look for apis at above address.







