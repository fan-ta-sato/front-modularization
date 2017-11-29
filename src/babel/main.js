import transformEs3MemberExpressionLiterals from './plugins/transform-es3-member-expression-literals.js'
import transformEs3PropertyLiterals from './plugins/transform-es3-property-literals.js'
import checkEs2015Constants from './plugins/check-es2015-constants.js'
import transformEs2015ArrowFunctions from './plugins/transform-es2015-arrow-functions.js'
import transformEs2015BlockScopedFunctions from './plugins/transform-es2015-block-scoped-functions.js'
import transformEs2015BlockScoping from './plugins/transform-es2015-block-scoping.js'

export default function() {
  console.log(transformEs3MemberExpressionLiterals());
  console.log(transformEs3PropertyLiterals());
  console.log(checkEs2015Constants);
  console.log(transformEs2015ArrowFunctions());
  console.log(transformEs2015BlockScopedFunctions)
  console.log(transformEs2015BlockScoping)
}
