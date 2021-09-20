import { useRef, useState } from 'react';
import Layout from './Layout';
import Routes from './Routes';

function App() {
  const navbarRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState('header');

  return (
    <Layout scrollPosition={scrollPosition} navbarRef={navbarRef}>
      <Routes setScrollPosition={setScrollPosition} navbarRef={navbarRef} />
    </Layout>
  );
}

export default App;
