import React from "react";
import {
  MDBFooter,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="indigo" className="text-center font-small darken-2">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBIcon fab icon="facebook" className="mr-3" />
            <MDBIcon fab icon="twitter" className="mr-3" />
            <MDBIcon fab icon="youtube" className="mr-3" />
            <MDBIcon fab icon="github" className="mr-3" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol />
          <MDBCol size="6">
            <MDBBtn
              outline
              color="white"
              tag="a"
              href="https://mdbootstrap.com/docs/react/getting-started/download/"
              target="_blank"
            >
              Download MDB
              <MDBIcon icon="download" className="ml-2" />
            </MDBBtn>
            <MDBBtn
              outline
              color="white"
              tag="a"
              href="https://mdbootstrap.com/docs/react/getting-started/quick-start/"
              target="_blank"
            >
              Start Free Tutorial
              <MDBIcon icon="download" className="ml-2" />
            </MDBBtn>
          </MDBCol>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
      <MDBRow>
        <MDBCol>
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> Rentox.io </a>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBFooter>
  );
};

export default Footer;
