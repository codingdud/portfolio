import{u as i,j as n}from"./index-Bq10NSqr.js";const a={title:"Linux Shell Scripting Essentials for DevOps",description:"A comprehensive guide to mastering shell scripting for DevOps engineers. This guide covers everything from basic commands to advanced scripting techniques with practical examples."};function s(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h2,{children:"Table of Contents"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#introduction-to-shell-scripting",children:"Introduction to Shell Scripting"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#shell-script-fundamentals",children:"Shell Script Fundamentals"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#io-redirection-pipes-and-filters",children:"I/O, Redirection, Pipes, and Filters"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#control-flow-and-advanced-scripting",children:"Control Flow and Advanced Scripting"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#modularization-and-debugging",children:"Modularization and Debugging"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#environment-customization",children:"Environment Customization"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#file-system-operations",children:"File System Operations"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#process-management",children:"Process Management"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#task-scheduling-and-automation",children:"Task Scheduling and Automation"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#advanced-devops-techniques",children:"Advanced DevOps Techniques"})}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Introduction to Shell Scripting"}),`
`,n.jsx(r.h3,{children:"What is Shell Scripting?"}),`
`,n.jsxs(r.p,{children:["A ",n.jsx(r.strong,{children:"shell"})," is the command-line interface between the user and the Linux OS kernel. Shell scripting involves writing plain-text files containing a series of shell commands that are executed in order by the shell interpreter."]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Popular Shells:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"sh"})," (Bourne Shell)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"bash"})," (Bourne Again Shell) - Default on most Linux systems"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"zsh"})," (Z Shell)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"csh"})," (C Shell)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"ksh"})," (Korn Shell)"]}),`
`]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Why Shell Scripting for DevOps?"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Automate repetitive tasks"}),`
`,n.jsx(r.li,{children:"Manage system operations"}),`
`,n.jsx(r.li,{children:"Create complex workflows"}),`
`,n.jsx(r.li,{children:"Glue together different tools and services"}),`
`,n.jsx(r.li,{children:"Infrastructure as Code (IaC)"}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Shell Script Fundamentals"}),`
`,n.jsx(r.h3,{children:"Creating and Running Scripts"}),`
`,n.jsxs(r.p,{children:["Every shell script should start with a ",n.jsx(r.strong,{children:"shebang"})," (",n.jsx(r.code,{children:"#!"}),"):"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
echo "Hello, DevOps World!"
`})}),`
`,n.jsx(r.p,{children:"Make the script executable and run it:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`chmod u+x script.sh\r
./script.sh
`})}),`
`,n.jsx(r.h3,{children:"Variables and Data Types"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Basic Variables:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# No spaces around =\r
name="DevOps"\r
version=1.0\r
echo "Welcome to $name v$version"
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Reading User Input:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`read -p "Enter your deployment environment: " env\r
echo "Deploying to: $env"
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Constants:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`readonly CONFIG_FILE="/etc/myapp/config.yml"\r
declare -r MAX_RETRIES=3
`})}),`
`,n.jsx(r.h3,{children:"Built-in Shell Variables"}),`
`,n.jsx(r.p,{children:"Essential variables for DevOps scripts:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`echo "Home directory: $HOME"\r
echo "Current directory: $PWD"\r
echo "Search path: $PATH"\r
echo "Bash version: $BASH_VERSION"\r
echo "Last command exit code: $?"\r
echo "Process ID: $$"\r
echo "Script name: $0"\r
echo "All arguments: $@"\r
echo "Number of arguments: $#"
`})}),`
`,n.jsx(r.h3,{children:"Operators"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Arithmetic Operators:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`a=10\r
b=3\r
echo $((a + b))   # Addition: 13\r
echo $((a - b))   # Subtraction: 7\r
echo $((a * b))   # Multiplication: 30\r
echo $((a / b))   # Division: 3\r
echo $((a % b))   # Modulus: 1\r
echo $((a ** b))  # Exponentiation: 1000
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Comparison Operators:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Numeric comparisons\r
if [ $a -eq $b ]; then echo "Equal"; fi\r
if [ $a -ne $b ]; then echo "Not equal"; fi\r
if [ $a -gt $b ]; then echo "Greater than"; fi\r
if [ $a -ge $b ]; then echo "Greater or equal"; fi\r
if [ $a -lt $b ]; then echo "Less than"; fi\r
if [ $a -le $b ]; then echo "Less or equal"; fi\r
\r
# String comparisons\r
str1="hello"\r
str2="world"\r
if [ "$str1" = "$str2" ]; then echo "Strings equal"; fi\r
if [ "$str1" != "$str2" ]; then echo "Strings not equal"; fi\r
if [ -n "$str1" ]; then echo "String not empty"; fi\r
if [ -z "$str1" ]; then echo "String is empty"; fi
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Logical Operators:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# AND, OR, NOT\r
if [ $a -gt 5 ] && [ $b -lt 10 ]; then\r
    echo "Both conditions true"\r
fi\r
\r
if [ $a -gt 20 ] || [ $b -lt 5 ]; then\r
    echo "At least one condition true"\r
fi\r
\r
if ! [ $a -eq 0 ]; then\r
    echo "a is not zero"\r
fi
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"I/O, Redirection, Pipes, and Filters"}),`
`,n.jsx(r.h3,{children:"Standard Streams"}),`
`,n.jsx(r.p,{children:"Every process has three standard streams:"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Stream"}),n.jsx("th",{children:"File Descriptor"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"stdin"}),n.jsx("td",{children:"0"}),n.jsx("td",{children:"Standard input"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"stdout"}),n.jsx("td",{children:"1"}),n.jsx("td",{children:"Standard output"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"stderr"}),n.jsx("td",{children:"2"}),n.jsx("td",{children:"Standard error"})]})]})]}),`
`,n.jsx(r.h3,{children:"Redirection"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Output Redirection:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-sh",children:`# Redirect stdout to file (overwrite)\r
echo "Deployment log" > deploy.log\r
\r
# Redirect stdout to file (append)\r
echo "Another entry" >> deploy.log\r
\r
# Redirect stderr to file\r
command_that_fails 2> error.log\r
\r
# Redirect both stdout and stderr\r
command > output.log 2>&1\r
\r
# Redirect stderr to stdout\r
command 2>&1 | tee combined.log
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Input Redirection:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Read from file\r
mysql -u user -p database < schema.sql\r
\r
# Here document\r
cat << EOF > config.yml\r
database:\r
  host: localhost\r
  port: 3306\r
EOF
`})}),`
`,n.jsx(r.h3,{children:"Pipes and Pipelines"}),`
`,n.jsxs(r.p,{children:["Connect commands with pipes (",n.jsx(r.code,{children:"|"}),"):"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Monitor error logs\r
tail -f /var/log/nginx/error.log | grep "404" | head -10\r
\r
# Process system information\r
ps aux | grep nginx | awk '{print $2}' | xargs kill\r
\r
# Analyze disk usage\r
du -sh /var/log/* | sort -hr | head -5
`})}),`
`,n.jsx(r.h3,{children:"Filters and Text Processing"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"grep - Pattern Searching:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Case-insensitive search\r
grep -i "error" /var/log/syslog\r
\r
# Show line numbers\r
grep -n "failed" /var/log/auth.log\r
\r
# Recursive search\r
grep -r "TODO" /opt/myapp/\r
\r
# Count matches\r
grep -c "200" /var/log/nginx/access.log\r
\r
# Invert match (show non-matching lines)\r
grep -v "INFO" /var/log/application.log
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"sed - Stream Editor:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Replace text\r
sed 's/old_domain/new_domain/g' config.txt\r
\r
# Delete lines containing pattern\r
sed '/^#/d' config.conf\r
\r
# Insert line after pattern\r
sed '/\\[database\\]/a host=localhost' config.ini\r
\r
# In-place editing\r
sed -i 's/DEBUG/INFO/g' /etc/myapp/config.conf
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"awk - Pattern Processing:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Print specific columns\r
awk '{print $1, $4}' /var/log/nginx/access.log\r
\r
# Process CSV files\r
awk -F',' '{print $2}' users.csv\r
\r
# Calculate totals\r
awk '{sum += $3} END {print "Total:", sum}' numbers.txt\r
\r
# Conditional processing\r
awk '$9 >= 400 {print $0}' /var/log/nginx/access.log
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"sort and uniq:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Sort and remove duplicates\r
sort users.txt | uniq\r
\r
# Count occurrences\r
sort /var/log/nginx/access.log | uniq -c | sort -nr\r
\r
# Sort by numeric value\r
sort -n numbers.txt\r
\r
# Sort by specific field\r
sort -k2 -n data.txt
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"tr - Character Translation:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Convert to uppercase\r
tr '[:lower:]' '[:upper:]' < file.txt\r
\r
# Remove characters\r
tr -d '[:space:]' < file.txt\r
\r
# Replace characters\r
tr ' ' '_' < filename.txt
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"head and tail:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# View first 20 lines\r
head -20 /var/log/syslog\r
\r
# View last 50 lines\r
tail -50 /var/log/nginx/error.log\r
\r
# Follow log files (real-time)\r
tail -f /var/log/application.log\r
\r
# Follow multiple files\r
tail -f /var/log/nginx/*.log
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"cut - Column Extraction:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Extract by delimiter\r
cut -d':' -f1,3 /etc/passwd\r
\r
# Extract by character position\r
cut -c1-10 file.txt\r
\r
# Extract username from /etc/passwd\r
cut -d':' -f1 /etc/passwd | sort
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Control Flow and Advanced Scripting"}),`
`,n.jsx(r.h3,{children:"Exit Codes"}),`
`,n.jsxs(r.p,{children:["Every command returns an exit code (",n.jsx(r.code,{children:"$?"}),"). 0 means success, non-zero indicates failure:"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
service nginx status\r
if [ $? -eq 0 ]; then\r
    echo "Nginx is running"\r
else\r
    echo "Nginx is not running"\r
    exit 1\r
fi\r
\r
# Explicit exit\r
exit 0  # Success\r
exit 1  # General error\r
exit 2  # Misuse of shell command
`})}),`
`,n.jsx(r.h3,{children:"Testing and Conditionals"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"File Tests:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`if [ -f "/etc/nginx/nginx.conf" ]; then\r
    echo "Nginx config exists"\r
fi\r
\r
if [ -d "/var/log/nginx" ]; then\r
    echo "Nginx log directory exists"\r
fi\r
\r
if [ -r "/etc/passwd" ]; then\r
    echo "Can read passwd file"\r
fi\r
\r
if [ -w "/tmp" ]; then\r
    echo "Can write to tmp"\r
fi\r
\r
if [ -x "/usr/bin/docker" ]; then\r
    echo "Docker is executable"\r
fi
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Advanced Test Conditions:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# File is newer than another\r
if [ file1.txt -nt file2.txt ]; then\r
    echo "file1 is newer"\r
fi\r
\r
# File is older than another\r
if [ file1.txt -ot file2.txt ]; then\r
    echo "file1 is older"\r
fi\r
\r
# Files are the same\r
if [ file1.txt -ef file2.txt ]; then\r
    echo "Files are the same"\r
fi
`})}),`
`,n.jsx(r.h3,{children:"Conditional Statements"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"if/elif/else:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
check_service() {\r
    local service=$1\r
    \r
    if systemctl is-active --quiet $service; then\r
        echo "$service is running"\r
        return 0\r
    elif systemctl is-enabled --quiet $service; then\r
        echo "$service is enabled but not running"\r
        return 1\r
    else\r
        echo "$service is disabled"\r
        return 2\r
    fi\r
}\r
\r
check_service "nginx"
`})}),`
`,n.jsx(r.h3,{children:"Arrays"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Indexed Arrays:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Declare array\r
services=("nginx" "mysql" "redis" "docker")\r
\r
# Access elements\r
echo "First service: \${services[0]}"\r
echo "All services: \${services[@]}"\r
echo "Number of services: \${#services[@]}"\r
\r
# Add element\r
services+=("mongodb")\r
\r
# Loop through array\r
for service in "\${services[@]}"; do\r
    echo "Checking $service..."\r
    systemctl status $service\r
done
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Associative Arrays (Bash 4+):"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Declare associative array\r
declare -A config\r
config[database_host]="localhost"\r
config[database_port]="3306"\r
config[database_name]="myapp"\r
\r
# Access values\r
echo "DB Host: \${config[database_host]}"\r
\r
# Get all keys\r
for key in "\${!config[@]}"; do\r
    echo "$key = \${config[$key]}"\r
done
`})}),`
`,n.jsx(r.h3,{children:"Loops"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"for Loop:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Loop through files\r
for logfile in /var/log/*.log; do\r
    echo "Processing $logfile"\r
    gzip "$logfile"\r
done\r
\r
# Loop through range\r
for i in {1..10}; do\r
    echo "Iteration $i"\r
done\r
\r
# C-style for loop\r
for ((i=1; i<=5; i++)); do\r
    echo "Counter: $i"\r
done
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"while Loop:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Monitor disk usage\r
while true; do\r
    usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')\r
    if [ $usage -gt 80 ]; then\r
        echo "WARNING: Disk usage is \${usage}%"\r
        # Send alert\r
    fi\r
    sleep 300  # Check every 5 minutes\r
done
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"until Loop:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Wait for service to be ready\r
until curl -s http://localhost:8080/health > /dev/null; do\r
    echo "Waiting for service to be ready..."\r
    sleep 5\r
done\r
echo "Service is ready!"
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"select Loop (Menus):"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
PS3="Select an action: "\r
select action in "Deploy" "Rollback" "Status" "Exit"; do\r
    case $action in\r
        "Deploy")\r
            echo "Starting deployment..."\r
            break\r
            ;;\r
        "Rollback")\r
            echo "Rolling back..."\r
            break\r
            ;;\r
        "Status")\r
            echo "Checking status..."\r
            ;;\r
        "Exit")\r
            exit 0\r
            ;;\r
        *)\r
            echo "Invalid option"\r
            ;;\r
    esac\r
done
`})}),`
`,n.jsx(r.h3,{children:"Case Statements"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
environment=$1\r
\r
case $environment in\r
    "dev"|"development")\r
        echo "Deploying to development"\r
        CONFIG_FILE="/etc/myapp/dev.conf"\r
        ;;\r
    "staging"|"stage")\r
        echo "Deploying to staging"\r
        CONFIG_FILE="/etc/myapp/staging.conf"\r
        ;;\r
    "prod"|"production")\r
        echo "Deploying to production"\r
        CONFIG_FILE="/etc/myapp/prod.conf"\r
        ;;\r
    *)\r
        echo "Unknown environment: $environment"\r
        echo "Usage: $0 {dev|staging|prod}"\r
        exit 1\r
        ;;\r
esac
`})}),`
`,n.jsx(r.h3,{children:"Functions"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Basic Functions:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
\r
# Function definition\r
deploy_app() {\r
    local app_name=$1\r
    local version=$2\r
    local environment=$3\r
    \r
    echo "Deploying $app_name version $version to $environment"\r
    \r
    # Validation\r
    if [ -z "$app_name" ] || [ -z "$version" ] || [ -z "$environment" ]; then\r
        echo "Error: Missing required parameters"\r
        return 1\r
    fi\r
    \r
    # Deployment logic here\r
    echo "Deployment completed successfully"\r
    return 0\r
}\r
\r
# Function with return values\r
get_container_status() {\r
    local container_name=$1\r
    local status=$(docker inspect --format='{{.State.Status}}' $container_name 2>/dev/null)\r
    \r
    if [ $? -eq 0 ]; then\r
        echo $status\r
        return 0\r
    else\r
        echo "not_found"\r
        return 1\r
    fi\r
}\r
\r
# Usage\r
deploy_app "myapp" "v1.2.3" "production"\r
\r
status=$(get_container_status "nginx")\r
echo "Container status: $status"
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Modularization and Debugging"}),`
`,n.jsx(r.h3,{children:"Modularizing Scripts"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Creating Utility Functions:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# utils.sh\r
#!/bin/bash\r
\r
# Logging functions\r
log_info() {\r
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: $1" | tee -a /var/log/deploy.log\r
}\r
\r
log_error() {\r
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" | tee -a /var/log/deploy.log >&2\r
}\r
\r
log_warn() {\r
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] WARN: $1" | tee -a /var/log/deploy.log\r
}\r
\r
# Service management\r
start_service() {\r
    local service_name=$1\r
    log_info "Starting service: $service_name"\r
    \r
    if systemctl start $service_name; then\r
        log_info "Service $service_name started successfully"\r
        return 0\r
    else\r
        log_error "Failed to start service: $service_name"\r
        return 1\r
    fi\r
}\r
\r
# Health check\r
health_check() {\r
    local url=$1\r
    local max_attempts=\${2:-5}\r
    local attempt=1\r
    \r
    while [ $attempt -le $max_attempts ]; do\r
        log_info "Health check attempt $attempt/$max_attempts"\r
        \r
        if curl -s -o /dev/null -w "%{http_code}" $url | grep -q "200"; then\r
            log_info "Health check passed"\r
            return 0\r
        fi\r
        \r
        sleep 5\r
        ((attempt++))\r
    done\r
    \r
    log_error "Health check failed after $max_attempts attempts"\r
    return 1\r
}
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Using Modular Scripts:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# main-deploy.sh\r
\r
# Source utility functions\r
source ./utils.sh\r
\r
# Main deployment script\r
main() {\r
    log_info "Starting deployment process"\r
    \r
    # Stop services\r
    start_service "nginx" || exit 1\r
    \r
    # Deploy application\r
    log_info "Deploying application..."\r
    \r
    # Health check\r
    health_check "http://localhost:8080/health" 10\r
    \r
    log_info "Deployment completed successfully"\r
}\r
\r
# Run main function\r
main "$@"
`})}),`
`,n.jsx(r.h3,{children:"Command Line Arguments"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Processing Arguments:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
\r
# Default values\r
ENVIRONMENT="dev"\r
VERSION=""\r
VERBOSE=false\r
DRY_RUN=false\r
\r
# Function to show usage\r
usage() {\r
    cat << EOF\r
Usage: $0 [OPTIONS]\r
\r
Options:\r
    -e, --environment ENV    Target environment (dev, staging, prod)\r
    -v, --version VERSION    Application version to deploy\r
    -V, --verbose           Enable verbose output\r
    -d, --dry-run           Show what would be done without executing\r
    -h, --help              Show this help message\r
\r
Examples:\r
    $0 -e prod -v v1.2.3\r
    $0 --environment staging --version v1.2.3 --verbose\r
EOF\r
}\r
\r
# Parse command line arguments\r
while [[ $# -gt 0 ]]; do\r
    case $1 in\r
        -e|--environment)\r
            ENVIRONMENT="$2"\r
            shift 2\r
            ;;\r
        -v|--version)\r
            VERSION="$2"\r
            shift 2\r
            ;;\r
        -V|--verbose)\r
            VERBOSE=true\r
            shift\r
            ;;\r
        -d|--dry-run)\r
            DRY_RUN=true\r
            shift\r
            ;;\r
        -h|--help)\r
            usage\r
            exit 0\r
            ;;\r
        *)\r
            echo "Unknown option: $1"\r
            usage\r
            exit 1\r
            ;;\r
    esac\r
done\r
\r
# Validation\r
if [ -z "$VERSION" ]; then\r
    echo "Error: Version is required"\r
    usage\r
    exit 1\r
fi\r
\r
# Use the arguments\r
if [ "$VERBOSE" = true ]; then\r
    echo "Environment: $ENVIRONMENT"\r
    echo "Version: $VERSION"\r
    echo "Dry Run: $DRY_RUN"\r
fi
`})}),`
`,n.jsx(r.h3,{children:"Debugging Techniques"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Debug Mode:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
\r
# Enable debug mode\r
set -x  # Print commands as they're executed\r
set -e  # Exit on any error\r
set -u  # Exit on undefined variables\r
set -o pipefail  # Exit on pipe failures\r
\r
# Or combine them\r
set -euxo pipefail\r
\r
# Debug function\r
debug() {\r
    if [ "\${DEBUG:-}" = "true" ]; then\r
        echo "DEBUG: $1" >&2\r
    fi\r
}\r
\r
# Usage\r
DEBUG=true debug "Starting deployment process"
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Error Handling:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
\r
# Error handling function\r
error_handler() {\r
    local line_number=$1\r
    local error_code=$2\r
    echo "Error on line $line_number: Command exited with status $error_code"\r
    cleanup\r
    exit $error_code\r
}\r
\r
# Cleanup function\r
cleanup() {\r
    echo "Performing cleanup..."\r
    # Remove temporary files\r
    rm -f /tmp/deploy_*\r
    # Stop background processes\r
    jobs -p | xargs -r kill\r
}\r
\r
# Set error trap\r
trap 'error_handler \${LINENO} $?' ERR\r
trap cleanup EXIT\r
\r
# Your script logic here\r
echo "Starting deployment..."
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Logging and Monitoring:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
\r
# Create log directory\r
LOG_DIR="/var/log/myapp"\r
mkdir -p $LOG_DIR\r
\r
# Set up logging\r
exec 1> >(tee -a "$LOG_DIR/deployment.log")\r
exec 2> >(tee -a "$LOG_DIR/deployment.log" >&2)\r
\r
# Function to log with timestamp\r
log() {\r
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"\r
}\r
\r
# Performance monitoring\r
start_time=$(date +%s)\r
\r
# Your script logic here\r
log "Starting deployment..."\r
\r
# Calculate execution time\r
end_time=$(date +%s)\r
execution_time=$((end_time - start_time))\r
log "Deployment completed in \${execution_time} seconds"
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Environment Customization"}),`
`,n.jsx(r.h3,{children:"Environment Variables"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Managing Environment Variables:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# View all environment variables\r
printenv\r
env\r
\r
# Set environment variables\r
export DATABASE_URL="postgresql://user:pass@localhost/db"\r
export LOG_LEVEL="INFO"\r
export NODE_ENV="production"\r
\r
# Unset variables\r
unset OLD_VARIABLE\r
\r
# Check if variable is set\r
if [ -n "\${DATABASE_URL:-}" ]; then\r
    echo "Database URL is set"\r
fi\r
\r
# Use default values\r
DATABASE_HOST=\${DATABASE_HOST:-"localhost"}\r
DATABASE_PORT=\${DATABASE_PORT:-5432}
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Environment Configuration Files:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# .env file\r
#!/bin/bash\r
# Environment configuration for MyApp\r
\r
# Database settings\r
export DB_HOST="localhost"\r
export DB_PORT="5432"\r
export DB_NAME="myapp"\r
export DB_USER="myapp_user"\r
\r
# Application settings\r
export APP_ENV="production"\r
export LOG_LEVEL="INFO"\r
export MAX_CONNECTIONS="100"\r
\r
# External services\r
export REDIS_URL="redis://localhost:6379"\r
export ELASTICSEARCH_URL="http://localhost:9200"
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Loading Environment:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Load environment variables\r
if [ -f ".env" ]; then\r
    source .env\r
    echo "Environment loaded from .env"\r
fi\r
\r
# Validate required variables\r
required_vars=("DB_HOST" "DB_PORT" "DB_NAME")\r
for var in "\${required_vars[@]}"; do\r
    if [ -z "\${!var:-}" ]; then\r
        echo "Error: Required environment variable $var is not set"\r
        exit 1\r
    fi\r
done
`})}),`
`,n.jsx(r.h3,{children:"Bash Startup Files"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Understanding Bash Startup Files:"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"File"}),n.jsx("th",{children:"When Executed"}),n.jsx("th",{children:"Purpose"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"~/.bashrc"})}),n.jsx("td",{children:"Interactive non-login shell"}),n.jsx("td",{children:"Aliases, functions, shell options"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"~/.bash_profile"})}),n.jsx("td",{children:"Login shell"}),n.jsx("td",{children:"Environment variables, PATH"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"~/.profile"})}),n.jsx("td",{children:"Login shell (fallback)"}),n.jsx("td",{children:"POSIX-compliant settings"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"~/.bash_logout"})}),n.jsx("td",{children:"Shell exit"}),n.jsx("td",{children:"Cleanup tasks"})]})]})]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Sample ~/.bashrc for DevOps:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# ~/.bashrc\r
\r
# Source global definitions\r
if [ -f /etc/bashrc ]; then\r
    . /etc/bashrc\r
fi\r
\r
# User specific environment\r
export PATH="$HOME/bin:$HOME/.local/bin:$PATH"\r
export EDITOR="vim"\r
\r
# DevOps aliases\r
alias ll='ls -alF'\r
alias la='ls -A'\r
alias l='ls -CF'\r
alias grep='grep --color=auto'\r
alias k='kubectl'\r
alias d='docker'\r
alias dc='docker-compose'\r
alias tf='terraform'\r
\r
# Git aliases\r
alias gs='git status'\r
alias ga='git add'\r
alias gc='git commit'\r
alias gp='git push'\r
alias gl='git log --oneline'\r
\r
# System monitoring\r
alias ports='netstat -tuln'\r
alias procs='ps aux | grep -v grep'\r
alias meminfo='free -h'\r
alias diskinfo='df -h'\r
\r
# Functions\r
kexec() {\r
    kubectl exec -it $1 -- /bin/bash\r
}\r
\r
dexec() {\r
    docker exec -it $1 /bin/bash\r
}\r
\r
# Custom prompt with git branch\r
parse_git_branch() {\r
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/ (\\1)/'\r
}\r
\r
export PS1="\\u@\\h:\\w\\[\\033[32m\\]\\$(parse_git_branch)\\[\\033[00m\\]$ "\r
\r
# History settings\r
export HISTSIZE=10000\r
export HISTFILESIZE=20000\r
export HISTCONTROL=ignoredups:erasedups\r
shopt -s histappend
`})}),`
`,n.jsx(r.h3,{children:"Command History"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"History Management:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# View history\r
history\r
\r
# Search history (Ctrl + R)\r
# Repeat last command\r
!!\r
\r
# Repeat command by number\r
!123\r
\r
# Repeat last command starting with 'docker'\r
!docker\r
\r
# Clear history\r
history -c\r
\r
# Delete specific history entry\r
history -d 123
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"File System Operations"}),`
`,n.jsx(r.h3,{children:"File Operations"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Basic File Operations:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Create files\r
touch file.txt\r
echo "content" > file.txt\r
\r
# View files\r
cat file.txt          # Display entire file\r
less file.txt         # Paginated view\r
head -n 10 file.txt   # First 10 lines\r
tail -n 10 file.txt   # Last 10 lines\r
tail -f file.txt      # Follow file changes\r
\r
# Copy files\r
cp source.txt dest.txt\r
cp -r source_dir/ dest_dir/\r
cp -p file.txt backup.txt  # Preserve attributes\r
\r
# Move/rename files\r
mv old_name.txt new_name.txt\r
mv file.txt /path/to/destination/\r
\r
# Delete files\r
rm file.txt\r
rm -rf directory/     # Recursive delete (be careful!)\r
rm -i file.txt       # Interactive delete\r
\r
# Find files\r
find . -name "*.log"\r
find /var/log -type f -size +100M  # Files larger than 100MB\r
find . -name "*.txt" -exec grep "pattern" {} \\;
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Advanced File Operations:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Compare files\r
diff file1.txt file2.txt\r
diff -u file1.txt file2.txt    # Unified format\r
cmp file1.txt file2.txt        # Binary comparison\r
\r
# File permissions\r
chmod 755 script.sh            # rwxr-xr-x\r
chmod u+x script.sh           # Add execute for user\r
chmod go-w file.txt           # Remove write for group and others\r
chown user:group file.txt     # Change ownership\r
chgrp group file.txt          # Change group\r
\r
# File attributes\r
stat file.txt                 # Detailed file information\r
file file.txt                 # File type\r
du -sh directory/             # Directory size
`})}),`
`,n.jsx(r.h3,{children:"Links and Special Files"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Creating Links:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Soft (symbolic) link\r
ln -s /path/to/original /path/to/link\r
\r
# Hard link\r
ln /path/to/original /path/to/hardlink\r
\r
# Example: Link configuration files\r
ln -s /opt/myapp/config/prod.conf /etc/myapp/config.conf
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Working with Special Files:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Named pipes (FIFOs)\r
mkfifo mypipe\r
echo "data" > mypipe &\r
cat mypipe\r
\r
# Device files\r
ls -l /dev/null\r
ls -l /dev/zero\r
ls -l /dev/random\r
\r
# Temporary files\r
temp_file=$(mktemp)\r
temp_dir=$(mktemp -d)\r
echo "data" > $temp_file\r
# Clean up\r
rm $temp_file\r
rm -rf $temp_dir
`})}),`
`,n.jsx(r.h3,{children:"File Compression and Archives"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"tar Archives:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Create archive\r
tar -czf backup.tar.gz /path/to/backup/\r
tar -cjf backup.tar.bz2 /path/to/backup/\r
\r
# Extract archive\r
tar -xzf backup.tar.gz\r
tar -xjf backup.tar.bz2\r
\r
# List archive contents\r
tar -tzf backup.tar.gz\r
tar -tjf backup.tar.bz2\r
\r
# Extract specific files\r
tar -xzf backup.tar.gz specific/file.txt
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Compression Tools:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# gzip\r
gzip file.txt          # Creates file.txt.gz\r
gunzip file.txt.gz     # Extracts to file.txt\r
\r
# zip\r
zip archive.zip file1.txt file2.txt\r
unzip archive.zip\r
\r
# Advanced backup script\r
#!/bin/bash\r
BACKUP_DIR="/backup"\r
DATE=$(date +%Y%m%d_%H%M%S)\r
BACKUP_FILE="$BACKUP_DIR/backup_$DATE.tar.gz"\r
\r
tar -czf $BACKUP_FILE \\\r
    --exclude='*.log' \\\r
    --exclude='tmp/*' \\\r
    /opt/myapp/\r
\r
echo "Backup created: $BACKUP_FILE"
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{children:"Process Management"}),`
`,n.jsx(r.h3,{children:"Listing and Monitoring Processes"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Process Information:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# List all processes\r
ps aux\r
ps -ef\r
\r
# Process tree\r
pstree\r
\r
# Real-time monitoring\r
top\r
htop    # Enhanced version\r
\r
# Find processes by name\r
pgrep nginx\r
pgrep -f "python.*myapp"\r
\r
# Process information\r
ps -p 1234    # Specific process ID\r
ps -C nginx   # Processes by command name
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Advanced Process Monitoring:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`#!/bin/bash\r
# Process monitoring script\r
\r
monitor_process() {\r
    local process_name=$1\r
    local max_memory=\${2:-500}  # MB\r
    local max_cpu=\${3:-80}      # Percentage\r
    \r
    while true; do\r
        # Get process stats\r
        pid=$(pgrep -f $process_name | head -1)\r
        \r
        if [ -z "$pid" ]; then\r
            echo "Process $process_name not found"\r
            sleep 60\r
            continue\r
        fi\r
        \r
        # Get memory usage (in KB)\r
        memory_kb=$(ps -p $pid -o rss= 2>/dev/null)\r
        memory_mb=$((memory_kb / 1024))\r
        \r
        # Get CPU usage\r
        cpu_percent=$(ps -p $pid -o %cpu= 2>/dev/null)\r
        \r
        echo "Process: $process_name (PID: $pid)"\r
        echo "Memory: \${memory_mb}MB, CPU: \${cpu_percent}%"\r
        \r
        # Check thresholds\r
        if [ $memory_mb -gt $max_memory ]; then\r
            echo "WARNING: Memory usage exceeds \${max_memory}MB"\r
        fi\r
        \r
        if (( $(echo "$cpu_percent > $max_cpu" | bc -l) )); then\r
            echo "WARNING: CPU usage exceeds \${max_cpu}%"\r
        fi\r
        \r
        sleep 30\r
    done\r
}\r
\r
# Usage\r
monitor_process "nginx" 200 50
`})}),`
`,n.jsx(r.h3,{children:"Background and Foreground Processes"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Job Control:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Run in background\r
command &\r
\r
# List jobs\r
jobs\r
\r
# Bring to foreground\r
fg %1\r
\r
# Send to background\r
bg %1\r
\r
# Nohup (no hang up)\r
nohup long_running_command &\r
\r
# Disown job\r
disown %1
`})}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Screen and tmux:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Screen\r
screen -S mysession\r
screen -r mysession    # Reattach\r
screen -ls            # List sessions\r
\r
# tmux\r
tmux new-session -d -s mysession\r
tmux attach-session -t mysession\r
tmux list-sessions
`})}),`
`,n.jsx(r.h3,{children:"Process Scheduling and Priorities"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Process Priorities:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Run with priority (nice values: -20 to 19)\r
nice -n 10 command          # Lower priority\r
nice -n -10 command         # Higher priority (requires root)\r
\r
# Change priority of running process\r
renice 5 -p 1234           # Change process priority\r
renice 5 -u username       # Change user's processes priority
`})}),`
`,n.jsx(r.h3,{children:"Signals and Process Control"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Sending Signals:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# Common signals\r
kill -TERM 1234    # Terminate gracefully\r
kill -KILL 1234    # Force kill\r
kill -HUP 1234     # Hang up (reload config)\r
kill -USR1 1234    # User-defined signal 1\r
kill -USR2 1234    # User-defined signal 2
`})})]})}function l(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{l as default,a as frontmatter};
