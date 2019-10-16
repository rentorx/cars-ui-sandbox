import React from "react";

import { Footer, TopNavigation, Carrousel, Features } from "../../components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <TopNavigation />
        <Carrousel />
        <Features />
        <Footer>
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://www.MDBootstrap.com"> Rentorx </a>
          </p>
        </Footer>
      </div>
    );
  }
}

export default Home;
