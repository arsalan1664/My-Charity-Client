import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ContextProvider } from "./context/MyContext.jsx";

const client = new ApolloClient({
  uri: "https://shy-gray-tuna-shoe.cyclic.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </ContextProvider>
);
