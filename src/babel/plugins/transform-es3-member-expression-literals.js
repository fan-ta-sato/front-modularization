/**
 * https://babeljs.io/docs/plugins/transform-es3-member-expression-literals/
 *
 * t.catchのようなプロパティメンバに予約語が含まれるときに、引用符で囲う
 */
const t = {
  "catch": 'transform-es3-member-expression-literals',
}

export default function() {
  return t.catch
}
