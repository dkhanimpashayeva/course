import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <section className="register">
      <div className="row">
        <div className="col-6 p-0">
          <div className="register-info">
            <h3>
             
              Register now and get a discount 50% discount until 1 January
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
        <div className="col-6 p-0">
          <div className="search-course">
            <h3>Search for your course</h3>
            <form>
              <input type="text" /> 
              <input type="text" />
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
