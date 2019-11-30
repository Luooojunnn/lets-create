import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";

import Search from "../../components/search/search";
import Cards from "../../components/cards/cards";

import r from "../../utils/request.js";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchConf: {
        allType: [],
        confirm: oType => {
          this.getCards({
            nums: 20,
            ...oType
          });
        }
      },
      cardsConf: {
        allCards: [],
        confirm: oCard => {
          console.log(oCard);
          Taro.navigateTo({
            url: '/pages/detail/detail'
          })
        } 
      }
      
    };
  }

  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {
    this.getTypes(10);
    this.getCards({
      nums: 20,
      id: 0
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 获取小说类型
   * @param nums - 数量
   */
  getTypes(nums) {
    r({
      url: "getTypes",
      data: {
        nums
      }
    })
      .then(res => {
        let typsList = [...res.data.typsList, { name: "更多" }];
        let searchConf = this.state.searchConf;
        searchConf.allType = typsList;
        this.setState({
          searchConf
        });
      })
      .catch(e => console.log(e));
  }
  /**
   * 获取小说卡片
   */
  getCards({ nums, id, value = "" }) {
    r({
      url: "getCards",
      data: {
        id,
        nums,
        value
      }
    })
      .then(res => {
        let cardsConf = this.state.cardsConf;
        cardsConf.allCards = res.data.cardsList;
        this.setState({
          cardsConf
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <View className="index">
        <Search conf={this.state.searchConf}></Search>
        <View className="cards-wrap">
          <Cards conf={this.state.cardsConf}></Cards>
        </View>
      </View>
    );
  }
}
