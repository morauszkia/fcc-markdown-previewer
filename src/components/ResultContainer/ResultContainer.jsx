import Preview from '../Preview/Preview';

const ResultContainer = ({ text }) => {
  return (
    <div className="markdown-container">
      <h2 className="header">Formatted</h2>
      <Preview text={text} />
    </div>
  );
};

export default ResultContainer;
