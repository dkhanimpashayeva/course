import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <section className="register">
   <div className="col-12">
   <div className="row align-items-center">
        <div className="col-6 p-0">
          <div className="register-info">
            <div className="container">
              <h3>
                Register now and get a discount <span>50%</span> discount until 1 January
              </h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo
              </p>
              <button>REGISTER NOW</button>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="search-course">
            <form>
              <h3>Search for your course</h3>

              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input type="text" />
              <br />
              <input
                type="submit"
                style={{ color: "white", backgroundColor: "#FFB606" }}
              />
            </form>
          </div>
        </div>
      </div>
   </div>
    </section>
  );
};

export default Register;
