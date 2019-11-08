import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.less'

import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'


export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardsRenderInfo: {
        id: 1,  // 首页卡片
        nums: 20  // 首次加载20条
      }
    }
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Search nums='0'></Search>
        <View className='cards-wrap'>
        <Cards cardsRenderInfo={this.state.cardsRenderInfo}></Cards>
        </View>
        
      </View>
    )
  }
}
