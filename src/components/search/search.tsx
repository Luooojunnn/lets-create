import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtDrawer, AtSearchBar } from "taro-ui";
import "taro-ui/dist/style/components/flex.scss";

import r from "../../utils/request.js";

import "./search.less";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "全部",
      value: "",
      show: false,
      allType: [],
      typeIds: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getInfo(this.props.nums);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 获取小说类型
   * @param nums - 数量
   */
  getInfo(nums) {
    r({
      url: "getTypes",
      data: {
        nums
      }
    })
      .then(res => {
        let typsList = [...res.data.typsList, { name: "更多" }];
        let allType = typsList.map(item => item.name);
        let typeIds = typsList.map(item => item.id);
        this.setState({
          allType,
          typeIds
        });
      })
      .catch(e => console.log(e));
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
    // 更多则跳转，否则进行搜索
    if (this.state.typeIds[index] > -1) {
      this.setState({
        searchType: this.state.allType[index]
      });
      if(this.state.value){
       this.getInfo()
      }
    } else {
      console.log("点击了更多");
    }
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
          />
        </View>

        <AtDrawer
          show={this.state.show}
          mask
          onClose={this.onClose.bind(this)}
          onItemClick={this.subType.bind(this)}
          items={this.state.allType}
        ></AtDrawer>
      </View>
    );
  }
}
