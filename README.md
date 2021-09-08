# SpringBootReact


## react-frontend Project

Should be just an 
-npm install and
-npm start

and you are on your way. If you have environment setup to run react.js apps...have nodejs installed etc.....


### `npm start`

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

Need to edit this file for your database credentials/connection.

then mvn spring-boot:run should do the trick.
swagger page is localhost://8080/swagger-ui.html
react SPA is configured to look for apis at above address.







