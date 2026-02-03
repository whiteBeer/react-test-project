import { createPortal } from 'react-dom';
import './App.css';

function App() {

  const a = 124;

  return (
    <>
      <h1>
        Test react app {a}
      </h1>
      {createPortal(
        <div id="modal-content"></div>,
        document.body
      )}
    </>
  );
}

export default App;
