#!/usr/bin/env node


// 翻译引擎
const baidu = require('./engine/baidu');
const engine = {baidu};

// 翻译
module.exports = (query, config) => {
  engine[config.default](query, config)
};