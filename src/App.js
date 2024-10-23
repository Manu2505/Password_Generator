import logo from './logo.svg';
import './App.css';
import Page from './landingpage/page';
import { Passwordsprovider } from "./context/passwordscontext"
import { Settingsprovider } from "./context/settingscontext"

function App() {
  return (
    <div className="App">
                  <Settingsprovider>
                <Passwordsprovider>
                    <Page />
                </Passwordsprovider>
            </Settingsprovider>
    </div>
  );
}

export default App;
