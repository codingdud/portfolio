import{u as a,j as n}from"./index-BTbyQpxy.js";import"./mermaid-z7jFjprN.js";const t={title:"Docker CLI Complete Guide",description:"The guide follows modern Docker practices with real-world examples and security-first approaches, making it suitable for both development and production environments."};function i(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#environment-setup",children:"Environment Setup"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#container-management",children:"Container Management"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#image-operations",children:"Image Operations"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#volume-management",children:"Volume Management"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#environment-variables",children:"Environment Variables"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#dockerfile-best-practices",children:"Dockerfile Best Practices"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#network-configuration",children:"Network Configuration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#security-best-practices",children:"Security Best Practices"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#advanced-operations",children:"Advanced Operations"})}),`
`]}),`
`,n.jsx(e.h2,{children:"Environment Setup"}),`
`,n.jsx(e.h3,{children:"Docker Host Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Set remote Docker host\r
export DOCKER_HOST=ssh://root@142.244.156.151\r
\r
# Reset to local Docker\r
unset DOCKER_HOST\r
\r
# Verify Docker installation\r
docker version\r
docker info
`})}),`
`,n.jsx(e.h2,{children:"Container Management"}),`
`,n.jsx(e.h3,{children:"Running Containers"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Basic container run\r
docker container run -p 80:80 nginx\r
\r
# Run in detached mode\r
docker container run -d -p 80:80 nginx\r
\r
# Run with custom name\r
docker container run -d -p 80:80 --name webserver nginx\r
\r
# Interactive mode with auto-removal\r
docker container run --rm -it centos:7 bash\r
\r
# Run with custom port mapping\r
docker container run -it -d -p 80:80 --name httpd httpd bash
`})}),`
`,n.jsx(e.h3,{children:"Container Lifecycle"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Stop container (by ID or name)\r
docker container stop 69\r
docker container stop webserver\r
\r
# Start stopped container\r
docker container start mongo\r
\r
# List all containers\r
docker container ls -a\r
\r
# Remove containers\r
docker container rm 654\r
docker container rm -f 667  # Force remove running container
`})}),`
`,n.jsx(e.h3,{children:"Container Monitoring"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# View container logs\r
docker logs <container_id>\r
\r
# List running processes\r
docker ps\r
\r
# View processes inside container\r
docker top <container_id>\r
\r
# Execute commands in running container\r
docker container exec -it <mysql> bash
`})}),`
`,n.jsx(e.h2,{children:"Image Operations"}),`
`,n.jsx(e.h3,{children:"Image Management"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# List images\r
docker images ls\r
\r
# View image history and layers\r
docker history nginx:latest\r
\r
# Remove images\r
docker rmi nginx:1.27.5\r
\r
# Remove dangling images\r
docker rmi $(docker images -f "dangling=true" -q)\r
\r
# Clean up unused images\r
docker image prune\r
docker image prune -a  # Remove all unused images\r
\r
# System-wide cleanup\r
docker system prune -a --volumes -f
`})}),`
`,n.jsx(e.h3,{children:"Image Tagging and Distribution"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Tag images\r
docker tag nginx:latest akanoob/nginx:latest\r
docker tag akanoob/nginx akanoob/nginx:testing\r
\r
# Push to registry\r
docker login\r
docker push akanoob/nginx:latest\r
docker image push akanoob/nginx:testing
`})}),`
`,n.jsx(e.h2,{children:"Volume Management"}),`
`,n.jsx(e.h3,{children:"Volume Operations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# List volumes\r
docker volume ls\r
\r
# Create volume\r
docker volume create my-volume\r
\r
# Inspect volume\r
docker volume inspect my-volume\r
\r
# Container with named volume\r
docker container run -d --name my-container -v my-volume:/data nginx\r
\r
# Bind mount (current directory)\r
docker container run -d --name my-container -v $(pwd):/usr/share/nginx/html nginx\r
\r
# Jekyll development server with bind mount\r
docker container run -d -p 80:4000 --name my-container \\\r
  -v $(pwd):/site bretfisher/jekyll-serve
`})}),`
`,n.jsx(e.h2,{children:"Environment Variables"}),`
`,n.jsx(e.p,{children:"Environment variables are crucial for configuring containerized applications. They provide a clean way to pass configuration without rebuilding images."}),`
`,n.jsx(e.h3,{children:"Setting Environment Variables at Runtime"}),`
`,n.jsx(e.h4,{children:"Single Environment Variable"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Set single environment variable\r
docker run -e NODE_ENV=production nginx\r
\r
# Set with value assignment\r
docker run -e DATABASE_URL="postgresql://user:pass@localhost:5432/mydb" myapp\r
\r
# Set environment variable from host environment\r
docker run -e HOST_IP myapp  # Uses $HOST_IP from host
`})}),`
`,n.jsx(e.h4,{children:"Multiple Environment Variables"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Multiple -e flags\r
docker run \\\r
  -e NODE_ENV=production \\\r
  -e PORT=3000 \\\r
  -e DATABASE_URL="postgresql://user:pass@localhost:5432/mydb" \\\r
  -e REDIS_URL="redis://localhost:6379" \\\r
  myapp\r
\r
# Using environment file\r
docker run --env-file .env myapp\r
\r
# Combine both methods\r
docker run --env-file .env -e OVERRIDE_VAR=value myapp
`})}),`
`,n.jsx(e.h3,{children:"Environment Files (.env)"}),`
`,n.jsx(e.h4,{children:"Creating Environment Files"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# .env file example\r
NODE_ENV=production\r
PORT=3000\r
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb\r
REDIS_URL=redis://localhost:6379\r
API_KEY=your-secret-api-key\r
DEBUG=false\r
\r
# .env.development\r
NODE_ENV=development\r
PORT=3000\r
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb_dev\r
DEBUG=true
`})}),`
`,n.jsx(e.h4,{children:"Using Environment Files"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Load from default .env file\r
docker run --env-file .env myapp\r
\r
# Load from specific file\r
docker run --env-file .env.production myapp\r
\r
# Load multiple env files (last one takes precedence)\r
docker run --env-file .env --env-file .env.local myapp
`})}),`
`,n.jsx(e.h3,{children:"Environment Variables in Dockerfile"}),`
`,n.jsx(e.h4,{children:"Setting Default Values"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Set environment variables with default values\r
ENV NODE_ENV=development\r
ENV PORT=3000\r
ENV LOG_LEVEL=info\r
\r
# Multiple variables in one line\r
ENV NODE_ENV=development \\\r
    PORT=3000 \\\r
    LOG_LEVEL=info\r
\r
# Using ARG for build-time variables\r
ARG BUILD_VERSION=latest\r
ENV APP_VERSION=$BUILD_VERSION
`})}),`
`,n.jsx(e.h4,{children:"Advanced Environment Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`FROM node:18-alpine\r
\r
# Build arguments (available during build)\r
ARG NODE_ENV=production\r
ARG BUILD_DATE\r
ARG GIT_COMMIT\r
\r
# Environment variables (available at runtime)\r
ENV NODE_ENV=$NODE_ENV\r
ENV BUILD_DATE=$BUILD_DATE\r
ENV GIT_COMMIT=$GIT_COMMIT\r
ENV APP_DIR=/usr/src/app\r
ENV PATH=$APP_DIR/node_modules/.bin:$PATH\r
\r
WORKDIR $APP_DIR\r
\r
# Use environment variables in commands\r
RUN if [ "$NODE_ENV" = "development" ]; then \\\r
      npm install; \\\r
    else \\\r
      npm ci --only=production; \\\r
    fi\r
\r
EXPOSE $PORT\r
CMD ["node", "server.js"]
`})}),`
`,n.jsx(e.h3,{children:"Environment Variable Best Practices"}),`
`,n.jsx(e.h4,{children:"Secure Environment Variables"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# ❌ Bad: Exposing secrets in command line\r
docker run -e DB_PASSWORD=mysecret myapp\r
\r
# ✅ Good: Using environment file\r
echo "DB_PASSWORD=mysecret" > .env.local\r
chmod 600 .env.local\r
docker run --env-file .env.local myapp\r
\r
# ✅ Good: Using Docker secrets (in swarm mode)\r
echo "mysecret" | docker secret create db_password -\r
docker service create --secret db_password myapp\r
\r
# ✅ Good: Reading from host environment\r
export DB_PASSWORD="mysecret"\r
docker run -e DB_PASSWORD myapp
`})}),`
`,n.jsx(e.h4,{children:"Environment Variable Validation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`FROM alpine:3.18\r
\r
# Set required environment variables\r
ENV REQUIRED_VAR=""\r
ENV OPTIONAL_VAR="default_value"\r
\r
# Validate required environment variables\r
RUN if [ -z "$REQUIRED_VAR" ]; then \\\r
      echo "ERROR: REQUIRED_VAR must be set" && exit 1; \\\r
    fi\r
\r
# Create validation script\r
COPY validate-env.sh /usr/local/bin/\r
RUN chmod +x /usr/local/bin/validate-env.sh\r
\r
# Validate environment on startup\r
ENTRYPOINT ["/usr/local/bin/validate-env.sh"]\r
CMD ["your-app"]
`})}),`
`,n.jsx(e.h4,{children:"Validation Script Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`#!/bin/sh\r
# validate-env.sh\r
\r
# Required environment variables\r
REQUIRED_VARS="DATABASE_URL REDIS_URL API_KEY"\r
\r
for var in $REQUIRED_VARS; do\r
    eval value=\\$var\r
    if [ -z "$value" ]; then\r
        echo "ERROR: Required environment variable $var is not set"\r
        exit 1\r
    fi\r
done\r
\r
echo "Environment validation passed"\r
exec "$@"
`})}),`
`,n.jsx(e.h3,{children:"Environment Variables in Docker Compose"}),`
`,n.jsx(e.h4,{children:"Basic Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# docker-compose.yml\r
version: '3.8'\r
\r
services:\r
  web:\r
    build: .\r
    environment:\r
      - NODE_ENV=production\r
      - PORT=3000\r
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp\r
    # Or using object syntax\r
    environment:\r
      NODE_ENV: production\r
      PORT: 3000\r
      DATABASE_URL: postgresql://postgres:password@db:5432/myapp\r
\r
  db:\r
    image: postgres:15\r
    environment:\r
      POSTGRES_DB: myapp\r
      POSTGRES_USER: postgres\r
      POSTGRES_PASSWORD: password
`})}),`
`,n.jsx(e.h4,{children:"Using Environment Files with Compose"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# docker-compose.yml\r
version: '3.8'\r
\r
services:\r
  web:\r
    build: .\r
    env_file:\r
      - .env\r
      - .env.local\r
    environment:\r
      - NODE_ENV=\${NODE_ENV:-development}\r
      - DATABASE_URL=postgresql://postgres:\${DB_PASSWORD}@db:5432/\${DB_NAME}\r
\r
  db:\r
    image: postgres:15\r
    env_file: .env.db
`})}),`
`,n.jsx(e.h3,{children:"Dynamic Environment Variables"}),`
`,n.jsx(e.h4,{children:"Runtime Environment Detection"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`FROM node:18-alpine\r
\r
WORKDIR /app\r
COPY package*.json ./\r
RUN npm ci\r
\r
COPY . .\r
\r
# Create dynamic environment script\r
RUN cat > /usr/local/bin/setup-env.sh << 'EOF'\r
#!/bin/sh\r
\r
# Detect environment based on hostname or other factors\r
if [ "$HOSTNAME" = "production-server" ]; then\r
    export NODE_ENV=production\r
    export LOG_LEVEL=warn\r
elif [ "$HOSTNAME" = "staging-server" ]; then\r
    export NODE_ENV=staging\r
    export LOG_LEVEL=info\r
else\r
    export NODE_ENV=development\r
    export LOG_LEVEL=debug\r
fi\r
\r
# Set computed values\r
export BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")\r
export CONTAINER_ID=$(hostname)\r
\r
exec "$@"\r
EOF\r
\r
RUN chmod +x /usr/local/bin/setup-env.sh\r
\r
ENTRYPOINT ["/usr/local/bin/setup-env.sh"]\r
CMD ["npm", "start"]
`})}),`
`,n.jsx(e.h3,{children:"Environment Variable Templates"}),`
`,n.jsx(e.h4,{children:"Configuration Template System"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# config-template.json\r
{\r
  "database": {\r
    "host": "\${DB_HOST}",\r
    "port": "\${DB_PORT}",\r
    "name": "\${DB_NAME}",\r
    "user": "\${DB_USER}",\r
    "password": "\${DB_PASSWORD}"\r
  },\r
  "redis": {\r
    "url": "\${REDIS_URL}"\r
  },\r
  "logging": {\r
    "level": "\${LOG_LEVEL:-info}"\r
  }\r
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`FROM alpine:3.18\r
\r
# Install envsubst for template processing\r
RUN apk add --no-cache gettext\r
\r
COPY config-template.json /app/\r
COPY entrypoint.sh /usr/local/bin/\r
\r
RUN chmod +x /usr/local/bin/entrypoint.sh\r
\r
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`#!/bin/sh\r
# entrypoint.sh\r
\r
# Generate config from template\r
envsubst < /app/config-template.json > /app/config.json\r
\r
# Validate generated config\r
if ! cat /app/config.json | jq empty; then\r
    echo "ERROR: Generated config is not valid JSON"\r
    exit 1\r
fi\r
\r
exec "$@"
`})}),`
`,n.jsx(e.h3,{children:"Environment Variable Debugging"}),`
`,n.jsx(e.h4,{children:"Inspection Commands"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# View environment variables in running container\r
docker exec container_name env\r
\r
# View specific environment variable\r
docker exec container_name printenv NODE_ENV\r
\r
# Debug environment issues\r
docker run --rm -it myapp env\r
docker run --rm -it myapp sh -c 'echo "NODE_ENV=$NODE_ENV"'\r
\r
# Compare environments\r
docker run --env-file .env.dev myapp env > dev-env.txt\r
docker run --env-file .env.prod myapp env > prod-env.txt\r
diff dev-env.txt prod-env.txt
`})}),`
`,n.jsx(e.h3,{children:"Common Environment Patterns"}),`
`,n.jsx(e.h4,{children:"Application Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Web application\r
docker run \\\r
  -e NODE_ENV=production \\\r
  -e PORT=3000 \\\r
  -e SESSION_SECRET=your-session-secret \\\r
  -e DATABASE_URL=postgresql://user:pass@db:5432/app \\\r
  -e REDIS_URL=redis://redis:6379 \\\r
  web-app\r
\r
# Database\r
docker run \\\r
  -e POSTGRES_DB=myapp \\\r
  -e POSTGRES_USER=appuser \\\r
  -e POSTGRES_PASSWORD=secure-password \\\r
  -e POSTGRES_INITDB_ARGS="--encoding=UTF-8 --lc-collate=C --lc-ctype=C" \\\r
  postgres:15\r
\r
# Cache\r
docker run \\\r
  -e REDIS_PASSWORD=cache-password \\\r
  -e REDIS_MAXMEMORY=256mb \\\r
  -e REDIS_MAXMEMORY_POLICY=allkeys-lru \\\r
  redis:7-alpine
`})}),`
`,n.jsx(e.p,{children:"This comprehensive environment variable section covers all aspects from basic usage to advanced patterns, security considerations, and debugging techniques."}),`
`,n.jsx(e.h3,{children:"Security-First Dockerfile"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Use minimal base image\r
FROM gcr.io/distroless/static-debian10\r
\r
# Create non-root user\r
FROM alpine:3.12\r
RUN adduser -D myuser && chown -R myuser /myapp-data\r
\r
# Copy files without changing ownership\r
COPY app-files/ /app\r
\r
# Switch to non-root user\r
USER myuser\r
\r
# Set working directory\r
WORKDIR /app\r
\r
# Expose only necessary ports\r
EXPOSE 8080\r
\r
# Use COPY instead of ADD\r
COPY requirements.txt .\r
\r
# Combine RUN commands to reduce layers\r
RUN apk add --no-cache \\\r
    python3 \\\r
    py3-pip \\\r
    && pip3 install -r requirements.txt \\\r
    && rm -rf /var/cache/apk/*\r
\r
# Set environment variables\r
ENV APP_ENV=production\r
ENV APP_TMP_DATA=/tmp\r
\r
# Health check\r
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\r
  CMD curl -f http://localhost:8080/health || exit 1\r
\r
# Default command\r
CMD ["python3", "app.py"]
`})}),`
`,n.jsx(e.h3,{children:"Multi-stage Build Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Build stage\r
FROM golang:1.19-alpine as builder\r
WORKDIR /app\r
COPY go.mod go.sum ./\r
RUN go mod download\r
COPY . .\r
RUN CGO_ENABLED=0 GOOS=linux go build -o main .\r
\r
# Final stage\r
FROM gcr.io/distroless/static-debian11\r
COPY --from=builder /app/main /\r
USER nonroot:nonroot\r
EXPOSE 8080\r
ENTRYPOINT ["/main"]
`})}),`
`,n.jsx(e.h3,{children:"Dockerfile Instructions Reference"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Build-time instructions\r
FROM ubuntu:20.04           # Base image\r
COPY src/ /app/            # Copy files\r
RUN apt-get update         # Execute commands\r
EXPOSE 8080               # Document port\r
ENV NODE_ENV=production   # Environment variable\r
WORKDIR /app              # Set working directory\r
ARG BUILD_VERSION         # Build argument\r
\r
# Runtime instructions\r
CMD ["npm", "start"]      # Default command\r
ENTRYPOINT ["/app/start"] # Fixed entry point\r
USER appuser              # Run as user\r
VOLUME ["/data"]          # Mount point
`})}),`
`,n.jsx(e.h2,{children:"Network Configuration"}),`
`,n.jsx(e.h3,{children:"Network Management"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# List networks\r
docker network ls\r
\r
# Create custom network\r
docker network create my-network\r
\r
# Run container in custom network\r
docker run -d --name web --network my-network nginx\r
\r
# Connect container to network\r
docker network connect my-network container_name\r
\r
# Inspect network\r
docker network inspect my-network
`})}),`
`,n.jsx(e.h2,{children:"Security Best Practices"}),`
`,n.jsx(e.h3,{children:"Rootless Containers"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Bad practice - running as root\r
FROM ubuntu:20.04\r
COPY app /app\r
CMD ["/app"]\r
\r
# Good practice - non-root user\r
FROM ubuntu:20.04\r
RUN useradd -m -u 1000 appuser\r
COPY --chown=root:root app /app\r
RUN chmod 755 /app\r
USER appuser\r
CMD ["/app"]
`})}),`
`,n.jsx(e.h3,{children:"Secure Image Building"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Build with security context\r
docker build --no-cache -t secure-app .\r
\r
# Scan image for vulnerabilities\r
docker scan secure-app\r
\r
# Run with limited capabilities\r
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE app\r
\r
# Run with read-only filesystem\r
docker run --read-only --tmpfs /tmp app
`})}),`
`,n.jsx(e.h3,{children:"Content Trust"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Enable Docker Content Trust\r
export DOCKER_CONTENT_TRUST=1\r
\r
# Sign and push image\r
docker push myregistry/myapp:latest\r
\r
# Pull with signature verification\r
docker pull myregistry/myapp:latest
`})}),`
`,n.jsx(e.h2,{children:"Advanced Operations"}),`
`,n.jsx(e.h3,{children:"Docker Compose Integration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# docker-compose.yml\r
version: '3.8'\r
services:\r
  web:\r
    build: .\r
    ports:\r
      - "80:8080"\r
    volumes:\r
      - .:/app\r
    environment:\r
      - NODE_ENV=development\r
    user: "1000:1000"\r
    read_only: true\r
    tmpfs:\r
      - /tmp
`})}),`
`,n.jsx(e.h3,{children:"Health Checks"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Container with health check\r
docker run -d \\\r
  --name healthy-app \\\r
  --health-cmd="curl -f http://localhost:8080/health || exit 1" \\\r
  --health-interval=30s \\\r
  --health-timeout=10s \\\r
  --health-retries=3 \\\r
  myapp:latest
`})}),`
`,n.jsx(e.h3,{children:"Resource Limits"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Run with resource constraints\r
docker run -d \\\r
  --name limited-app \\\r
  --memory=512m \\\r
  --cpus=1.5 \\\r
  --restart=unless-stopped \\\r
  myapp:latest
`})}),`
`,n.jsx(e.h2,{children:"Best Practices Summary"}),`
`,n.jsx(e.h3,{children:"Image Optimization"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use multi-stage builds to reduce image size"}),`
`,n.jsx(e.li,{children:"Choose minimal base images (distroless, alpine)"}),`
`,n.jsx(e.li,{children:"Combine RUN commands to minimize layers"}),`
`,n.jsx(e.li,{children:"Use .dockerignore to exclude unnecessary files"}),`
`]}),`
`,n.jsx(e.h3,{children:"Security"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Never run containers as root"}),`
`,n.jsx(e.li,{children:"Scan images for vulnerabilities"}),`
`,n.jsxs(e.li,{children:["Use specific image tags, not ",n.jsx(e.code,{children:"latest"})]}),`
`,n.jsx(e.li,{children:"Keep base images updated"}),`
`,n.jsx(e.li,{children:"Enable Docker Content Trust"}),`
`]}),`
`,n.jsx(e.h3,{children:"Performance"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Order Dockerfile instructions by change frequency"}),`
`,n.jsx(e.li,{children:"Use build cache effectively"}),`
`,n.jsx(e.li,{children:"Minimize build context size"}),`
`,n.jsx(e.li,{children:"Use appropriate restart policies"}),`
`]}),`
`,n.jsx(e.h3,{children:"Monitoring"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Implement health checks"}),`
`,n.jsx(e.li,{children:"Use structured logging"}),`
`,n.jsx(e.li,{children:"Monitor resource usage"}),`
`,n.jsx(e.li,{children:"Set up proper log rotation"}),`
`]}),`
`,n.jsx(e.h2,{children:"Common Patterns"}),`
`,n.jsx(e.h3,{children:"Development Workflow"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Development setup\r
docker build -t myapp:dev .\r
docker run -d -p 3000:3000 -v $(pwd):/app --name dev-container myapp:dev\r
\r
# Production deployment\r
docker build -t myapp:prod --target production .\r
docker run -d -p 80:8080 --restart=always --name prod-container myapp:prod
`})}),`
`,n.jsx(e.h3,{children:"Debugging Containers"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Debug running container\r
docker exec -it container_name /bin/sh\r
\r
# Copy files from container\r
docker cp container_name:/app/logs ./logs\r
\r
# View container resource usage\r
docker stats container_name\r
\r
# Inspect container configuration\r
docker inspect container_name
`})})]})}function c(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{c as default,t as frontmatter};
