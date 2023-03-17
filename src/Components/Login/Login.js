import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import "./Login.css";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import swal from "sweetalert";

export default function Login() {
  document.title ="BehdadTouring | Login"
  const [users, setUsers] = useState([]);
  const [hasUsers, setHasUsers] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const contentData = useContext(contextNeededDatas);
  let navigateTo = useNavigate();
  async function fetchData() {
    await setUsers(contentData.users);
    if (!users.length) {
      setHasUsers(true);
    } else {
      // navigateTo("/user/sign-in");
    }
  }
  useEffect(() => {
    fetchData();
    console.log(users);
  }, []);

  const userLogin = () => {
    console.log("clicked", users);
    let userObj = users.find((user) => {
      return user.name === email && user;
    });
    if (!userObj) {
    } else {
      if (email === userObj.name && password === userObj.pass) {
        swal({
          title: "باموفقیت لاگین شدید.",
          icon: "success",
          buttons: "اوکی",
        }).then(() => {
          loginClientToSite(userObj);
        });
      } else {
        swal({
          title: "نام کاربری: behdad و رمز: 12345678 را امتحان کنید.",
          icon: "warning",
          buttons: "اوکی",
        }).then(() => {});
      }
    }
  };
  function loginClientToSite(userObj) {
    localStorage.setItem("behdadTouringSiteUser", JSON.stringify(userObj));
    navigateTo("/shop");
  }
  return (
    <>
      <NavBar />
      <section className="login-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Log-in
                  </h3>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label text-dark"
                      htmlFor="form2Example18"
                    >
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label text-dark"
                      htmlFor="form2Example28"
                    >
                      پسورد
                    </label>
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={userLogin}
                    >
                      ورود
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      پسوردت را فراموش کردی؟
                    </a>
                  </p>
                  <p>
                    اکانت نداری؟{" "}
                    <Link to="/user/sign-in" className="link-info">
                      ثبت نام
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="../images/pexels-kasra-askari-12877823.jpg"
                alt="Loginimage"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
