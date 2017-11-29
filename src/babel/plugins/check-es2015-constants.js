/**
 * https://babeljs.io/docs/plugins/check-es2015-constants/
 *
 * const, letに再代入していると、トランスコンパイル時にエラーになる
 */
const a = 1
/**
 * コメントアウトを外すとbabel実行時に再代入エラーになる
 */
// a = 1

export default a
