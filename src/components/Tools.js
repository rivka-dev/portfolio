import React, { Component } from "react";

class Tools extends Component {
  render() {
    if (this.props.sharedTools && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.tools;
      var tools = this.props.sharedTools.icons.map(function (tools, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center tools-tile">
                <i className={tools.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {tools.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="tools">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto too-icon">{tools}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
