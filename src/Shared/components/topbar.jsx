import { Link } from "react-router-dom";
import "../../css/topbar.css";
export default function Topbar() {
  return (
    <>
      <div className="top-bar d-flex justify-content-between align-items-center py-2 px-3">
        <div className="tb-start ">
          <ul className="d-flex gap-4 ">
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="product">Delivery</Link>
            </li>
          </ul>
        </div>
        <div className="tb-mid">
          <p className=" mb-0">
            Trendy 25silver jewelry, save up 35% off today
          </p>
        </div>
        <div className="tb-end">
          <ul className="d-flex gap-4 ">
            <li>
              <p className="mb-0">
               
                Need help? &nbsp;Contact us:
                <Link className="Li-one" to="">
                  12485632
                </Link>  
              </p>
            </li>
            <li> 
              <span>|&nbsp; English</span>
            </li>
            <li>
              <span>|&nbsp; USD</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
