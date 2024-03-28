const MarkdownEditor = ({ text, onChange }) => {
  return (
    <div className="markdown-container">
      <h2 className="header">Raw Markdown</h2>
      <textarea
        name="markdown"
        id="editor"
        className="text-field"
        cols="30"
        rows="10"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default MarkdownEditor;
