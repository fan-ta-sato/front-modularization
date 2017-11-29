/**
 * https://babeljs.io/docs/plugins/transform-es2015-block-scoping/
 *
 * letをvarに変換する。ブロックスコープ内は別変数名に変換される
 */
let a = 1
{
  let a = 10
}
{
  let a = 20
}
a++

export default a
