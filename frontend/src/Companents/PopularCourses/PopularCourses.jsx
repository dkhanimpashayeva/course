import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./PopularCourses.scss";
const PopularCourses = () => {
  const [data, setData] = useState(null);
  const [sorted, setSorted] = useState({ sorted: "price", resorted: false });
  const [search, setSearch] = useState("");
  //get
  const getData = async () => {
    const res = await axios("http://localhost:8080/courses");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //delete
  const deleteData = async (id) => {
    axios.delete(`http://localhost:8080/courses/${id}`);
    getData();
  };
  //sort data
  const sortedData = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const datacopy = [...data];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    setData(datacopy);
  };

  return (
    <section className="courses">
      <div className="courses-title">
        <hr />
        <h2>Popular Courses</h2>
      </div>
 
      <button onClick={() => sortedData()}>Sort for price</button>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <div className="container">
        <div className="row">
          {data &&
            data
              .filter((course) => {
                return search.trim().toLowerCase() === ""
                  ? course
                  : course.courseName.toLowerCase().includes(search);
              })
              .map((course) => (
                <div className="col-4" key={course._id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={course.url}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <p className="card-text">
                        Adobe Guide, Layes, Smart Objects etc...
                      </p>
                    </div>

                    <div className="card-body">
                  <div className="d-flex justify-content-between aligin-items-center">
                  <span>
                        <img className="card-body-image" src={course.teacherImg} alt="teacher" />
                      </span>
                      <span className="price">{course.price}$</span>
                  </div>
                    </div>
                    <button onClick={() => deleteData(course._id)}>
                      
                      Delete
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
