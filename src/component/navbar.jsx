import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProductContext from "../context/GeneralContext";
import "./navbar.css"

const Navbar = () => {
  const productContext = useContext(ProductContext)
  const state = productContext.state
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light pose">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item marginRight ">
                <NavLink className="nav-link " aria-current="page" to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-in"
                    id="IconChangeColor"
                  >
                    <path
                      d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                      id="mainIconPathAttribute"
                    ></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/countactUs">
                  CountactUs
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/aboutUs">
                  AboutUs
                </NavLink>
              </li>

              <li className="nav-item floatR">
                <NavLink className="nav-link position-relative" to="/cartShop">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                  </svg>
                  <span className="position-absolute top-1 start-99 translate-middle badge rounded-pill bg-danger">
                    {state.length}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/aboutUs"></NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
// class Navbar extends Component {
//   static contextType= productContext;
//   render() {

//     console.log(state)
//     return (
//       <>
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item marginRight ">
//                 <NavLink
//                   className="nav-link "
//                   aria-current="page"
//                   to="/login"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeinecap="round" strokeLinejoin="round" className="feather feather-log-in" id="IconChangeColor"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" id="mainIconPathAttribute"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link "
//                   aria-current="page"
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link "
//                   aria-current="page"
//                   to="/products"
//                 >
//                   Products
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/countactUs">
//                   CountactUs
//                 </NavLink>
//               </li>
//               <li className="nav-item ">
//                 <NavLink className="nav-link " to="/aboutUs">
//                   AboutUs
//                 </NavLink>
//               </li>

//               <li className="nav-item floatR">
//                 <NavLink className="nav-link position-relative" to="/cartShop">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
//                   </svg>
//                     <span className='position-absolute top-1 start-99 translate-middle badge rounded-pill bg-danger'>{}</span>
//                 </NavLink>
//               </li>
//                <li className="nav-item ">
//                 <NavLink className="nav-link " to="/aboutUs">

//                 </NavLink>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//     );
//   }
// }

// export default Navbar;
