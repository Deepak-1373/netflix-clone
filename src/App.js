import "./App.css";
import { Row } from "./components/Row";
import requests from "./api/request";

export const App = () => {
  return (
    <div className="app">
      <h1>Building Netflix Clone 🚀</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
};
