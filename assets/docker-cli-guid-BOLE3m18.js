import{j as n}from"./index-DD9ztbhs.js";const o={title:"Docker CLI Complete Guide",description:"The guide follows modern Docker practices with real-world examples and security-first approaches, making it suitable for both development and production environments."};function i(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#environment-setup",children:"Environment Setup"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#container-management",children:"Container Management"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#image-operations",children:"Image Operations"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#volume-management",children:"Volume Management"})}),`
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
`,n.jsx(e.h2,{children:"Dockerfile Best Practices"}),`
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
`})})]})}function s(r={}){const{wrapper:e}=r.components||{};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{s as default,o as frontmatter};
