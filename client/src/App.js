import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Home from './pages/Home';
import Providers from './pages/Providers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Facilities from './pages/Facilities';
import Procedures from './pages/Procedures';
import Login from './pages/Login';
import Signup from './pages/Signup'
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
      <Header/>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Facilities" element={<Facilities/>}></Route>
            <Route exact path="/Procedures" element={<Procedures/>}></Route>
            <Route exact path="/Providers" element={<Providers/>}></Route>
            <Route exact path="/Login" element={<Login/>}></Route>
            <Route exact path="/Signup" element={<Signup/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
