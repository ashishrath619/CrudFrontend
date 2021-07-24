import React, { useEffect, useState } from "react";
import {
  getData,
  postData,
  deleteDataAxios,
  patchDataAxios,
} from "../../FetchServices";

export default function Editpage(props) {
  const propsData = props.history.location.data;

  const id = props.history.location.data.iduserdata;
  //   console.log(props.history.location.data.iduserdata);
  const [getList, setList] = useState([]);

  const fetchDataByid = async () => {
    let list = await getData(`info/Displaybyid/${id}`);
    console.log("dataaaa", list.email);
    setList(list);
  };

  useEffect(() => {
    fetchDataByid();
  }, []);
  const [getName, setName] = useState(propsData.name);
  const [getEmail, setEmail] = useState(propsData.email);
  const [getPhone, setPhone] = useState(propsData.phone);

  const handleSubmit = async () => {
    console.log("idddd", id);
    var body = {
      name: getName,
      email: getEmail,
      phone: getPhone,
    };
    console.log("datasubmit", body);

    let result = await patchDataAxios(`info/updateuser/${id}`, body);
    console.log("result", result);

    if (result) {
      alert("submit");
    } else {
      alert("failed");
    }
  };
  return (
    <div>
      <div>
        <div className="container-fluid m-0 p-0 bgcolor">
          <div className="row">
            <div className="col">
              <div className="outerContainer">
                <div className="mainContainer">
                  <div>
                    <h3>Edit form</h3>
                  </div>
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
    </div>
  );
}
