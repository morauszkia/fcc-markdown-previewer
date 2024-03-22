# React Markdown Previewer

Built for the freeCodeCamp Front End Development Libraries Certification
Project: [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

Original version used marked for parsing Markdown content, but I switched to `react-markdown` for safety purposes.  
To pass the last (optional) test: interpret carriage returns as line breaks, I used `remark-plugin`.  
I also added syntax highlighting with `react-syntax-highlighter`.  
Also, original version was built using server components, but I refactored to use functional components instead.
