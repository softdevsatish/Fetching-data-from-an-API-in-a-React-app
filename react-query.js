import "./styles.css";

import axios from "axios";
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
  );
  return (
    <div className="App">
      <h1>API Posts</h1>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error.message}`}</div>
      )}
      <ul>
        {data &&
          data.data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
