import React, { Component } from "react"
import ProjectItems from "./project/projectItems"
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
              <a href="ProjectForm.html" class="btn btn-lg btn-info">
                Create a Project
              </a>
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
