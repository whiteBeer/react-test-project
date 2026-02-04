import { useSearchParams } from 'react-router-dom';
import {useEffect, useState, useMemo, useCallback} from 'react';
import MemoComponent from './MemoComponent';

function MemoPage() {

  const [searchParams, setSearchParams] = useSearchParams();

  const [input,  setInput] = useState(searchParams.get('input'));
  const [page,  setPage] = useState(parseInt(searchParams.get('page') || '', 10) || 1);
  const [state,  setState] = useState([1]);
  const [state1,  setState1] = useState([1]);
  const [memoComponentState,  setMemoComponentState] = useState('state');

  const onlyOdd = useMemo(()=> {
    return state.filter((_it, i) => {
      return i % 2 !== 0;
    });
  }, [state]);

  const nextPage = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, setPage, page]);

  const resetPage = useCallback(() => {
    searchParams.delete('page');
    setPage(1);
  }, [searchParams, setPage]);

  const handleQueryStringChange = useCallback((newQueryString:string) => {
    setInput(newQueryString);
    if (newQueryString) {
      searchParams.set('input', newQueryString);
    } else {
      searchParams.delete('input');
    }
    resetPage();
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, resetPage]);

  useEffect(() => {

  }, [input]);

  return (
    <>
      Page: {page}
      <input
        value={input || ''}
        onChange={e => {
          handleQueryStringChange(e.target.value);
        }}
      />
      <button onClick={() => nextPage()}>Next page</button>
      <hr/>
      <div onClick={() => setState(state.concat([1]))}>Memo</div>
      <div onClick={() => setState1(state1.concat([1]))}>No Memo</div>
      <div>
        {onlyOdd}
      </div>
      <MemoComponent someProperty={memoComponentState}/>
      <button onClick={() => setMemoComponentState('aaa')}>
        Memo Component State "aaa"
      </button>
      <button onClick={() => setMemoComponentState('atate')}>
        Memo Component State "atate" (same length as "state")
      </button>
    </>
  );
}

export default MemoPage;
