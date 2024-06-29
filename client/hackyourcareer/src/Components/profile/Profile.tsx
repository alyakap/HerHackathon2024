import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ProfileStyles.css";
import axios from "axios";
type MockUserData = {
  id: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: "FEMALE" | "MALE";
  isMentor: boolean;
  isMentee: boolean;
  preferencesSet: {
    id: string;
    name: string;
  }[];
  skillsSet: {
    id: string;
    name: string;
  }[];
  interestsSet: {
    id: string;
    name: string;
  }[];
  jobtitle: {
    id: string;
    name: string;
  };
  personality: {
    id: string;
    name: string;
    description: string;
  };
  careerPath: {
    id: string;
    jobTitle: {
      id: string;
      name: string;
    };
    startDate: string;
    endDate: string;
    rating: number;
    company: string;
  };
};

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/2")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const mockUserData = {
    "id": "1",
    "username": "mentor1",
    "email": "email@example.com",
    "firstname": "Ada",
    "lastname": "Lovelace",
    "age": 43,
    "gender": "FEMALE",
    "isMentor": true,
    "isMentee": false,
    "preferencesSet": [
      {
        "id": "P013",
        "name": "performance feedback",
      },
      {
        "id": "P014",
        "name": "innovation focus",
      },
      {
        "id": "P015",
        "name": "workplace diversity",
      },
    ],
    "skillsSet": [
      {
        "id": "S013",
        "name": "Angular",
      },
      {
        "id": "S011",
        "name": "C#",
      },
      {
        "id": "S016",
        "name": "AWS",
      },
    ],
    "interestsSet": [
      {
        "id": "I001",
        "name": "Reading industry-related articles",
      },
      {
        "id": "I010",
        "name": "Building a personal brand",
      },
      {
        "id": "I015",
        "name": "Engaging in thought leadership",
      },
    ],
    "jobtitle": {
      "id": "J003",
      "name": "IT Support Specialist",
    },
    "personality": {
      "id": "ESTP",
      "name": "The Persuader",
      "description":
        "Out-going and dramatic, they enjoy spending time with others and focusing on the here-and-now.",
    },
    "careerPath": {
      "id": "CP001",
      "jobTitle": {
        "id": "J003",
        "name": "IT Support Specialist",
      },
      "startDate": "2022-01-01",
      "endDate": "2023-01-01",
      "rating": 5,
      "company": "TechCorp",
    },
  };

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
                        <h3 className="card-title mb-2">
                          {mockUserData.firstname} {mockUserData.lastname}
                        </h3>
                        <p className="mb-0 text-muted">
                          {mockUserData.jobtitle.name}
                        </p>
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
                          <strong>
                            {mockUserData.careerPath.jobTitle.name}
                          </strong>{" "}
                          at {mockUserData.careerPath.company}
                          <br />
                          <em>
                            {mockUserData.careerPath.startDate} -{" "}
                            {mockUserData.careerPath.endDate}
                          </em>
                          <p>Rating: {mockUserData.careerPath.rating}</p>
                        </li>
                      </ul>

                      <h5>Preferences</h5>
                      <ul>
                        {mockUserData.preferencesSet.map((preference) => (
                          <li key={preference.id}>
                            <strong>{preference.name}</strong>
                          </li>
                        ))}
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
            <div className="card border-info">
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
            <div className="card border-info">
              <div className="card-body">
                <div className="pt-2">
                  <h4 className="card-title mb-4">My Skills</h4>
                  <div className="d-flex gap-2 flex-wrap">
                    {mockUserData.skillsSet.map((skill) => (
                      <span
                        key={skill.id}
                        className="badge badge-soft-secondary p-2"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-info">
              <div className="card-body">
                <div>
                  <h4 className="card-title mb-4">Interests</h4>
                  <div className="table-responsive">
                    <p>
                      {mockUserData.interestsSet
                        .map((interest) => interest.name)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-info">
              <div className="card-body">
                <div>
                  <h4 className="card-title mb-4">Personality</h4>
                  <div className="table-responsive">
                    <p>
                      <strong>{mockUserData.personality.name}:</strong>{" "}
                      {mockUserData.personality.description}
                    </p>
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
