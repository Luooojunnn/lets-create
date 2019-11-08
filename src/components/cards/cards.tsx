import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard } from "taro-ui";
import "./cards.less";

import r from "../../utils/request.js";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      indexCardsArray: [
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        },
        {
          fictionName: "我夺舍了魔皇",
          author: "八月飞鹰",
          recommend: "高中生吕树在一场车祸中改变人生",
          partContent:
            "烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫……一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。————普群号：563767909VIP群号：831555766（需2000粉丝值，老书亦可）",
          latest: "真熊初墨"
        }
      ]
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getInfo(this.props.cardsRenderInfo)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getInfo(cardsRenderInfo) {
    r({
      url: "getCards",
      data:{
        id: cardsRenderInfo.id,
        nums: cardsRenderInfo.nums
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e));
  }

  a(e,i){
    console.log(e)
    console.log(i)
  }
  render() {
    return (
      <View className="cards">
        {this.state.indexCardsArray.map((i,k) => {
          return (
            <AtCard
              key={k}
              className='card'
              note={i.recommend}
              extra={'新续: ' + i.author}
              title={i.fictionName}
              thumb="http://www.logoquan.com/upload/logo/logo.gif"
              onClick={this.a.bind(this,i)}
            >
              {i.partContent}
            </AtCard>
          );
        })}
      </View>
    );
  }
}
