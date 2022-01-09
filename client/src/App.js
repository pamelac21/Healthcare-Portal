import logo from './logo.svg';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
            <Route exact path="/" element={<Home/>}>
              </Route>

            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
