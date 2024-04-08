import React from "react";
import bici from "./assets/bici.png";
import motos from "./assets/motos.png";
import exclusivo from "./assets/exclusivo.png";
import restri from "./assets/restri.png";
import discapacitado from "./assets/discapacitado.png";
import "./SlotEstacionamiento.css";

function SlotPrueba(props) {
  const { estado, exclusividad, tipo } = props;
  return (
    <>
      {
        //Carro, Horizontal
        estado === true && exclusividad === "SN" && tipo === "Carro" ? (
          <div className="slotVacio" />
        ) : estado === true && exclusividad === "res" && tipo === "Carro" ? (
          <div className="slotVacio">
            <img src={restri} className="img"></img>
          </div>
        ) : //Carro, Vertical
        estado === true && exclusividad === "SN" && tipo === "CarroVer" ? (
          <div className="slotVacioVertical" />
        ) : estado === true && exclusividad === "res" && tipo === "CarroVer" ? (
          <div className="slotVacioVertical">
            <img src={restri} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "discapacidad" &&
          tipo === "Carro" ? (
          <div className="slotVacio">
            <img src={discapacitado} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "discapacidad" &&
          tipo === "CarroVer" ? (
          <div className="slotVacioVertical">
            <img src={discapacitado} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "exclusivo" &&
          tipo === "Carro" ? (
          <div className="slotVacio">
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "exclusivo" &&
          tipo === "CarroVer" ? (
          <div className="slotVacioVertical">
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "discapacidad-exclusivo" &&
          tipo === "Carro" ? (
          <div className="slotVacio">
            <img src={discapacitado} className="img"></img>
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === true &&
          exclusividad === "discapacidad-exclusivo" &&
          tipo === "CarroVer" ? (
          <div className="slotVacioVertical">
            <img src={discapacitado} className="img"></img>
            <img src={exclusivo} className="img"></img>
          </div>
        ) : //
        //
        //Ocupado, carro, Horizontal
        estado === false && exclusividad === "SN" && tipo === "Carro" ? (
          <div className="slotOcupado" />
        ) : estado === false && exclusividad === "SN" && tipo === "CarroVer" ? (
          <div className="slotOcupadoVertical" />
        ) : estado === false && exclusividad === "res" && tipo === "Carro" ? (
          <div className="slotOcupado">
            <img src={restri} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "res" &&
          tipo === "CarroVer" ? (
          <div className="slotOcupadoVertical">
            <img src={restri} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "discapacidad" &&
          tipo === "Carro" ? (
          <div className="slotOcupado">
            <img src={discapacitado} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "discapacidad" &&
          tipo === "CarroVer" ? (
          <div className="slotOcupadoVertical">
            <img src={discapacitado} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "exclusivo" &&
          tipo === "Carro" ? (
          <div className="slotOcupado">
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "exclusivo" &&
          tipo === "CarroVer" ? (
          <div className="slotOcupadoVertical">
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "discapacidad-exclusivo" &&
          tipo === "Carro" ? (
          <div className="slotOcupado">
            <img src={discapacitado} className="img"></img>
            <img src={exclusivo} className="img"></img>
          </div>
        ) : estado === false &&
          exclusividad === "discapacidad-exclusivo" &&
          tipo === "CarroVer" ? (
          <div className="slotOcupadoVertical">
            <img src={discapacitado} className="img"></img>
            <img src={exclusivo} className="img"></img>
          </div>
        ) : //
        //
        //Libre, moto, Horizontal
        estado === true && exclusividad === "SN" && tipo === "Moto" ? (
          <div className="slotVacio">
            <img src={motos} className="img"></img>
          </div>
        ) : //Ocupado, Moto, Horizontal
        estado === false && exclusividad === "SN" && tipo === "Moto" ? (
          <div className="slotOcupado">
            <img src={motos} className="img"></img>
          </div>
        ) : //
        //
        //Libre, moto, Horizontal
        estado === true && exclusividad === "SN" && tipo === "MotoVer" ? (
          <div className="slotVacioVertical">
            <img src={motos} className="img"></img>
          </div>
        ) : //Ocupado, Moto, Horizontal
        estado === false && exclusividad === "SN" && tipo === "MotoVer" ? (
          <div className="slotOcupadoVertical">
            <img src={motos} className="img"></img>
          </div>
        ) : //
        //
        //Libre, Bicicleta, Horizontal
        estado === true && exclusividad === "SN" && tipo === "Bicicleta" ? (
          <div className="slotVacio">
            <img src={bici} className="img"></img>
          </div>
        ) : //
        //
        //Ocupado, Bicicleta, Horizontal
        estado === false && exclusividad === "SN" && tipo === "Bicicleta" ? (
          <div className="slotOcupado">
            <img src={bici} className="img"></img>
          </div>
        ) : //
        //
        //Libre, Motocicleta, Horizontal
        estado === true && exclusividad === "SN" && tipo === "Motocicleta" ? (
          <div className="SlotVacioMoto" />
        ) : //Ocupado, Motocicleta, Horizontal
        estado === false && exclusividad === "SN" && tipo === "Motocicleta" ? (
          <div className="SlotOcupadoMoto" />
        ) : //
        //
        //Libre, Motocicleta, Horizontal
        estado === true &&
          exclusividad === "SN" &&
          tipo === "MotocicletaVer" ? (
          <div className="SlotVacioMotoVertical" />
        ) : //Ocupado, Motocicleta, Horizontal
        estado === false &&
          exclusividad === "SN" &&
          tipo === "MotocicletaVer" ? (
          <div className="SlotOcupadoMotoVertical" />
        ) : (
          <div>
            <p>xd</p>
          </div>
        )
      }
    </>
  );
}

export default SlotPrueba;
