import{j as e}from"./index-BnDyFvVW.js";const l={title:"📚 Guide to Contributing to a GitHub Project",description:"Contributing to an open-source project on GitHub is a rewarding way to improve your coding skills, collaborate with others, and give back to the community. This guide walks you through the essential steps to contribute effectively using Git and GitHub."};function i(s){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"🔁 Step 1: Fork the Project"}),`
`,e.jsxs(n.p,{children:["If you don’t have write access to a project, ",e.jsx(n.strong,{children:"fork"})," it first:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Go to the project’s GitHub page."}),`
`,e.jsxs(n.li,{children:["Click the ",e.jsx(n.strong,{children:"Fork"})," button in the top-right corner."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"💡 A fork is your personal copy of the repository where you can make changes freely."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🌲 Step 2: Clone Your Fork Locally"}),`
`,e.jsx(n.p,{children:"To work on the code, clone your forked repository to your local machine:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone https://github.com/your-username/project-name.git\r
cd project-name
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧵 Step 3: Create a Topic Branch"}),`
`,e.jsx(n.p,{children:"Always create a new branch for each contribution. Use a descriptive name that reflects the change:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git checkout -b feature/change-delay-time
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🛠️ Step 4: Make Your Changes"}),`
`,e.jsx(n.p,{children:"Edit files, fix bugs, or implement features. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`sed -i 's/1000/3000/' blink.ino
`})}),`
`,e.jsx(n.p,{children:"Check your changes before committing:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git diff --word-diff
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"✅ Step 5: Commit Your Changes"}),`
`,e.jsx(n.p,{children:"Commit your updates with a clear message:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -a -m "Change delay to 3 seconds"
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"☁️ Step 6: Push Your Branch to GitHub"}),`
`,e.jsx(n.p,{children:"Push your topic branch to your fork on GitHub:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git push origin feature/change-delay-time
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"📬 Step 7: Open a Pull Request (PR)"}),`
`,e.jsx(n.p,{children:"After pushing, GitHub will prompt you to create a Pull Request. Follow these steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Go to your GitHub fork."}),`
`,e.jsxs(n.li,{children:["Click the green ",e.jsx(n.strong,{children:"Compare & pull request"})," button."]}),`
`,e.jsx(n.li,{children:"Add a title and description explaining your changes."}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Create pull request"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"📝 A good PR description helps maintainers understand what you did and why."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"💬 Step 8: Participate in Code Review"}),`
`,e.jsx(n.p,{children:"Once your PR is open:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The project maintainer may review and comment."}),`
`,e.jsx(n.li,{children:"You can respond to feedback directly or by making additional commits."}),`
`,e.jsx(n.li,{children:"Push more changes to the same branch to update the PR automatically."}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -a -m "Fix spacing in README.md"\r
git push origin feature/change-delay-time
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🔄 Step 9: Keep Your PR Updated"}),`
`,e.jsx(n.p,{children:"If your branch falls behind the main project:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Add the original repo as a remote:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git remote add upstream https://github.com/original-owner/project-name.git
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Fetch and merge the latest changes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git fetch upstream\r
git merge upstream/master
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Fix any conflicts and push again:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git push origin feature/change-delay-time
`})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧩 Step 10: PR Merged or Closed"}),`
`,e.jsx(n.p,{children:"The maintainer will either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Merge your PR into the main project."}),`
`,e.jsx(n.li,{children:"❌ Close the PR if changes are not needed or further work is required."}),`
`]}),`
`,e.jsx(n.p,{children:"You’ll receive a notification either way."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧠 Advanced Tips"}),`
`,e.jsx(n.h3,{children:"🔁 Rebase vs. Merge"}),`
`,e.jsx(n.p,{children:"While merging is common on GitHub, rebasing can clean up history. If you rebase:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Push to a ",e.jsx(n.strong,{children:"new branch"}),", not the one used in the PR."]}),`
`,e.jsx(n.li,{children:"Open a new PR referencing the old one."}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git checkout -b feature/change-delay-rebased\r
git rebase master\r
git push origin feature/change-delay-rebased
`})}),`
`,e.jsx(n.p,{children:"Then link the new PR to the old one:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-md",children:`This replaces #123.
`})}),`
`,e.jsx(n.h3,{children:"🔗 Referencing Issues and PRs"}),`
`,e.jsxs(n.p,{children:["You can reference other issues or PRs using ",e.jsx(n.code,{children:"#<number>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-md",children:`Fixes #45\r
See also tonychacon/blink#123
`})}),`
`,e.jsx(n.p,{children:"GitHub will auto-link them!"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"✍️ GitHub Flavored Markdown (GFM) Tips"}),`
`,e.jsx(n.p,{children:"Use Markdown to format your PR descriptions and comments:"}),`
`,e.jsx(n.h3,{children:"Task Lists"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`- [x] Update documentation\r
- [ ] Add tests\r
- [ ] Fix linter warnings
`})}),`
`,e.jsx(n.h3,{children:"Code Snippets"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:'```java\r\nSystem.out.println("Hello World");\n'})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`\r
### Quoting\r
\`\`\`markdown\r
> This part needs improvement
`})}),`
`,e.jsx(n.h3,{children:"Emoji"}),`
`,e.jsx(n.p,{children:"Add some personality! 😄"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`:+1: :bug: :rocket:
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🖼️ Drag and Drop Images"}),`
`,e.jsx(n.p,{children:"GitHub lets you drag and drop images directly into comments. It’s perfect for screenshots or diagrams."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🔄 Syncing Your Fork"}),`
`,e.jsx(n.p,{children:"Keep your fork updated with the original project:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Add the upstream remote:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git remote add upstream https://github.com/original-owner/project-name.git
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Periodically sync:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git checkout master\r
git pull upstream master\r
git push origin master
`})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🏁 Summary"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Step"}),e.jsx("th",{children:"Action"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"Fork the project"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"Clone your fork"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"Create a topic branch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"Make and commit changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"Push your branch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"Open a Pull Request"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"Respond to reviews"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"Keep your PR updated"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsx("td",{children:"Wait for merge/close"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧰 Tools & Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://cli.github.com",children:"GitHub CLI"}),": Manage PRs from the command line."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github",children:"GitHub Markdown Cheatsheet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.webfx.com/tools/emoji-cheat-sheet/",children:"Emoji Cheat Sheet"})}),`
`]}),`
`,e.jsx(n.h1,{children:"Mentioning Issues in Commit Messages & Contributing to Projects on GitHub"}),`
`,e.jsx(n.p,{children:"Contributing to a project on GitHub often involves making changes that relate to specific issues or bugs. Properly mentioning these issues in your commit messages or pull requests helps maintain clarity and traceability for the entire team."}),`
`,e.jsx(n.p,{children:"This guide explains how to reference issues in commit messages and during the contribution process."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"📌 Why Mention Issues?"}),`
`,e.jsx(n.p,{children:"When you mention an issue in a commit message or pull request, you:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link your work"})," directly to the problem it solves."]}),`
`,e.jsxs(n.li,{children:["Help maintainers understand ",e.jsx(n.strong,{children:"why"})," a change was made."]}),`
`,e.jsx(n.li,{children:"Automatically update issue threads with links to your commits or PRs."}),`
`,e.jsxs(n.li,{children:["Enable ",e.jsx(n.strong,{children:"automatic closure"})," of issues when your code is merged."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🔗 How to Reference an Issue in a Commit Message"}),`
`,e.jsx(n.p,{children:"GitHub recognizes certain keywords followed by an issue number in commit messages. These can be used to automatically link or close issues."}),`
`,e.jsx(n.h3,{children:"✅ Supported Keywords:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"close"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"closes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"closed"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fix"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fixes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fixed"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"resolve"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"resolves"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"resolved"})}),`
`]}),`
`,e.jsx(n.h3,{children:"🧾 Syntax:"}),`
`,e.jsxs(n.p,{children:["Use one of the keywords followed by ",e.jsx(n.code,{children:"#<issue-number>"}),".",e.jsx(n.br,{}),`
`,"You can also reference issues from other repositories using ",e.jsx(n.code,{children:"username/repo#<issue-number>"}),"."]}),`
`,e.jsx(n.h3,{children:"💡 Example Commit Messages:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "Fix bug in login flow. Closes #45"
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "Update dependencies. Fixes tonychacon/blink#12"
`})}),`
`,e.jsxs(n.p,{children:["If this commit is pushed to a branch and later merged into the default branch (e.g., ",e.jsx(n.code,{children:"main"})," or ",e.jsx(n.code,{children:"master"}),"), ",e.jsx(n.strong,{children:"the referenced issue will be automatically closed"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🔄 Referencing Issues Without Closing Them"}),`
`,e.jsxs(n.p,{children:["If you want to reference an issue without closing it, just use the ",e.jsx(n.code,{children:"#<number>"})," syntax without any keyword."]}),`
`,e.jsx(n.h3,{children:"💬 Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "Started refactoring auth system. See #30 for discussion."
`})}),`
`,e.jsx(n.p,{children:"This will create a link in the issue thread but won’t close the issue."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"📥 Using Issue References in Pull Requests"}),`
`,e.jsx(n.p,{children:"When creating or updating a Pull Request:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.strong,{children:"title or description"}),", include ",e.jsx(n.code,{children:"Closes #<issue-number>"})," to indicate that merging the PR will resolve the issue."]}),`
`,e.jsxs(n.li,{children:["You can also mention multiple issues:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-md",children:`This fixes #12 and addresses #45.
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["💡 Tip: When you merge a PR that says ",e.jsx(n.code,{children:"Closes #12"}),", GitHub will automatically close Issue #12 and link back to the PR from the issue."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🎯 Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always write ",e.jsx(n.strong,{children:"clear, descriptive commit messages"})," even if you reference an issue."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Closes #<issue>"})," only when your change fully resolves the issue."]}),`
`,e.jsxs(n.li,{children:["If you're working across forks or repositories, use full references like ",e.jsx(n.code,{children:"username/repo#12"}),"."]}),`
`,e.jsxs(n.li,{children:["You can reference ",e.jsx(n.strong,{children:"multiple issues"})," in a single commit or PR:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "Fix performance issues. Closes #10, #12"
`})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧩 Real-World Example"}),`
`,e.jsxs(n.p,{children:["Let’s say there's ",e.jsx(n.a,{href:"https://github.com/tonychacon/blink/issues/45",children:"Issue #45"})," titled ",e.jsx(n.em,{children:'"LED blinks too fast"'}),". You’ve fixed this in your branch."]}),`
`,e.jsx(n.h3,{children:"Your Commit:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "Change delay time from 1s to 3s. Closes #45"
`})}),`
`,e.jsx(n.p,{children:"After pushing and opening a PR, when the maintainer merges your change:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The issue will be ",e.jsx(n.strong,{children:"automatically closed"}),"."]}),`
`,e.jsx(n.li,{children:"A comment will appear on Issue #45 linking back to your commit and PR."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"📋 Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Action | Syntax | Effect |\r
|-------|--------|--------|\r
| Close issue | `,e.jsx(n.code,{children:"Closes #12"}),` | Issue closes when commit is merged |\r
| Link without closing | `,e.jsx(n.code,{children:"See #12"}),` | Adds a link in the issue |\r
| Reference cross-repo | `,e.jsx(n.code,{children:"user/repo#12"}),` | Links to another repo's issue |\r
| Multiple issues | `,e.jsx(n.code,{children:"Closes #12, #15"})," | Closes both issues |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"🧠 Advanced Tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You can reference ",e.jsx(n.strong,{children:"commits"})," using their full SHA hash. GitHub will auto-link them."]}),`
`,e.jsxs(n.li,{children:["Use task lists in PR descriptions to track what needs to be done before merging:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`- [x] Fix bug\r
- [ ] Add tests\r
- [ ] Update documentation
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Use emojis in comments or commit messages to add personality:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "🎉 Initial implementation complete"
`})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"📚 Learn More"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.github.com/en/get-started/writing-on-github",children:"GitHub Flavored Markdown Docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.conventionalcommits.org/",children:"Git Commit Message Conventions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.webfx.com/tools/emoji-cheat-sheet/",children:"GitHub Emoji Cheat Sheet"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"✅ Final Thoughts"}),`
`,e.jsx(n.p,{children:"Mentioning issues in your commit messages and pull requests is a small step that significantly improves collaboration. It ensures transparency, keeps discussions connected to the actual code changes, and streamlines issue management."}),`
`,e.jsx(n.p,{children:"Happy contributing! 🚀"})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default,l as frontmatter};
