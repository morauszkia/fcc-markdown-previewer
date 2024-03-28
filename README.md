# React Markdown Previewer

Built for the freeCodeCamp Front End Development Libraries Certification
Project: [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

Original version used `marked` for parsing Markdown content, but I switched to `react-markdown` for safety purposes.  
To pass the last (optional) test: interpret carriage returns as line breaks, I used `remark-breaks`.  
I also added syntax highlighting with `react-syntax-highlighter` using `Prism` and `coy` theme.  
Also, original version was built using class components, but I refactored to use functional components instead and broke up App into separate components.

I plan to work on responsive design and maybe change styling a little bit. Some form of scoping styles is also a possibility, although the css file is neither long nor complex.

Any suggestions are welcome!
