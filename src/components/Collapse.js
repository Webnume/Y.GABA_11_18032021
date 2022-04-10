import React, { Component } from "react";
import iconCollapse from "../asset/images/iconCollapse.svg";

class Collapse extends Component {
  state = {
    close: true,
    rotateIcon: false,
  };

  clickAction = () => {
    this.setState({
      close: !this.state.close,
      rotateIcon: !this.state.rotateIcon,
    });
  };

  render() {
    const { close, rotateIcon } = this.state;
    return (
      <section style={{ width: "100%", maxWidth: this.props.width }}>
        <button
          type="button"
          className="collapsible"
          data-testid="collapsible"
          onClick={() => this.clickAction()}
        >
          {this.props.title}
          <img
            className={rotateIcon ? "rotate" : "icon"}
            src={iconCollapse}
            alt=""
          />
        </button>
        <div
          className={close ? "content" : "active"} 
          data-testid={close ? "content" : "active"}         
        >
          <ul>
            {this.props.width === "582px" && this.props.type === "list"
              ? this.props.children.map((equipement) => (
                  <li key={equipement}>{equipement}</li>
                ))
              : this.props.children}
          </ul>
        </div>
      </section>
    );
  }
}

export default Collapse;
