# Portfolio Backend — Spring Boot

REST API for the portfolio: project data and a contact form endpoint.

## Requirements
- Java 21
- Maven (or use the included `mvnw` wrapper if you generate one via `mvn -N wrapper:wrapper`)

> Note: this project needs internet access to Maven Central the first time you build,
> to download Spring Boot's dependencies. Run it on your own machine, not in a sandboxed
> environment with restricted network access.

## Run
```bash
mvn spring-boot:run
```
Server starts on **http://localhost:8080**.

## Build a runnable jar
```bash
mvn clean package
java -jar target/portfolio-1.0.0.jar
```

## Endpoints
- `GET  /api/projects?page=0&size=10` — paginated project list
- `POST /api/contact` — body: `{"name","email","message"}` (validated with Bean
  Validation; invalid requests return `400` with a `fields` map of errors)

Contact submissions are appended to `data/contacts.log` in the working directory.

## Structure
```
src/main/java/com/chetan/portfolio/
  PortfolioApplication.java     — entry point
  config/CorsConfig.java        — allows the React dev server (localhost:5173) to call the API
  controller/                   — ProjectController, ContactController
  service/                      — ProjectService (in-memory data + pagination), ContactService (logging)
  dto/ContactRequest.java       — validated request body
  exception/GlobalExceptionHandler.java — structured 400/500 responses
```

## Talking to the frontend
The React app (see `portfolio-frontend/`) proxies `/api/*` to `localhost:8080` in dev.
For production, either serve the built frontend from Spring Boot's `static/` resources,
or run both behind a reverse proxy (nginx) that routes `/api/*` to this service.
