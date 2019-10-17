import React, { Component } from "react"

class ProjectItems extends Component {
  render() {
    return (
      // {/* <!-- Project Item Component --> */}
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">COSTAR</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>COSTAR Cast Project</h3>
              <p>Create A Agile Intelegence Board Project</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul classNameName="list-group">
                <a href="#/">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                  </li>
                </a>
                <a href="#/">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-2">Update Project Info</i>
                  </li>
                </a>
                <a href="#/">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-3">Delete Project</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      //   {/* <!-- End of Project Item Component --> */}
    )
  }
}
export default ProjectItems
