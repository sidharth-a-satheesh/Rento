import React from "react";
import "./buyerRequests.scss";
import { Button } from "@mui/material";

const BuyerRequests = () => {
  const registrations = [
    {
      id: 1,
      name: "Albin Vargees",
      dept: "Computer Science Engineering",
      batch: "2011",
    },
    {
      id: 2,
      name: "Sidharth A",
      dept: "Electronics & Communication Engineering",
      batch: "2001",
    },
    {
      id: 3,
      name: "Arshad Danish",
      dept: "Mechanical Engineering",
      batch: "2003",
    },
    {
      id: 4,
      name: "Jyothiradithyan K",
      dept: "Civil Engineering",
      batch: "2007",
    },
    {
      id: 5,
      name: "Rishan KP",
      dept: "Computer Science Engineering",
      batch: "2010",
    },
  ];
  // const [viewForm, setViewForm] = useState(false);
  return (
    <div className="buyer-requests">
      <div className="registration-main2">
        <div>
          <h2 className="reg-heading-main">Requests</h2>
        </div>
        <div className="reg-details">
          <div className="reg-heading">
            <div>Item</div>
            <div>Request Date</div>
            <div>Pick-up Date</div>
            <div>Drop-off Date</div>
            <div>Quantity</div>
            <div>Status</div>
          </div>
          {registrations.map((e) => (
            <div key={e.id} className="reg-data">
              <div>{e.name}</div>
              <div>{e.dept}</div>
              <div>{e.batch}</div>
              <div>{e.name}</div>
              <div>{e.dept}</div>
              <div>{e.batch}</div>
              <div className="reg-btns">
                <Button variant="contained">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyerRequests;
