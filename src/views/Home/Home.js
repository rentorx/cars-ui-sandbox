import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
        <header>
          <TopNavigation />
          <Carrousel />
        </header>
        <main>
          <MDBContainer>
            <Features />
            <MDBRow>
              <MDBCol md="12" className="mt-4" />
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="mt-4" />
            </MDBRow>
            <MDBRow>
              <MDBCol md="12" className="mt-4" />
            </MDBRow>
          </MDBContainer>
        </main>
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
