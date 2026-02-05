import {useState} from 'react';

function AbortControllerPage() {

  const controller = new AbortController();

  const [isLoading,  setIsLoading] = useState(false);
  const fetchData = async () => {
    if (isLoading) {
      controller.abort('Another request called');
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {signal: controller.signal}
      );
      const data = await res.json();
      console.log(data);
    } catch (err:string|unknown) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      <button onClick={fetchData}>Fetch</button>
    </>
  );
}

export default AbortControllerPage;
