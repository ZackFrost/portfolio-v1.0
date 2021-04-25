import React from "react"


export class MaterialButton extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        let props = this.props;

        const Styles = {
            button:{
                backgroundColor: props.backgroundColor,
                maxWidth: "150px",
                maxHeight: props.height ?? "50px",
                fontSize: "12px",
                textAlign: "center",
                lineHeight: "52px",
                fontWeight: "700",
                borderRadius: "5px",
                border: "none",
                color: props.textColor,
                cursor: "pointer",
                boxShadow: props.boxShadow,
                marginRight: props.marginRight,
            }
        }

        
        return (
            <section style={Styles.button} className={props.customCss} onClick={props.onTap.bind(this)}>
                {props.name}
            </section>
        )
    }
}