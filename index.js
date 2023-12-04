"use strict";
// src/index.ts
/**
 * @param a number
 * @param b number
 * @returns number
 *
 * @description
 * TypeScript는 '원하는 타입'을 사용하고 싶다는 JavaScript 유저의 강력한 니즈에서 시작되었다.
 * 아래의 add() 함수를 확인해보면,
 * 매개변수 a와 b의 타입은 number만 받겠다는 제작자의 의지(?)를 확인할 수 있다.
 * 심지어, 리턴값까지도 :number로 표기해두어 해당 함수의 실행이 완료되면 반환값의 데이터 타입까지도 함수명 옆에 표기되어 가독성이 매우 좋아진다.
 * 코드는 길어졌지만, 가독성은 높아진 다소 이상한 현상이 일어난 것이다.
 * 특히, 매우 큰 코드 베이스를 다루는 경우에 이러한 가독성은 더욱 중요해진다.
 */
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
