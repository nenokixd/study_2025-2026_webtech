import React from 'react';
import Header from '../components/Header';

const HksWrapper = () => {
  
  const path = window.location.pathname.replace('/hks', '');
  
  if (path === '/' || path === '') {
    return (
      <>
        <Header />
        <iframe 
          src="/client/hks/hollow-knight-silksong-main.html"
          title="Hollow Knight: Silksong"
          style={{ width: '100%', height: 'calc(100vh - 200px)', border: 'none' }}
        />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <iframe 
        src={`/client/hks${path}.html`}
        title="Hollow Knight: Silksong"
        style={{ width: '100%', height: 'calc(100vh - 200px)', border: 'none' }}
      />
    </>
  );
};

export default HksWrapper;