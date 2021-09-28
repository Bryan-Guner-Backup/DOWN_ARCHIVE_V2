import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 75vh;
  width: 100vw;

  * {
    font-family: 'Inconsolata', sans-serif;
  }

  .code-header-container {
    height: 12%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 2em;
  }

  .code-body-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

function Code() {
  const [editorState, setEditorState] = React.useState();
  const [output, setOutput] = React.useState('');
  const [language, setLanguage] = React.useState('javascript');
  const [currentTest, setCurrentTest] = React.useState('');
  const [testPassedCount, setTestPassedCount] = React.useState(0);
  return (
    <FlexContainer>
      <div className='code-header-container'>
        <Interface
          editorState={editorState}
          setEditorState={setEditorState}
          output={output}
          setOutput={setOutput}
          language={language}
          setLanguage={setLanguage}
          currentTest={currentTest}
          setCurrentTest={setCurrentTest}
          testPassedCount={testPassedCount}
          setTestPassedCount={setTestPassedCount}
        />
      </div>
      <div className='code-body-container'>
        <Editor
          output={output}
          setOutput={setOutput}
          editorState={editorState}
          setEditorState={setEditorState}
          language={language}
          setLanguage={setLanguage}
        />
        <Terminal initialText='$  ' output={output} />
      </div>
    </FlexContainer>
  );
}

export default Code;
