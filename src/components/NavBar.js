import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

            <div className="col-1 p-1 m-1">
              {/* Google Translate Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Translate
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* Include the Google Translate element inside the dropdown */}
                  <div id="google_translate_element"></div>
                </div>
              </div>
              {/* End of Google Translate Dropdown */}
            </div>


                <Link class="navbar-brand" to="/">SnapNews</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/business">Business</Link></li>
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/health">Health</Link></li>
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/science">Science</Link></li>
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/general">World</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar