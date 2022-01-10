import {observer} from 'mobx-react-lite';
import Dashboard from './components/dashboard';
import Header from './components/header/index'


function App() {
 
  
  return (
    <>
      <Header/>
        <main>
          <Dashboard/>
        </main>
    </>
  );
}

export default observer(App);
