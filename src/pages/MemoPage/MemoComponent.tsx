import {memo} from 'react';

interface Props {
  someProperty:string
}

const MemoComponent = memo((props:Props) => {
  return (
    <>
      <div style={{border: '1px solid'}}>
        Memo component: {props.someProperty}
      </div>
    </>
  );
}, (oldProps, newProps) => {
  return oldProps.someProperty.length === newProps.someProperty.length;
});

export default MemoComponent;
