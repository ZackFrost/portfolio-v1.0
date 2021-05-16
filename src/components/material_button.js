import React from "react"


export class MaterialButton extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        let props = this.props;

        const Styles = {
            button:{
                background: props.backgroundColor,
                width: props.maxWidth ?? "150px",
                height: props.maxHeight ?? "50px",
                borderRadius: props.borderRadius ?? "5px",
                border: "none",
                cursor: "pointer",
                boxShadow: props.boxShadow,
                margin:props.margin
            },
            btnText:{
                color: props.textColor,
                fontSize: props.fontSize ?? ".72rem",
                wordSpacing: "2px",
                fontWeight: "700",
                lineHeight: props.lineHeight ?? "50px",
                textAlign: "center",
                boxSizing: "border-box", 
            }
        }

        
        return (
            <section style={Styles.button} className={props.customCss} onClick={props.onTap.bind(this)}>
                <p style={Styles.btnText}>{props.name}</p>
            </section>
        )
    }
}