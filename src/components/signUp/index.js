import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="background"> {/* Dark gradient background */}
      <MDBContainer className="d-flex justify-content-center align-items-center vh-100"> {/* Centering */}
        <MDBCard className="cascading-right" style={{ background: 'hsl(0, 0.00%, 100.00%)', backdropFilter: 'blur(30px)', width: '400px' }}>
          <MDBCardBody className="p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign up</h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput wrapperClass="mb-4" label="First name" id="form1" type="text" />
              </MDBCol>
              <MDBCol col="6">
                <MDBInput wrapperClass="mb-4" label="Last name" id="form2" type="text" />
              </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass="mb-4" label="Username" id="form4" type="text" />
            <MDBInput wrapperClass="mb-4" label="Email" id="form3" type="email" />
            <MDBInput wrapperClass="mb-4" label="Password" id="form5" type="password" />

            <MDBBtn className="w-100 mb-4" size="md">Sign up</MDBBtn>

            <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <span onClick={() => navigate('/signin')} style={{ color: 'blue', cursor: 'pointer' }}>
                Sign In
              </span>
            </p>
          </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
export default SignUp;