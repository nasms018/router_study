import React, { useEffect, useState } from 'react';
import './App.css';
import AppStudy2P189 from 'study/AppStudy2P189';
import AppStudy2P194 from 'study/AppStudy2P194';
import AppStudy2P195 from 'study/AppStudy2P195';
import AppStudy2P196 from 'study/AppStudy2P196';
import AppStudy2P223 from 'study/AppStudy2P223';
import AppStudy2P225 from 'study/AppStudy2P225';
import AppStudy2P229 from 'study/AppStudy2P229';
import AppStudy2P230 from 'study/AppStudy2P230';
import AppStudy2P231RenderProps from 'study/AppStudy2P231RenderProps';
import AppStudy2P237Faker from 'study/AppStudy2P237Faker';
import AppStudy2P239WindowFixedSizeList from 'study/AppStudy2P239WindowFixedSizeList';
//import AppStudy2P242UseFetch from 'study/AppStudy2P242UseFetch';
import AppStudy2P242 from 'study/AppStudy2P242';
import AppStudy2P244 from 'study/AppStudy2P244';
import {useIterator} from 'hooks/useIterator'
import RepoItem from 'components/RepoItem'
import GitUserRepositories from 'components/GitUserRepositories';
import GitUserByFetch from 'components/GitUserByFetch';
function App() {


  return (
    <div className="App">

        <GitUserByFetch loginId={"nasms018"} />
    </div>
  );
}

export default App;
/*
    <AppStudy2P189 />
    <AppStudy2P194 />
    <AppStudy2P195 />
    <AppStudy2P196 />
    <AppStudy2P225 />
    <AppStudy2P229 />
    <AppStudy2P230 />
    <AppStudy2P223 />
    <AppStudy2P231RenderProps />
    <AppStudy2P237Faker />
    <AppStudy2P239WindowFixedSizeList  />
    <AppStudy2P242UseFetch />
    <AppStudy2P242 />

  <button onClick={prev}>prev</button>
  <button onClick={next}>next</button>
  <p>{item}</p>
  const items = ['aaa','bbb','ccc','ddd'];
  const {item, prev, next} = useIterator(items);
  <AppStudy2P244/>
  const fff = ['aaa','bbb','ccc','ddd'];
  <RepoItem repositories={fff} />
  <GitUserRepositories loginId={"moonhighway"} />
    
*/