import React from 'react';
import { createContext, useContext, useState } from "react";
import './index.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';


const AuthContext = createContext();
function SignIn() {
  return (
    <div className="background"> {/* Dark gradient background */}
      <MDBContainer className="d-flex justify-content-center align-items-center vh-100"> {/* Centering */}
        <MDBCard className="cascading-right" style={{ background: 'hsl(0, 0.00%, 100.00%)', backdropFilter: 'blur(30px)', width: '400px' }}>
          <MDBCardBody className="p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign In</h2>

            <MDBInput wrapperClass="mb-4" label="Username/Email" id="form4" type="text" />
            <MDBInput wrapperClass="mb-4" label="Password" id="form5" type="password" />

            <MDBBtn className="w-100 mb-4" size="md">Sign In</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default SignIn;
