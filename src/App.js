import React from 'react';
import Title from './comps/Title';
import File from './comps/File';
import Images from './comps/Images';
import Footer from './comps/Footer';
import Header from './comps/Header'


function App() {
  return (
      <div className="App">
          <Header/>
          <Title />
          <File />
          <Images />
          <Footer/>
    </div>
  );
}

export default App;
