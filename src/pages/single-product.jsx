import { useParams } from "react-router-dom";
import axios from "axios";
import Topbar from "../Shared/components/topbar";
import Navbar from "../Shared/components/navbar";
import React, { useEffect, useState } from "react";
const client = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    client.get(`/products/${productId}`).then((response) => {
      setSingleProduct(response.data);
      console.log(singleProduct)
    });
  }, []);
  return( <>
   < Topbar/>
   < Navbar/>
   <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={singleProduct.image} alt={singleProduct.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{singleProduct.name}</h1>
          <p>{singleProduct.description}</p>
          <h3>{singleProduct.price}</h3>
          <button className="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
   <h1>{productId}</h1></>

  );
}
export default SingleProduct;
