import { useContext } from "react";
import ProductContext from "../context/GeneralContext";
import "./showMore.css";

const ShowMore = () => {
  const productContext= useContext(ProductContext)
  const dispatch = productContext.dispatch
 
  
  return (
    <div className="container">
      {productContext.show.map((p, index) => {
         p.quantity = 1;
        return (
          <>
            <div
              key={index}
              className="d-flex justify-content-between mt-5 mb-5"
            >
              <div>
                <img
                  src={p.image}
                  className="cardImg"
                  alt="productPicture"
                ></img>
              </div>

              <div className="width">
                <h5 className="card-title mt-3">{p.title}</h5>
                <div className="d-flex justify-content-between mt-3">
                  <h2>{p.price}$</h2>
                </div>
                <p className="card-text mt-3">{p.description} </p>
                <button
                  onClick={()=> dispatch({type: "ADD" , payload:p})}
                  className="btn btn-lg btn-danger"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
  
};

export default ShowMore;


