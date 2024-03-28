import { useState } from 'react';

import './App.css';
import ResultContainer from './components/ResultContainer/ResultContainer';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor';

const initialText = `
# This is the main heading
## This is a subheading

In markdown, you can make a text **bold** or _italic_.
You can insert  
1. ordered
2. list
3. items

or you can have
- unordered
- lists
  - with
    - multiple
      - levels
    - of indentation

> You can quote other people in blockquotes.

Insert inline code in your text: \`console.log("Hello World!")\`

And also have entire code blocks. 

\`\`\`javascript
const a = 5
const b = 7

const addNumbers = function(a, b) {
  return a + b
}

console.log(addNumbers(a, b))
\`\`\`
  

You can learn more about Markdown [here](https://www.markdownguide.org/).
![Markdown Logo](https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png)
`;

const App = () => {
  const [text, setText] = useState(initialText);

  const handleChange = function (e) {
    const newText = e.target.value;

    setText(newText);
  };

  return (
    <div id="app">
      <h1 className="titleHeading">Markdown Previewer</h1>
      <div id="previewer-container">
        <MarkdownEditor text={text} onChange={handleChange} />
        <ResultContainer text={text} />
      </div>
    </div>
  );
};

export default App;
