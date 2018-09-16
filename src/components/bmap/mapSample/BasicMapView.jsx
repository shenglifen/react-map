import React ,{Component} from 'react';
import BreadcrumbView from "../../../common/BreadcrumbView";
import {Layout} from 'antd';
import BMap from 'BMap';
import {BMAP_HYBRID_MAP, BMAP_NORMAL_MAP} from "../../../common/BMAP_DATA";
import PageMessage from "../../../common/PageMessage";

const {Content} = Layout;
export default class BasicMapView extends Component{
    componentDidMount(){
        console.log(window);
        let map =new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_HYBRID_MAP,//混合地图
                BMAP_NORMAL_MAP//地图
            ]}));
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
    render(){
        return <div>
            <BreadcrumbView homeName={"基础"} title={"地图展示"}/>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <PageMessage text={"初始化地图,设置中心点坐标和地图级别,设置地图显示的城市,开启鼠标滚轮缩放"}/>
                <div style={{width:"100%",height:500}} id={"allmap"}></div>
            </Content>
        </div>
    }
}