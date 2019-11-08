import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtAvatar, AtButton } from "taro-ui";
import "./mine.less";

import "taro-ui/dist/style/components/flex.scss";

import r from "../../utils/request.js";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatarImg: "https://s2.ax1x.com/2019/11/07/MFOfbT.png",
        nickName: ""
      },
      operList: [
        {
          name: "我在追的",
          note: "----",
          icon: "eye"
        },
        {
          name: "收藏集",
          note: "----",
          icon: "eye"
        },
        {
          name: "合订册",
          note: "----",
          icon: "eye"
        }
      ]
    };
  }
  config: Config = {
    navigationBarTitleText: "我的"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    this.getInfo();
  }

  componentDidHide() {}

  getInfo() {
    r({
      url: "getMineInfo"
    })
      .then(res => {
        let operList = this.state.operList;
        operList[0]["note"] = res.data.continued.note;
        operList[1]["note"] = res.data.collection.note;
        operList[2]["note"] = res.data.bindingBooks.note;
        console.log(operList);
        this.setState({
          operList
        });
      })
      .catch(e => console.log(e));
  }

  // 获取用户信息
  login() {
    console.log('此处进行登录逻辑')
  }

  render() {
    let userInfo = this.state.userInfo;
    return (
      <View className="mine">
        <View className="at-row">
          <View className="at-col at-col-3">
            <AtAvatar circle image={userInfo.avatarImg}></AtAvatar>
          </View>
          <View className="at-col at-col-9">
            {this.state.userInfo.nickName ? (
              this.state.userInfo.nickName
            ) : (
              <AtButton
                type="primary"
                onClick={this.login.bind(this)}
              >
                登录
              </AtButton>
            )}
          </View>
        </View>
        <View>
          <AtList>
            {this.state.operList.map((i, k) => {
              return (
                <AtListItem
                  title={i.name}
                  note={i.note}
                  arrow="right"
                  iconInfo={{ size: 18, color: "", value: i.icon }}
                />
              );
            })}
          </AtList>
        </View>
      </View>
    );
  }
}
