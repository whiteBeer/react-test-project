import { createPortal } from 'react-dom';
import {useEffect, useState, Profiler} from 'react';

function HugePage() {

  const [state,  setState] = useState(1);
  const arr = Array(5000).fill(0);

  const onProfilerRender = (
    id:string,
    phase:string,
    actualDuration:number,
    baseDuration:number
  ) => {
    console.log(id, phase, actualDuration, baseDuration);
  };

  useEffect(() => {

  }, [state]);

  return (
    <>
      <Profiler id="header-profiler" onRender={onProfilerRender}>
        {arr.map((_, i) => (
          <h1 key={i} onClick={() => setState(prevState => prevState + 1)}>
            Test react app {state}
          </h1>
        ))}
      </Profiler>
      {createPortal(
        <div id="modal-content"></div>,
        document.body
      )}
    </>
  );
}

export default HugePage;
