import React, { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  // Estado para el contenido del editor
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [maximizedEditor, setMaximizedEditor] = useState(false);
  const[maximizedPreviwer, setMaximizedPreviwer] = useState(false);


  // Función que maneja los cambios en el textarea
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Convierte el markdown a HTML
  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  // Maneja el evento de maximizar el editor
  const handleMaximizedEditor = () => {
    setMaximizedEditor(!maximizedEditor);
  };

  // Maneja el evento de maximizar el previwer
  const handleMaximizedPreviewer = ()=> {
    setMaximizedPreviwer(!maximizedPreviwer)
  }

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        {/* Editor */}
        <div className={maximizedPreviwer ? "hide" : (maximizedEditor ? "editor-container-maximized" : "editor-container")}>
          <div id="editor-title" >
            Editor
            <i class={maximizedEditor ? "fa fa-compress-alt" : "fa fa-arrows-alt"} onClick={handleMaximizedEditor}></i>
          </div>
            <textarea
            id={maximizedEditor ? "editor-maximized" : "editor"}
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your markdown here..."
            />
        </div>
        {/* Preview */}
        <div className={maximizedEditor ? "hide" : (maximizedPreviwer ? "previewer-container-maximized" : "previewer-container")}>
          <div id="previewer-title" >
            Previewer
            <i class={maximizedPreviwer ? "fa fa-compress-alt" : "fa fa-arrows-alt"} onClick={handleMaximizedPreviewer}>
            </i>
          </div>
          <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
      </div>
    </div>
  );
}

//marckdown texto inicial
const initialMarkdown = `<div style="text-align: left; ">
<h1> Welcome to my React Markdown Previewer! </h1>

<hr style="border:none; height:3px; width:80%; background-color:#333; margin:10px auto;" />

<h2> This is a sub-heading... </h2>

<hr style="border:none; height:1px; width:80%; background-color:#333; margin:10px auto;" />

<h3> And here's some other cool stuff: </h3>


<p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p>

<pre style="background-color: #f5f5f5; padding: 10px;">
// A code block example
function helloWorld() {
  console.log("Hello, world!");
}
</pre>

<p>
  you can asle make text <strong>bold</strong>
  <br>
  Or <em>italic</em>
  <br>
  Or... wait fir it...<strong><em>both!</em></strong>
  <br>
  And fell free to get crazy <del>crossing stuff out</del>

</p>

<p>
  there's also <a href="https://www.freecodecamp.org">links</a>, and
  <br>
  <blockquote><p>Blockquotes!</p></blockquote>
  <br>
  And if you want to get really crazy, even tables:

</p>

Wild Header | Crazy Header | Another Header?
------------- | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;

export default App;
