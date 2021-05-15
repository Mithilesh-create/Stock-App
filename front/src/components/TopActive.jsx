import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Market from "./Market";

function Sensex() {
  const [valuesNSE, setNSE] = useState([]);
  const [valuesBSE, setBSE] = useState([]);

  useEffect(() => {
    fetch("/activeNSE")
      .then((response) => response.json())
      .then((data) => setNSE(data));
    fetch("/activeBSE")
      .then((response) => response.json())
      .then((data) => setBSE(data));
  }, []);
  const data = async () => {
    await fetch("/activeNSE")
      .then((response) => response.json())
      .then((data) => setNSE(data));
    await fetch("/activeBSE")
      .then((response) => response.json())
      .then((data) => setBSE(data));
  };
  setTimeout(data, 30000);
  return (
    <div>
      <NavBar />
      <Market />

      <Container className=" mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <h1>ACTIVE STOCKS ON NSE 🔥🔥🔥</h1>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Price</th>
              <th>Price Change</th>
              <th>%Change</th>
            </tr>
          </thead>
          <tbody>
            {valuesNSE.map((data) => (
              <tr className="table-primary text-secondary">
                {data.map((d) => {
                  if (d.includes("+")) {
                    return <td>{d + "  🔼"}</td>;
                  } else if (!Number.isNaN(parseInt(d)) && parseInt(d) < 0) {
                    return <td>{d + "  🔻"}</td>;
                  } else {
                    return <td>{d}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="container">
          <div className="row justify-content-center">
            <h1>ACTIVE STOCKS ON BSE 🔥🔥🔥</h1>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Price</th>
              <th>Price Change</th>
              <th>%Change</th>
            </tr>
          </thead>
          <tbody>
            {valuesBSE.map((data) => (
              <tr className="table-primary text-secondary">
                {data.map((d) => {
                  if (d.includes("+")) {
                    return <td>{d + "  🔼"}</td>;
                  } else if (!Number.isNaN(parseInt(d)) && parseInt(d) < 0) {
                    return <td>{d + "  🔻"}</td>;
                  } else {
                    return <td>{d}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Sensex;
