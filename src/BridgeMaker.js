const { BRIDGE } = require('./const.js')

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * 프로퍼티 추가 금지
 * 파일 경로 변경 금지
 * 메소드의 시그니처(인자, 이름)와 return type 변경 금지
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let index = 0; index < size; index++) {
      UorD = generateRandomNumber() === 0 ? BRIDGE.INPUT_RANGE[1] : BRIDGE.INPUT_RANGE[0];
      bridge.push(UorD);      
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
