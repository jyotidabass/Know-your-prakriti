import React from "react";
import "./_app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Quiz from "./components/quiz/quiz";
import Header from "./components/header/header";
import Counter from "./components/counter/counter.js";
import Navigation from "./components/navigation/navigation.js";
import Footer from "./components/footer/footer.js";


function App() {
  return (
    <div>
      <Navigation />

      <Container className="pl-4 pr-4">
        <div className="app light-text">
          <Header />
          <Quiz />
          <Counter />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
