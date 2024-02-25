import React from 'react';
//import Layout from './layout/layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
const App = () => {
  return (
    <div className='bg-slate-300'>
      <Header />
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-3'>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
