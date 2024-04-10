FROM ubuntu:latest

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
ENV PATH $PATH:/usr/lib/jvm/java-8-openjdk-amd64/bin

RUN apt-get update && apt-get install -y openjdk-8-jdk curl

WORKDIR /opt
ADD . /opt

RUN ./gradle/init-gradle-wrapper.sh

RUN ./gradlew cleanAll loadAll

EXPOSE 8080

CMD ["./gradlew", "ofbiz"]
