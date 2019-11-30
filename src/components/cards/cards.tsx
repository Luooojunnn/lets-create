import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtCard } from "taro-ui";
import "./cards.less";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  junmpTo(item) {
    this.props.conf.confirm(item);
  }
  render() {
    if (!this.props.conf) {
      return;
    }
    return (
      <View className="cards">
        {this.props.conf.allCards.map((i, k) => {
          return (
            <AtCard
              key={k}
              className="card"
              note={i.recommend}
              extra={"新续: " + i.author}
              title={i.fictionName}
              thumb="http://www.logoquan.com/upload/logo/logo.gif"
              onClick={this.junmpTo.bind(this, i)}
            >
              {i.partContent}
            </AtCard>
          );
        })}
      </View>
    );
  }
}
