import { useState, useEffect } from 'react';

function App({name, db}) {

  const [list,setList] = useState([]);
  
  useEffect(()=>{
    if(db){
      db.collection('computerscience').onSnapshot(query => {
        const doc = query.docs.map(data => ({
          ...data.data(),
          id:data.id,
        }));
        setList(doc);
      });
    }
  },[db]);

  return (
    <>
      <h1>Hello {name}</h1>
      <ul>
      {list && list.map(data => (
        <>
          <li key={data.id}>{data.title}</li>
          <a key={data.id} href={data.link}>Link</a>
        </>
      ))}
      </ul>
    </>
  );
}

export default App;
