import React, { Component } from 'react';
import {Breadcrumb } from 'antd';


export default class BreadcrumbView extends Component {
    render(){
        return <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{this.props.homeName}</Breadcrumb.Item>
            <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
        </Breadcrumb>
    }
}