import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "./create.less";

import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/flex.scss";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operList: [
        {
          name: "正创作的",
          newMsg: 1
        },
        {
          name: "我发起的",
          newMsg: 10
        },
        {
          name: "我续写的",
          newMsg: 0
        },
        {
          name: "我标记的",
          newMsg: 2
        }
      ]
    };
  }

  config: Config = {
    navigationBarTitleText: "创作"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="create">
        <View className="cur-money">
          <View>当前获得赏金：</View>
          <Text className="money">￥800</Text>
        </View>
        {this.state.operList.map((i, k) => {
          return (
            <View className="oper-wrap">
              <View className="at-row">
                <View className="at-col at-col-9 info-wrap">
                  <Text className="name">{i.name}</Text>
                  <Text className="sequel">
                    {i.newMsg ? "有新的" : "暂无更新"}~
                  </Text>
                </View>
                <View className="at-col at-col-3 oper">
                  <AtButton type="primary" size="small" circle>
                    看看呢
                  </AtButton>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
