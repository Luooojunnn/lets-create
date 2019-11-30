import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./detail.less";

import r from "../../utils/request.js";

export default class Deatil extends Component{
  config: Config = {
    navigationBarTitleText: "详情"
  };

  componentWillMount() {
    
  }

  render(){
    return (
      <View>
        11
      </View>
    )
  }
}
