/**
 * https://babeljs.io/docs/plugins/transform-es3-property-literals/
 *
 * プロパティ名が予約語のときに、引用符で囲う
 */
var foo = {
  catch: function () {return "transform-es3-property-literals"}
};

export default function() {
  return foo.a()
}
