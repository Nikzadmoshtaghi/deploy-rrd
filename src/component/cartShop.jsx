import { useContext } from "react";
import ProductContext from "../context/GeneralContext";
import "./cart.css";
import Rating from '@mui/material/Button'; 
// import Typography from '@mui/material/Button'; 

const CartShope = () => {
  const productContext= useContext(ProductContext)
  const dispatch = productContext.dispatch
  const state = productContext.state

  return ( 
    <div className="container row mt-3">
        {state.map((p, index) => {
        
          return (
            <>
              <div id={p.id} key={index} className="d-flex justify-content-between mt-5 mb-5">
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
                    <h2>{p.price*p.quantity}$</h2>
                  </div>
                  <br />
                  <div className="row ">
                    <div className="col-6 ">
                      <button
                      
                        onClick={()=>{
                          if (p.quantity<5) {
                            
                            dispatch({type:"Increment" , id:p.id })}}
                          }
                        className="m-2 btn btn-sm btn-success"
                      >
                        +
                      </button>
                      <button
                         onClick={()=>{
                          if (p.quantity>1) {
                            
                            dispatch({type:"Decrement" , id:p.id})}}
                          }
                        className="m-2 btn btn-sm btn-warning"
                      >
                        -
                      </button>
                      {p.quantity}
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </div>
                    <div className="col-6">
                      <button onClick={()=>dispatch({type: "Remove" , id:p.id})} className="btn btn-lg ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                          id="IconChangeColor"
                          style={{ color: "red" }}
                        >
                          {" "}
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                            id="mainIconPathAttribute"
                          ></path>{" "}
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            id="mainIconPathAttribute"
                          ></path>{" "}
                        </svg>
                      </button>
                    </div>
                 
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
   );
}
 
export default CartShope;

// class CartShop extends Component {
//   static contextType = productContext;
//   render() {
//     const state = this.context.state
//     const dispatch=this.context.dispatch
//     return (
//       <div className="container row mt-3">
//         {state.map((p, index) => {
        
//           return (
//             <>
//               <div key={index} className="d-flex justify-content-between mt-5 mb-5">
//                 <div>
//                   <img
//                     src={p.image}
//                     className="cardImg"
//                     alt="productPicture"
//                   ></img>
//                 </div>

//                 <div className="width">
//                   <h5 className="card-title mt-3">{p.title}</h5>
//                   <div className="d-flex justify-content-between mt-3">
//                     <h2>{p.price*p.quantity}$</h2>
//                   </div>
//                   <br />
//                   <div className="row ">
//                     <div className="col-6 ">
//                       <button
//                         onClick={()=> dispatch({type:"Increment" , action:p})}
//                         className="m-2 btn btn-sm btn-success"
//                       >
//                         +
//                       </button>
//                       <button
//                         onClick={()=>{this.handleDecrement(p.id)}}
//                         className="m-2 btn btn-sm btn-warning"
//                       >
//                         -
//                       </button>
//                       {p.quantity}
//                       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//                     </div>
//                     <div className="col-6">
//                       <button onClick={()=>{this.handleDelete(p.id)}} className="btn btn-lg ">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="40"
//                           height="40"
//                           fill="currentColor"
//                           className="bi bi-trash"
//                           viewBox="0 0 16 16"
//                           id="IconChangeColor"
//                           style={{ color: "red" }}
//                         >
//                           {" "}
//                           <path
//                             d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
//                             id="mainIconPathAttribute"
//                           ></path>{" "}
//                           <path
//                             fillRule="evenodd"
//                             d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
//                             id="mainIconPathAttribute"
//                           ></path>{" "}
//                         </svg>
//                       </button>
//                     </div>
//                     {/* {(p.rating.count*0)+1} */}
//                   </div>
//                 </div>
//               </div>
//               <hr />
//             </>
//           );
//         })}
//       </div>
//     );
//   }

    
  
// }

// // export default CartShop;
