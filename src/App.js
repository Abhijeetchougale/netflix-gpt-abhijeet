import Body from './Components/Body';
import { Provider, provider } from "react-redux"
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store ={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
