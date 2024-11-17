import Home from './Home';
import Header from './Header';
import './main.css';
import { defaultSystem } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';

function App() {
  console.log(defaultSystem);
  return (
    <Provider>
      <Header/>
      <Home/>
    </Provider>
  );
}

export default App;
