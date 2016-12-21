# 取名

[![Build Status](https://travis-ci.org/tonydeng/intitle.svg?branch=master)](https://travis-ci.org/tonydeng/intitle)

## 测试方式

```bash
git clone git@github.com/tonydeng/intitle.git

cd intitle

npm install

npm test
```


## 调整测试参数

可用调整`SearchSong`的传入参数, `text`是你想查询的字，`debug.num`是调试时的抓取页数。

```javascript
SearchSong({
    text: '心',
    debug: {
        num: 1,
    },
    noLastWord: true,
})
```
