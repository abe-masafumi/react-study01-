import Counter from './components/Counter';
import Test from './components/Test';
import axios from 'axios';
import Twitter from './apis/Twitter';
// apiの時はこれ使う↓
import React, { useState, useEffect } from 'react';

const App = () => {

  const [data, setData] = useState("");
  useEffect(async () => {
    const requestUrl = await axios(
      'http://localhost/myfile_lab05/Twitter%20search%20api/Twitter.php',
    );
    try {
      setData(requestUrl.data);
    } catch (err) {
      console.log(err)
    }
  }, []);
  // console.log(data);
  return (
    <div className='ui container' style={{ marginTop: 20 }}>
      <Counter />
      <Test Title="hello Tw" />
      <Twitter twidata={data} />
    </div>
  );
}
export default App;

// axios で２回読み込む？
// 子要素に持っていけない？（データが多すぎ？）
// JSON.stringify(data)