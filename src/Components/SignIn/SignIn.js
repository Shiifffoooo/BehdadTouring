import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import NavBar from "../../Components/NavBar/NavBar";

export default function SignIn() {
  document.title ="BehdadTouring | Sign-In"
  let navigateTo = useNavigate();
  const signInClient = () => {
    swal({
      title: "به علت نبود backEnd با اکانت: behdad و رمز: 12345678 وارد شوید.",
      icon: "success",
      buttons: "ورود",
    }).then(() => {
      navigateTo("/user/login");
    });
  };
  return (
    <>
      <NavBar />
      <section className="login-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign-in
                  </h3>

                  <div className="form-outline mb-2">
                    <label className="form-label text-dark" htmlFor="userName">
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="userName"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-2">
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
                    />
                  </div>

                  <div className="form-outline mb-2">
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
                    />
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={signInClient}
                    >
                      ثبت نام
                    </button>
                  </div>

                  <p>
                    اکانت داری؟{" "}
                    <Link to="/user/login" className="link-info">
                      ورود
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="../images/train.jpg"
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
