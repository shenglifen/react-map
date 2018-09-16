import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import {withRouter,Link,} from 'react-router-dom';
import {autobind} from 'core-decorators';
const { SubMenu } = Menu;
const { Header, Sider } = Layout;

@withRouter
@autobind
export default class App extends Component {
    state = {
        openKeys:[],
        selectKey:"",
    };
    componentDidMount(){
        for(let item of routers){
            if(item.children&&item.children.length>0){
                for(let menu of item.children){
                    if(menu.path===this.props.history.location.pathname){
                        this.setState({
                            selectKey:menu.id,
                            openKeys:[menu.pid]
                        });
                        break;
                    }
                }
            }else {
                if(item.path === this.props.history.location.pathname){
                    this.setState({
                        selectKey:item.id,
                        openKeys:[""]
                    });
                    break;
                }
            }
        }
    }
    openClick(openKeys){
        this.setState({openKeys})
    }
    menuClick(e){
        this.setState({selectKey:e.key})
    }
    render() {
        return (
            <Layout>
            <Header className="header">
              <div className="logo" >地图</div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">百度地图</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff',height:"100vh" }}>
                <Menu
                  mode="inline"
                  selectedKeys={[this.state.selectKey]}
                  openKeys={this.state.openKeys}
                  onOpenChange={this.openClick}
                  style={{ height: '100%', borderRight: 0 }}
                >
                {routers.map((subMenu,index)=>{
                    return subMenu.children&&subMenu.children.length>0?
                    <SubMenu key={subMenu.id} title={<span><Icon type={subMenu.icon} />{subMenu.name}</span>}>
                    {subMenu.children.map((menu,k)=>{
                    return<Menu.Item key={menu.id} onClick={this.menuClick}><Link to ={menu.path}>{menu.name}</Link></Menu.Item>
                    })}
                     </SubMenu>: 
                     <Menu.Item key={subMenu.id} onClick={this.menuClick}>
                        <Icon type={subMenu.icon} />
                        <Link to ={subMenu.path}>{subMenu.name}</Link>
                    </Menu.Item>
                })}
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                {this.props.children}
              </Layout>
            </Layout>
          </Layout>
        );
    }
}

const routers = [
    {id:"1",name:"地图示例",path:"/bmap",icon:"appstore",
    children:[
        {id:"11",name:"地图展示",path:"/bmap/basic",pid:"1"},
    ]}
];