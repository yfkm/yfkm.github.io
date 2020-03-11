import React from 'react'
import './Button.scss'

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: props.value};
		this.onClick = this.onClick.bind(this);
	}
	render() {
		return (
			<div onClick={this.onClick} className={'Components-Button Components-Button-'+ (this.state.value ? 'on' : 'off')}></div>
		);
	}
	onClick(){
		this.setState({value: !this.state.value});
	}
}
export default Button