// apis 集合
const env = "dev";
let host = 'http://localhost:9001/';

let apis = {
  getMineInfo: {
    dev: "getMineInfo.json",
    prod: "http://apis.letsCreate.com/letsCreateUi/getMineInfo"
  },
  getCards: {
    dev: "getCards.json",
    prod: "http://apis.letsCreate.com/letsCreateUi/getCards"
  },
  getTypes: {
    dev: "getTypes.json",
    prod: "http://apis.letsCreate.com/letsCreateUi/getTypes"
  }
};

function getApi(api) {
  let apiObj = apis[api] || {};
  return `${host}${apiObj[env]}` ;
}

export default getApi;
