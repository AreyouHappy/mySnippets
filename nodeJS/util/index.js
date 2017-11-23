const crypto = require('crypto');
const logger = require('logops');


//로그 기록부분 express middleware
const log = true;
function logPrint(text){
  if (!log)
    return;
  logger.info(text);
}


// 빈값체크
function empty(str) {
  if (typeof str == 'undefined' || !str || str.length === 0 || str === "") {
    return true;
  } else {
    return false;
  }
}

// 랜덤해싱
function randomHexString(size) {
  if (size === 0) {
    throw new Error('Zero-length randomHexString is useless.');
  }
  if (size % 2 !== 0) {
    throw new Error('randomHexString size must be divisible by 2.')
  }
  return crypto.randomBytes(size / 2).toString('hex');
}

module.exports = {
  randomHexString,
  empty,
  logPrint
};
