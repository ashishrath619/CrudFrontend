import React, { useState, useEffect } from "react";
import "./adduser.css";
export default function Adduser() {
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");

  const handleSubmit = () => {
    var body = {
      name: getName,
      email: getEmail,
      phone: getPhone,
    };
    console.log("datasubmit", body);
  };

  return (
    <div>
      <div className="container-fluid m-0 p-0 bgcolor">
        <div className="row">
          <div className="col">
            <div className="outerContainer">
              <div className="mainContainer">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Name"
                    value={getName}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="Email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    value={getEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Phone"
                    placeholder="Phone"
                    value={getPhone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
