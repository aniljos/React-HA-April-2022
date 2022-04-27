import React from "react";
import Alert from "./components/Hello";
import Counter from "./components/Counter";
import TypedCounter from "./components/TypedCounter";
import ListProducts from "./components/ListProducts";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter  as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/Login";
import HooksDemo from "./components/HooksDemo";
import GadgetStore from "./components/GadgetStore";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewCart from "./components/ViewCart";
import GadgetStoreRedux from "./components/GadgetStoreRedux";
import Header from "./components/Header";
import UseReducerDemo from "./components/UseReducerDemo";
import ListCustomers from "./components/ListCustomers";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header/>
        {/* Content Area */}
        <section>
            <Routes>
              <Route path="/home" element={<Alert title="Message" message="This is a React Component"/>}/>
              <Route path="/counter" element={<TypedCounter initCount={5}/>} />
              <Route path="/products" element={<ProtectedRoute> <ListProducts/> </ProtectedRoute>}/>
              <Route path="/search" element={<ProtectedRoute><Search/></ProtectedRoute>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/hooks" element={<HooksDemo/>}/>
              <Route path="/gadgets" element={<GadgetStore/>}/>
              <Route path="/gadgets-redux" element={<GadgetStoreRedux/>}/>
              <Route path="/cart" element={<ViewCart/>}/>
              <Route path="/reducer" element={<UseReducerDemo/>}/>
              <Route path="/customers" element={<ListCustomers/>}/>
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </section>

      </div>
    </Router>
  );
}

export default App;
