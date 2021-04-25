import React from "react";

class MaterialGradientButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let props = this.props;
    return (
      <div
        className="card btn"
        id="custom_gradient_button"
        onClick={props.onButtonClick.bind(this)}
        style={{
            height: props.height,
            width: props.width,
            borderRadius: props.borderRadius,
            border: props.border,
            boxShadow: props.boxShadow,
            color: props.color,
            background:props.background
        }}
      >
        <div className="card-body">Get In Touch</div>
      </div>
    );
  }
}

export default MaterialGradientButton;
