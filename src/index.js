import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { client } from "./queries";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
