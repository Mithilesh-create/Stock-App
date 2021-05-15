import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Market from "./Market";
function Topstocks() {
  const [valuesNSE, setNSE] = useState([]);
  const [valuesBSE, setBSE] = useState([]);

  useEffect(() => {
    fetch("/topNSE")
      .then((response) => response.json())
      .then((data) => setNSE(data));
    fetch("/topBSE")
      .then((response) => response.json())
      .then((data) => setBSE(data));
  }, []);
  const data = async () => {
    await fetch("/topNSE")
      .then((response) => response.json())
      .then((data) => setNSE(data));
    await fetch("/topBSE")
      .then((response) => response.json())
      .then((data) => setBSE(data));
  };
  setTimeout(data, 60000);

  return (
    <>
      <NavBar />
      <Market />
      <Container className=" mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <h3>TOP STOCKS ON NSE 🔼🔼🔼</h3>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Price</th>
              <th>Price Increase</th>
              <th>%Increase</th>
            </tr>
          </thead>
          <tbody>
            {/* {valuesNSE.map((data) => (
              <tr className="table-success text-primary">
                {data.map((d) => {
                 return <td>{d}</td>;
                })} */}
            {valuesNSE.map((data) => (
              <tr className="table-white text-success">
                {data.map((d) => {
                  if (d.includes("+")) {
                    return <td>{d + "  🔼"}</td>;
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
            <h3>TOP STOCKS ON BSE 🔼🔼🔼</h3>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Price</th>
              <th>Price Increase</th>
              <th>%Increase</th>
            </tr>
          </thead>
          <tbody>
            {valuesBSE.map((data) => (
              <tr className="table-white text-success">
                {data.map((d) => {
                  if (d.includes("+")) {
                    return <td>{d + "  🔼"}</td>;
                  } else {
                    return <td>{d}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Topstocks;
