import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import Header from './Header';
import './main.css';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
