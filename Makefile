
# path for the java application
JAR_PATH=service/hackyourcareer/target/hackyourcareer-0.0.1-SNAPSHOT.jar

# build the frontend
build-client:
	cd client && cd hackyourcareer && npm i && npm run build

# build the backend
build-service:
	cd service && cd hackyourcareer && mvn clean package

# run the frontend
run-client:
	cd client && cd hackyourcareer && npm start

# run the backend
run-service:
	java -jar $(JAR_PATH)
