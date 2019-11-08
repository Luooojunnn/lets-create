// 请求封装
import Taro from "@tarojs/taro";
import getApi from "./apis";

function r({ url = "", data = {} }) {
  let p = new Promise((res, rej) => {
    Taro.request({
      url: getApi(String(url)),
      data,
      header: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(result => res(result.data))
      .catch(e => rej(e));
  });
  return p;
}

export default r;
