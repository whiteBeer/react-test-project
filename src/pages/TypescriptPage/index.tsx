import React from 'react';

interface Props<T> {
  name: 'Vasilii' | 'Sergey';
  age: T;
  onClick: (arg:string) => void;
}

const TypescriptPage: React.FC<Props<number>> = ({ name, age, onClick }) => {

  return (
    <>
      <div onClick={() => onClick(name)}>
        TypescriptPage: {name}, {age}
      </div>
    </>
  );
};

export default TypescriptPage;
