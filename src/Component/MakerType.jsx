import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Versace from "../assets/logos/versace.png";
import Zara from "../assets/logos/zara.png";
import Gucci from "../assets/logos/gucci.png";
import Prada from "../assets/logos/prada.png";
import CalvinKlein from "../assets/logos/calvinklein.png";

const MakerType = () => {
  return (
    <div className="bg-dark p-3">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2">
            <img src={Versace} alt="Logo 1" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-2">
            <img src={Zara} alt="Logo 2" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-2">
            <img src={Gucci} alt="Logo 3" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-2">
            <img src={Prada} alt="Logo 4" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-2">
            <img src={CalvinKlein} alt="Logo 5" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakerType;
