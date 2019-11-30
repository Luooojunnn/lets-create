import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtDrawer, AtSearchBar } from "taro-ui";
import "taro-ui/dist/style/components/flex.scss";

import "./search.less";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "全部",
      value: "",
      show: false,
      typeList: [],
      id: 0 // 全部
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.initType();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 数据初始化
  initType() {
    this.setState({
      typeList: this.props.conf.allType.map(i => i.name)
    });
  }

  openSelectType() {
    this.setState({
      show: true
    });
  }
  onClose() {
    this.setState({
      show: false
    });
  }
  // 输入搜索条件
  handleChange(value) {
    this.setState({
      value
    });
    return value;
  }
  // 确认选择类型
  subType(index) {
    this.state.id = this.props.conf.allType[index]["id"];
    // 更多则跳转，否则进行搜索
    if (index !== this.state.typeList.length) {
      this.setState({
        searchType: this.state.typeList[index]
      });
      if (this.state.value) {
        this.submit({
          id: this.state.id,
          value: this.state.value
        });
      }
    } else {
      console.log("点击了更多");
    }
  }

  // 搜索
  submit({ id, value }) {
    if (value === "" || id === undefined) {
      return;
    }
    this.props.conf.confirm({
      id,
      value
    });
  }

  render() {
    return (
      <View className="at-row wrap">
        <View
          className="at-col at-col-2 at-col--auto type"
          onClick={this.openSelectType.bind(this)}
        >
          {this.state.searchType}
        </View>
        <View className="at-col">
          <AtSearchBar
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onActionClick={this.submit.bind(this, {
              id: this.state.id,
              value: this.state.value
            })}
          />
        </View>

        <AtDrawer
          show={this.state.show}
          mask
          onClose={this.onClose.bind(this)}
          onItemClick={this.subType.bind(this)}
          items={this.state.typeList}
        ></AtDrawer>
      </View>
    );
  }
}
