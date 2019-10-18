import React, { Component } from "react"
import ProjectItems from "./project/projectItems"
import CreateProjectButton from "./project/createProjectButton"

class Dashboard extends Component {
  render() {
    return (
      // <!-- Dashboard Component (Project Item included) -->

      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <ProjectItems />
            </div>
          </div>
        </div>
      </div>

      // <!-- End of Dashboard Component -->
    )
  }
}

export default Dashboard
