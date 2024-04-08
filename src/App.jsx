import React from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Docencia5 from "./config/components/Docencia5";
import Cedim from "./config/components/Cedim";
import Docencia1 from "./config/components/Docencia1";
import TallerPesado2 from "./config/components/TallerPesado2";
import Docencia4 from "./config/components/Docencia4";
import CDS from "./config/components/Cds";
import Docencia3 from "./config/components/Docencia3";
import CafeBalcon from "./config/components/CafeBalcon";
import CdsMotos from "./config/components/CdsMotos";
import Docencia3Motos from "./config/components/Docencia3Motos";
import Jardineras from "./config/components/Jardineras";

const Pagina = () => {
  return (
    <>
      <div>
        <h1> Pagina Principal </h1>
      </div>
    </>
  );
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={< Pagina />} />
        <Route path="/docencia5" element={< Docencia5 />} />
        <Route path="/cedim" element={<Cedim />} />
        <Route path="/docencia1" element={< Docencia1 />} />
        <Route path="/cds" element={<CDS />} />
        <Route path="/docencia3" element={<Docencia3 />} />
        <Route path="/docencia3motos" element={< Docencia3Motos />} />
        <Route path="/docencia4" element={< Docencia4 />} />
        <Route path="/jardineras" element={<Jardineras />} />
        <Route path="/tallerpesado2" element={<TallerPesado2 />} />
        <Route path="/cdsmotos" element={< CdsMotos />} />
        <Route path="/cafebalcon" element={<CafeBalcon />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;