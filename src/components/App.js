import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}
