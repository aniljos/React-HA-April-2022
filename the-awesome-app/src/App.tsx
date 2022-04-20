import React from "react";
import Alert from "./components/Hello";
import Counter from "./components/Counter";
import TypedCounter from "./components/TypedCounter";
import ListProducts from "./components/ListProducts";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter  as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React
            </a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/search">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Content Area */}
        <section>
            <Routes>
              <Route path="/home" element={<Alert title="Message" message="This is a React Component"/>}/>
              <Route path="/counter" element={<TypedCounter initCount={5}/>} />
              <Route path="/products" element={<ListProducts/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
        </section>

      </div>
    </Router>
  );
}

export default App;
