import reactLogo from "./assets/react.svg";
import "./App.css";
import { FormattedDate, FormattedMessage } from "react-intl";
import SelectLanguage from "./components/SelectLanguage";

function App({date}) {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit the files and save to reload"
          />
        </p>
      </div>
      <p className="read-the-docs">
        <FormattedMessage id="app.content" defaultMessage="Learn React" />
      </p>
      <h3>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Internationalization for Students"
          values={{ username: "Peter Parker" }}
        />
      </h3>
      <h3>
        <FormattedDate
          value={date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </h3>
      <SelectLanguage />
    </div>
  );
}

export default App;
