FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY hackyourcareer/target/hackyourcareer-0.0.1-SNAPSHOT.jar ./app.jar

COPY hackyourcareer/src/main/resources/data.sql /app/data.sql

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
