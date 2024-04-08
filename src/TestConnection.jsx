import React, { useState, useEffect } from "react";
import firebase from "./config/firebase";
import { getDatabase } from "firebase/database";

const TestConnection = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const getData = getDatabase();
        setData(getData);
      } catch (error) {
        console.error("Error al obtener los datos \n", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2>Datos de Firebase</h2>
      {data}
    </>
  );
};

export default TestConnection;