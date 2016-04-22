eureka-gold
===================
A simple angular app to assist in administering Netflix Eureka

![alt tag](https://raw.githubusercontent.com/dngu/eureka-gold/master/md_resources/screenshot.png)

Setup required
-------------
#### Setting up Eureka Server
 - Clone this eureka fork which is CORS compliant:
```
git clone https://github.com/dngu/eureka-gold.git
```

 - Run gradle command to build jars:
``` 
./gradle w clean build
```

 - Copy the eureka server jar to the webapps folder in a tomcat installation as eureka.war
``` 
cp ./eureka-server/dist/build/libs/eureka-server-1.4.7-SNAPSHOT.war /Library/Tomcat/webapps
```

 - Ensure tomcat is CORS enabled by adding the following in the main web.xml:
```
<filter>
  <filter-name>CorsFilter</filter-name>
  <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
  <init-param>
    <param-name>cors.allowed.origins</param-name>
    <param-value>*</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.methods</param-name>
    <param-value>GET,POST,HEAD,OPTIONS,PUT</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.headers</param-name>
    <param-value>Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers</param-value>
  </init-param>
  <init-param>
    <param-name>cors.exposed.headers</param-name>
    <param-value>Access-Control-Allow-Origin,Access-Control-Allow-Credentials</param-value>
  </init-param>
  <init-param>
    <param-name>cors.support.credentials</param-name>
    <param-value>true</param-value>
  </init-param>
  <init-param>
    <param-name>cors.preflight.maxage</param-name>
    <param-value>10</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CorsFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

- Start tomcat

```
cd /Library/Tomcat/bin
./startup.sh && tail -f ../logs/catalina.out
```


#### Setting up sample eureka service
 - Run the following from the cloned eureka repository

```
./gradlew :eureka-examples:runExampleService
```

#### Starting the Eureka Dashboard
- Install grunt / npm / bower
- Run this application as a regular angular app
```
grunt build serve
```

