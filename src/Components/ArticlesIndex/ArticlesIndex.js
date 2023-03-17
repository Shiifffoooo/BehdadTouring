import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import NotFound from "../../pages/Not-Found/NotFound";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function ArticlesIndex() {
  const contentData = useContext(contextNeededDatas);
  const [tours, setTours] = useState([]);
  const [hasTour, setHasTour] = useState(false);

  async function fetchData() {
    await setTours(contentData.region);
    if (!tours.length) {
      setHasTour(false);
    } else {
      setHasTour(true);
    }
  }
  useEffect(() => {
    fetchData();
    console.log(tours);
  }, [tours]);

  return (
    <>
      <header className="container-fluid bg-green-gray overflow-hidden p-0">
        <div className="main-tour__header">
          <div className="position-absolute bottom-0 ms-3">
            <Breadcrumb
              href={[
                ["/", "صفحه اصلی"],
                ["/articles", "بلاگ ها"],
              ]}
            />
          </div>
        </div>
      </header>
      {hasTour ? (
        <main className="container-fluid mt-5">
          <div className="row justify-content-center">
            <aside className="d-none d-md-block col-md-3">
              <div className="d-flex flex-column align-items-center">
                {tours.slice(0, 4).map((tour) => (
                  <img
                    className="col-9 mb-4 rounded-3"
                    height="150"
                    src={`./${tour.images[0]}`}
                    alt="locationPicture"
                    key={tour._id}
                  />
                ))}
              </div>
            </aside>
            <div className="col-11 col-md-9">
              {[...tours]
                .reverse()
                .slice(0, 4)
                .map((tour) => (
                  <div className="blog-wrapper d-flex flex-column flex-md-row border-bottom rounded-3 overflow-hidden my-4" key={tour._id}>
                    <Link to={`/articles/${tour.href}`} className="col-12 col-md-5 overflow-hidden">
                      <img
                        className="w-100"
                        height="180"
                        src={`./${tour.images[0]}`}
                        alt="sumPicture"
                      />
                    </Link>

                    <div className="px-3">
                      <h5 className="mt-2 fs-4">
                        <Link to={`/articles/${tour.href}`} className="text-decoration-none text-dark">
                          نوشته های مربوط به {tour.location}
                        </Link>
                      </h5>
                      <p className="fs-7 text-black-50">
                        نوشته شده در شهریور 16, 1395
                      </p>
                      <p className="text-muted mb-0 truncate-overflow">
                        {tour.description}
                      </p>
                    </div>
                  </div>
                ))}

              {/* ------------------------------pagination-------------------------------- */}
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center flex-wrap">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
      ) 
      : (
        <NotFound />
      )
      }
    </>
  );
}
