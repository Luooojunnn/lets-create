// 本地mock服务
const { createServer } = require("http");
const fs = require("fs");
const url = require("url");

createServer((req, res) => {
  let u = url.parse(req.url);
  res.writeHead(200, { "Content-type": "application/json" });
  if (u.pathname == "/favicon.ico") {
    res.end("");
    return;
  }
  console.log(u.pathname.slice(1));
  res.end(String(readFs(u.pathname.slice(1))));
}).listen(9001, () => {
  console.log("9001服务已启动");
});

// 读取文件服务
function readFs(path) {
  try {
    let res = fs.readFileSync(`./apis/${path}`);
    return res;
  } catch (e) {
    console.log("一般来说，看到我说明你接口名和json名写的不一样");
    return "{}";
  }
}
