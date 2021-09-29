import React, {useState, useEffect} from 'react';
import Articles from './components/Articles/Articles.component';
import './App.css';
import Header from './components/Header/Header.component';
import NoData from './Pages/NoData/NoData';

function App() {

  const [data, setData] = useState([]);

  const apiKey = "72bad2bcd56a4673bf0a6209a15c7d81";
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => setData(data.articles))
  })

  return (
    <div className='App'>
      <Header/>
      {!data   ? <NoData/> : <Articles data = {data}/>}
    </div>
    
  );
}

export default App;
