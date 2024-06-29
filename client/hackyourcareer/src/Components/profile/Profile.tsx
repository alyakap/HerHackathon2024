import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ProfileStyles.css";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <nav className="navbar " style={{ background: "#5799FF" }}>
        <a
          className="navbar-brand mx-4 text-white font-weight-800"
          style={{ fontWeight: "bold" }}
          href="#"
        >
          HackYourCareer
        </a>

        <i className="fa-solid fa-user text-white mx-4"></i>
      </nav>

      <div className="container">
        <div className="row my-4">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pb-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="text-center border-end">
                      <img
                        src="./avatar.jpg"
                        className="img-fluid avatar-xxl rounded-circle"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="ms-3">
                      <div>
                        <h3 className="card-title mb-2">Ada Lovelace</h3>
                        <p className="mb-0 text-muted">Front-end Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul
                className="nav nav-tabs nav-tabs-custom border-top-0 mt-3 nav-justified"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link px-4 ${
                      activeTab === "profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile")}
                    role="tab"
                    aria-selected={activeTab === "profile"}
                  >
                    <span className="d-block d-sm-none">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="d-none d-sm-block">My Profile</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link px-4 ${
                      activeTab === "career" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("career")}
                    role="tab"
                    aria-selected={activeTab === "career"}
                  >
                    <span className="d-block d-sm-none">
                      <i className="mdi mdi-menu-open"></i>
                    </span>
                    <span className="d-none d-sm-block">My Career</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link px-4 ${
                      activeTab === "mentor" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("mentor")}
                    role="tab"
                    aria-selected={activeTab === "mentor"}
                  >
                    <span className="d-block d-sm-none">
                      <i className="mdi mdi-account-group-outline"></i>
                    </span>
                    <span className="d-none d-sm-block">My Mentor</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="tab-content p-4">
                {activeTab === "profile" && (
                  <div className="tab-pane active show" role="tabpanel">
                    <div className="row">
                      <h5>Experience</h5>
                      <ul>
                        <li>
                          <strong>Front-end Developer</strong> at Tech Company
                          <br />
                          <em>Jan 2020 - Present</em>
                          <p>
                            Worked on developing responsive web applications
                            using React and Bootstrap.
                          </p>
                        </li>
                        <li>
                          <strong>Web Developer</strong> at Web Solutions
                          <br />
                          <em>Jun 2018 - Dec 2019</em>
                          <p>
                            Designed and maintained websites, ensuring optimal
                            performance and user experience.
                          </p>
                        </li>
                      </ul>

                      <h5>Education</h5>
                      <ul>
                        <li>
                          <strong>
                            Bachelor of Science in Computer Science
                          </strong>
                          <br />
                          <em>University of Technology, 2014 - 2018</em>
                          <p>
                            Graduated with honors, focusing on web development
                            and user interface design.
                          </p>
                        </li>
                        <li>
                          <strong>Certified Front-end Developer</strong>
                          <br />
                          <em>Online Certification, 2019</em>
                          <p>
                            Completed an extensive course on front-end
                            development and modern web technologies.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab === "career" && (
                  <div className="tab-pane active show" role="tabpanel">
                    <h4 className="card-title mb-4">My Career</h4>
                    <div className="row">{/* Your career cards go here */}</div>
                  </div>
                )}
                {activeTab === "mentor" && (
                  <div className="tab-pane active show" role="tabpanel">
                    <h4 className="card-title mb-4">My Mentor</h4>
                    <div className="row">{/* Your mentor cards go here */}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-3">
            <div className="card">
              <div className="card-body">
                <div>
                  <h4 className="card-title mb-4">Personal Details</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Location</th>
                          <td>Frankfurt, Germany</td>
                        </tr>
                        <tr>
                          <th scope="row">Tel</th>
                          <td>069 781081</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="pt-2">
                  <h4 className="card-title mb-4">My Skills</h4>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge badge-soft-secondary p-2">HTML</span>
                    <span className="badge badge-soft-secondary p-2">
                      Bootstrap
                    </span>
                    <span className="badge badge-soft-secondary p-2">Scss</span>
                    <span className="badge badge-soft-secondary p-2">
                      Javascript
                    </span>
                    <span className="badge badge-soft-secondary p-2">
                      React
                    </span>
                    <span className="badge badge-soft-secondary p-2">
                      Angular
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <h4 className="card-title mb-4">Languages</h4>
                  <div className="table-responsive">
                    <p>German, English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
