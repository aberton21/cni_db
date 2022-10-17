import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

/*<Route exact path="/" element={<RecordList />} />
<Route path="/edit/:id" element={<Edit />} />
<Route path="/create" element={<Create />} /> */

/* {user && <Route path="/" exact element={<RecordList />} />}
    <Route path="/login" exact element={<Login/> } />
    <Route path="/" element={<Navigate replace to="/login" />} /> */

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20}}>
      <Routes>
        <Route exact path="/" element={<RecordList />} /> 
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;