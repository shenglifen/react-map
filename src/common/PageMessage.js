import React ,{Component} from 'react';
export default class PageMessage extends Component{
    render(){
        return <div>
            <h3 style={{color:"#1890ff",padding:10,background:"#eee"}} >{this.props.text}</h3>
        </div>
    }
}
