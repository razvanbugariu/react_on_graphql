# Demo project using ReactJS and GraphQL with SpringBoot

##How to start the project

###Before all build both projects
Navigate to demo.graphql run mvn clean install
Navigate to demo.graphql run npm install

###Spring boot
Navigate to demo.graphql folder and run command: mvn spring-boot:run
To check the database go to http://localhost:8080/h2db in the JDBC URL paste: jdbc:h2:mem:testdb

###React
Navigate to gemo.react and run command: npm start

Default ports are 8080 for spring boot and 3000 for react