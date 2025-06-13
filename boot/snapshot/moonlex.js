const $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$ = { $tag: 0 };
function $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Node$0$(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Node$0$.prototype.$tag = 1;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $i32_popcnt(a) {
  a = a - ((a >>> 1) & 0x55555555);
  a = (a & 0x33333333) + ((a >>> 2) & 0x33333333);
  a = (a + (a >>> 4)) & 0x0f0f0f0f;
  a = a + (a >>> 8);
  a = a + (a >>> 16);
  return a & 0x3f;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const moonbitlang$core$array$$JSArray$copy = (arr) => arr.slice(0);
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$1$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$1$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$1$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$.prototype.$tag = 1;
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
function Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError.prototype.$tag = 15;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__type_Rule_$46$YYObj__immut_list_T__type_Rule_(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__type_Rule_$46$YYObj__immut_list_T__type_Rule_.prototype.$tag = 14;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Rule$46$YYObj__type_Rule(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Rule$46$YYObj__type_Rule.prototype.$tag = 13;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj___type_Regex___type_CodeBlock_$46$YYObj___type_Regex___type_CodeBlock_(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj___type_Regex___type_CodeBlock_$46$YYObj___type_Regex___type_CodeBlock_.prototype.$tag = 12;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__.prototype.$tag = 11;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String___type_Regex_$46$YYObj__String___type_Regex_(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String___type_Regex_$46$YYObj__String___type_Regex_.prototype.$tag = 10;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T.prototype.$tag = 9;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex.prototype.$tag = 8;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__String___type_Regex__$46$YYObj__immut_list_T__String___type_Regex__(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__String___type_Regex__$46$YYObj__immut_list_T__String___type_Regex__.prototype.$tag = 7;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Lex$46$YYObj__type_Lex(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Lex$46$YYObj__type_Lex.prototype.$tag = 6;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Char$46$YYObj_Char(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Char$46$YYObj_Char.prototype.$tag = 5;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String.prototype.$tag = 4;
function Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String__String__String_$46$YYObj__String__String__String_(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String__String__String_$46$YYObj__String__String__String_.prototype.$tag = 3;
const Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void = { $tag: 2 };
function Error$moonbitlang$47$lex$47$lib$47$parser$46$ParseError$46$UnexpectedToken(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
Error$moonbitlang$47$lex$47$lib$47$parser$46$ParseError$46$UnexpectedToken.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 0;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
const $0L = { hi: 0, lo: 0 };
const $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Empty$7$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Tree$7$(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Tree$7$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Empty$8$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$8$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$8$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$8$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$8$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$8$.prototype.$tag = 3;
const $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Empty$9$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$9$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$9$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$9$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$9$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$9$.prototype.$tag = 3;
const Option$None$10$ = { $tag: 0 };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$8$.prototype.$tag = 0;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$9$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$9$.prototype.$tag = 0;
function $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$11$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$11$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$11$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$11$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$11$.prototype.$tag = 4;
const $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$12$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array();
const Option$None$13$ = { $tag: 0 };
function Option$Some$13$(param0) {
  this._0 = param0;
}
Option$Some$13$.prototype.$tag = 1;
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
};
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const $64$moonbitlang$47$lex$47$lib$47$util$47$eof_char_set$46$EofCharRepr$Eof = { $tag: 0 };
function $64$moonbitlang$47$lex$47$lib$47$util$47$eof_char_set$46$EofCharRepr$Char(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$util$47$eof_char_set$46$EofCharRepr$Char.prototype.$tag = 1;
const $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Underscore = { $tag: 0 };
const $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$EOF = { $tag: 1 };
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReStr(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReStr.prototype.$tag = 2;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReChar(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReChar.prototype.$tag = 3;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$CharSet(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$CharSet.prototype.$tag = 4;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Repetition(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Repetition.prototype.$tag = 5;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Option(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Option.prototype.$tag = 6;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Alter(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Alter.prototype.$tag = 7;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Concat(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Concat.prototype.$tag = 8;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Capture(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Capture.prototype.$tag = 9;
function $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Named(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Named.prototype.$tag = 10;
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EOI = { $tag: 0 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EOF = { $tag: 1 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$PARSE_LBRACE = { $tag: 2 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LET = { $tag: 3 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$AS = { $tag: 4 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$UNDERSCORE = { $tag: 5 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RBRACE = { $tag: 6 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LPAREN = { $tag: 7 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RPAREN = { $tag: 8 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LBRACKET = { $tag: 9 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RBRACKET = { $tag: 10 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EQ = { $tag: 11 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$SEMICOLON = { $tag: 12 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$FAT_ARROW = { $tag: 13 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$BAR = { $tag: 14 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$STAR = { $tag: 15 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$PLUS = { $tag: 16 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$QUESTION = { $tag: 17 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$MINUS = { $tag: 18 };
const $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CARET = { $tag: 19 };
function $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE.prototype.$tag = 20;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LBRACE_CODE_RBRACE(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LBRACE_CODE_RBRACE.prototype.$tag = 21;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LC_IDENT(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LC_IDENT.prototype.$tag = 22;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR.prototype.$tag = 23;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$STRING(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$Token$STRING.prototype.$tag = 24;
function Result$Err$14$(param0) {
  this._0 = param0;
}
Result$Err$14$.prototype.$tag = 0;
function Result$Ok$14$(param0) {
  this._0 = param0;
}
Result$Ok$14$.prototype.$tag = 1;
function Result$Err$15$(param0) {
  this._0 = param0;
}
Result$Err$15$.prototype.$tag = 0;
function Result$Ok$15$(param0) {
  this._0 = param0;
}
Result$Ok$15$.prototype.$tag = 1;
const $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Accept = { $tag: 0 };
function $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift.prototype.$tag = 1;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce.prototype.$tag = 2;
function $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead.prototype.$tag = 3;
const $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error = { $tag: 4 };
const $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$16$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$16$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$16$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$17$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$17$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$17$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$18$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$18$.prototype.$tag = 1;
const $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps = { $tag: 0 };
function $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar.prototype.$tag = 1;
function $64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$StartPosOf(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$StartPosOf.prototype.$tag = 0;
function $64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$EndPosOf(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$EndPosOf.prototype.$tag = 1;
function $64$Yoorkin$47$ArgParser$46$Spec$Unit(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$ArgParser$46$Spec$Unit.prototype.$tag = 0;
function $64$Yoorkin$47$ArgParser$46$Spec$String(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$ArgParser$46$Spec$String.prototype.$tag = 1;
function $64$Yoorkin$47$ArgParser$46$Spec$Set_string(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$ArgParser$46$Spec$Set_string.prototype.$tag = 2;
function $64$Yoorkin$47$ArgParser$46$Spec$Set(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$ArgParser$46$Spec$Set.prototype.$tag = 3;
function $64$Yoorkin$47$ArgParser$46$Spec$Clear(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$ArgParser$46$Spec$Clear.prototype.$tag = 4;
const moonbitlang$x$sys$internal$ffi$$get_cli_args_internal = function() {
  return process.argv;
 };
const moonbitlang$x$fs$$read_file_ffi = function(path) {
   var fs = require('fs');
   try {
     const content = fs.readFileSync(path);
     globalThis.fileContent = content;
     return 0;
   } catch (error) {
     globalThis.errorMessage = error.message;
     return -1;
   }
 };
const moonbitlang$x$fs$$write_file_ffi = function(path, content) {
   var fs = require('fs');
   try {
     fs.writeFileSync(path, Buffer.from(content));
     return 0;
   } catch (error) {
     globalThis.errorMessage = error.message;
     return -1;
   }
 };
const moonbitlang$x$fs$$get_file_content_ffi = function() {
   return globalThis.fileContent;
 };
const moonbitlang$x$fs$$get_error_message_ffi = function() {
   return globalThis.errorMessage || '';
 };
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
function Result$Err$20$(param0) {
  this._0 = param0;
}
Result$Err$20$.prototype.$tag = 0;
function Result$Ok$20$(param0) {
  this._0 = param0;
}
Result$Ok$20$.prototype.$tag = 1;
function Result$Err$21$(param0) {
  this._0 = param0;
}
Result$Err$21$.prototype.$tag = 0;
function Result$Ok$21$(param0) {
  this._0 = param0;
}
Result$Ok$21$.prototype.$tag = 1;
function Result$Err$22$(param0) {
  this._0 = param0;
}
Result$Err$22$.prototype.$tag = 0;
function Result$Ok$22$(param0) {
  this._0 = param0;
}
Result$Ok$22$.prototype.$tag = 1;
function Result$Err$23$(param0) {
  this._0 = param0;
}
Result$Err$23$.prototype.$tag = 0;
function Result$Ok$23$(param0) {
  this._0 = param0;
}
Result$Ok$23$.prototype.$tag = 1;
function Result$Err$24$(param0) {
  this._0 = param0;
}
Result$Err$24$.prototype.$tag = 0;
function Result$Ok$24$(param0) {
  this._0 = param0;
}
Result$Ok$24$.prototype.$tag = 1;
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$lex$lib$parser$$token_tag_action_row_0 = [];
const moonbitlang$lex$lib$parser$$token_tag_action_row_1 = [-1];
const moonbitlang$lex$lib$parser$$token_tag_action_row_2 = [0];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_0 = [];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_1 = [-1];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_2 = [0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0 = [];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1 = [0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2 = [-1];
const moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_0 = [];
const moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_1 = [0];
const moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_2 = [-1];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0 = [];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1 = [0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2 = [-1];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0 = [];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2 = [-1];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1 = [0];
const moonbitlang$lex$lib$codegen$$runtime = "///|\nstruct Lexbuf {\n  content : String\n  mut pos : Int\n}\n\n///|\npub fn Lexbuf::from_string(content : String) -> Lexbuf {\n  { content, pos: 0 }\n}\n\n// NOTE: MoonBit do have unboxed Option[Char] optimization\n///|\nfn next(self : Lexbuf) -> Char? {\n  if self.pos < self.content.length() {\n    let ch = self.content.charcode_at(self.pos)\n    self.pos += 1\n    Some(ch.unsafe_to_char())\n  } else {\n    None\n  }\n}\n\n///|\nfn substring(self : Lexbuf, start : Int, end : Int) -> String {\n  self.content.substring(start~, end~)\n}\n\n///|\ntypealias Array[Array[Int]] as LexTagAction\n\n///|\ntypealias Int as LexState\n\n///|\ntypealias Int as LexInput\n\n///|\npub(all) struct LexEngine {\n  graph : Array[(LexState) -> (LexState, LexTagAction)]\n  end_nodes : Array[(Int, Array[((Int, Int), (Int, Int))])?]\n  start_tags : Array[Int]\n  code_blocks_n : Int\n}\n\n///|\npub fn run(self : LexEngine, lexbuf : Lexbuf) -> (Int, Array[(Int, Int)]) {\n  let mut state = 0\n  let mut tagState : Array[Array[Int]] = []\n  let mut longest_match = None\n  for tag in self.start_tags {\n    while tagState.length() <= tag {\n      tagState.push([])\n    }\n    tagState[tag].push(lexbuf.pos)\n  }\n  while state != -1 {\n    match self.end_nodes[state] {\n      Some(t) => longest_match = Some((t.0, lexbuf.pos, state, tagState))\n      _ => ()\n    }\n    let b = match lexbuf.next() {\n      Some(b) => b.to_int()\n      None => -1\n    }\n    let next = self.graph[state](b)\n    state = next.0\n    let new_tagState : Array[Array[Int]] = []\n    for i = 0; i < next.1.length(); i = i + 1 {\n      new_tagState.push([])\n      for j = 0; j < next.1[i].length(); j = j + 1 {\n        let t = next.1[i][j]\n        if t == -1 {\n          new_tagState[i].push(lexbuf.pos)\n        } else {\n          new_tagState[i].push(tagState[i][t])\n        }\n      }\n    }\n    tagState = new_tagState\n  }\n  match longest_match {\n    None => (self.code_blocks_n, [])\n    Some((index, pos, state, tagState)) => {\n      lexbuf.pos = pos\n      let captures = self.end_nodes[state].unwrap().1.map(fn {\n        ((b_t, b_r), (e_t, e_r)) => (tagState[b_t][b_r], tagState[e_t][e_r])\n      })\n      (index, captures)\n    }\n  }\n}\n";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$180 = " \t\r\n";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$181 = "";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$182 = " ";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$191 = "\n";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$192 = "\n";
const moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$193 = "\n";
const moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$198 = "\n";
const moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$199 = "\n\n";
const moonbitlang$lex$main$$_init$42$46$usage$124$1 = "Usage: moonlex [options] <input-file>";
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 = [moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_2, moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_1];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 = [moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 = [moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_2, moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_2];
const moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 = [moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$__mbtlex_engine_arrow_code_lbrace = { graph: [moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_0, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_1, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_2, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_3, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_4, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_5, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_6, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_7, moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_8], end_nodes: [undefined, undefined, undefined, undefined, undefined, undefined, { _0: 0, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }, undefined, undefined], start_tags: [], code_blocks_n: 1 };
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_11 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_10 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_6 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_4 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_12 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_2 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_3 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_7 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_2, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_9 = [moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_1, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0, moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_row_0];
const moonbitlang$lex$lib$parser$$__mbtlex_engine_string_inner_rquote = { graph: [moonbitlang$lex$lib$parser$$string_inner_rquote_state_0, moonbitlang$lex$lib$parser$$string_inner_rquote_state_1, moonbitlang$lex$lib$parser$$string_inner_rquote_state_2, moonbitlang$lex$lib$parser$$string_inner_rquote_state_3, moonbitlang$lex$lib$parser$$string_inner_rquote_state_4, moonbitlang$lex$lib$parser$$string_inner_rquote_state_5, moonbitlang$lex$lib$parser$$string_inner_rquote_state_6, moonbitlang$lex$lib$parser$$string_inner_rquote_state_7, moonbitlang$lex$lib$parser$$string_inner_rquote_state_8, moonbitlang$lex$lib$parser$$string_inner_rquote_state_9, moonbitlang$lex$lib$parser$$string_inner_rquote_state_10, moonbitlang$lex$lib$parser$$string_inner_rquote_state_11, moonbitlang$lex$lib$parser$$string_inner_rquote_state_12, moonbitlang$lex$lib$parser$$string_inner_rquote_state_13, moonbitlang$lex$lib$parser$$string_inner_rquote_state_14, moonbitlang$lex$lib$parser$$string_inner_rquote_state_15, moonbitlang$lex$lib$parser$$string_inner_rquote_state_16, moonbitlang$lex$lib$parser$$string_inner_rquote_state_17, moonbitlang$lex$lib$parser$$string_inner_rquote_state_18, moonbitlang$lex$lib$parser$$string_inner_rquote_state_19, moonbitlang$lex$lib$parser$$string_inner_rquote_state_20, moonbitlang$lex$lib$parser$$string_inner_rquote_state_21, moonbitlang$lex$lib$parser$$string_inner_rquote_state_22, moonbitlang$lex$lib$parser$$string_inner_rquote_state_23, moonbitlang$lex$lib$parser$$string_inner_rquote_state_24, moonbitlang$lex$lib$parser$$string_inner_rquote_state_25], end_nodes: [undefined, { _0: 11, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 12, _1: [] }, { _0: 11, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 0, _1: [] }, { _0: 7, _1: [] }, { _0: 1, _1: [] }, { _0: 5, _1: [] }, undefined, { _0: 4, _1: [] }, { _0: 2, _1: [] }, { _0: 6, _1: [] }, { _0: 3, _1: [] }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, { _0: 8, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }, undefined, undefined, { _0: 10, _1: [{ _0: { _0: 4, _1: 0 }, _1: { _0: 5, _1: 0 } }] }, undefined, { _0: 9, _1: [{ _0: { _0: 2, _1: 0 }, _1: { _0: 3, _1: 0 } }] }], start_tags: [6], code_blocks_n: 13 };
const moonbitlang$lex$lib$parser$$token_tag_action_11 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_2 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_1 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_0 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_3 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1];
const moonbitlang$lex$lib$parser$$token_tag_action_19 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_17 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_5 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_14 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_9 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_10 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_18 = [moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_15 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_12 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_16 = [moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_13 = [moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_8 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_4 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_2, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_7 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$token_tag_action_6 = [moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_1, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0, moonbitlang$lex$lib$parser$$token_tag_action_row_0];
const moonbitlang$lex$lib$parser$$__mbtlex_engine_token = { graph: [moonbitlang$lex$lib$parser$$token_state_0, moonbitlang$lex$lib$parser$$token_state_1, moonbitlang$lex$lib$parser$$token_state_2, moonbitlang$lex$lib$parser$$token_state_3, moonbitlang$lex$lib$parser$$token_state_4, moonbitlang$lex$lib$parser$$token_state_5, moonbitlang$lex$lib$parser$$token_state_6, moonbitlang$lex$lib$parser$$token_state_7, moonbitlang$lex$lib$parser$$token_state_8, moonbitlang$lex$lib$parser$$token_state_9, moonbitlang$lex$lib$parser$$token_state_10, moonbitlang$lex$lib$parser$$token_state_11, moonbitlang$lex$lib$parser$$token_state_12, moonbitlang$lex$lib$parser$$token_state_13, moonbitlang$lex$lib$parser$$token_state_14, moonbitlang$lex$lib$parser$$token_state_15, moonbitlang$lex$lib$parser$$token_state_16, moonbitlang$lex$lib$parser$$token_state_17, moonbitlang$lex$lib$parser$$token_state_18, moonbitlang$lex$lib$parser$$token_state_19, moonbitlang$lex$lib$parser$$token_state_20, moonbitlang$lex$lib$parser$$token_state_21, moonbitlang$lex$lib$parser$$token_state_22, moonbitlang$lex$lib$parser$$token_state_23, moonbitlang$lex$lib$parser$$token_state_24, moonbitlang$lex$lib$parser$$token_state_25, moonbitlang$lex$lib$parser$$token_state_26, moonbitlang$lex$lib$parser$$token_state_27, moonbitlang$lex$lib$parser$$token_state_28, moonbitlang$lex$lib$parser$$token_state_29, moonbitlang$lex$lib$parser$$token_state_30, moonbitlang$lex$lib$parser$$token_state_31, moonbitlang$lex$lib$parser$$token_state_32, moonbitlang$lex$lib$parser$$token_state_33, moonbitlang$lex$lib$parser$$token_state_34, moonbitlang$lex$lib$parser$$token_state_35, moonbitlang$lex$lib$parser$$token_state_36, moonbitlang$lex$lib$parser$$token_state_37, moonbitlang$lex$lib$parser$$token_state_38, moonbitlang$lex$lib$parser$$token_state_39, moonbitlang$lex$lib$parser$$token_state_40, moonbitlang$lex$lib$parser$$token_state_41, moonbitlang$lex$lib$parser$$token_state_42, moonbitlang$lex$lib$parser$$token_state_43, moonbitlang$lex$lib$parser$$token_state_44, moonbitlang$lex$lib$parser$$token_state_45, moonbitlang$lex$lib$parser$$token_state_46, moonbitlang$lex$lib$parser$$token_state_47, moonbitlang$lex$lib$parser$$token_state_48, moonbitlang$lex$lib$parser$$token_state_49, moonbitlang$lex$lib$parser$$token_state_50, moonbitlang$lex$lib$parser$$token_state_51, moonbitlang$lex$lib$parser$$token_state_52, moonbitlang$lex$lib$parser$$token_state_53, moonbitlang$lex$lib$parser$$token_state_54, moonbitlang$lex$lib$parser$$token_state_55, moonbitlang$lex$lib$parser$$token_state_56, moonbitlang$lex$lib$parser$$token_state_57, moonbitlang$lex$lib$parser$$token_state_58, moonbitlang$lex$lib$parser$$token_state_59, moonbitlang$lex$lib$parser$$token_state_60, moonbitlang$lex$lib$parser$$token_state_61, moonbitlang$lex$lib$parser$$token_state_62, moonbitlang$lex$lib$parser$$token_state_63, moonbitlang$lex$lib$parser$$token_state_64, moonbitlang$lex$lib$parser$$token_state_65, moonbitlang$lex$lib$parser$$token_state_66, moonbitlang$lex$lib$parser$$token_state_67, moonbitlang$lex$lib$parser$$token_state_68, moonbitlang$lex$lib$parser$$token_state_69, moonbitlang$lex$lib$parser$$token_state_70, moonbitlang$lex$lib$parser$$token_state_71, moonbitlang$lex$lib$parser$$token_state_72, moonbitlang$lex$lib$parser$$token_state_73, moonbitlang$lex$lib$parser$$token_state_74], end_nodes: [undefined, { _0: 0, _1: [] }, { _0: 32, _1: [] }, undefined, { _0: 20, _1: [] }, { _0: 19, _1: [] }, { _0: 18, _1: [] }, { _0: 17, _1: [] }, { _0: 16, _1: [] }, { _0: 15, _1: [] }, { _0: 14, _1: [] }, { _0: 12, _1: [] }, { _0: 11, _1: [] }, { _0: 10, _1: [] }, { _0: 9, _1: [] }, { _0: 8, _1: [] }, { _0: 7, _1: [] }, { _0: 13, _1: [] }, { _0: 2, _1: [] }, undefined, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 6, _1: [] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, undefined, undefined, { _0: 5, _1: [] }, { _0: 1, _1: [] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 21, _1: [{ _0: { _0: 2, _1: 0 }, _1: { _0: 3, _1: 0 } }] }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, { _0: 1, _1: [] }, { _0: 1, _1: [] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 23, _1: [] }, { _0: 26, _1: [] }, undefined, { _0: 28, _1: [] }, { _0: 22, _1: [] }, { _0: 27, _1: [] }, { _0: 25, _1: [] }, undefined, undefined, { _0: 24, _1: [] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, undefined, undefined, undefined, undefined, { _0: 33, _1: [{ _0: { _0: 10, _1: 0 }, _1: { _0: 11, _1: 0 } }] }, { _0: 29, _1: [{ _0: { _0: 4, _1: 0 }, _1: { _0: 5, _1: 0 } }] }, undefined, undefined, undefined, undefined, { _0: 4, _1: [] }, undefined, { _0: 31, _1: [{ _0: { _0: 8, _1: 0 }, _1: { _0: 9, _1: 0 } }] }, undefined, undefined, { _0: 3, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }, { _0: 30, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 3, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }], start_tags: [10], code_blocks_n: 34 };
const moonbitlang$lex$lib$parser$$code_rparen_tag_action_1 = [moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_2];
const moonbitlang$lex$lib$parser$$code_rparen_tag_action_0 = [moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rparen_tag_action_row_0];
const moonbitlang$lex$lib$parser$$__mbtlex_engine_code_rparen = { graph: [moonbitlang$lex$lib$parser$$code_rparen_state_0, moonbitlang$lex$lib$parser$$code_rparen_state_1, moonbitlang$lex$lib$parser$$code_rparen_state_2, moonbitlang$lex$lib$parser$$code_rparen_state_3, moonbitlang$lex$lib$parser$$code_rparen_state_4], end_nodes: [undefined, { _0: 2, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }, { _0: 3, _1: [] }, { _0: 1, _1: [] }, { _0: 0, _1: [] }], start_tags: [0], code_blocks_n: 4 };
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_6 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_8 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_4 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_0 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_2 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_3 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_10 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$code_rbrace_tag_action_9 = [moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_1, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_2, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0, moonbitlang$lex$lib$parser$$code_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$parser$$__mbtlex_engine_code_rbrace = { graph: [moonbitlang$lex$lib$parser$$code_rbrace_state_0, moonbitlang$lex$lib$parser$$code_rbrace_state_1, moonbitlang$lex$lib$parser$$code_rbrace_state_2, moonbitlang$lex$lib$parser$$code_rbrace_state_3, moonbitlang$lex$lib$parser$$code_rbrace_state_4, moonbitlang$lex$lib$parser$$code_rbrace_state_5, moonbitlang$lex$lib$parser$$code_rbrace_state_6, moonbitlang$lex$lib$parser$$code_rbrace_state_7, moonbitlang$lex$lib$parser$$code_rbrace_state_8, moonbitlang$lex$lib$parser$$code_rbrace_state_9, moonbitlang$lex$lib$parser$$code_rbrace_state_10, moonbitlang$lex$lib$parser$$code_rbrace_state_11, moonbitlang$lex$lib$parser$$code_rbrace_state_12, moonbitlang$lex$lib$parser$$code_rbrace_state_13, moonbitlang$lex$lib$parser$$code_rbrace_state_14, moonbitlang$lex$lib$parser$$code_rbrace_state_15, moonbitlang$lex$lib$parser$$code_rbrace_state_16], end_nodes: [undefined, { _0: 6, _1: [] }, { _0: 3, _1: [] }, { _0: 4, _1: [] }, { _0: 5, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 5, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 5, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, { _0: 5, _1: [{ _0: { _0: 6, _1: 0 }, _1: { _0: 7, _1: 0 } }] }, undefined, undefined, undefined, undefined, { _0: 1, _1: [{ _0: { _0: 2, _1: 0 }, _1: { _0: 3, _1: 0 } }] }, undefined, { _0: 2, _1: [{ _0: { _0: 4, _1: 0 }, _1: { _0: 5, _1: 0 } }] }, undefined, { _0: 0, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }] }], start_tags: [0, 2, 4, 6], code_blocks_n: 7 };
const moonbitlang$lex$lib$util$eof_char_set$$eof = moonbitlang$lex$lib$util$diet$$singleton$0$(-1);
const moonbitlang$lex$lib$util$eof_char_set$$empty = $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
const moonbitlang$lex$lib$util$eof_char_set$$any = moonbitlang$lex$lib$util$eof_char_set$$range(0, 1114111);
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_3 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_7 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_1 = [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_2, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_row_0];
const moonbitlang$lex$lib$codegen$internal$codeblock_parser$$__mbtlex_engine_scan_codeblock_rbrace = { graph: [moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_0, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_1, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_2, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_3, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_4, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_5, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_6, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_7, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_8, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_9, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_10, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_11, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_12, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_13, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_14, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_15, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_16, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_17, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_18, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_19, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_20, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_21, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_22, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_23, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_24, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_25, moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_26], end_nodes: [{ _0: 5, _1: [] }, { _0: 4, _1: [] }, { _0: 4, _1: [] }, { _0: 1, _1: [] }, { _0: 0, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, { _0: 3, _1: [] }, undefined, { _0: 3, _1: [] }, undefined, undefined, { _0: 3, _1: [] }, undefined, undefined, { _0: 2, _1: [{ _0: { _0: 0, _1: 0 }, _1: { _0: 1, _1: 0 } }, { _0: { _0: 2, _1: 0 }, _1: { _0: 3, _1: 0 } }, { _0: { _0: 4, _1: 0 }, _1: { _0: 5, _1: 0 } }] }], start_tags: [0], code_blocks_n: 6 };
function moonbitlang$core$abort$$abort$1$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$2$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$7$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$8$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$9$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$10$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$11$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$12$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$13$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$14$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$15$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$16$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$17$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$18$(msg) {
  return $panic();
}
function moonbitlang$core$ref$$new$2$(x) {
  return { val: x };
}
function moonbitlang$core$immut$internal$sparse_array$$singleton$19$(idx, value) {
  const _p = 0;
  return { elem_info: _p | 1 << idx, data: [value] };
}
function moonbitlang$core$immut$internal$sparse_array$$singleton$20$(idx, value) {
  const _p = 0;
  return { elem_info: _p | 1 << idx, data: [value] };
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$op_get$19$(self, idx) {
  const _p = self.elem_info;
  if ((_p & 1 << idx) !== 0) {
    const _tmp = self.data;
    const _p$2 = self.elem_info;
    const _tmp$2 = $i32_popcnt(_p$2 & ((1 << idx >>> 0) - (1 >>> 0) | 0));
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return undefined;
  }
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$op_get$20$(self, idx) {
  const _p = self.elem_info;
  if ((_p & 1 << idx) !== 0) {
    const _tmp = self.data;
    const _p$2 = self.elem_info;
    const _tmp$2 = $i32_popcnt(_p$2 & ((1 << idx >>> 0) - (1 >>> 0) | 0));
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return undefined;
  }
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$add$19$(self, idx, value) {
  const old_data = self.data;
  const old_len = old_data.length;
  const new_len = old_len + 1 | 0;
  const _p = self.elem_info;
  const pos_of_new_item = $i32_popcnt(_p & ((1 << idx >>> 0) - (1 >>> 0) | 0));
  const new_data = $make_array_len_and_init(new_len, value);
  moonbitlang$core$array$$FixedArray$blit_to$19$(old_data, new_data, pos_of_new_item, 0, 0);
  moonbitlang$core$array$$FixedArray$blit_to$19$(old_data, new_data, old_len - pos_of_new_item | 0, pos_of_new_item, pos_of_new_item + 1 | 0);
  const _p$2 = self.elem_info;
  return { elem_info: _p$2 | 1 << idx, data: new_data };
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$add$20$(self, idx, value) {
  const old_data = self.data;
  const old_len = old_data.length;
  const new_len = old_len + 1 | 0;
  const _p = self.elem_info;
  const pos_of_new_item = $i32_popcnt(_p & ((1 << idx >>> 0) - (1 >>> 0) | 0));
  const new_data = $make_array_len_and_init(new_len, value);
  moonbitlang$core$array$$FixedArray$blit_to$20$(old_data, new_data, pos_of_new_item, 0, 0);
  moonbitlang$core$array$$FixedArray$blit_to$20$(old_data, new_data, old_len - pos_of_new_item | 0, pos_of_new_item, pos_of_new_item + 1 | 0);
  const _p$2 = self.elem_info;
  return { elem_info: _p$2 | 1 << idx, data: new_data };
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$replace$19$(self, idx, value) {
  const new_data = moonbitlang$core$array$$FixedArray$copy$19$(self.data);
  const _p = self.elem_info;
  const _tmp = $i32_popcnt(_p & ((1 << idx >>> 0) - (1 >>> 0) | 0));
  $bound_check(new_data, _tmp);
  new_data[_tmp] = value;
  return { elem_info: self.elem_info, data: new_data };
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$replace$20$(self, idx, value) {
  const new_data = moonbitlang$core$array$$FixedArray$copy$20$(self.data);
  const _p = self.elem_info;
  const _tmp = $i32_popcnt(_p & ((1 << idx >>> 0) - (1 >>> 0) | 0));
  $bound_check(new_data, _tmp);
  new_data[_tmp] = value;
  return { elem_info: self.elem_info, data: new_data };
}
function moonbitlang$core$immut$internal$sparse_array$$SparseArray$each$19$(self, f) {
  const _p = self.elem_info;
  const _end4 = $i32_popcnt(_p);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end4) {
      const _tmp$2 = self.data;
      $bound_check(_tmp$2, i);
      f(_tmp$2[i]);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$get_limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function moonbitlang$core$array$$ArrayView$rev_inplace$15$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$15$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$rev_inplace$2$(self) {
  const mid_len = self.len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (self.len - i | 0) - 1 | 0;
      moonbitlang$core$array$$ArrayView$swap$2$(self, i, j);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$choose_pivot$46$sort_2$47$78(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (moonbitlang$core$builtin$$op_gt$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, a), moonbitlang$core$array$$ArrayView$op_get$15$(arr, b))) {
    moonbitlang$core$array$$ArrayView$swap$15$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot$46$sort_3$47$79(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$78(_env, a, b);
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$78(_env, b, c);
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$78(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot$15$(arr) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$79(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$79(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$79(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot$46$sort_3$47$79(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$15$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$choose_pivot$46$sort_2$47$96(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (moonbitlang$core$builtin$$op_gt$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, a), moonbitlang$core$array$$ArrayView$op_get$2$(arr, b))) {
    moonbitlang$core$array$$ArrayView$swap$2$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$array$$choose_pivot$46$sort_3$47$97(_env, a, b, c) {
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$96(_env, a, b);
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$96(_env, b, c);
  moonbitlang$core$array$$choose_pivot$46$sort_2$47$96(_env, a, b);
}
function moonbitlang$core$array$$choose_pivot$2$(arr) {
  const len = arr.len;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$97(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$97(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$array$$choose_pivot$46$sort_3$47$97(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$array$$choose_pivot$46$sort_3$47$97(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$ArrayView$rev_inplace$2$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$array$$sift_down$15$(arr, index) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && moonbitlang$core$builtin$$op_lt$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, child), moonbitlang$core$array$$ArrayView$op_get$15$(arr, child + 1 | 0))) {
        child = child + 1 | 0;
      }
      if (moonbitlang$core$builtin$$op_ge$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, index$2), moonbitlang$core$array$$ArrayView$op_get$15$(arr, child))) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$15$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$sift_down$2$(arr, index) {
  let index$2 = index;
  const len = arr.len;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && moonbitlang$core$builtin$$op_lt$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, child), moonbitlang$core$array$$ArrayView$op_get$2$(arr, child + 1 | 0))) {
        child = child + 1 | 0;
      }
      if (moonbitlang$core$builtin$$op_ge$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, index$2), moonbitlang$core$array$$ArrayView$op_get$2$(arr, child))) {
        return undefined;
      }
      moonbitlang$core$array$$ArrayView$swap$2$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort$15$(arr) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down$15$(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$15$(arr, 0, i);
      moonbitlang$core$array$$sift_down$15$(moonbitlang$core$array$$ArrayView$op_as_view$15$(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$heap_sort$2$(arr) {
  const len = arr.len;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$array$$sift_down$2$(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$ArrayView$swap$2$(arr, 0, i);
      moonbitlang$core$array$$sift_down$2$(moonbitlang$core$array$$ArrayView$op_as_view$2$(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$minimum(x, y) {
  return x > y ? y : x;
}
function moonbitlang$core$array$$partition$15$(arr, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$15$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$op_get$15$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1047 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1047) {
      if (moonbitlang$core$builtin$$op_lt$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, j), pivot)) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$15$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$15$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$partition$2$(arr, pivot_index) {
  moonbitlang$core$array$$ArrayView$swap$2$(arr, pivot_index, arr.len - 1 | 0);
  const pivot = moonbitlang$core$array$$ArrayView$op_get$2$(arr, arr.len - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end1047 = arr.len - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end1047) {
      if (moonbitlang$core$builtin$$op_lt$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, j), pivot)) {
        if (i !== j) {
          moonbitlang$core$array$$ArrayView$swap$2$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$ArrayView$swap$2$(arr, i, arr.len - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$array$$try_bubble_sort$15$(arr) {
  let tries = 0;
  const _end1062 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1062) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && moonbitlang$core$builtin$$op_gt$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$op_get$15$(arr, j))) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$15$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$try_bubble_sort$2$(arr) {
  let tries = 0;
  const _end1062 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1062) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && moonbitlang$core$builtin$$op_gt$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$op_get$2$(arr, j))) {
          sorted = false;
          moonbitlang$core$array$$ArrayView$swap$2$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$ArrayView$insertion_sort$15$(arr) {
  const _end1053 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1053) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && moonbitlang$core$builtin$$op_gt$15$(moonbitlang$core$array$$ArrayView$op_get$15$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$op_get$15$(arr, j))) {
          moonbitlang$core$array$$ArrayView$swap$15$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$ArrayView$insertion_sort$2$(arr) {
  const _end1053 = arr.len;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end1053) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && moonbitlang$core$builtin$$op_gt$2$(moonbitlang$core$array$$ArrayView$op_get$2$(arr, j - 1 | 0), moonbitlang$core$array$$ArrayView$op_get$2$(arr, j))) {
          moonbitlang$core$array$$ArrayView$swap$2$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$quick_sort$15$(arr, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$ArrayView$insertion_sort$15$(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort$15$(arr$2);
      return undefined;
    }
    const _bind = moonbitlang$core$array$$choose_pivot$15$(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort$15$(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = moonbitlang$core$array$$partition$15$(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    balanced = moonbitlang$core$array$$minimum(_pivot, len - _pivot | 0) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (moonbitlang$core$builtin$$Eq$op_equal$21$(_pred, moonbitlang$core$array$$ArrayView$op_get$15$(arr$2, _pivot))) {
        let i = _pivot;
        while (true) {
          if (i < len && moonbitlang$core$builtin$$Eq$op_equal$21$(_pred, moonbitlang$core$array$$ArrayView$op_get$15$(arr$2, i))) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$op_as_view$15$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$op_as_view$15$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$op_as_view$15$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort$15$(left, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$op_get$15$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort$15$(right, moonbitlang$core$array$$ArrayView$op_get$15$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$quick_sort$2$(arr, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.len;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$array$$ArrayView$insertion_sort$2$(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      moonbitlang$core$array$$heap_sort$2$(arr$2);
      return undefined;
    }
    const _bind = moonbitlang$core$array$$choose_pivot$2$(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$array$$try_bubble_sort$2$(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = moonbitlang$core$array$$partition$2$(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    balanced = moonbitlang$core$array$$minimum(_pivot, len - _pivot | 0) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (_pred === moonbitlang$core$array$$ArrayView$op_get$2$(arr$2, _pivot)) {
        let i = _pivot;
        while (true) {
          if (i < len && _pred === moonbitlang$core$array$$ArrayView$op_get$2$(arr$2, i)) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$ArrayView$op_as_view$2$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$ArrayView$op_as_view$2$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$ArrayView$op_as_view$2$(arr$2, _pivot + 1 | 0, len);
    if (left.len < right.len) {
      moonbitlang$core$array$$quick_sort$2$(left, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$ArrayView$op_get$2$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$array$$quick_sort$2$(right, moonbitlang$core$array$$ArrayView$op_get$2$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$Array$sort$15$(self) {
  const len = self.length;
  moonbitlang$core$array$$quick_sort$15$(moonbitlang$core$array$$Array$op_as_view$15$(self, 0, len), undefined, moonbitlang$core$array$$get_limit(len));
}
function moonbitlang$core$array$$Array$sort$2$(self) {
  const len = self.length;
  moonbitlang$core$array$$quick_sort$2$(moonbitlang$core$array$$Array$op_as_view$2$(self, 0, len), undefined, moonbitlang$core$array$$get_limit(len));
}
function moonbitlang$core$array$$Array$makei$22$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$22$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$22$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$Array$makei$2$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$2$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$2$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$Array$makei$23$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$23$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$23$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$ArrayView$join(self, separator) {
  if (self.len === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _bind = self.buf;
    const _bind$2 = 1 + self.start | 0;
    const _some = self.len;
    const _bind$3 = _some - 1 | 0;
    const _x = { buf: _bind, start: _bind$2, len: _bind$3 };
    let size_hint = _hd.length;
    const _len = _x.len;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _bind[_bind$2 + _i | 0];
        size_hint = size_hint + (s.length + (separator.end - separator.start | 0) | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = moonbitlang$core$builtin$$StringBuilder$new(size_hint);
    moonbitlang$core$builtin$$Logger$write_string$24$(buf, _hd);
    if (moonbitlang$core$string$$String$char_length_eq(separator.str, 0, separator.start, separator.end)) {
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          moonbitlang$core$builtin$$Logger$write_string$24$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const separator$2 = moonbitlang$core$builtin$$Show$to_string$10$(separator);
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          moonbitlang$core$builtin$$Logger$write_string$24$(buf, separator$2);
          moonbitlang$core$builtin$$Logger$write_string$24$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function moonbitlang$core$array$$FixedArray$copy$6$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$FixedArray$copy$19$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$FixedArray$copy$20$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$Array$copy$12$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$FixedArray$makei$6$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$25$(self, that) {
  if (self.length !== that.length) {
    return false;
  }
  const _end117 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end117) {
      $bound_check(self, i);
      const _tmp$2 = self[i];
      $bound_check(that, i);
      if (_tmp$2 !== that[i]) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$array$$Array$join(self, separator) {
  return moonbitlang$core$array$$ArrayView$join({ buf: self, start: 0, len: self.length }, separator);
}
function moonbitlang$core$sorted_set$$new$6$() {
  return { root: undefined, size: 0 };
}
function moonbitlang$core$sorted_set$$height$6$(node) {
  if (node === undefined) {
    return 0;
  } else {
    const _Some = node;
    const _n = _Some;
    return _n.height;
  }
}
function moonbitlang$core$sorted_set$$height_ge$6$(x1, x2) {
  if (x2 === undefined) {
    return true;
  } else {
    const _Some = x2;
    const _n2 = _Some;
    if (x1 === undefined) {
      return false;
    } else {
      const _Some$2 = x1;
      const _n1 = _Some$2;
      return _n1.height >= _n2.height;
    }
  }
}
function moonbitlang$core$sorted_set$$max(x, y) {
  return x > y ? x : y;
}
function moonbitlang$core$sorted_set$$Node$update_height$6$(self) {
  self.height = 1 + moonbitlang$core$sorted_set$$max(moonbitlang$core$sorted_set$$height$6$(self.left), moonbitlang$core$sorted_set$$height$6$(self.right)) | 0;
}
function moonbitlang$core$sorted_set$$rotate_l$6$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$26$(n.right);
  n.right = r.left;
  r.left = n;
  moonbitlang$core$sorted_set$$Node$update_height$6$(n);
  moonbitlang$core$sorted_set$$Node$update_height$6$(r);
  return r;
}
function moonbitlang$core$sorted_set$$rotate_r$6$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$26$(n.left);
  n.left = l.right;
  l.right = n;
  moonbitlang$core$sorted_set$$Node$update_height$6$(n);
  moonbitlang$core$sorted_set$$Node$update_height$6$(l);
  return l;
}
function moonbitlang$core$sorted_set$$rotate_lr$6$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$26$(n.left);
  const v = moonbitlang$core$sorted_set$$rotate_l$6$(l);
  n.left = v;
  return moonbitlang$core$sorted_set$$rotate_r$6$(n);
}
function moonbitlang$core$sorted_set$$rotate_rl$6$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$26$(n.right);
  const v = moonbitlang$core$sorted_set$$rotate_r$6$(r);
  n.right = v;
  return moonbitlang$core$sorted_set$$rotate_l$6$(n);
}
function moonbitlang$core$sorted_set$$balance$6$(root) {
  const l = root.left;
  const r = root.right;
  const hl = moonbitlang$core$sorted_set$$height$6$(l);
  const hr = moonbitlang$core$sorted_set$$height$6$(r);
  let new_root;
  if (hl > (hr + 1 | 0)) {
    const _bind = moonbitlang$core$option$$Option$unwrap$26$(l);
    const _ll = _bind.left;
    const _lr = _bind.right;
    new_root = moonbitlang$core$sorted_set$$height_ge$6$(_ll, _lr) ? moonbitlang$core$sorted_set$$rotate_r$6$(root) : moonbitlang$core$sorted_set$$rotate_lr$6$(root);
  } else {
    if (hr > (hl + 1 | 0)) {
      const _bind = moonbitlang$core$option$$Option$unwrap$26$(r);
      const _rl = _bind.left;
      const _rr = _bind.right;
      new_root = moonbitlang$core$sorted_set$$height_ge$6$(_rr, _rl) ? moonbitlang$core$sorted_set$$rotate_l$6$(root) : moonbitlang$core$sorted_set$$rotate_rl$6$(root);
    } else {
      new_root = root;
    }
  }
  moonbitlang$core$sorted_set$$Node$update_height$6$(new_root);
  return new_root;
}
function moonbitlang$core$sorted_set$$new_node$6$(value, left, right, height) {
  return { value: value, left: left, right: right, height: height };
}
function moonbitlang$core$sorted_set$$add_node$6$(root, value) {
  if (root === undefined) {
    return { _0: moonbitlang$core$sorted_set$$new_node$6$(value, undefined, undefined, 1), _1: true };
  } else {
    const _Some = root;
    const _n = _Some;
    const comp = $compare_int(value, _n.value);
    if (comp === 0) {
      _n.value = value;
      return { _0: _n, _1: false };
    } else {
      const l = _n.left;
      const r = _n.right;
      if (comp < 0) {
        const _bind = moonbitlang$core$sorted_set$$add_node$6$(l, value);
        const _nl = _bind._0;
        const _inserted = _bind._1;
        _n.left = _nl;
        return { _0: moonbitlang$core$sorted_set$$balance$6$(_n), _1: _inserted };
      } else {
        const _bind = moonbitlang$core$sorted_set$$add_node$6$(r, value);
        const _nr = _bind._0;
        const _inserted = _bind._1;
        _n.right = _nr;
        return { _0: moonbitlang$core$sorted_set$$balance$6$(_n), _1: _inserted };
      }
    }
  }
}
function moonbitlang$core$sorted_set$$T$add$6$(self, value) {
  const _bind = moonbitlang$core$sorted_set$$add_node$6$(self.root, value);
  const _new_root = _bind._0;
  const _inserted = _bind._1;
  if (moonbitlang$core$builtin$$op_notequal$27$(self.root, _new_root)) {
    self.root = _new_root;
  }
  if (_inserted) {
    self.size = self.size + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$sorted_set$$to_array$46$dfs$47$344(_env, root) {
  const arr = _env._1;
  const i = _env._0;
  let _tmp = root;
  while (true) {
    const root$2 = _tmp;
    if (root$2 === undefined) {
      return;
    } else {
      const _Some = root$2;
      const _root = _Some;
      moonbitlang$core$sorted_set$$to_array$46$dfs$47$344(_env, _root.left);
      moonbitlang$core$array$$Array$op_set$6$(arr, i.val, _root.value);
      i.val = i.val + 1 | 0;
      _tmp = _root.right;
      continue;
    }
  }
}
function moonbitlang$core$sorted_set$$T$to_array$6$(self) {
  if (self.size === 0) {
    return [];
  } else {
    const padding = moonbitlang$core$option$$Option$unwrap$26$(self.root).value;
    const arr = moonbitlang$core$array$$Array$make$6$(self.size, padding);
    const i = { val: 0 };
    const _env = { _0: i, _1: arr };
    moonbitlang$core$sorted_set$$to_array$46$dfs$47$344(_env, self.root);
    return arr;
  }
}
function moonbitlang$core$sorted_set$$from_iter$6$(iter) {
  const s = moonbitlang$core$sorted_set$$new$6$();
  iter((_p) => {
    moonbitlang$core$sorted_set$$T$add$6$(s, _p);
    return 1;
  });
  return s;
}
function moonbitlang$core$immut$sorted_set$$T$size$28$(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Node = self;
    const _size = _Node._2;
    return _size;
  }
}
function moonbitlang$core$immut$sorted_set$$T$size$29$(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Node = self;
    const _size = _Node._2;
    return _size;
  }
}
function moonbitlang$core$immut$sorted_set$$create$28$(left, value, right) {
  return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$(left, right, (moonbitlang$core$immut$sorted_set$$T$size$28$(left) + moonbitlang$core$immut$sorted_set$$T$size$28$(right) | 0) + 1 | 0, value);
}
function moonbitlang$core$immut$sorted_set$$create$29$(left, value, right) {
  return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$1$(left, right, (moonbitlang$core$immut$sorted_set$$T$size$29$(left) + moonbitlang$core$immut$sorted_set$$T$size$29$(right) | 0) + 1 | 0, value);
}
function moonbitlang$core$immut$sorted_set$$balance$28$(left, value, right) {
  const left_size = moonbitlang$core$immut$sorted_set$$T$size$28$(left);
  const right_size = moonbitlang$core$immut$sorted_set$$T$size$28$(right);
  if ((left_size + right_size | 0) < 2) {
    return moonbitlang$core$immut$sorted_set$$create$28$(left, value, right);
  } else {
    if (left_size > (Math.imul(right_size, 5) | 0)) {
      if (left.$tag === 0) {
        return moonbitlang$core$abort$$abort$17$("balance: left is empty.");
      } else {
        const _Node = left;
        const _ll = _Node._0;
        const _lv = _Node._3;
        const _lr = _Node._1;
        if (moonbitlang$core$immut$sorted_set$$T$size$28$(_ll) >= moonbitlang$core$immut$sorted_set$$T$size$28$(_lr)) {
          return moonbitlang$core$immut$sorted_set$$create$28$(_ll, _lv, moonbitlang$core$immut$sorted_set$$create$28$(_lr, value, right));
        } else {
          if (_lr.$tag === 0) {
            return moonbitlang$core$abort$$abort$17$("balance: right left.right is empty.");
          } else {
            const _Node$2 = _lr;
            const _lrl = _Node$2._0;
            const _lrv = _Node$2._3;
            const _lrr = _Node$2._1;
            return moonbitlang$core$immut$sorted_set$$create$28$(moonbitlang$core$immut$sorted_set$$create$28$(_ll, _lv, _lrl), _lrv, moonbitlang$core$immut$sorted_set$$create$28$(_lrr, value, right));
          }
        }
      }
    } else {
      if (right_size > (Math.imul(left_size, 5) | 0)) {
        if (right.$tag === 0) {
          return moonbitlang$core$abort$$abort$17$("balance: right is empty");
        } else {
          const _Node = right;
          const _rl = _Node._0;
          const _rv = _Node._3;
          const _rr = _Node._1;
          if (moonbitlang$core$immut$sorted_set$$T$size$28$(_rr) >= moonbitlang$core$immut$sorted_set$$T$size$28$(_rl)) {
            return moonbitlang$core$immut$sorted_set$$create$28$(moonbitlang$core$immut$sorted_set$$create$28$(left, value, _rl), _rv, _rr);
          } else {
            if (_rl.$tag === 0) {
              return moonbitlang$core$abort$$abort$17$("balance: right.left is empty");
            } else {
              const _Node$2 = _rl;
              const _rll = _Node$2._0;
              const _rlv = _Node$2._3;
              const _rlr = _Node$2._1;
              return moonbitlang$core$immut$sorted_set$$create$28$(moonbitlang$core$immut$sorted_set$$create$28$(left, value, _rll), _rlv, moonbitlang$core$immut$sorted_set$$create$28$(_rlr, _rv, _rr));
            }
          }
        }
      } else {
        return moonbitlang$core$immut$sorted_set$$create$28$(left, value, right);
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$balance$29$(left, value, right) {
  const left_size = moonbitlang$core$immut$sorted_set$$T$size$29$(left);
  const right_size = moonbitlang$core$immut$sorted_set$$T$size$29$(right);
  if ((left_size + right_size | 0) < 2) {
    return moonbitlang$core$immut$sorted_set$$create$29$(left, value, right);
  } else {
    if (left_size > (Math.imul(right_size, 5) | 0)) {
      if (left.$tag === 0) {
        return moonbitlang$core$abort$$abort$18$("balance: left is empty.");
      } else {
        const _Node = left;
        const _ll = _Node._0;
        const _lv = _Node._3;
        const _lr = _Node._1;
        if (moonbitlang$core$immut$sorted_set$$T$size$29$(_ll) >= moonbitlang$core$immut$sorted_set$$T$size$29$(_lr)) {
          return moonbitlang$core$immut$sorted_set$$create$29$(_ll, _lv, moonbitlang$core$immut$sorted_set$$create$29$(_lr, value, right));
        } else {
          if (_lr.$tag === 0) {
            return moonbitlang$core$abort$$abort$18$("balance: right left.right is empty.");
          } else {
            const _Node$2 = _lr;
            const _lrl = _Node$2._0;
            const _lrv = _Node$2._3;
            const _lrr = _Node$2._1;
            return moonbitlang$core$immut$sorted_set$$create$29$(moonbitlang$core$immut$sorted_set$$create$29$(_ll, _lv, _lrl), _lrv, moonbitlang$core$immut$sorted_set$$create$29$(_lrr, value, right));
          }
        }
      }
    } else {
      if (right_size > (Math.imul(left_size, 5) | 0)) {
        if (right.$tag === 0) {
          return moonbitlang$core$abort$$abort$18$("balance: right is empty");
        } else {
          const _Node = right;
          const _rl = _Node._0;
          const _rv = _Node._3;
          const _rr = _Node._1;
          if (moonbitlang$core$immut$sorted_set$$T$size$29$(_rr) >= moonbitlang$core$immut$sorted_set$$T$size$29$(_rl)) {
            return moonbitlang$core$immut$sorted_set$$create$29$(moonbitlang$core$immut$sorted_set$$create$29$(left, value, _rl), _rv, _rr);
          } else {
            if (_rl.$tag === 0) {
              return moonbitlang$core$abort$$abort$18$("balance: right.left is empty");
            } else {
              const _Node$2 = _rl;
              const _rll = _Node$2._0;
              const _rlv = _Node$2._3;
              const _rlr = _Node$2._1;
              return moonbitlang$core$immut$sorted_set$$create$29$(moonbitlang$core$immut$sorted_set$$create$29$(left, value, _rll), _rlv, moonbitlang$core$immut$sorted_set$$create$29$(_rlr, _rv, _rr));
            }
          }
        }
      } else {
        return moonbitlang$core$immut$sorted_set$$create$29$(left, value, right);
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$add$28$(self, value) {
  if (self.$tag === 0) {
    return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$($64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, 1, value);
  } else {
    const _Node = self;
    const _left = _Node._0;
    const _right = _Node._1;
    const _node_value = _Node._3;
    const compare_result = moonbitlang$core$builtin$$Compare$compare$30$(value, _node_value);
    if (compare_result === 0) {
      return self;
    } else {
      if (compare_result < 0) {
        const ll = moonbitlang$core$immut$sorted_set$$T$add$28$(_left, value);
        return _left === ll ? self : moonbitlang$core$immut$sorted_set$$balance$28$(ll, _node_value, _right);
      } else {
        const rr = moonbitlang$core$immut$sorted_set$$T$add$28$(_right, value);
        return _right === rr ? self : moonbitlang$core$immut$sorted_set$$balance$28$(_left, _node_value, rr);
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$add$29$(self, value) {
  if (self.$tag === 0) {
    return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$1$($64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$1$, $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$1$, 1, value);
  } else {
    const _Node = self;
    const _left = _Node._0;
    const _right = _Node._1;
    const _node_value = _Node._3;
    const compare_result = moonbitlang$core$builtin$$Compare$compare$31$(value, _node_value);
    if (compare_result === 0) {
      return self;
    } else {
      if (compare_result < 0) {
        const ll = moonbitlang$core$immut$sorted_set$$T$add$29$(_left, value);
        return _left === ll ? self : moonbitlang$core$immut$sorted_set$$balance$29$(ll, _node_value, _right);
      } else {
        const rr = moonbitlang$core$immut$sorted_set$$T$add$29$(_right, value);
        return _right === rr ? self : moonbitlang$core$immut$sorted_set$$balance$29$(_left, _node_value, rr);
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$add_max_value$28$(self, value) {
  if (self.$tag === 0) {
    return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$($64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, 1, value);
  } else {
    const _Node = self;
    const _left = _Node._0;
    const _node_value = _Node._3;
    const _right = _Node._1;
    return moonbitlang$core$immut$sorted_set$$balance$28$(_left, _node_value, moonbitlang$core$immut$sorted_set$$T$add_max_value$28$(_right, value));
  }
}
function moonbitlang$core$immut$sorted_set$$T$add_min_value$28$(self, value) {
  if (self.$tag === 0) {
    return new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$($64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, 1, value);
  } else {
    const _Node = self;
    const _left = _Node._0;
    const _node_value = _Node._3;
    const _right = _Node._1;
    return moonbitlang$core$immut$sorted_set$$balance$28$(moonbitlang$core$immut$sorted_set$$T$add_min_value$28$(_left, value), _node_value, _right);
  }
}
function moonbitlang$core$immut$sorted_set$$join$28$(left, value, right) {
  if (left.$tag === 0) {
    return moonbitlang$core$immut$sorted_set$$T$add_min_value$28$(right, value);
  } else {
    if (right.$tag === 0) {
      return moonbitlang$core$immut$sorted_set$$T$add_max_value$28$(left, value);
    } else {
      const _Node = left;
      const _ll = _Node._0;
      const _lv = _Node._3;
      const _lr = _Node._1;
      const _ls = _Node._2;
      const _Node$2 = right;
      const _rl = _Node$2._0;
      const _rv = _Node$2._3;
      const _rr = _Node$2._1;
      const _rs = _Node$2._2;
      return _ls > (Math.imul(_rs, 5) | 0) ? moonbitlang$core$immut$sorted_set$$balance$28$(_ll, _lv, moonbitlang$core$immut$sorted_set$$join$28$(_lr, value, right)) : _rs > (Math.imul(_ls, 5) | 0) ? moonbitlang$core$immut$sorted_set$$balance$28$(moonbitlang$core$immut$sorted_set$$join$28$(left, value, _rl), _rv, _rr) : moonbitlang$core$immut$sorted_set$$create$28$(left, value, right);
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$split$28$(self, divide) {
  if (self.$tag === 0) {
    return { _0: $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, _1: false, _2: $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$ };
  } else {
    const _Node = self;
    const _left = _Node._0;
    const _right = _Node._1;
    const _value = _Node._3;
    const compare_result = moonbitlang$core$builtin$$Compare$compare$30$(divide, _value);
    if (compare_result === 0) {
      return { _0: _left, _1: true, _2: _right };
    } else {
      if (compare_result < 0) {
        const _bind = moonbitlang$core$immut$sorted_set$$T$split$28$(_left, divide);
        const _left_left = _bind._0;
        const _present = _bind._1;
        const _right_left = _bind._2;
        return { _0: _left_left, _1: _present, _2: moonbitlang$core$immut$sorted_set$$join$28$(_right_left, _value, _right) };
      } else {
        const _bind = moonbitlang$core$immut$sorted_set$$T$split$28$(_right, divide);
        const _left_right = _bind._0;
        const _present = _bind._1;
        const _right_right = _bind._2;
        return { _0: moonbitlang$core$immut$sorted_set$$join$28$(_left, _value, _left_right), _1: _present, _2: _right_right };
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$union$28$(self, other) {
  if (self.$tag === 0) {
    return other;
  } else {
    if (other.$tag === 0) {
      return self;
    } else {
      const _Node = self;
      const _l1 = _Node._0;
      const _v1 = _Node._3;
      const _r1 = _Node._1;
      const _s1 = _Node._2;
      const _Node$2 = other;
      const _l2 = _Node$2._0;
      const _v2 = _Node$2._3;
      const _r2 = _Node$2._1;
      const _s2 = _Node$2._2;
      if (_s1 >= _s2) {
        if (_s2 === 1) {
          return moonbitlang$core$immut$sorted_set$$T$add$28$(self, _v2);
        } else {
          const _bind = moonbitlang$core$immut$sorted_set$$T$split$28$(other, _v1);
          const _l2$2 = _bind._0;
          const _r2$2 = _bind._2;
          return moonbitlang$core$immut$sorted_set$$join$28$(moonbitlang$core$immut$sorted_set$$T$union$28$(_l1, _l2$2), _v1, moonbitlang$core$immut$sorted_set$$T$union$28$(_r1, _r2$2));
        }
      } else {
        if (_s1 === 1) {
          return moonbitlang$core$immut$sorted_set$$T$add$28$(other, _v1);
        } else {
          const _bind = moonbitlang$core$immut$sorted_set$$T$split$28$(self, _v2);
          const _l1$2 = _bind._0;
          const _r1$2 = _bind._2;
          return moonbitlang$core$immut$sorted_set$$join$28$(moonbitlang$core$immut$sorted_set$$T$union$28$(_l1$2, _l2), _v2, moonbitlang$core$immut$sorted_set$$T$union$28$(_r1$2, _r2));
        }
      }
    }
  }
}
function moonbitlang$core$builtin$$Add$op_add$32$(self, other) {
  return moonbitlang$core$immut$sorted_set$$T$union$28$(self, other);
}
function moonbitlang$core$immut$sorted_set$$iter$46$go$47$496(yield_, t) {
  let _tmp = t;
  while (true) {
    const t$2 = _tmp;
    if (t$2.$tag === 0) {
      return 1;
    } else {
      const _Node = t$2;
      const _left = _Node._0;
      const _right = _Node._1;
      const _value = _Node._3;
      const _bind = moonbitlang$core$immut$sorted_set$$iter$46$go$47$496(yield_, _left);
      if (_bind === 0) {
        return 0;
      } else {
        const _bind$2 = yield_(_value);
        if (_bind$2 === 0) {
          return 0;
        } else {
          _tmp = _right;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$iter$28$(self) {
  const _p = (yield_) => moonbitlang$core$immut$sorted_set$$iter$46$go$47$496(yield_, self);
  return _p;
}
function moonbitlang$core$immut$sorted_set$$iter$46$go$47$509(yield_, t) {
  let _tmp = t;
  while (true) {
    const t$2 = _tmp;
    if (t$2.$tag === 0) {
      return 1;
    } else {
      const _Node = t$2;
      const _left = _Node._0;
      const _right = _Node._1;
      const _value = _Node._3;
      const _bind = moonbitlang$core$immut$sorted_set$$iter$46$go$47$509(yield_, _left);
      if (_bind === 0) {
        return 0;
      } else {
        const _bind$2 = yield_(_value);
        if (_bind$2 === 0) {
          return 0;
        } else {
          _tmp = _right;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$immut$sorted_set$$T$iter$29$(self) {
  const _p = (yield_) => moonbitlang$core$immut$sorted_set$$iter$46$go$47$509(yield_, self);
  return _p;
}
function moonbitlang$core$strconv$$base_err$33$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$3$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$3$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$3$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$3$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$3$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$3$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$3$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$3$({ _0: base, _1: view, _2: false }) : moonbitlang$core$strconv$$base_err$33$();
  }
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$builtin$$Add$op_add$34$(moonbitlang$core$builtin$$Div$op_div$34$($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$builtin$$Add$op_add$34$(moonbitlang$core$builtin$$Div$op_div$34$($9223372036854775807L, $16L), $1L) : moonbitlang$core$builtin$$Add$op_add$34$(moonbitlang$core$builtin$$Div$op_div$34$($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$builtin$$Div$op_div$34$($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$builtin$$Div$op_div$34$($_9223372036854775808L, $16L) : moonbitlang$core$builtin$$Div$op_div$34$($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$range_err$1$() {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$34$() {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$6$() {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$34$() {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$parse_int64(str, base) {
  const _p = "";
  if (!(str === _p)) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = moonbitlang$core$string$$String$view(str, 0, undefined);
        if (moonbitlang$core$string$$String$char_length_ge(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _tmp$3 = _tmp$2;
              const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$4 = _bind$2.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$5;
              if (_bind$4 === undefined) {
                _tmp$5 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = moonbitlang$core$strconv$$check_and_consume_base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_num_base, _neg);
    let has_digit;
    if (moonbitlang$core$string$$String$char_length_ge(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$String$char_length_ge(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$String$char_length_eq(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$34$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$String$char_length_ge(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = moonbitlang$core$strconv$$syntax_err$34$();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _tmp$7 = _tmp$6;
                  const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _tmp$7 = _tmp$6;
                const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$6$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (moonbitlang$core$builtin$$op_ge$34$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Sub$op_sub$34$(moonbitlang$core$builtin$$Mul$op_mul$34$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_le$34$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$34$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$34$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$op_lt$34$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Add$op_add$34$(moonbitlang$core$builtin$$Mul$op_mul$34$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_ge$34$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$34$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$34$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = moonbitlang$core$strconv$$syntax_err$34$();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$5$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$34$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$34$();
  }
}
function moonbitlang$core$strconv$$parse_int(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$34$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$34$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$1$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$6$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$result$$Result$unwrap$35$(self) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _x = _Ok._0;
    return _x;
  } else {
    return moonbitlang$core$abort$$abort$2$("called `Result::unwrap()` on an `Err` value");
  }
}
function moonbitlang$core$result$$Result$unwrap$36$(self) {
  if (self.$tag === 1) {
    const _Ok = self;
    _Ok._0;
    return;
  } else {
    moonbitlang$core$abort$$abort$1$("called `Result::unwrap()` on an `Err` value");
    return;
  }
}
function moonbitlang$core$result$$Result$unwrap$37$(self) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _x = _Ok._0;
    return _x;
  } else {
    return moonbitlang$core$abort$$abort$6$("called `Result::unwrap()` on an `Err` value");
  }
}
function moonbitlang$core$char$$Char$is_control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function moonbitlang$core$char$$Char$is_printable(self) {
  if (moonbitlang$core$char$$Char$is_control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (self$2 >= 55296 && self$2 <= 57343) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function moonbitlang$core$char$$output$46$to_hex_digit$124$4(i) {
  return i < 10 ? i + 48 | 0 : (i + 97 | 0) - 10 | 0;
}
function moonbitlang$core$builtin$$Show$output$5$(self, logger) {
  logger.method_2(logger.self, 39);
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_2(logger.self, self);
                  } else {
                    if (!moonbitlang$core$char$$Char$is_printable(self)) {
                      const code = self;
                      const hex_len = code <= 255 ? 2 : code <= 4095 ? 3 : code <= 65535 ? 4 : code <= 1048575 ? 5 : 6;
                      logger.method_0(logger.self, "\\u{");
                      if (hex_len >= 6) {
                        logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code >> 20 & 15));
                      }
                      if (hex_len >= 5) {
                        logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code >> 16 & 15));
                      }
                      if (hex_len >= 4) {
                        logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code >> 12 & 15));
                      }
                      if (hex_len >= 3) {
                        logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code >> 8 & 15));
                      }
                      if (hex_len >= 2) {
                        logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code >> 4 & 15));
                      }
                      logger.method_2(logger.self, moonbitlang$core$char$$output$46$to_hex_digit$124$4(code & 15));
                      logger.method_2(logger.self, 125);
                    } else {
                      logger.method_2(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_2(logger.self, 92);
    logger.method_2(logger.self, self);
  }
  logger.method_2(logger.self, 39);
}
function moonbitlang$core$bytes$$Bytes$from_array(arr) {
  return moonbitlang$core$bytes$$Bytes$makei(arr.length, (i) => moonbitlang$core$array$$Array$op_get$38$(arr, i));
}
function moonbitlang$core$immut$sorted_map$$T$size$39$(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Tree = self;
    return _Tree._2;
  }
}
function moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, l, r) {
  const size = (moonbitlang$core$immut$sorted_map$$T$size$39$(l) + moonbitlang$core$immut$sorted_map$$T$size$39$(r) | 0) + 1 | 0;
  return new $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Tree$7$(key, value, size, l, r);
}
function moonbitlang$core$immut$sorted_map$$balance$39$(key, value, l, r) {
  const ln = moonbitlang$core$immut$sorted_map$$T$size$39$(l);
  const rn = moonbitlang$core$immut$sorted_map$$T$size$39$(r);
  if ((ln + rn | 0) < 2) {
    return moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, l, r);
  } else {
    if (rn > (Math.imul(5, ln) | 0)) {
      if (r.$tag === 1) {
        const _Tree = r;
        const _rl = _Tree._3;
        const _rr = _Tree._4;
        const rln = moonbitlang$core$immut$sorted_map$$T$size$39$(_rl);
        const rrn = moonbitlang$core$immut$sorted_map$$T$size$39$(_rr);
        if (rln < rrn) {
          if (r.$tag === 1) {
            const _Tree$2 = r;
            const _k2 = _Tree$2._0;
            const _v2 = _Tree$2._1;
            const _y = _Tree$2._3;
            const _z = _Tree$2._4;
            return moonbitlang$core$immut$sorted_map$$make_tree$39$(_k2, _v2, moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, l, _y), _z);
          } else {
            return $panic();
          }
        } else {
          _L: {
            if (r.$tag === 1) {
              const _Tree$2 = r;
              const _k3 = _Tree$2._0;
              const _v3 = _Tree$2._1;
              const _x = _Tree$2._3;
              if (_x.$tag === 1) {
                const _Tree$3 = _x;
                const _k2 = _Tree$3._0;
                const _v2 = _Tree$3._1;
                const _y1 = _Tree$3._3;
                const _y2 = _Tree$3._4;
                const _z = _Tree$2._4;
                return moonbitlang$core$immut$sorted_map$$make_tree$39$(_k2, _v2, moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, l, _y1), moonbitlang$core$immut$sorted_map$$make_tree$39$(_k3, _v3, _y2, _z));
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return $panic();
        }
      } else {
        return $panic();
      }
    } else {
      if (ln > (Math.imul(5, rn) | 0)) {
        if (l.$tag === 1) {
          const _Tree = l;
          const _ll = _Tree._3;
          const _lr = _Tree._4;
          const lln = moonbitlang$core$immut$sorted_map$$T$size$39$(_ll);
          const lrn = moonbitlang$core$immut$sorted_map$$T$size$39$(_lr);
          if (lrn < lln) {
            if (l.$tag === 1) {
              const _Tree$2 = l;
              const _k1 = _Tree$2._0;
              const _v1 = _Tree$2._1;
              const _x = _Tree$2._3;
              const _y = _Tree$2._4;
              return moonbitlang$core$immut$sorted_map$$make_tree$39$(_k1, _v1, _x, moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, _y, r));
            } else {
              return $panic();
            }
          } else {
            _L: {
              if (l.$tag === 1) {
                const _Tree$2 = l;
                const _k1 = _Tree$2._0;
                const _v1 = _Tree$2._1;
                const _x = _Tree$2._3;
                const _x$2 = _Tree$2._4;
                if (_x$2.$tag === 1) {
                  const _Tree$3 = _x$2;
                  const _k2 = _Tree$3._0;
                  const _v2 = _Tree$3._1;
                  const _y1 = _Tree$3._3;
                  const _y2 = _Tree$3._4;
                  return moonbitlang$core$immut$sorted_map$$make_tree$39$(_k2, _v2, moonbitlang$core$immut$sorted_map$$make_tree$39$(_k1, _v1, _x, _y1), moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, _y2, r));
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return $panic();
          }
        } else {
          return $panic();
        }
      } else {
        return moonbitlang$core$immut$sorted_map$$make_tree$39$(key, value, l, r);
      }
    }
  }
}
function moonbitlang$core$immut$sorted_map$$T$add$39$(self, key, value) {
  if (self.$tag === 0) {
    return new $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Tree$7$(key, value, 1, $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Empty$7$, $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Empty$7$);
  } else {
    const _Tree = self;
    const _k = _Tree._0;
    const _v = _Tree._1;
    const _l = _Tree._3;
    const _r = _Tree._4;
    const c = $compare_int(key, _k);
    return c === 0 ? moonbitlang$core$immut$sorted_map$$make_tree$39$(_k, value, _l, _r) : c < 0 ? moonbitlang$core$immut$sorted_map$$balance$39$(_k, _v, moonbitlang$core$immut$sorted_map$$T$add$39$(_l, key, value), _r) : moonbitlang$core$immut$sorted_map$$balance$39$(_k, _v, _l, moonbitlang$core$immut$sorted_map$$T$add$39$(_r, key, value));
  }
}
function moonbitlang$core$immut$sorted_map$$T$get$39$(self, key) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (_param.$tag === 0) {
      return undefined;
    } else {
      const _Tree = _param;
      const _k = _Tree._0;
      const _value = _Tree._1;
      const _l = _Tree._3;
      const _r = _Tree._4;
      const c = $compare_int(key, _k);
      if (c === 0) {
        return _value;
      } else {
        if (c < 0) {
          _tmp = _l;
          continue;
        } else {
          _tmp = _r;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$immut$sorted_map$$T$op_get$39$(self, key) {
  return moonbitlang$core$immut$sorted_map$$T$get$39$(self, key);
}
function moonbitlang$core$immut$hashmap$$Bucket$find$40$(self, key) {
  let _tmp = self;
  let _tmp$2 = key;
  while (true) {
    const self$2 = _tmp;
    const key$2 = _tmp$2;
    if (self$2.$tag === 0) {
      const _JustOne = self$2;
      const _key1 = _JustOne._0;
      const _value = _JustOne._1;
      return key$2.num === _key1.num ? new Option$Some$10$(_value) : Option$None$10$;
    } else {
      const _More = self$2;
      const _key1 = _More._0;
      const _value = _More._1;
      const _rest = _More._2;
      if (key$2.num === _key1.num) {
        return new Option$Some$10$(_value);
      } else {
        _tmp = _rest;
        continue;
      }
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$get$40$(self, key) {
  let _tmp = self;
  let _tmp$2 = moonbitlang$core$builtin$$Hash$hash$41$(key);
  _L: while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    switch (_param_0.$tag) {
      case 0: {
        return Option$None$10$;
      }
      case 1: {
        const _Leaf = _param_0;
        const _key1 = _Leaf._0;
        const _value = _Leaf._1;
        return key.num === _key1.num ? new Option$Some$10$(_value) : Option$None$10$;
      }
      case 2: {
        const _Collision = _param_0;
        const _bucket = _Collision._0;
        return moonbitlang$core$immut$hashmap$$Bucket$find$40$(_bucket, key);
      }
      default: {
        const _Branch = _param_0;
        const _children = _Branch._0;
        const idx = _param_1 & 31;
        const _p = _children.elem_info;
        if ((_p & 1 << idx) !== 0) {
          const _tmp$3 = _children.data;
          const _p$2 = _children.elem_info;
          const _tmp$4 = $i32_popcnt(_p$2 & ((1 << idx >>> 0) - (1 >>> 0) | 0));
          $bound_check(_tmp$3, _tmp$4);
          const child = _tmp$3[_tmp$4];
          const _tmp$5 = _param_1 >>> 5 | 0;
          _tmp = child;
          _tmp$2 = _tmp$5;
          continue _L;
        }
        return Option$None$10$;
      }
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$op_get$40$(self, key) {
  return moonbitlang$core$immut$hashmap$$T$get$40$(self, key);
}
function moonbitlang$core$immut$hashmap$$Bucket$add$40$(self, key, value) {
  if (self.$tag === 0) {
    const _JustOne = self;
    const _key1 = _JustOne._0;
    return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$8$(key, value) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$(key, value, self);
  } else {
    const _More = self;
    const _key1 = _More._0;
    const _value1 = _More._1;
    const _rest = _More._2;
    return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$(key, value, _rest) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$(_key1, _value1, moonbitlang$core$immut$hashmap$$Bucket$add$40$(_rest, key, value));
  }
}
function moonbitlang$core$immut$hashmap$$Bucket$add$42$(self, key, value) {
  if (self.$tag === 0) {
    const _JustOne = self;
    const _key1 = _JustOne._0;
    return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$9$(key, value) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$(key, value, self);
  } else {
    const _More = self;
    const _key1 = _More._0;
    const _value1 = _More._1;
    const _rest = _More._2;
    return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$(key, value, _rest) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$(_key1, _value1, moonbitlang$core$immut$hashmap$$Bucket$add$42$(_rest, key, value));
  }
}
function moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$759(depth, key, hash, value) {
  if (depth >= 32) {
    return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$8$(key, value);
  } else {
    const idx = hash & 31;
    const child = moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$759(depth + 5 | 0, key, hash >>> 5 | 0, value);
    return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$8$(moonbitlang$core$immut$internal$sparse_array$$singleton$19$(idx, child));
  }
}
function moonbitlang$core$immut$hashmap$$T$add_with_hash$40$(self, key, depth, hash, value) {
  switch (self.$tag) {
    case 0: {
      return moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$759(depth, key, hash, value);
    }
    case 1: {
      const _Leaf = self;
      const _key1 = _Leaf._0;
      const _value1 = _Leaf._1;
      return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$8$(key, value) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$8$(new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$8$(key, value, new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$8$(_key1, _value1)));
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$8$(moonbitlang$core$immut$hashmap$$Bucket$add$40$(_bucket, key, value));
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      const idx = hash & 31;
      const _bind = moonbitlang$core$immut$internal$sparse_array$$SparseArray$op_get$19$(_children, idx);
      if (_bind === undefined) {
        const child = moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$759(depth + 5 | 0, key, hash >>> 5 | 0, value);
        return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$8$(moonbitlang$core$immut$internal$sparse_array$$SparseArray$add$19$(_children, idx, child));
      } else {
        const _Some = _bind;
        const _child = _Some;
        const child = moonbitlang$core$immut$hashmap$$T$add_with_hash$40$(_child, key, depth + 5 | 0, hash >>> 5 | 0, value);
        return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$8$(moonbitlang$core$immut$internal$sparse_array$$SparseArray$replace$19$(_children, idx, child));
      }
    }
  }
}
function moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$784(depth, key, hash, value) {
  if (depth >= 32) {
    return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$9$(key, value);
  } else {
    const idx = hash & 31;
    const child = moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$784(depth + 5 | 0, key, hash >>> 5 | 0, value);
    return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$9$(moonbitlang$core$immut$internal$sparse_array$$singleton$20$(idx, child));
  }
}
function moonbitlang$core$immut$hashmap$$T$add_with_hash$42$(self, key, depth, hash, value) {
  switch (self.$tag) {
    case 0: {
      return moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$784(depth, key, hash, value);
    }
    case 1: {
      const _Leaf = self;
      const _key1 = _Leaf._0;
      const _value1 = _Leaf._1;
      return key.num === _key1.num ? new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Leaf$9$(key, value) : new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$9$(new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$More$9$(key, value, new $64$moonbitlang$47$core$47$immut$47$hashmap$46$Bucket$JustOne$9$(_key1, _value1)));
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Collision$9$(moonbitlang$core$immut$hashmap$$Bucket$add$42$(_bucket, key, value));
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      const idx = hash & 31;
      const _bind = moonbitlang$core$immut$internal$sparse_array$$SparseArray$op_get$20$(_children, idx);
      if (_bind === undefined) {
        const child = moonbitlang$core$immut$hashmap$$add_with_hash$46$make_leaf$47$784(depth + 5 | 0, key, hash >>> 5 | 0, value);
        return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$9$(moonbitlang$core$immut$internal$sparse_array$$SparseArray$add$20$(_children, idx, child));
      } else {
        const _Some = _bind;
        const _child = _Some;
        const child = moonbitlang$core$immut$hashmap$$T$add_with_hash$42$(_child, key, depth + 5 | 0, hash >>> 5 | 0, value);
        return new $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Branch$9$(moonbitlang$core$immut$internal$sparse_array$$SparseArray$replace$20$(_children, idx, child));
      }
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$add$40$(self, key, value) {
  return moonbitlang$core$immut$hashmap$$T$add_with_hash$40$(self, key, 0, moonbitlang$core$builtin$$Hash$hash$41$(key), value);
}
function moonbitlang$core$immut$hashmap$$T$add$42$(self, key, value) {
  return moonbitlang$core$immut$hashmap$$T$add_with_hash$42$(self, key, 0, moonbitlang$core$builtin$$Hash$hash$41$(key), value);
}
function moonbitlang$core$immut$hashmap$$Bucket$iter$42$(self) {
  const _p = (f) => {
    let _tmp = self;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        const _JustOne = _param;
        const _k = _JustOne._0;
        const _v = _JustOne._1;
        return f({ _0: _k, _1: _v });
      } else {
        const _More = _param;
        const _k = _More._0;
        const _v = _More._1;
        const _rest = _More._2;
        if (moonbitlang$core$builtin$$Eq$op_equal$43$(f({ _0: _k, _1: _v }), 1)) {
          _tmp = _rest;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$immut$hashmap$$Bucket$iter$40$(self) {
  const _p = (f) => {
    let _tmp = self;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        const _JustOne = _param;
        const _k = _JustOne._0;
        const _v = _JustOne._1;
        return f({ _0: _k, _1: _v });
      } else {
        const _More = _param;
        const _k = _More._0;
        const _v = _More._1;
        const _rest = _More._2;
        if (moonbitlang$core$builtin$$Eq$op_equal$43$(f({ _0: _k, _1: _v }), 1)) {
          _tmp = _rest;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$immut$hashmap$$T$iter$42$(self) {
  switch (self.$tag) {
    case 0: {
      return moonbitlang$core$builtin$$Iter$empty$44$();
    }
    case 1: {
      const _Leaf = self;
      const _k = _Leaf._0;
      const _v = _Leaf._1;
      return moonbitlang$core$builtin$$Iter$singleton$44$({ _0: _k, _1: _v });
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      return moonbitlang$core$immut$hashmap$$Bucket$iter$42$(_bucket);
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      const _bind = _children.data;
      return (_p) => {
        const _len = _bind.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const _p$2 = _bind[_i];
            const _func = moonbitlang$core$immut$hashmap$$T$iter$42$(_p$2);
            if (_func(_p) === 1) {
              _tmp = _i + 1 | 0;
              continue;
            } else {
              return 0;
            }
          } else {
            return 1;
          }
        }
      };
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$iter$40$(self) {
  switch (self.$tag) {
    case 0: {
      return moonbitlang$core$builtin$$Iter$empty$45$();
    }
    case 1: {
      const _Leaf = self;
      const _k = _Leaf._0;
      const _v = _Leaf._1;
      return moonbitlang$core$builtin$$Iter$singleton$45$({ _0: _k, _1: _v });
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      return moonbitlang$core$immut$hashmap$$Bucket$iter$40$(_bucket);
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      const _bind = _children.data;
      return (_p) => {
        const _len = _bind.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const _p$2 = _bind[_i];
            const _func = moonbitlang$core$immut$hashmap$$T$iter$40$(_p$2);
            if (_func(_p) === 1) {
              _tmp = _i + 1 | 0;
              continue;
            } else {
              return 0;
            }
          } else {
            return 1;
          }
        }
      };
    }
  }
}
function moonbitlang$core$immut$hashmap$$Bucket$size$40$(self) {
  let _tmp = self;
  let _tmp$2 = 1;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_0.$tag === 0) {
      return _param_1;
    } else {
      const _More = _param_0;
      const _rest = _More._2;
      const _tmp$3 = _param_1 + 1 | 0;
      _tmp = _rest;
      _tmp$2 = _tmp$3;
      continue;
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$size$40$(self) {
  switch (self.$tag) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      return moonbitlang$core$immut$hashmap$$Bucket$size$40$(_bucket);
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      let _tmp = 0;
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp;
        const total_size = _tmp$2;
        if (i < _children.data.length) {
          const _tmp$3 = i + 1 | 0;
          const _tmp$4 = _children.data;
          $bound_check(_tmp$4, i);
          const _tmp$5 = total_size + moonbitlang$core$immut$hashmap$$T$size$40$(_tmp$4[i]) | 0;
          _tmp = _tmp$3;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          return total_size;
        }
      }
    }
  }
}
function moonbitlang$core$immut$hashmap$$Bucket$each$40$(self, f) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (_param.$tag === 0) {
      const _JustOne = _param;
      const _k = _JustOne._0;
      const _v = _JustOne._1;
      f(_k, _v);
      return;
    } else {
      const _More = _param;
      const _k = _More._0;
      const _v = _More._1;
      const _rest = _More._2;
      f(_k, _v);
      _tmp = _rest;
      continue;
    }
  }
}
function moonbitlang$core$immut$hashmap$$T$each$40$(self, f) {
  switch (self.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _Leaf = self;
      const _k = _Leaf._0;
      const _v = _Leaf._1;
      f(_k, _v);
      return;
    }
    case 2: {
      const _Collision = self;
      const _bucket = _Collision._0;
      moonbitlang$core$immut$hashmap$$Bucket$each$40$(_bucket, f);
      return;
    }
    default: {
      const _Branch = self;
      const _children = _Branch._0;
      moonbitlang$core$immut$internal$sparse_array$$SparseArray$each$19$(_children, (child) => {
        moonbitlang$core$immut$hashmap$$T$each$40$(child, f);
      });
      return;
    }
  }
}
function moonbitlang$core$immut$hashmap$$from_iter$40$(iter) {
  const _bind = $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Empty$8$;
  const _acc = { val: _bind };
  iter((_p) => {
    const m = _acc.val;
    _acc.val = moonbitlang$core$immut$hashmap$$T$add$40$(m, _p._0, _p._1);
    return 1;
  });
  return _acc.val;
}
function moonbitlang$core$immut$hashmap$$from_iter$42$(iter) {
  const _bind = $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Empty$9$;
  const _acc = { val: _bind };
  iter((_p) => {
    const m = _acc.val;
    _acc.val = moonbitlang$core$immut$hashmap$$T$add$42$(m, _p._0, _p._1);
    return 1;
  });
  return _acc.val;
}
function moonbitlang$core$builtin$$Eq$op_equal$46$(self, other) {
  if (moonbitlang$core$immut$hashmap$$T$size$40$(self) === moonbitlang$core$immut$hashmap$$T$size$40$(other)) {
    const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$11$ };
    const _bind = moonbitlang$core$immut$hashmap$$T$iter$40$(self);
    _bind((kv) => {
      _L: {
        _L$2: {
          const _bind$2 = moonbitlang$core$immut$hashmap$$T$get$40$(other, kv._0);
          if (_bind$2.$tag === 1) {
            const _Some = _bind$2;
            const _v = _Some._0;
            if (moonbitlang$core$builtin$$Eq$op_equal$47$(_v, kv._1)) {
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
          break _L;
        }
        _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$11$(false);
        return 0;
      }
      return 1;
    });
    const _tmp = _foreach_result.val;
    switch (_tmp.$tag) {
      case 0: {
        break;
      }
      case 1: {
        const _break = _tmp;
        _break._0;
        break;
      }
      case 2: {
        const _return = _tmp;
        return _return._0;
      }
      case 3: {
        $panic();
        break;
      }
      default: {
        $panic();
      }
    }
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$46$(self, hasher) {
  moonbitlang$core$immut$hashmap$$T$each$40$(self, (k, v) => {
    moonbitlang$core$builtin$$Hasher$combine$13$(hasher, k);
    moonbitlang$core$builtin$$Hasher$combine$47$(hasher, v);
  });
}
function moonbitlang$core$immut$list$$T$to_array$48$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _Cons = self;
    const _x = _Cons._0;
    const _xs = _Cons._1;
    const arr = [_x];
    let _tmp = _xs;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        break;
      } else {
        const _Cons$2 = _param;
        const _x$2 = _Cons$2._0;
        const _xs$2 = _Cons$2._1;
        moonbitlang$core$array$$Array$push$48$(arr, _x$2);
        _tmp = _xs$2;
        continue;
      }
    }
    return arr;
  }
}
function moonbitlang$core$immut$list$$T$to_array$49$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _Cons = self;
    const _x = _Cons._0;
    const _xs = _Cons._1;
    const arr = [_x];
    let _tmp = _xs;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        break;
      } else {
        const _Cons$2 = _param;
        const _x$2 = _Cons$2._0;
        const _xs$2 = _Cons$2._1;
        moonbitlang$core$array$$Array$push$49$(arr, _x$2);
        _tmp = _xs$2;
        continue;
      }
    }
    return arr;
  }
}
function moonbitlang$core$immut$list$$T$to_array$50$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _Cons = self;
    const _x = _Cons._0;
    const _xs = _Cons._1;
    const arr = [_x];
    let _tmp = _xs;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        break;
      } else {
        const _Cons$2 = _param;
        const _x$2 = _Cons$2._0;
        const _xs$2 = _Cons$2._1;
        moonbitlang$core$array$$Array$push$50$(arr, _x$2);
        _tmp = _xs$2;
        continue;
      }
    }
    return arr;
  }
}
function moonbitlang$core$immut$list$$T$tail$8$(self) {
  if (self.$tag === 0) {
    return $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$12$;
  } else {
    const _Cons = self;
    const _tail = _Cons._1;
    return _tail;
  }
}
function moonbitlang$core$immut$list$$T$unsafe_head$8$(self) {
  if (self.$tag === 0) {
    return moonbitlang$core$abort$$abort$8$("head of empty list");
  } else {
    const _Cons = self;
    const _head = _Cons._0;
    return _head;
  }
}
function moonbitlang$core$immut$list$$T$drop$8$(self, n) {
  if (n <= 0) {
    return self;
  } else {
    let _tmp = n;
    let _tmp$2 = self;
    while (true) {
      const _param_0 = _tmp;
      const _param_1 = _tmp$2;
      if (_param_1.$tag === 0) {
        return $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$12$;
      } else {
        if (_param_0 === 1) {
          const _Cons = _param_1;
          const _xs = _Cons._1;
          return _xs;
        } else {
          const _Cons = _param_1;
          const _xs = _Cons._1;
          const _tmp$3 = _param_0 - 1 | 0;
          _tmp = _tmp$3;
          _tmp$2 = _xs;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$sorted_map$$new_node$51$(key, value) {
  return { key: key, value: value, left: undefined, right: undefined, height: 1 };
}
function moonbitlang$core$sorted_map$$new_node$52$(key, value) {
  return { key: key, value: value, left: undefined, right: undefined, height: 1 };
}
function moonbitlang$core$builtin$$Eq$op_equal$53$(self, other) {
  return moonbitlang$core$builtin$$Eq$op_equal$54$(self.key, other.key);
}
function moonbitlang$core$builtin$$Eq$op_equal$55$(self, other) {
  return moonbitlang$core$builtin$$Eq$op_equal$56$(self.key, other.key);
}
function moonbitlang$core$sorted_map$$max(x, y) {
  return x > y ? x : y;
}
function moonbitlang$core$sorted_map$$height$51$(node) {
  if (node === undefined) {
    return 0;
  } else {
    const _Some = node;
    const _n = _Some;
    return _n.height;
  }
}
function moonbitlang$core$sorted_map$$height$52$(node) {
  if (node === undefined) {
    return 0;
  } else {
    const _Some = node;
    const _n = _Some;
    return _n.height;
  }
}
function moonbitlang$core$sorted_map$$height_ge$51$(x1, x2) {
  if (x2 === undefined) {
    return true;
  } else {
    const _Some = x2;
    const _n2 = _Some;
    if (x1 === undefined) {
      return false;
    } else {
      const _Some$2 = x1;
      const _n1 = _Some$2;
      return _n1.height >= _n2.height;
    }
  }
}
function moonbitlang$core$sorted_map$$height_ge$52$(x1, x2) {
  if (x2 === undefined) {
    return true;
  } else {
    const _Some = x2;
    const _n2 = _Some;
    if (x1 === undefined) {
      return false;
    } else {
      const _Some$2 = x1;
      const _n1 = _Some$2;
      return _n1.height >= _n2.height;
    }
  }
}
function moonbitlang$core$sorted_map$$Node$update_height$51$(self) {
  self.height = 1 + moonbitlang$core$sorted_map$$max(moonbitlang$core$sorted_map$$height$51$(self.left), moonbitlang$core$sorted_map$$height$51$(self.right)) | 0;
}
function moonbitlang$core$sorted_map$$Node$update_height$52$(self) {
  self.height = 1 + moonbitlang$core$sorted_map$$max(moonbitlang$core$sorted_map$$height$52$(self.left), moonbitlang$core$sorted_map$$height$52$(self.right)) | 0;
}
function moonbitlang$core$sorted_map$$rotate_l$51$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$57$(n.right);
  n.right = r.left;
  r.left = n;
  moonbitlang$core$sorted_map$$Node$update_height$51$(n);
  moonbitlang$core$sorted_map$$Node$update_height$51$(r);
  return r;
}
function moonbitlang$core$sorted_map$$rotate_l$52$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$58$(n.right);
  n.right = r.left;
  r.left = n;
  moonbitlang$core$sorted_map$$Node$update_height$52$(n);
  moonbitlang$core$sorted_map$$Node$update_height$52$(r);
  return r;
}
function moonbitlang$core$sorted_map$$rotate_r$51$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$57$(n.left);
  n.left = l.right;
  l.right = n;
  moonbitlang$core$sorted_map$$Node$update_height$51$(n);
  moonbitlang$core$sorted_map$$Node$update_height$51$(l);
  return l;
}
function moonbitlang$core$sorted_map$$rotate_r$52$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$58$(n.left);
  n.left = l.right;
  l.right = n;
  moonbitlang$core$sorted_map$$Node$update_height$52$(n);
  moonbitlang$core$sorted_map$$Node$update_height$52$(l);
  return l;
}
function moonbitlang$core$sorted_map$$rotate_lr$51$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$57$(n.left);
  const v = moonbitlang$core$sorted_map$$rotate_l$51$(l);
  n.left = v;
  return moonbitlang$core$sorted_map$$rotate_r$51$(n);
}
function moonbitlang$core$sorted_map$$rotate_lr$52$(n) {
  const l = moonbitlang$core$option$$Option$unwrap$58$(n.left);
  const v = moonbitlang$core$sorted_map$$rotate_l$52$(l);
  n.left = v;
  return moonbitlang$core$sorted_map$$rotate_r$52$(n);
}
function moonbitlang$core$sorted_map$$rotate_rl$51$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$57$(n.right);
  const v = moonbitlang$core$sorted_map$$rotate_r$51$(r);
  n.right = v;
  return moonbitlang$core$sorted_map$$rotate_l$51$(n);
}
function moonbitlang$core$sorted_map$$rotate_rl$52$(n) {
  const r = moonbitlang$core$option$$Option$unwrap$58$(n.right);
  const v = moonbitlang$core$sorted_map$$rotate_r$52$(r);
  n.right = v;
  return moonbitlang$core$sorted_map$$rotate_l$52$(n);
}
function moonbitlang$core$sorted_map$$balance$51$(root) {
  const l = root.left;
  const r = root.right;
  const hl = moonbitlang$core$sorted_map$$height$51$(l);
  const hr = moonbitlang$core$sorted_map$$height$51$(r);
  let new_root;
  if (hl > (hr + 1 | 0)) {
    const _bind = moonbitlang$core$option$$Option$unwrap$57$(l);
    const _ll = _bind.left;
    const _lr = _bind.right;
    new_root = moonbitlang$core$sorted_map$$height_ge$51$(_ll, _lr) ? moonbitlang$core$sorted_map$$rotate_r$51$(root) : moonbitlang$core$sorted_map$$rotate_lr$51$(root);
  } else {
    if (hr > (hl + 1 | 0)) {
      const _bind = moonbitlang$core$option$$Option$unwrap$57$(r);
      const _rl = _bind.left;
      const _rr = _bind.right;
      new_root = moonbitlang$core$sorted_map$$height_ge$51$(_rr, _rl) ? moonbitlang$core$sorted_map$$rotate_l$51$(root) : moonbitlang$core$sorted_map$$rotate_rl$51$(root);
    } else {
      new_root = root;
    }
  }
  moonbitlang$core$sorted_map$$Node$update_height$51$(new_root);
  return new_root;
}
function moonbitlang$core$sorted_map$$balance$52$(root) {
  const l = root.left;
  const r = root.right;
  const hl = moonbitlang$core$sorted_map$$height$52$(l);
  const hr = moonbitlang$core$sorted_map$$height$52$(r);
  let new_root;
  if (hl > (hr + 1 | 0)) {
    const _bind = moonbitlang$core$option$$Option$unwrap$58$(l);
    const _ll = _bind.left;
    const _lr = _bind.right;
    new_root = moonbitlang$core$sorted_map$$height_ge$52$(_ll, _lr) ? moonbitlang$core$sorted_map$$rotate_r$52$(root) : moonbitlang$core$sorted_map$$rotate_lr$52$(root);
  } else {
    if (hr > (hl + 1 | 0)) {
      const _bind = moonbitlang$core$option$$Option$unwrap$58$(r);
      const _rl = _bind.left;
      const _rr = _bind.right;
      new_root = moonbitlang$core$sorted_map$$height_ge$52$(_rr, _rl) ? moonbitlang$core$sorted_map$$rotate_l$52$(root) : moonbitlang$core$sorted_map$$rotate_rl$52$(root);
    } else {
      new_root = root;
    }
  }
  moonbitlang$core$sorted_map$$Node$update_height$52$(new_root);
  return new_root;
}
function moonbitlang$core$sorted_map$$add_node$51$(root, key, value) {
  if (root === undefined) {
    return { _0: moonbitlang$core$sorted_map$$new_node$51$(key, value), _1: true };
  } else {
    const _Some = root;
    const _n = _Some;
    if (moonbitlang$core$builtin$$Eq$op_equal$54$(key, _n.key)) {
      _n.value = value;
      return { _0: _n, _1: false };
    } else {
      const l = _n.left;
      const r = _n.right;
      if (moonbitlang$core$builtin$$op_lt$23$(key, _n.key)) {
        const _bind = moonbitlang$core$sorted_map$$add_node$51$(l, key, value);
        const _nl = _bind._0;
        const _inserted = _bind._1;
        _n.left = _nl;
        return { _0: moonbitlang$core$sorted_map$$balance$51$(_n), _1: _inserted };
      } else {
        const _bind = moonbitlang$core$sorted_map$$add_node$51$(r, key, value);
        const _nr = _bind._0;
        const _inserted = _bind._1;
        _n.right = _nr;
        return { _0: moonbitlang$core$sorted_map$$balance$51$(_n), _1: _inserted };
      }
    }
  }
}
function moonbitlang$core$sorted_map$$add_node$52$(root, key, value) {
  if (root === undefined) {
    return { _0: moonbitlang$core$sorted_map$$new_node$52$(key, value), _1: true };
  } else {
    const _Some = root;
    const _n = _Some;
    if (moonbitlang$core$builtin$$Eq$op_equal$56$(key, _n.key)) {
      _n.value = value;
      return { _0: _n, _1: false };
    } else {
      const l = _n.left;
      const r = _n.right;
      if (moonbitlang$core$builtin$$op_lt$59$(key, _n.key)) {
        const _bind = moonbitlang$core$sorted_map$$add_node$52$(l, key, value);
        const _nl = _bind._0;
        const _inserted = _bind._1;
        _n.left = _nl;
        return { _0: moonbitlang$core$sorted_map$$balance$52$(_n), _1: _inserted };
      } else {
        const _bind = moonbitlang$core$sorted_map$$add_node$52$(r, key, value);
        const _nr = _bind._0;
        const _inserted = _bind._1;
        _n.right = _nr;
        return { _0: moonbitlang$core$sorted_map$$balance$52$(_n), _1: _inserted };
      }
    }
  }
}
function moonbitlang$core$sorted_map$$T$add$51$(self, key, value) {
  const _bind = moonbitlang$core$sorted_map$$add_node$51$(self.root, key, value);
  const _new_root = _bind._0;
  const _inserted = _bind._1;
  if (moonbitlang$core$builtin$$op_notequal$60$(self.root, _new_root)) {
    self.root = _new_root;
  }
  if (_inserted) {
    self.size = self.size + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$sorted_map$$T$add$52$(self, key, value) {
  const _bind = moonbitlang$core$sorted_map$$add_node$52$(self.root, key, value);
  const _new_root = _bind._0;
  const _inserted = _bind._1;
  if (moonbitlang$core$builtin$$op_notequal$61$(self.root, _new_root)) {
    self.root = _new_root;
  }
  if (_inserted) {
    self.size = self.size + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$sorted_map$$T$op_set$51$(self, key, value) {
  moonbitlang$core$sorted_map$$T$add$51$(self, key, value);
}
function moonbitlang$core$sorted_map$$T$op_set$52$(self, key, value) {
  moonbitlang$core$sorted_map$$T$add$52$(self, key, value);
}
function moonbitlang$core$sorted_map$$T$get$51$(self, key) {
  let _tmp = self.root;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return undefined;
    } else {
      const _Some = _param;
      const _node = _Some;
      const cmp = moonbitlang$core$builtin$$Compare$compare$54$(key, _node.key);
      if (cmp === 0) {
        return _node.value;
      } else {
        if (cmp > 0) {
          _tmp = _node.right;
          continue;
        } else {
          _tmp = _node.left;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$sorted_map$$T$get$52$(self, key) {
  let _tmp = self.root;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return undefined;
    } else {
      const _Some = _param;
      const _node = _Some;
      const cmp = moonbitlang$core$builtin$$Compare$compare$56$(key, _node.key);
      if (cmp === 0) {
        return _node.value;
      } else {
        if (cmp > 0) {
          _tmp = _node.right;
          continue;
        } else {
          _tmp = _node.left;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$sorted_map$$new$51$() {
  return { root: undefined, size: 0 };
}
function moonbitlang$core$sorted_map$$new$52$() {
  return { root: undefined, size: 0 };
}
function moonbitlang$core$sorted_map$$iter2$46$go$47$1106(yield_, x) {
  let _tmp = x;
  while (true) {
    const x$2 = _tmp;
    if (x$2 === undefined) {
      return 1;
    } else {
      const _Some = x$2;
      const _x = _Some;
      const _left = _x.left;
      const _right = _x.right;
      const _key = _x.key;
      const _value = _x.value;
      const _bind = moonbitlang$core$sorted_map$$iter2$46$go$47$1106(yield_, _left);
      if (_bind === 0) {
        return 0;
      } else {
        const _bind$2 = yield_(_key, _value);
        if (_bind$2 === 0) {
          return 0;
        } else {
          _tmp = _right;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$sorted_map$$T$iter2$52$(self) {
  const _p = (yield_) => moonbitlang$core$sorted_map$$iter2$46$go$47$1106(yield_, self.root);
  return _p;
}
function moonbitlang$core$sorted_map$$iter2$46$go$47$1121(yield_, x) {
  let _tmp = x;
  while (true) {
    const x$2 = _tmp;
    if (x$2 === undefined) {
      return 1;
    } else {
      const _Some = x$2;
      const _x = _Some;
      const _left = _x.left;
      const _right = _x.right;
      const _key = _x.key;
      const _value = _x.value;
      const _bind = moonbitlang$core$sorted_map$$iter2$46$go$47$1121(yield_, _left);
      if (_bind === 0) {
        return 0;
      } else {
        const _bind$2 = yield_(_key, _value);
        if (_bind$2 === 0) {
          return 0;
        } else {
          _tmp = _right;
          continue;
        }
      }
    }
  }
}
function moonbitlang$core$sorted_map$$T$iter2$51$(self) {
  const _p = (yield_) => moonbitlang$core$sorted_map$$iter2$46$go$47$1121(yield_, self.root);
  return _p;
}
function moonbitlang$core$math$$minimum$6$(x, y) {
  return x > y ? y : x;
}
function moonbitlang$core$option$$Option$map$62$(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function moonbitlang$core$option$$Option$is_empty$47$(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$option$$Option$or$63$(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function moonbitlang$core$option$$Option$or_else$19$(self, default_) {
  if (self === undefined) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function moonbitlang$core$builtin$$Compare$compare$64$(self, other) {
  if (self === undefined) {
    return other === undefined ? 0 : -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return 1;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return $compare_int(_x, _y);
    }
  }
}
function moonbitlang$core$bool$$Bool$to_int(self) {
  return self ? 1 : 0;
}
function moonbitlang$core$builtin$$Logger$write_object$3$(self, obj) {
  moonbitlang$core$builtin$$Show$output$3$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$1$(self, obj) {
  self.method_0(self.self, "()");
}
function moonbitlang$core$builtin$$Logger$write_object$65$(self, obj) {
  moonbitlang$core$builtin$$Show$output$66$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$2$(self, obj) {
  moonbitlang$core$builtin$$Show$output$2$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$5$(self, obj) {
  moonbitlang$core$builtin$$Show$output$5$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$6$(self, obj) {
  moonbitlang$core$builtin$$Show$output$6$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$22$(self, obj) {
  moonbitlang$core$builtin$$Show$output$67$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$68$(self, obj) {
  moonbitlang$core$builtin$$Show$output$68$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$69$(self, obj) {
  moonbitlang$core$builtin$$Show$output$70$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$71$(self, obj) {
  moonbitlang$core$builtin$$Show$output$72$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$73$(self, obj) {
  moonbitlang$core$builtin$$Show$output$74$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$75$(self, obj) {
  moonbitlang$core$builtin$$Show$output$76$(obj, self);
}
function moonbitlang$core$builtin$$Eq$op_equal$43$(_x_2382, _x_2383) {
  if (_x_2382 === 0) {
    if (_x_2383 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_2383 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$op_notequal$60$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$77$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$78$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$79$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$61$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$80$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$27$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$81$(x, y);
}
function moonbitlang$core$builtin$$println$2$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$println$82$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$83$(input));
}
function moonbitlang$core$builtin$$op_lt$34$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$34$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$23$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$54$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$0$(self_, other) {
  return $compare_int(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$21$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$59$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$56$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$2$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$2$(self_, other) < 0;
}
function moonbitlang$core$builtin$$Logger$write_char$24$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$34$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$34$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$0$(self_, other) {
  return $compare_int(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$21$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$2$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$2$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_le$34$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$34$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_ge$34$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$34$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_ge$15$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$21$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_ge$2$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$2$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (55296 <= c1 && c1 <= 56319) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$array$$Array$op_get$84$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$75$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$2$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$85$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$23$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$22$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$86$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$6$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$20$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$38$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$12$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$87$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$13$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$45$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$88$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$24$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$bytes$$Bytes$makei(length, value) {
  if (length <= 0) {
    return $bytes_literal$0;
  }
  const arr = $make_array_len_and_init(length, value(0));
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < length) {
      $bound_check(arr, i);
      arr[i] = value(i);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Eq$op_equal$21$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  if (_p._0 === _p$2._0 && _p._1 === _p$2._1) {
    return moonbitlang$core$builtin$$Eq$op_equal$89$(self._1, other._1);
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$89$(self, other) {
  return self._0 === other._0 && moonbitlang$core$builtin$$Eq$op_equal$56$(self._1, other._1);
}
function moonbitlang$core$builtin$$Eq$op_equal$90$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  if (_p === _p$2) {
    const _p$3 = self._1;
    const _p$4 = other._1;
    return _p$3 === _p$4;
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$30$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  if (_p.num === _p$2.num) {
    return moonbitlang$core$builtin$$Eq$op_equal$47$(self._1, other._1) && moonbitlang$core$builtin$$Eq$op_equal$64$(self._2, other._2);
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$output$46$abs$124$2118(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$write_digits$124$2120(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$124$2120(_env, num2);
  }
  const _tmp = moonbitlang$core$builtin$$output$46$abs$124$2118(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$write_digits$124$2120(_env, moonbitlang$core$builtin$$output$46$abs$124$2118(self));
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$6$("radix must be between 2 and 36");
}
function moonbitlang$core$builtin$$Show$output$70$(self, logger) {
  const _a = self._0;
  const _b = self._1;
  logger.method_0(logger.self, "(");
  moonbitlang$core$builtin$$Logger$write_object$6$(logger, _a);
  logger.method_0(logger.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$71$(logger, _b);
  logger.method_0(logger.self, ")");
}
function moonbitlang$core$builtin$$Show$output$74$(self, logger) {
  const _a = self._0;
  const _b = self._1;
  logger.method_0(logger.self, "(");
  moonbitlang$core$builtin$$Logger$write_object$75$(logger, _a);
  logger.method_0(logger.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$75$(logger, _b);
  logger.method_0(logger.self, ")");
}
function moonbitlang$core$builtin$$Show$output$76$(self, logger) {
  const _a = self._0;
  const _b = self._1;
  logger.method_0(logger.self, "(");
  moonbitlang$core$builtin$$Logger$write_object$6$(logger, _a);
  logger.method_0(logger.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$6$(logger, _b);
  logger.method_0(logger.self, ")");
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$24$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Hasher$combine$2$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$2$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$19$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$46$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$28$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$30$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$91$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$91$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$13$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$13$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$47$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$47$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$12$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$64$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$6$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$6$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$0$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$0$(value, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$90$(self, hasher) {
  const _a = self._0;
  const _b = self._1;
  moonbitlang$core$builtin$$Hasher$combine$0$(hasher, _a);
  moonbitlang$core$builtin$$Hasher$combine$0$(hasher, _b);
}
function moonbitlang$core$builtin$$Hash$hash_combine$30$(self, hasher) {
  const _a = self._0;
  const _b = self._1;
  const _c = self._2;
  moonbitlang$core$builtin$$Hasher$combine$13$(hasher, _a);
  moonbitlang$core$builtin$$Hasher$combine$47$(hasher, _b);
  moonbitlang$core$builtin$$Hasher$combine$12$(hasher, _c);
}
function moonbitlang$core$builtin$$power_2_above(x, n) {
  let _tmp = x;
  while (true) {
    const i = _tmp;
    if (i >= n) {
      return i;
    }
    const next = i << 1;
    if (next < 0) {
      return i;
    }
    _tmp = next;
    continue;
  }
}
function moonbitlang$core$builtin$$Map$new$92$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$93$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$94$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$95$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$96$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$97$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$98$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$62$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$99$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$42$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$option$$Option$unwrap$100$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$69$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$101$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some._0;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$102$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$19$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$6$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$47$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some._0;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$75$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$26$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$103$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$104$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$57$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$105$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$106$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$107$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$108$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$109$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$58$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$110$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$111$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$92$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$102$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$95$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$103$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$96$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$104$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$42$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$105$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$98$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$106$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$94$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$107$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$99$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$108$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$62$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$109$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$93$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$110$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$97$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$111$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$92$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$95$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$96$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$42$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$98$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$94$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$99$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$62$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$93$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$97$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$92$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$92$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$92$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$95$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$95$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$95$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$96$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$96$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$96$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$42$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$42$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$42$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$98$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$98$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$98$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$94$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$94$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$94$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$99$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$99$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$99$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$62$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$62$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$62$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$93$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$93$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$93$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$97$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$97$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$97$(self, entry$2, idx$2);
        const _tmp$5 = _curr_entry.psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        const _tmp$5 = psl + 1 | 0;
        const _tmp$6 = idx$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$92$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$92$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$112$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$92$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$92$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$95$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$95$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$95$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$95$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$96$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$96$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$96$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$96$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$42$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$42$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$41$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      let _tmp$4;
      if (_curr_entry.hash === hash) {
        const _p = _curr_entry.key;
        _tmp$4 = _p.num === key.num;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$42$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$5 = psl + 1 | 0;
      const _tmp$6 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$5;
      _tmp$2 = _tmp$6;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$42$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$98$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$98$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$113$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$30$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$98$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$98$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$94$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$94$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$114$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$91$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$94$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$94$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$99$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$99$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$112$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$99$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$99$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$62$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$62$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$62$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$62$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$93$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$93$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$115$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$46$(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$93$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$93$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set$97$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$97$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$97$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      const _tmp$4 = psl + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$97$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$92$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$92$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$95$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$95$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$96$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$96$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$42$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$42$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$98$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$98$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$94$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$94$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$99$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$99$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$62$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$62$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$93$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$93$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$97$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$97$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$from_array$92$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$92$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$92$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$95$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$95$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$95$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$96$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$96$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$96$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$98$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$98$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$98$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$99$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$99$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$99$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$42$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$42$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$42$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$op_set$96$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$96$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$95$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$95$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$98$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$98$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$94$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$94$(self, key, value);
}
function moonbitlang$core$builtin$$Map$get$92$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$112$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$97$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$95$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$96$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return Option$None$13$;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new Option$Some$13$(_entry.value);
      }
      if (i > _entry.psl) {
        return Option$None$13$;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$93$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$115$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$46$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$98$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$113$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$30$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$94$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$114$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && moonbitlang$core$builtin$$Eq$op_equal$91$(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$99$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$112$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$42$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$41$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p.num === key.num;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$5 = i + 1 | 0;
      const _tmp$6 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$5;
      _tmp$2 = _tmp$6;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$62$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$6$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get_or_default$42$(self, key, default_) {
  const hash = moonbitlang$core$builtin$$Hash$hash$41$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return default_;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p.num === key.num;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return default_;
      }
      const _tmp$5 = i + 1 | 0;
      const _tmp$6 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$5;
      _tmp$2 = _tmp$6;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get_or_init$93$(self, key, default_) {
  const _bind = moonbitlang$core$builtin$$Map$get$93$(self, key);
  if (_bind === undefined) {
    const v = default_();
    moonbitlang$core$builtin$$Map$set$93$(self, key, v);
    return v;
  } else {
    const _Some = _bind;
    const _v = _Some;
    return _v;
  }
}
function moonbitlang$core$builtin$$Map$iter$95$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_({ _0: _key, _1: _value });
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter$94$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_({ _0: _key, _1: _value });
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter$42$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_({ _0: _key, _1: _value });
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$98$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_(_key, _value);
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$ArrayView$op_get$9$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$9$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$6$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$op_get$15$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$15$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$6$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$op_get$2$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$2$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$6$(index)}`);
  }
}
function moonbitlang$core$array$$ArrayView$swap$15$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + i | 0;
    $bound_check(_tmp, _tmp$2);
    const temp = _tmp[_tmp$2];
    const _tmp$3 = self.buf;
    const _tmp$4 = self.start + i | 0;
    const _tmp$5 = self.buf;
    const _tmp$6 = self.start + j | 0;
    $bound_check(_tmp$5, _tmp$6);
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4] = _tmp$5[_tmp$6];
    const _tmp$7 = self.buf;
    const _tmp$8 = self.start + j | 0;
    $bound_check(_tmp$7, _tmp$8);
    _tmp$7[_tmp$8] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$6$(i)}, ${moonbitlang$core$builtin$$Show$to_string$6$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$ArrayView$swap$2$(self, i, j) {
  if (i >= 0 && (i < self.len && (j >= 0 && j < self.len))) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + i | 0;
    $bound_check(_tmp, _tmp$2);
    const temp = _tmp[_tmp$2];
    const _tmp$3 = self.buf;
    const _tmp$4 = self.start + i | 0;
    const _tmp$5 = self.buf;
    const _tmp$6 = self.start + j | 0;
    $bound_check(_tmp$5, _tmp$6);
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4] = _tmp$5[_tmp$6];
    const _tmp$7 = self.buf;
    const _tmp$8 = self.start + j | 0;
    $bound_check(_tmp$7, _tmp$8);
    _tmp$7[_tmp$8] = temp;
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$6$(self.len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$6$(i)}, ${moonbitlang$core$builtin$$Show$to_string$6$(j)})`);
    return;
  }
}
function moonbitlang$core$array$$Array$op_as_view$9$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$7$("View index out of bounds");
}
function moonbitlang$core$array$$Array$op_as_view$15$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$11$("View index out of bounds");
}
function moonbitlang$core$array$$Array$op_as_view$2$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$16$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$op_as_view$15$(self, start, end) {
  const len = self.len;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$11$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$op_as_view$2$(self, start, end) {
  const len = self.len;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$16$("View index out of bounds");
}
function moonbitlang$core$array$$Array$new$5$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$5$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$9$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$23$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$38$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$68$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$88$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$116$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$117$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$118$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$119$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$2$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$87$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$45$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$120$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$48$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$49$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$121$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$50$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$unsafe_pop$9$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$unsafe_pop$121$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$121$(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$121$(self);
    return v;
  }
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  self.acc = Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end1474 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end1474) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$2$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash$6$(self) {
  const self$2 = self;
  let x = self$2 ^ (self$2 >>> 17 | 0);
  x = Math.imul(x, -312814405) | 0;
  x = x ^ (x >>> 11 | 0);
  x = Math.imul(x, -1404298415) | 0;
  x = x ^ (x >>> 15 | 0);
  x = Math.imul(x, 830770091) | 0;
  x = x ^ (x >>> 14 | 0);
  return x;
}
function moonbitlang$core$builtin$$Hash$hash_combine$6$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$64$(self, hasher) {
  if (self === undefined) {
    moonbitlang$core$builtin$$Hasher$combine_int(hasher, 0);
    return;
  } else {
    const _Some = self;
    const _x = _Some;
    moonbitlang$core$builtin$$Hasher$combine_int(hasher, 1);
    moonbitlang$core$builtin$$Hasher$combine$6$(hasher, _x);
    return;
  }
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$122$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$19$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$20$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$array$$FixedArray$blit_to$19$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$19$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$6$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$6$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$6$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$6$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$6$(self.length)}`);
    return;
  }
}
function moonbitlang$core$array$$FixedArray$blit_to$20$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$20$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$6$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$6$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$6$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$6$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$6$(self.length)}`);
    return;
  }
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$24$, method_1: moonbitlang$core$builtin$$Logger$write_substring$24$, method_2: moonbitlang$core$builtin$$Logger$write_char$24$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$6$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$array$$Array$unsafe_blit$2$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$122$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$array$$Array$make$22$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$2$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$12$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$23$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$6$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Show$output$6$(self, logger) {
  moonbitlang$core$int$$Int$output(self, logger, 10);
}
function moonbitlang$core$builtin$$to_hex_digit(i) {
  return i < 10 ? i + 48 | 0 : (i + 97 | 0) - 10 | 0;
}
function moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i) {
  const logger = _env._2;
  const self = _env._1;
  const segment_start = _env._0;
  if (i > segment_start.val) {
    logger.method_1(logger.self, self, segment_start.val, i - segment_start.val | 0);
  }
  segment_start.val = i + 1 | 0;
}
function moonbitlang$core$builtin$$Show$output$2$(self, logger) {
  logger.method_2(logger.self, 34);
  const segment_start = { val: 0 };
  const _env = { _0: segment_start, _1: self, _2: logger };
  const _end1067 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end1067) {
      let c;
      _L: {
        _L$2: {
          const _bind = self.charCodeAt(i);
          switch (_bind) {
            case 34: {
              c = _bind;
              break _L$2;
            }
            case 92: {
              c = _bind;
              break _L$2;
            }
            case 10: {
              moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
              logger.method_0(logger.self, "\\n");
              break;
            }
            case 13: {
              moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
              logger.method_0(logger.self, "\\r");
              break;
            }
            case 8: {
              moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
              logger.method_0(logger.self, "\\b");
              break;
            }
            case 9: {
              moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
              logger.method_0(logger.self, "\\t");
              break;
            }
            default: {
              if (_bind < 32) {
                moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
                logger.method_0(logger.self, "\\u{");
                logger.method_2(logger.self, moonbitlang$core$builtin$$to_hex_digit(_bind / 16 | 0));
                logger.method_2(logger.self, moonbitlang$core$builtin$$to_hex_digit(_bind % 16 | 0));
                logger.method_2(logger.self, 125);
              }
            }
          }
          break _L;
        }
        moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, i);
        logger.method_2(logger.self, 92);
        logger.method_2(logger.self, c);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$output$46$flush_segment$124$1064(_env, self.length);
  logger.method_2(logger.self, 34);
}
function moonbitlang$core$builtin$$Show$output$67$(self, logger) {
  if (self === undefined) {
    logger.method_0(logger.self, "None");
    return;
  } else {
    const _Some = self;
    const _arg = _Some;
    logger.method_0(logger.self, "Some(");
    moonbitlang$core$builtin$$Logger$write_object$69$(logger, _arg);
    logger.method_0(logger.self, ")");
    return;
  }
}
function moonbitlang$core$builtin$$Logger$write_iter$6$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$6$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$6$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$22$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$22$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$22$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$68$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$68$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$68$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$73$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$73$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$73$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$array$$Array$iter$120$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$6$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$22$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$68$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$73$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Show$output$54$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$6$(logger, moonbitlang$core$array$$Array$iter$6$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$123$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$22$(logger, moonbitlang$core$array$$Array$iter$22$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$66$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$68$(logger, moonbitlang$core$array$$Array$iter$68$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Show$output$72$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$73$(logger, moonbitlang$core$array$$Array$iter$73$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$Hash$hash$112$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$2$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$115$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$19$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$113$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$28$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$114$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$91$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$41$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$13$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$83$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Show$output$82$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$24$, method_1: moonbitlang$core$builtin$$Logger$write_substring$24$, method_2: moonbitlang$core$builtin$$Logger$write_char$24$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$124$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$24$, method_1: moonbitlang$core$builtin$$Logger$write_substring$24$, method_2: moonbitlang$core$builtin$$Logger$write_char$24$ };
  _p.method_0(_p.self, self.val);
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$125$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Show$output$54$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$24$, method_1: moonbitlang$core$builtin$$Logger$write_substring$24$, method_2: moonbitlang$core$builtin$$Logger$write_char$24$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$126$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Show$output$123$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$24$, method_1: moonbitlang$core$builtin$$Logger$write_substring$24$, method_2: moonbitlang$core$builtin$$Logger$write_char$24$ });
  return logger.val;
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$op_add$127$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$op_sub$127$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$op_mul$127$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$Div$op_div$127$(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_s;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$op_add$34$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$127$(self, other);
}
function moonbitlang$core$builtin$$Sub$op_sub$34$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$127$(self, other);
}
function moonbitlang$core$builtin$$Mul$op_mul$34$(self, other) {
  return moonbitlang$core$builtin$$Mul$op_mul$127$(self, other);
}
function moonbitlang$core$builtin$$Div$op_div$34$(self, other) {
  return moonbitlang$core$builtin$$Div$op_div$127$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$34$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$builtin$$Eq$op_equal$77$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$op_equal$53$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$79$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$op_equal$14$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$64$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$80$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$op_equal$55$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$81$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x.value === _y.value;
    }
  }
}
function moonbitlang$core$array$$Array$op_set$22$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$2$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$12$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$23$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$6$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$54$(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$56$(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (moonbitlang$core$builtin$$Eq$op_equal$54$(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$128$(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (moonbitlang$core$builtin$$Eq$op_equal$64$(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Compare$compare$54$(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  const cmp = $compare_int(len_self, len_other);
  if (cmp === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len_self) {
        const cmp$2 = $compare_int(self[i], other[i]);
        if (cmp$2 === 0) {
        } else {
          return cmp$2;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return 0;
      }
    }
  } else {
    return cmp;
  }
}
function moonbitlang$core$builtin$$Compare$compare$56$(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  const cmp = $compare_int(len_self, len_other);
  if (cmp === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len_self) {
        const cmp$2 = moonbitlang$core$builtin$$Compare$compare$54$(self[i], other[i]);
        if (cmp$2 === 0) {
        } else {
          return cmp$2;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return 0;
      }
    }
  } else {
    return cmp;
  }
}
function moonbitlang$core$builtin$$Compare$compare$128$(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  const cmp = $compare_int(len_self, len_other);
  if (cmp === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len_self) {
        const cmp$2 = moonbitlang$core$builtin$$Compare$compare$64$(self[i], other[i]);
        if (cmp$2 === 0) {
        } else {
          return cmp$2;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return 0;
      }
    }
  } else {
    return cmp;
  }
}
function moonbitlang$core$array$$Array$flatten$2$(self) {
  let len = 0;
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = self[_i];
      len = len + x.length | 0;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const res = new Array(len);
  let i = 0;
  const _len$2 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const xs = self[_i];
      moonbitlang$core$array$$Array$unsafe_blit$2$(res, i, xs, 0, xs.length);
      i = i + xs.length | 0;
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function moonbitlang$core$builtin$$Compare$compare$21$(self, other) {
  const t0 = moonbitlang$core$builtin$$Compare$compare$76$(self._0, other._0);
  return t0 === 0 ? moonbitlang$core$builtin$$Compare$compare$89$(self._1, other._1) : t0;
}
function moonbitlang$core$builtin$$Compare$compare$31$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  const t0 = $compare_int(_p.num, _p$2.num);
  return t0 === 0 ? moonbitlang$core$builtin$$Compare$compare$64$(self._1, other._1) : t0;
}
function moonbitlang$core$builtin$$Compare$compare$76$(self, other) {
  const t0 = $compare_int(self._0, other._0);
  return t0 === 0 ? $compare_int(self._1, other._1) : t0;
}
function moonbitlang$core$builtin$$Compare$compare$89$(self, other) {
  const t0 = $compare_int(self._0, other._0);
  return t0 === 0 ? moonbitlang$core$builtin$$Compare$compare$56$(self._1, other._1) : t0;
}
function moonbitlang$core$builtin$$Compare$compare$30$(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  const t0 = $compare_int(_p.num, _p$2.num);
  if (t0 === 0) {
    const t1 = moonbitlang$core$builtin$$Compare$compare$47$(self._1, other._1);
    return t1 === 0 ? moonbitlang$core$builtin$$Compare$compare$64$(self._2, other._2) : t1;
  } else {
    return t0;
  }
}
function moonbitlang$core$builtin$$Iter$run$129$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$run$45$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$empty$44$() {
  return (_param157) => 1;
}
function moonbitlang$core$builtin$$Iter$empty$45$() {
  return (_param157) => 1;
}
function moonbitlang$core$builtin$$Iter$empty$2$() {
  return (_param157) => 1;
}
function moonbitlang$core$builtin$$Iter$singleton$44$(a) {
  return (yield_) => yield_(a);
}
function moonbitlang$core$builtin$$Iter$singleton$45$(a) {
  return (yield_) => yield_(a);
}
function moonbitlang$core$builtin$$Iter$singleton$2$(a) {
  return (yield_) => yield_(a);
}
function moonbitlang$core$builtin$$Iter$filter_map$130$(self, f) {
  return (yield_) => moonbitlang$core$builtin$$Iter$run$45$(self, (a) => {
    const _bind = f(a);
    if (_bind === undefined) {
      return 1;
    } else {
      const _Some = _bind;
      const _b = _Some;
      return yield_(_b);
    }
  });
}
function moonbitlang$core$builtin$$Add$op_add$131$(self, other) {
  return (_p) => self(_p) === 1 && other(_p) === 1 ? 1 : 0;
}
function moonbitlang$core$builtin$$Iter$to_array$15$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$15$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$to_array$118$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$118$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$to_array$45$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$45$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$collect$2$(self) {
  const result = [];
  self((_p) => {
    moonbitlang$core$array$$Array$push$2$(result, _p);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$collect$6$(self) {
  const result = [];
  self((_p) => {
    moonbitlang$core$array$$Array$push$6$(result, _p);
    return 1;
  });
  return result;
}
function moonbitlang$core$queue$$new$19$() {
  return { length: 0, first: undefined, last: undefined };
}
function moonbitlang$core$queue$$new$13$() {
  return { length: 0, first: undefined, last: undefined };
}
function moonbitlang$core$queue$$from_array$13$(arr) {
  if (arr.length > 0) {
    const length = arr.length;
    const last = { content: moonbitlang$core$array$$Array$op_get$13$(arr, length - 1 | 0), next: undefined };
    let first;
    let _tmp = length - 2 | 0;
    let _tmp$2 = last;
    while (true) {
      const i = _tmp;
      const x = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = i - 1 | 0;
        const _tmp$4 = { content: moonbitlang$core$array$$Array$op_get$13$(arr, i), next: x };
        _tmp = _tmp$3;
        _tmp$2 = _tmp$4;
        continue;
      } else {
        first = x;
        break;
      }
    }
    return { length: length, first: first, last: last };
  } else {
    return moonbitlang$core$queue$$new$13$();
  }
}
function moonbitlang$core$queue$$T$clear$19$(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function moonbitlang$core$queue$$T$clear$13$(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function moonbitlang$core$queue$$T$push$13$(self, x) {
  const cell = { content: x, next: undefined };
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function moonbitlang$core$queue$$T$push$19$(self, x) {
  const cell = { content: x, next: undefined };
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function moonbitlang$core$queue$$T$unsafe_pop$13$(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return moonbitlang$core$abort$$abort$13$("Queue is empty");
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      moonbitlang$core$queue$$T$clear$13$(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function moonbitlang$core$queue$$T$pop$19$(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      moonbitlang$core$queue$$T$clear$19$(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function moonbitlang$core$string$$String$view(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    const _o = _Some;
    end_offset$2 = _o;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$10$("Invalid index for View");
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (56320 <= c && c <= 57343) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (55296 <= c && c <= 56319) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$abort$$abort$12$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    const _o = _Some;
    end_offset$2 = _o;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i, start_offset, end_offset$2);
}
function moonbitlang$core$string$$String$char_length_eq(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    const _o = _Some;
    end_offset$2 = _o;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$abort$$abort$1$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    const _o = _Some;
    end_offset$2 = _o;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$abort$$abort$1$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$builtin$$Show$to_string$10$(self) {
  return moonbitlang$core$string$$String$substring(self.str, self.start, self.end);
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$builtin$$Eq$op_equal$10$(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = self.str;
        const _tmp$3 = self.start + i | 0;
        const _tmp$4 = _tmp$2.charCodeAt(_tmp$3);
        const _tmp$5 = other.str;
        const _tmp$6 = other.start + i | 0;
        if (_tmp$4 === _tmp$5.charCodeAt(_tmp$6)) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$String$from_array(chars) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(Math.imul(chars.length, 4) | 0);
  const _len = chars.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const c = chars[_i];
      moonbitlang$core$builtin$$Logger$write_char$24$(buf, c);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function moonbitlang$core$builtin$$Compare$compare$2$(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const order = $compare_int(self.charCodeAt(i), other.charCodeAt(i));
        if (order !== 0) {
          return order;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function moonbitlang$core$string$$String$iter(self) {
  const _p = (yield_) => {
    const len = self.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < len) {
        const c1 = self.charCodeAt(index);
        if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < len) {
          const _tmp$2 = index + 1 | 0;
          const c2 = self.charCodeAt(_tmp$2);
          if (56320 <= c2 && c2 <= 57343) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$to_array(self) {
  const _bind = moonbitlang$core$string$$String$iter(self);
  const _bind$2 = moonbitlang$core$array$$Array$new$5$(self.length);
  const _acc = { val: _bind$2 };
  _bind((_p) => {
    const rv = _acc.val;
    moonbitlang$core$array$$Array$push$5$(rv, _p);
    _acc.val = rv;
    return 1;
  });
  return _acc.val;
}
function moonbitlang$core$string$$String$char_at(self, offset) {
  return offset >= 0 && offset < self.length ? moonbitlang$core$string$$String$unsafe_char_at(self, offset) : moonbitlang$core$abort$$abort$5$("offset out of bounds");
}
function moonbitlang$core$string$$StringView$contains_char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 <= 65535) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          const _tmp$2 = self.str;
          const _tmp$3 = self.start + i | 0;
          if (_tmp$2.charCodeAt(_tmp$3) === c$2) {
            return true;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (len >= 2) {
        const adj = c$2 - 65536 | 0;
        const high = 55296 + (adj >> 10) | 0;
        const low = 56320 + (adj & 1023) | 0;
        let i = 0;
        while (true) {
          if (i < (len - 1 | 0)) {
            const _p = i;
            const _tmp = self.str;
            const _tmp$2 = self.start + _p | 0;
            if (_tmp.charCodeAt(_tmp$2) === high) {
              i = i + 1 | 0;
              const _p$2 = i;
              const _tmp$3 = self.str;
              const _tmp$4 = self.start + _p$2 | 0;
              if (_tmp$3.charCodeAt(_tmp$4) === low) {
                return true;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$StringView$trim_start(self, char_set) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
      const _tmp$2 = _param.str;
      const _bind = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = _param.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _tmp$4 = _tmp$3;
      const _x = { str: _tmp$2, start: _tmp$4, end: _param.end };
      if (moonbitlang$core$string$$StringView$contains_char(char_set, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim_end(self, char_set) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, -1, _param.start, _param.end));
      const _x = { str: _param.str, start: _param.start, end: moonbitlang$core$string$$String$offset_of_nth_char(_param.str, -1, _param.start, _param.end) };
      if (moonbitlang$core$string$$StringView$contains_char(char_set, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim(self, char_set) {
  return moonbitlang$core$string$$StringView$trim_end(moonbitlang$core$string$$StringView$trim_start(self, char_set), char_set);
}
function moonbitlang$core$string$$String$trim(self, char_set) {
  return moonbitlang$core$string$$StringView$trim({ str: self, start: 0, end: self.length }, char_set);
}
function moonbitlang$lex$lib$util$diet$$Tree$size$0$(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Node = self;
    const _size = _Node._2;
    return _size;
  }
}
function moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, l, r) {
  const size = (moonbitlang$lex$lib$util$diet$$Tree$size$0$(l) + moonbitlang$lex$lib$util$diet$$Tree$size$0$(r) | 0) + 1 | 0;
  return new $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Node$0$(l, r, size, min, max);
}
function moonbitlang$lex$lib$util$diet$$double_l$0$(min, max, l, r) {
  _L: {
    if (r.$tag === 1) {
      const _Node = r;
      const _x = _Node._0;
      if (_x.$tag === 1) {
        const _Node$2 = _x;
        return moonbitlang$lex$lib$util$diet$$make_node$0$(_Node$2._3, _Node$2._4, moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, l, _Node$2._0), moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, _Node$2._1, _Node._1));
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return $panic();
}
function moonbitlang$lex$lib$util$diet$$double_r$0$(min, max, l, r) {
  _L: {
    if (l.$tag === 1) {
      const _Node = l;
      const _x = _Node._1;
      if (_x.$tag === 1) {
        const _Node$2 = _x;
        return moonbitlang$lex$lib$util$diet$$make_node$0$(_Node$2._3, _Node$2._4, moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, _Node._0, _Node$2._0), moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, _Node$2._1, r));
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return $panic();
}
function moonbitlang$lex$lib$util$diet$$single_l$0$(min, max, l, r) {
  if (r.$tag === 1) {
    const _Node = r;
    return moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, l, _Node._0), _Node._1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$util$diet$$single_r$0$(min, max, l, r) {
  if (l.$tag === 1) {
    const _Node = l;
    return moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, _Node._0, moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, _Node._1, r));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$util$diet$$balance$0$(min, max, l, r) {
  const l_size = moonbitlang$lex$lib$util$diet$$Tree$size$0$(l);
  const r_size = moonbitlang$lex$lib$util$diet$$Tree$size$0$(r);
  if ((l_size + r_size | 0) <= 1) {
    return moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, l, r);
  } else {
    if ((r_size + 1 | 0) > (Math.imul(3, l_size + 1 | 0) | 0)) {
      if (r.$tag === 1) {
        const _Node = r;
        return (moonbitlang$lex$lib$util$diet$$Tree$size$0$(_Node._0) + 1 | 0) < (Math.imul(2, moonbitlang$lex$lib$util$diet$$Tree$size$0$(_Node._1) + 1 | 0) | 0) ? moonbitlang$lex$lib$util$diet$$single_l$0$(min, max, l, _Node) : moonbitlang$lex$lib$util$diet$$double_l$0$(min, max, l, _Node);
      } else {
        return $panic();
      }
    } else {
      if ((l_size + 1 | 0) > (Math.imul(3, r_size + 1 | 0) | 0)) {
        if (l.$tag === 1) {
          const _Node = l;
          return (moonbitlang$lex$lib$util$diet$$Tree$size$0$(_Node._1) + 1 | 0) < (Math.imul(2, moonbitlang$lex$lib$util$diet$$Tree$size$0$(_Node._0) + 1 | 0) | 0) ? moonbitlang$lex$lib$util$diet$$single_r$0$(min, max, _Node, r) : moonbitlang$lex$lib$util$diet$$double_r$0$(min, max, _Node, r);
        } else {
          return $panic();
        }
      } else {
        return moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, l, r);
      }
    }
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$slice_from$0$(self, x) {
  let _tmp = self;
  let _tmp$2 = x;
  while (true) {
    const self$2 = _tmp;
    const x$2 = _tmp$2;
    if (self$2.$tag === 0) {
      return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
    } else {
      const _Node = self$2;
      if (moonbitlang$core$builtin$$op_lt$0$(x$2, _Node._3)) {
        return moonbitlang$lex$lib$util$diet$$balance$0$(_Node._3, _Node._4, moonbitlang$lex$lib$util$diet$$Tree$slice_from$0$(_Node._0, x$2), _Node._1);
      } else {
        if (moonbitlang$core$builtin$$op_gt$0$(x$2, _Node._4)) {
          _tmp = _Node._1;
          continue;
        } else {
          return moonbitlang$lex$lib$util$diet$$balance$0$(x$2, _Node._4, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$, _Node._1);
        }
      }
    }
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$slice_until$0$(self, x) {
  let _tmp = self;
  let _tmp$2 = x;
  while (true) {
    const self$2 = _tmp;
    const x$2 = _tmp$2;
    if (self$2.$tag === 0) {
      return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
    } else {
      const _Node = self$2;
      if (moonbitlang$core$builtin$$op_gt$0$(x$2, _Node._4)) {
        return moonbitlang$lex$lib$util$diet$$balance$0$(_Node._3, _Node._4, _Node._0, moonbitlang$lex$lib$util$diet$$Tree$slice_until$0$(_Node._1, x$2));
      } else {
        if (moonbitlang$core$builtin$$op_lt$0$(x$2, _Node._3)) {
          _tmp = _Node._0;
          continue;
        } else {
          return moonbitlang$lex$lib$util$diet$$balance$0$(_Node._3, x$2, _Node._0, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$);
        }
      }
    }
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$slice_before$0$(self, x) {
  const _p = -1;
  if (x === _p) {
    return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
  } else {
    return moonbitlang$lex$lib$util$diet$$Tree$slice_until$0$(self, moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$pred$0$(x));
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$slice_after$0$(self, x) {
  const _p = 1114111;
  if (x === _p) {
    return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
  } else {
    return moonbitlang$lex$lib$util$diet$$Tree$slice_from$0$(self, moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$succ$0$(x));
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$slice$0$(self, min, max) {
  if (min === undefined) {
    if (max === undefined) {
      return $panic();
    } else {
      const _Some = max;
      const _max = _Some;
      return moonbitlang$lex$lib$util$diet$$Tree$slice_until$0$(self, _max);
    }
  } else {
    const _Some = min;
    const _min = _Some;
    if (max === undefined) {
      return moonbitlang$lex$lib$util$diet$$Tree$slice_from$0$(self, _min);
    } else {
      const _Some$2 = max;
      const _max = _Some$2;
      return moonbitlang$lex$lib$util$diet$$Tree$slice_until$0$(moonbitlang$lex$lib$util$diet$$Tree$slice_from$0$(self, _min), _max);
    }
  }
}
function moonbitlang$lex$lib$util$diet$$InorderIterator$move_left$0$(self, node) {
  let _tmp = node;
  while (true) {
    const _param = _tmp;
    if (_param.$tag === 0) {
      return;
    } else {
      const _Node = _param;
      const _left = _Node._0;
      moonbitlang$core$array$$Array$push$121$(self, _Node);
      _tmp = _left;
      continue;
    }
  }
}
function moonbitlang$lex$lib$util$diet$$InorderIterator$new$0$(root) {
  const it = [];
  moonbitlang$lex$lib$util$diet$$InorderIterator$move_left$0$(it, root);
  return it;
}
function moonbitlang$lex$lib$util$diet$$InorderIterator$next$0$(self) {
  const _bind = moonbitlang$core$array$$Array$pop$121$(self);
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _curr = _Some;
    if (_curr.$tag === 1) {
      const _Node = _curr;
      const _min = _Node._3;
      const _max = _Node._4;
      const _right = _Node._1;
      moonbitlang$lex$lib$util$diet$$InorderIterator$move_left$0$(self, _right);
      return { _0: _min, _1: _max };
    } else {
      return $panic();
    }
  }
}
function moonbitlang$lex$lib$util$diet$$split_leftmost$0$(t) {
  if (t.$tag === 0) {
    return $panic();
  } else {
    const _Node = t;
    const _x = _Node._0;
    if (_x.$tag === 0) {
      const _right = _Node._1;
      const _min = _Node._3;
      const _max = _Node._4;
      return { _0: { _0: _min, _1: _max }, _1: _right };
    } else {
      const _bind = moonbitlang$lex$lib$util$diet$$split_leftmost$0$(_Node._0);
      const _x$2 = _bind._0;
      const _min = _x$2._0;
      const _max = _x$2._1;
      const _l = _bind._1;
      return { _0: { _0: _min, _1: _max }, _1: moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, _l, _Node._1) };
    }
  }
}
function moonbitlang$lex$lib$util$diet$$split_rightmost$0$(t) {
  if (t.$tag === 0) {
    return $panic();
  } else {
    const _Node = t;
    const _left = _Node._0;
    const _x = _Node._1;
    if (_x.$tag === 0) {
      const _min = _Node._3;
      const _max = _Node._4;
      return { _0: { _0: _min, _1: _max }, _1: _left };
    } else {
      const _bind = moonbitlang$lex$lib$util$diet$$split_rightmost$0$(_Node._1);
      const _x$2 = _bind._0;
      const _min = _x$2._0;
      const _max = _x$2._1;
      const _r = _bind._1;
      return { _0: { _0: _min, _1: _max }, _1: moonbitlang$lex$lib$util$diet$$make_node$0$(_Node._3, _Node._4, _Node._0, _r) };
    }
  }
}
function moonbitlang$lex$lib$util$diet$$singleton$0$(x) {
  return moonbitlang$lex$lib$util$diet$$make_node$0$(x, x, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$);
}
function moonbitlang$lex$lib$util$diet$$interval$0$(min, max) {
  return moonbitlang$lex$lib$util$diet$$make_node$0$(min, max, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$, $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$);
}
function moonbitlang$lex$lib$util$diet$$union$0$(t1, t2) {
  let t;
  _L: {
    if (t1.$tag === 0) {
      if (t2.$tag === 0) {
        return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
      } else {
        const _Node = t2;
        t = _Node;
        break _L;
      }
    } else {
      const _Node = t1;
      if (t2.$tag === 0) {
        t = _Node;
        break _L;
      } else {
        const _Node$2 = t2;
        let t1$2;
        let t2$2;
        _L$2: {
          if (_Node._2 >= _Node$2._2) {
            t1$2 = _Node;
            t2$2 = _Node$2;
            break _L$2;
          } else {
            t1$2 = _Node$2;
            t2$2 = _Node;
            break _L$2;
          }
        }
        return moonbitlang$lex$lib$util$diet$$union_aux$0$(t1$2, t2$2);
      }
    }
  }
  return t;
}
function moonbitlang$lex$lib$util$diet$$union_aux$0$(t1, t2) {
  if (t1.$tag === 1) {
    const _Node = t1;
    if (t2.$tag === 1) {
      const _Node$2 = t2;
      const l1 = _Node._0;
      const r1 = _Node._1;
      const l2 = moonbitlang$lex$lib$util$diet$$Tree$slice_before$0$(_Node$2, _Node._3);
      const r2 = moonbitlang$lex$lib$util$diet$$Tree$slice_after$0$(_Node$2, _Node._4);
      let _bind;
      const _p = _Node._3;
      const _p$2 = -1;
      if (_p === _p$2) {
        _bind = { _0: _Node._3, _1: $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$ };
      } else {
        const l = moonbitlang$lex$lib$util$diet$$union$0$(l1, l2);
        if (l.$tag === 0) {
          _bind = { _0: _Node._3, _1: $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$ };
        } else {
          const _bind$2 = moonbitlang$lex$lib$util$diet$$split_rightmost$0$(l);
          const _x = _bind$2._0;
          const _min = _x._0;
          const _max = _x._1;
          const _l3 = _bind$2._1;
          let _tmp;
          if (moonbitlang$core$builtin$$op_lt$0$(_max, 1114111)) {
            const _p$3 = moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$succ$0$(_max);
            const _p$4 = _Node._3;
            _tmp = _p$3 === _p$4;
          } else {
            _tmp = false;
          }
          if (_tmp) {
            _bind = { _0: _min, _1: _l3 };
          } else {
            _bind = { _0: _Node._3, _1: l };
          }
        }
      }
      const _min = _bind._0;
      const _l = _bind._1;
      let _bind$2;
      const _p$3 = _Node._4;
      const _p$4 = 1114111;
      if (_p$3 === _p$4) {
        _bind$2 = { _0: _Node._4, _1: $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$ };
      } else {
        const r = moonbitlang$lex$lib$util$diet$$union$0$(r1, r2);
        if (r.$tag === 0) {
          _bind$2 = { _0: _Node._4, _1: $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$ };
        } else {
          const _bind$3 = moonbitlang$lex$lib$util$diet$$split_leftmost$0$(r);
          const _x = _bind$3._0;
          const _min$2 = _x._0;
          const _max = _x._1;
          const _r3 = _bind$3._1;
          let _tmp;
          if (moonbitlang$core$builtin$$op_gt$0$(_min$2, -1)) {
            const _p$5 = moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$pred$0$(_min$2);
            const _p$6 = _Node._4;
            _tmp = _p$5 === _p$6;
          } else {
            _tmp = false;
          }
          if (_tmp) {
            _bind$2 = { _0: _max, _1: _r3 };
          } else {
            _bind$2 = { _0: _Node._4, _1: r };
          }
        }
      }
      const _max = _bind$2._0;
      const _r = _bind$2._1;
      return moonbitlang$lex$lib$util$diet$$balance$0$(_min, _max, _l, _r);
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$is_empty$0$(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function moonbitlang$lex$lib$util$diet$$concat$0$(l, r) {
  if (l.$tag === 0) {
    return r;
  } else {
    if (r.$tag === 0) {
      return l;
    } else {
      const _Node = l;
      const _Node$2 = r;
      const _bind = moonbitlang$lex$lib$util$diet$$split_leftmost$0$(_Node$2);
      const _x = _bind._0;
      const _min = _x._0;
      const _max = _x._1;
      const _r = _bind._1;
      return moonbitlang$lex$lib$util$diet$$balance$0$(_min, _max, _Node, _r);
    }
  }
}
function moonbitlang$lex$lib$util$diet$$intersection$0$(t1, t2) {
  _L: {
    if (t1.$tag === 0) {
      break _L;
    } else {
      if (t2.$tag === 0) {
        break _L;
      } else {
        const _Node = t1;
        const _Node$2 = t2;
        let t1$2;
        let t2$2;
        _L$2: {
          if (_Node._2 >= _Node$2._2) {
            t1$2 = _Node;
            t2$2 = _Node$2;
            break _L$2;
          } else {
            t1$2 = _Node$2;
            t2$2 = _Node;
            break _L$2;
          }
        }
        return moonbitlang$lex$lib$util$diet$$intersection_aux$0$(t1$2, t2$2);
      }
    }
  }
  return $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
}
function moonbitlang$lex$lib$util$diet$$intersection_aux$0$(t1, t2) {
  if (t1.$tag === 1) {
    const _Node = t1;
    if (t2.$tag === 1) {
      const _Node$2 = t2;
      const l1 = _Node._0;
      const r1 = _Node._1;
      const l2 = moonbitlang$lex$lib$util$diet$$Tree$slice_before$0$(_Node$2, _Node._3);
      const r2 = moonbitlang$lex$lib$util$diet$$Tree$slice_after$0$(_Node$2, _Node._4);
      const l = moonbitlang$lex$lib$util$diet$$intersection$0$(l1, l2);
      const r = moonbitlang$lex$lib$util$diet$$intersection$0$(r1, r2);
      const m = moonbitlang$lex$lib$util$diet$$Tree$slice$0$(_Node$2, _Node._3, _Node._4);
      return moonbitlang$lex$lib$util$diet$$concat$0$(moonbitlang$lex$lib$util$diet$$concat$0$(l, m), r);
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$util$diet$$complement_aux$0$(min, max, t) {
  if (t.$tag === 0) {
    return moonbitlang$lex$lib$util$diet$$interval$0$(min, max);
  } else {
    const _Node = t;
    let l;
    const _p = _Node._3;
    const _p$2 = -1;
    if (_p === _p$2) {
      l = $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
    } else {
      l = moonbitlang$lex$lib$util$diet$$complement_aux$0$(min, moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$pred$0$(_Node._3), _Node._0);
    }
    let r;
    const _p$3 = _Node._4;
    const _p$4 = 1114111;
    if (_p$3 === _p$4) {
      r = $64$moonbitlang$47$lex$47$lib$47$util$47$diet$46$Tree$Empty$0$;
    } else {
      r = moonbitlang$lex$lib$util$diet$$complement_aux$0$(moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$succ$0$(_Node._4), max, _Node._1);
    }
    return moonbitlang$lex$lib$util$diet$$concat$0$(l, r);
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$complement$0$(self) {
  return moonbitlang$lex$lib$util$diet$$complement_aux$0$(-1, 1114111, self);
}
function moonbitlang$lex$lib$util$diet$$difference$0$(t1, t2) {
  return moonbitlang$lex$lib$util$diet$$intersection$0$(t1, moonbitlang$lex$lib$util$diet$$Tree$complement$0$(t2));
}
function moonbitlang$core$builtin$$Eq$op_equal$132$(self, other) {
  const iter = moonbitlang$lex$lib$util$diet$$InorderIterator$new$0$(self);
  const iter1 = moonbitlang$lex$lib$util$diet$$InorderIterator$new$0$(other);
  let _tmp = moonbitlang$lex$lib$util$diet$$InorderIterator$next$0$(iter);
  let _tmp$2 = moonbitlang$lex$lib$util$diet$$InorderIterator$next$0$(iter1);
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_0 === undefined) {
      return _param_1 === undefined;
    } else {
      const _Some = _param_0;
      const _a = _Some;
      if (_param_1 === undefined) {
        return false;
      } else {
        const _Some$2 = _param_1;
        const _b = _Some$2;
        if (moonbitlang$core$builtin$$Eq$op_equal$90$(_a, _b)) {
          const _tmp$3 = moonbitlang$lex$lib$util$diet$$InorderIterator$next$0$(iter);
          const _tmp$4 = moonbitlang$lex$lib$util$diet$$InorderIterator$next$0$(iter1);
          _tmp = _tmp$3;
          _tmp$2 = _tmp$4;
          continue;
        } else {
          return false;
        }
      }
    }
  }
}
function moonbitlang$lex$lib$util$diet$$Tree$iter_intervals$0$(self) {
  const _p = (yield_) => {
    if (self.$tag === 0) {
      return 1;
    } else {
      const _Node = self;
      const _bind = moonbitlang$core$builtin$$Iter$run$129$(moonbitlang$lex$lib$util$diet$$Tree$iter_intervals$0$(_Node._0), yield_);
      if (_bind === 1) {
        const _bind$2 = yield_({ _0: _Node._3, _1: _Node._4 });
        if (_bind$2 === 1) {
          const _bind$3 = moonbitlang$core$builtin$$Iter$run$129$(moonbitlang$lex$lib$util$diet$$Tree$iter_intervals$0$(_Node._1), yield_);
          if (_bind$3 === 1) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Hash$hash_combine$132$(self, hasher) {
  const _bind = moonbitlang$lex$lib$util$diet$$Tree$iter_intervals$0$(self);
  _bind((interval) => {
    moonbitlang$core$builtin$$Hash$hash_combine$90$(interval, hasher);
    return 1;
  });
}
function moonbitlang$core$builtin$$Hash$hash_combine$0$(_x_68, _x_69) {
  moonbitlang$core$builtin$$Hash$hash_combine$6$(_x_68, _x_69);
}
function moonbitlang$core$builtin$$Eq$op_equal$91$(_x_58, _x_59) {
  return moonbitlang$core$builtin$$Eq$op_equal$132$(_x_58, _x_59);
}
function moonbitlang$core$builtin$$Hash$hash_combine$91$(_x_50, _x_51) {
  moonbitlang$core$builtin$$Hash$hash_combine$132$(_x_50, _x_51);
}
function moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$pred$0$(self) {
  return self > -1 ? self - 1 | 0 : $panic();
}
function moonbitlang$lex$lib$util$bounded_enum$$BoundedEnum$succ$0$(self) {
  return self < 1114111 ? self + 1 | 0 : $panic();
}
function moonbitlang$lex$lib$util$eof_char_set$$EofChar$repr(self) {
  return self === -1 ? $64$moonbitlang$47$lex$47$lib$47$util$47$eof_char_set$46$EofCharRepr$Eof : new $64$moonbitlang$47$lex$47$lib$47$util$47$eof_char_set$46$EofCharRepr$Char(self);
}
function moonbitlang$lex$lib$util$eof_char_set$$range(min, max) {
  return moonbitlang$lex$lib$util$diet$$interval$0$(min, max);
}
function moonbitlang$lex$lib$util$eof_char_set$$singleton(x) {
  return moonbitlang$lex$lib$util$diet$$singleton$0$(x);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$complement(self) {
  return moonbitlang$lex$lib$util$diet$$Tree$complement$0$(self);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$negated(self) {
  return moonbitlang$core$builtin$$Sub$op_sub$91$(moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$complement(self), moonbitlang$lex$lib$util$eof_char_set$$eof);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$is_empty(self) {
  return moonbitlang$lex$lib$util$diet$$Tree$is_empty$0$(self);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$union(self, other) {
  return moonbitlang$lex$lib$util$diet$$union$0$(self, other);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$intersection(self, other) {
  return moonbitlang$lex$lib$util$diet$$intersection$0$(self, other);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$difference(self, other) {
  return moonbitlang$lex$lib$util$diet$$difference$0$(self, other);
}
function moonbitlang$core$builtin$$Add$op_add$91$(self, other) {
  return moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$union(self, other);
}
function moonbitlang$core$builtin$$Sub$op_sub$91$(self, other) {
  return moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$difference(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$91$(self, other) {
  return moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$intersection(self, other);
}
function moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$iter_ranges(self) {
  return moonbitlang$lex$lib$util$diet$$Tree$iter_intervals$0$(self);
}
function moonbitlang$lex$lib$type$$Regex$get_capture_names_rec(self) {
  let _tmp = self;
  _L: while (true) {
    const self$2 = _tmp;
    let re1;
    let re2;
    _L$2: {
      let re;
      _L$3: {
        switch (self$2.$tag) {
          case 9: {
            const _Capture = self$2;
            const _re = _Capture._0;
            const _name = _Capture._1;
            return moonbitlang$core$builtin$$Add$op_add$131$(moonbitlang$lex$lib$type$$Regex$get_capture_names_rec(_re), moonbitlang$core$builtin$$Iter$singleton$2$(_name));
          }
          case 5: {
            const _Repetition = self$2;
            const _re$2 = _Repetition._0;
            re = _re$2;
            break _L$3;
          }
          case 6: {
            const _Option = self$2;
            const _re$3 = _Option._0;
            re = _re$3;
            break _L$3;
          }
          case 7: {
            const _Alter = self$2;
            const _re1 = _Alter._0;
            const _re2 = _Alter._1;
            re1 = _re1;
            re2 = _re2;
            break _L$2;
          }
          case 8: {
            const _Concat = self$2;
            const _re1$2 = _Concat._0;
            const _re2$2 = _Concat._1;
            re1 = _re1$2;
            re2 = _re2$2;
            break _L$2;
          }
          default: {
            return moonbitlang$core$builtin$$Iter$empty$2$();
          }
        }
      }
      _tmp = re;
      continue;
    }
    const _bind = moonbitlang$lex$lib$type$$Regex$get_capture_names_rec(re1);
    const _bind$2 = moonbitlang$lex$lib$type$$Regex$get_capture_names_rec(re2);
    return (_p) => _bind(_p) === 1 && _bind$2(_p) === 1 ? 1 : 0;
  }
}
function moonbitlang$lex$lib$type$$Regex$get_capture_names(self) {
  const result = moonbitlang$core$builtin$$Iter$collect$2$(moonbitlang$lex$lib$type$$Regex$get_capture_names_rec(self));
  moonbitlang$core$array$$Array$sort$2$(result);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < result.length) {
      if (moonbitlang$core$array$$Array$op_get$2$(result, i - 1 | 0) === moonbitlang$core$array$$Array$op_get$2$(result, i)) {
        moonbitlang$core$abort$$abort$1$("duplicated capture var");
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, re) {
  let _tmp = re;
  _L: while (true) {
    const re$2 = _tmp;
    _L$2: {
      switch (re$2.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          const _Repetition = re$2;
          const _re = _Repetition._0;
          return new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Repetition(moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re));
        }
        case 6: {
          const _Option = re$2;
          const _re$2 = _Option._0;
          return new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Option(moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re$2));
        }
        case 7: {
          const _Alter = re$2;
          const _re1 = _Alter._0;
          const _re2 = _Alter._1;
          return new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Alter(moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re1), moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re2));
        }
        case 8: {
          const _Concat = re$2;
          const _re1$2 = _Concat._0;
          const _re2$2 = _Concat._1;
          return new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Concat(moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re1$2), moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re2$2));
        }
        case 9: {
          const _Capture = re$2;
          const _re$3 = _Capture._0;
          const _name = _Capture._1;
          return new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Capture(moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re$3), _name);
        }
        default: {
          const _Named = re$2;
          const _name$2 = _Named._0;
          const _bind = moonbitlang$core$builtin$$Map$get$92$(named_regexes, _name$2);
          if (_bind === undefined) {
            return moonbitlang$core$abort$$abort$4$("Named regex not found");
          } else {
            const _Some = _bind;
            const _re$4 = _Some;
            _tmp = _re$4;
            continue _L;
          }
        }
      }
    }
    return re$2;
  }
}
function moonbitlang$lex$lib$type$$Lex$eliminate_named(self) {
  const _p = self.named_regexes;
  if (!(_p.length === 0)) {
    const named_regexes = moonbitlang$core$builtin$$Map$from_array$92$(self.named_regexes);
    const _tmp = self.header;
    const _tmp$2 = [];
    const _p$2 = self.rules;
    const _p$3 = new Array(_p$2.length);
    const _p$4 = _p$2.length;
    let _tmp$3 = 0;
    while (true) {
      const _p$5 = _tmp$3;
      if (_p$5 < _p$4) {
        const _p$6 = _p$2[_p$5];
        const rule = _p$6;
        const _tmp$4 = rule.name;
        const _tmp$5 = rule.return_type;
        const _tmp$6 = rule.params;
        const _p$7 = rule.patterns;
        const _p$8 = new Array(_p$7.length);
        const _p$9 = _p$7.length;
        let _tmp$7 = 0;
        while (true) {
          const _p$10 = _tmp$7;
          if (_p$10 < _p$9) {
            const _p$11 = _p$7[_p$10];
            const pattern = _p$11;
            const _re = pattern._0;
            const _code = pattern._1;
            _p$8[_p$10] = { _0: moonbitlang$lex$lib$type$$eliminate_named$46$eliminate_named_regex$124$3(named_regexes, _re), _1: _code };
            _tmp$7 = _p$10 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _p$3[_p$5] = { name: _tmp$4, return_type: _tmp$5, params: _tmp$6, patterns: _p$8 };
        _tmp$3 = _p$5 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return { header: _tmp, named_regexes: _tmp$2, rules: _p$3, trailer: self.trailer };
  } else {
    return self;
  }
}
function moonbitlang$core$builtin$$Show$output$82$(_x_616, _x_617) {
  const _UnexpectedToken = _x_616;
  const _$42$arg_618 = _UnexpectedToken._0;
  const _$42$arg_619 = _UnexpectedToken._1;
  const _$42$arg_620 = _UnexpectedToken._2;
  _x_617.method_0(_x_617.self, "UnexpectedToken(");
  moonbitlang$core$builtin$$Logger$write_object$3$(_x_617, _$42$arg_618);
  _x_617.method_0(_x_617.self, ", ");
  const _$42$x0_621 = _$42$arg_619._0;
  const _$42$x1_622 = _$42$arg_619._1;
  _x_617.method_0(_x_617.self, "(");
  moonbitlang$core$builtin$$Logger$write_object$1$(_x_617, _$42$x0_621);
  _x_617.method_0(_x_617.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$1$(_x_617, _$42$x1_622);
  _x_617.method_0(_x_617.self, ")");
  const _self = _x_617;
  _self.method_0(_self.self, ", ");
  moonbitlang$core$builtin$$Logger$write_object$65$(_self, _$42$arg_620);
  _self.method_0(_self.self, ")");
}
function moonbitlang$core$builtin$$Show$output$3$(_x_596, _x_597) {
  switch (_x_596.$tag) {
    case 0: {
      _x_597.method_0(_x_597.self, "EOI");
      return;
    }
    case 1: {
      _x_597.method_0(_x_597.self, "EOF");
      return;
    }
    case 2: {
      _x_597.method_0(_x_597.self, "PARSE_LBRACE");
      return;
    }
    case 3: {
      _x_597.method_0(_x_597.self, "LET");
      return;
    }
    case 4: {
      _x_597.method_0(_x_597.self, "AS");
      return;
    }
    case 5: {
      _x_597.method_0(_x_597.self, "UNDERSCORE");
      return;
    }
    case 6: {
      _x_597.method_0(_x_597.self, "RBRACE");
      return;
    }
    case 7: {
      _x_597.method_0(_x_597.self, "LPAREN");
      return;
    }
    case 8: {
      _x_597.method_0(_x_597.self, "RPAREN");
      return;
    }
    case 9: {
      _x_597.method_0(_x_597.self, "LBRACKET");
      return;
    }
    case 10: {
      _x_597.method_0(_x_597.self, "RBRACKET");
      return;
    }
    case 11: {
      _x_597.method_0(_x_597.self, "EQ");
      return;
    }
    case 12: {
      _x_597.method_0(_x_597.self, "SEMICOLON");
      return;
    }
    case 13: {
      _x_597.method_0(_x_597.self, "FAT_ARROW");
      return;
    }
    case 14: {
      _x_597.method_0(_x_597.self, "BAR");
      return;
    }
    case 15: {
      _x_597.method_0(_x_597.self, "STAR");
      return;
    }
    case 16: {
      _x_597.method_0(_x_597.self, "PLUS");
      return;
    }
    case 17: {
      _x_597.method_0(_x_597.self, "QUESTION");
      return;
    }
    case 18: {
      _x_597.method_0(_x_597.self, "MINUS");
      return;
    }
    case 19: {
      _x_597.method_0(_x_597.self, "CARET");
      return;
    }
    case 20: {
      const _RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE = _x_596;
      const _$42$arg_598 = _RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE._0;
      _x_597.method_0(_x_597.self, "RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE(");
      const _$42$x0_599 = _$42$arg_598._0;
      const _$42$x1_600 = _$42$arg_598._1;
      const _$42$x2_601 = _$42$arg_598._2;
      _x_597.method_0(_x_597.self, "(");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$x0_599);
      _x_597.method_0(_x_597.self, ", ");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$x1_600);
      _x_597.method_0(_x_597.self, ", ");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$x2_601);
      _x_597.method_0(_x_597.self, ")");
      _x_597.method_0(_x_597.self, ")");
      return;
    }
    case 21: {
      const _LBRACE_CODE_RBRACE = _x_596;
      const _$42$arg_602 = _LBRACE_CODE_RBRACE._0;
      _x_597.method_0(_x_597.self, "LBRACE_CODE_RBRACE(");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$arg_602);
      _x_597.method_0(_x_597.self, ")");
      return;
    }
    case 22: {
      const _LC_IDENT = _x_596;
      const _$42$arg_603 = _LC_IDENT._0;
      _x_597.method_0(_x_597.self, "LC_IDENT(");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$arg_603);
      _x_597.method_0(_x_597.self, ")");
      return;
    }
    case 23: {
      const _CHAR = _x_596;
      const _$42$arg_604 = _CHAR._0;
      _x_597.method_0(_x_597.self, "CHAR(");
      moonbitlang$core$builtin$$Logger$write_object$5$(_x_597, _$42$arg_604);
      _x_597.method_0(_x_597.self, ")");
      return;
    }
    default: {
      const _STRING = _x_596;
      const _$42$arg_605 = _STRING._0;
      _x_597.method_0(_x_597.self, "STRING(");
      moonbitlang$core$builtin$$Logger$write_object$2$(_x_597, _$42$arg_605);
      _x_597.method_0(_x_597.self, ")");
      return;
    }
  }
}
function moonbitlang$lex$lib$parser$$Lexbuf$from_string(content) {
  return { content: content, pos: 0 };
}
function moonbitlang$lex$lib$parser$$Lexbuf$next(self) {
  if (self.pos < self.content.length) {
    const _tmp = self.content;
    const _tmp$2 = self.pos;
    $bound_check(_tmp, _tmp$2);
    const ch = _tmp.charCodeAt(_tmp$2);
    self.pos = self.pos + 1 | 0;
    return ch;
  } else {
    return -1;
  }
}
function moonbitlang$lex$lib$parser$$Lexbuf$substring(self, start, end) {
  return moonbitlang$core$string$$String$substring(self.content, start, end);
}
function moonbitlang$lex$lib$parser$$LexEngine$run(self, lexbuf) {
  let state = 0;
  let tagState = [];
  let longest_match = undefined;
  const _arr = self.start_tags;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const tag = _arr[_i];
      while (true) {
        if (tagState.length <= tag) {
          moonbitlang$core$array$$Array$push$23$(tagState, []);
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(tagState, tag), lexbuf.pos);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (state !== -1) {
      const _bind = moonbitlang$core$array$$Array$op_get$22$(self.end_nodes, state);
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _t = _Some;
        longest_match = { _0: _t._0, _1: lexbuf.pos, _2: state, _3: tagState };
      }
      const _bind$2 = moonbitlang$lex$lib$parser$$Lexbuf$next(lexbuf);
      let b;
      if (_bind$2 === -1) {
        b = -1;
      } else {
        const _Some = _bind$2;
        const _b = _Some;
        b = _b;
      }
      const _func = moonbitlang$core$array$$Array$op_get$86$(self.graph, state);
      const next = _func(b);
      state = next._0;
      const new_tagState = [];
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < next._1.length) {
          moonbitlang$core$array$$Array$push$23$(new_tagState, []);
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < moonbitlang$core$array$$Array$op_get$23$(next._1, i).length) {
              const t = moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(next._1, i), j);
              if (t === -1) {
                moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(new_tagState, i), lexbuf.pos);
              } else {
                moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(new_tagState, i), moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(tagState, i), t));
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      tagState = new_tagState;
      continue;
    } else {
      break;
    }
  }
  const _bind = longest_match;
  if (_bind === undefined) {
    return { _0: self.code_blocks_n, _1: [] };
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _index = _x._0;
    const _pos = _x._1;
    const _state = _x._2;
    const _tagState = _x._3;
    lexbuf.pos = _pos;
    const _p = moonbitlang$core$option$$Option$unwrap$69$(moonbitlang$core$array$$Array$op_get$22$(self.end_nodes, _state))._1;
    const _p$2 = new Array(_p.length);
    const _p$3 = _p.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$4 = _tmp$2;
      if (_p$4 < _p$3) {
        const _p$5 = _p[_p$4];
        const _param583 = _p$5;
        const _x$2 = _param583._0;
        const _b_t = _x$2._0;
        const _b_r = _x$2._1;
        const _x$3 = _param583._1;
        const _e_t = _x$3._0;
        const _e_r = _x$3._1;
        _p$2[_p$4] = { _0: moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(_tagState, _b_t), _b_r), _1: moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(_tagState, _e_t), _e_r) };
        _tmp$2 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const captures = _p$2;
    return { _0: _index, _1: captures };
  }
}
function moonbitlang$lex$lib$parser$$token_state_0(input) {
  return input === -1 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 9 && input <= 10 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 13 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 32 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 34 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 39 ? { _0: 3, _1: moonbitlang$lex$lib$parser$$token_tag_action_2 } : input === 40 ? { _0: 14, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 41 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 42 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 43 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 45 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 47 ? { _0: 19, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 59 ? { _0: 10, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 61 ? { _0: 17, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 63 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 91 ? { _0: 12, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 93 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 94 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 95 ? { _0: 22, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 111 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 112 ? { _0: 21, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 113 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 114 ? { _0: 20, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 115 && input <= 122 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 123 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 124 ? { _0: 9, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 125 ? { _0: 15, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_1(input) {
  return input === -1 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 9 && input <= 10 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 13 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 32 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$token_tag_action_1 } : input === 34 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 39 ? { _0: 3, _1: moonbitlang$lex$lib$parser$$token_tag_action_2 } : input === 40 ? { _0: 14, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 41 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 42 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 43 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 45 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 47 ? { _0: 19, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 59 ? { _0: 10, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 61 ? { _0: 17, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 63 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 91 ? { _0: 12, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 93 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 94 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 95 ? { _0: 22, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 111 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 112 ? { _0: 21, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 113 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 114 ? { _0: 20, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 115 && input <= 122 ? { _0: 23, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 123 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 124 ? { _0: 9, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 125 ? { _0: 15, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_2(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_3(input) {
  return input >= 0 && input <= 38 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$token_tag_action_4 } : input >= 40 && input <= 91 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$token_tag_action_4 } : input === 92 ? { _0: 25, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 93 && input <= 1114111 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$token_tag_action_4 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_4(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_5(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_6(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_7(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_8(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_9(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_10(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_11(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_12(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_13(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_14(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_15(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_16(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_17(input) {
  if (input === 62) {
    return { _0: 26, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_18(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_19(input) {
  if (input === 47) {
    return { _0: 27, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_20(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 116 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 117 ? { _0: 28, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 118 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_21(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 97 ? { _0: 30, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 98 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_22(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_23(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_24(input) {
  if (input === 39) {
    return { _0: 31, _1: moonbitlang$lex$lib$parser$$token_tag_action_5 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_25(input) {
  switch (input) {
    case 39: {
      return { _0: 35, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 92: {
      return { _0: 37, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 98: {
      return { _0: 36, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 110: {
      return { _0: 33, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 114: {
      return { _0: 38, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 116: {
      return { _0: 32, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 117: {
      return { _0: 39, _1: moonbitlang$lex$lib$parser$$token_tag_action_6 };
    }
    case 118: {
      return { _0: 40, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
    }
    case 120: {
      return { _0: 34, _1: moonbitlang$lex$lib$parser$$token_tag_action_7 };
    }
    default: {
      return { _0: -1, _1: [] };
    }
  }
}
function moonbitlang$lex$lib$parser$$token_state_26(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_27(input) {
  return input >= 0 && input <= 9 ? { _0: 41, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 10 ? { _0: 42, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 11 && input <= 1114111 ? { _0: 41, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_28(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 107 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 108 ? { _0: 43, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 109 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_29(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_30(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 113 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 114 ? { _0: 44, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 115 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_31(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_32(input) {
  if (input === 39) {
    return { _0: 45, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_33(input) {
  if (input === 39) {
    return { _0: 46, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_34(input) {
  return input >= 48 && input <= 57 ? { _0: 47, _1: moonbitlang$lex$lib$parser$$token_tag_action_8 } : input >= 65 && input <= 70 ? { _0: 47, _1: moonbitlang$lex$lib$parser$$token_tag_action_8 } : input >= 97 && input <= 102 ? { _0: 47, _1: moonbitlang$lex$lib$parser$$token_tag_action_8 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_35(input) {
  if (input === 39) {
    return { _0: 48, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_36(input) {
  if (input === 39) {
    return { _0: 49, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_37(input) {
  if (input === 39) {
    return { _0: 50, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_38(input) {
  if (input === 39) {
    return { _0: 51, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_39(input) {
  return input >= 48 && input <= 57 ? { _0: 52, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 65 && input <= 70 ? { _0: 52, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 97 && input <= 102 ? { _0: 52, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input === 123 ? { _0: 53, _1: moonbitlang$lex$lib$parser$$token_tag_action_10 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_40(input) {
  if (input === 39) {
    return { _0: 54, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_41(input) {
  return input >= 0 && input <= 9 ? { _0: 41, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 10 ? { _0: 42, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 11 && input <= 1114111 ? { _0: 41, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_42(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_43(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 100 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 101 ? { _0: 55, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 102 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_44(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 114 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 115 ? { _0: 56, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 116 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_45(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_46(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_47(input) {
  return input >= 48 && input <= 57 ? { _0: 57, _1: moonbitlang$lex$lib$parser$$token_tag_action_11 } : input >= 65 && input <= 70 ? { _0: 57, _1: moonbitlang$lex$lib$parser$$token_tag_action_11 } : input >= 97 && input <= 102 ? { _0: 57, _1: moonbitlang$lex$lib$parser$$token_tag_action_11 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_48(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_49(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_50(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_51(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_52(input) {
  return input >= 48 && input <= 57 ? { _0: 58, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 65 && input <= 70 ? { _0: 58, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 97 && input <= 102 ? { _0: 58, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_53(input) {
  return input >= 48 && input <= 57 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : input >= 65 && input <= 70 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : input >= 97 && input <= 102 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_54(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_55(input) {
  return input >= 9 && input <= 10 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input === 13 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input === 32 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_56(input) {
  return input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 100 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 101 ? { _0: 61, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 102 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_57(input) {
  if (input === 39) {
    return { _0: 62, _1: moonbitlang$lex$lib$parser$$token_tag_action_14 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_58(input) {
  return input >= 48 && input <= 57 ? { _0: 63, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 65 && input <= 70 ? { _0: 63, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : input >= 97 && input <= 102 ? { _0: 63, _1: moonbitlang$lex$lib$parser$$token_tag_action_9 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_59(input) {
  return input >= 48 && input <= 57 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : input >= 65 && input <= 70 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : input >= 97 && input <= 102 ? { _0: 59, _1: moonbitlang$lex$lib$parser$$token_tag_action_12 } : input === 125 ? { _0: 64, _1: moonbitlang$lex$lib$parser$$token_tag_action_15 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_60(input) {
  return input >= 9 && input <= 10 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input === 13 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input === 32 ? { _0: 60, _1: moonbitlang$lex$lib$parser$$token_tag_action_13 } : input === 95 ? { _0: 65, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input >= 97 && input <= 122 ? { _0: 65, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_61(input) {
  return input >= 9 && input <= 10 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 13 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 32 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input >= 48 && input <= 57 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 65 && input <= 90 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 95 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input >= 97 && input <= 122 ? { _0: 29, _1: moonbitlang$lex$lib$parser$$token_tag_action_3 } : input === 123 ? { _0: 67, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_62(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_63(input) {
  return input >= 48 && input <= 57 ? { _0: 68, _1: moonbitlang$lex$lib$parser$$token_tag_action_17 } : input >= 65 && input <= 70 ? { _0: 68, _1: moonbitlang$lex$lib$parser$$token_tag_action_17 } : input >= 97 && input <= 102 ? { _0: 68, _1: moonbitlang$lex$lib$parser$$token_tag_action_17 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_64(input) {
  if (input === 39) {
    return { _0: 69, _1: moonbitlang$lex$lib$parser$$token_tag_action_15 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_65(input) {
  return input >= 9 && input <= 10 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 13 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 32 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 40 ? { _0: 72, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input >= 48 && input <= 57 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input >= 65 && input <= 90 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input === 95 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input >= 97 && input <= 122 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_66(input) {
  return input >= 9 && input <= 10 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 13 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 32 ? { _0: 66, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : input === 123 ? { _0: 67, _1: moonbitlang$lex$lib$parser$$token_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_67(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_68(input) {
  if (input === 39) {
    return { _0: 73, _1: moonbitlang$lex$lib$parser$$token_tag_action_19 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$token_state_69(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_70(input) {
  return input >= 9 && input <= 10 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 13 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 32 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 40 ? { _0: 72, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_71(input) {
  return input >= 9 && input <= 10 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 13 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 32 ? { _0: 70, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 40 ? { _0: 72, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input >= 48 && input <= 57 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input >= 65 && input <= 90 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input === 95 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : input >= 97 && input <= 122 ? { _0: 71, _1: moonbitlang$lex$lib$parser$$token_tag_action_16 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_72(input) {
  return input >= 9 && input <= 10 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 13 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 32 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_73(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$token_state_74(input) {
  return input >= 9 && input <= 10 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 13 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : input === 32 ? { _0: 74, _1: moonbitlang$lex$lib$parser$$token_tag_action_18 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_0(input) {
  return input >= 9 && input <= 10 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 13 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 32 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 45 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_1(input) {
  return input >= 9 && input <= 10 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 13 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 32 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : input === 45 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_2(input) {
  if (input === 62) {
    return { _0: 3, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_3(input) {
  return input >= 0 && input <= 8 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 9 && input <= 10 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 11 && input <= 12 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 13 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 14 && input <= 31 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 32 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 33 && input <= 122 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 124 && input <= 1114111 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_4(input) {
  return input >= 0 && input <= 8 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 9 && input <= 10 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 11 && input <= 12 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 13 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 14 && input <= 31 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 32 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 33 && input <= 122 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 123 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 124 && input <= 1114111 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_5(input) {
  return input >= 0 && input <= 8 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 9 && input <= 10 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 11 && input <= 12 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 13 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 14 && input <= 31 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 32 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_1 } : input >= 33 && input <= 122 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 124 && input <= 1114111 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_6(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_7(input) {
  return input >= 0 && input <= 8 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 9 && input <= 10 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 11 && input <= 12 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 13 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 14 && input <= 31 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 32 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 33 && input <= 122 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 123 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 124 && input <= 1114111 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace_state_8(input) {
  return input >= 0 && input <= 8 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input >= 9 && input <= 10 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 11 && input <= 12 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 13 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 14 && input <= 31 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 32 ? { _0: 8, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 33 && input <= 122 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : input === 123 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_3 } : input >= 124 && input <= 1114111 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$arrow_code_lbrace_tag_action_2 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$arrow_code_lbrace(buffer, lexbuf) {
  const _bind = moonbitlang$lex$lib$parser$$LexEngine$run(moonbitlang$lex$lib$parser$$__mbtlex_engine_arrow_code_lbrace, lexbuf);
  const _x = _bind._0;
  if (_x === 0) {
    const ___mbtlex_captures = _bind._1;
    const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
    const __start_pos_of_t = _bind$2._0;
    const __end_pos_of_t = _bind$2._1;
    const t = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf, __start_pos_of_t, __end_pos_of_t);
    moonbitlang$core$builtin$$Logger$write_string$24$(buffer, t);
    return;
  } else {
    moonbitlang$core$abort$$abort$1$("lex: fail to match");
    return;
  }
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_0(input) {
  return input === -1 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_0 } : input >= 0 && input <= 33 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 34 ? { _0: 7, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_2 } : input >= 35 && input <= 38 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 39 ? { _0: 5, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_3 } : input >= 40 && input <= 46 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 47 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_4 } : input >= 48 && input <= 122 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 123 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 124 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input === 125 ? { _0: 3, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : input >= 126 && input <= 1114111 ? { _0: 6, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_1 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_1(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_10(input) {
  return input >= 0 && input <= 1114111 ? { _0: 15, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_11(input) {
  return input >= 0 && input <= 33 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 34 ? { _0: 12, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_8 } : input >= 35 && input <= 91 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 92 ? { _0: 10, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input >= 93 && input <= 1114111 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_12(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_13(input) {
  return input >= 0 && input <= 9 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 } : input === 10 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_10 } : input >= 11 && input <= 1114111 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_14(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_15(input) {
  return input >= 0 && input <= 33 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 34 ? { _0: 12, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_8 } : input >= 35 && input <= 91 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 92 ? { _0: 10, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input >= 93 && input <= 1114111 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_16(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_2(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_3(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_4(input) {
  if (input === 47) {
    return { _0: 8, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_5(input) {
  return input >= 0 && input <= 38 ? { _0: 9, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_6 } : input >= 40 && input <= 91 ? { _0: 9, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_6 } : input >= 93 && input <= 1114111 ? { _0: 9, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_6 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_6(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_7(input) {
  return input >= 0 && input <= 33 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 34 ? { _0: 12, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_8 } : input >= 35 && input <= 91 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input === 92 ? { _0: 10, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : input >= 93 && input <= 1114111 ? { _0: 11, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_7 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_8(input) {
  return input >= 0 && input <= 9 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 } : input >= 11 && input <= 1114111 ? { _0: 13, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rbrace_state_9(input) {
  if (input === 39) {
    return { _0: 14, _1: moonbitlang$lex$lib$parser$$code_rbrace_tag_action_9 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$code_rbrace(buffer, lexbuf) {
  let _tmp = buffer;
  let _tmp$2 = lexbuf;
  _L: while (true) {
    const buffer$2 = _tmp;
    const lexbuf$2 = _tmp$2;
    const _bind = moonbitlang$lex$lib$parser$$LexEngine$run(moonbitlang$lex$lib$parser$$__mbtlex_engine_code_rbrace, lexbuf$2);
    const _x = _bind._0;
    switch (_x) {
      case 0: {
        const ___mbtlex_captures = _bind._1;
        const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
        const __start_pos_of_t = _bind$2._0;
        const __end_pos_of_t = _bind$2._1;
        const t = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t, __end_pos_of_t);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t);
        continue _L;
      }
      case 1: {
        const ___mbtlex_captures$2 = _bind._1;
        const _bind$3 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$2, 0);
        const __start_pos_of_t$2 = _bind$3._0;
        const __end_pos_of_t$2 = _bind$3._1;
        const t$2 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$2, __end_pos_of_t$2);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t$2);
        continue _L;
      }
      case 2: {
        const ___mbtlex_captures$3 = _bind._1;
        const _bind$4 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$3, 0);
        const __start_pos_of_t$3 = _bind$4._0;
        const __end_pos_of_t$3 = _bind$4._1;
        const t$3 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$3, __end_pos_of_t$3);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t$3);
        continue _L;
      }
      case 3: {
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, "{");
        moonbitlang$lex$lib$parser$$code_rbrace(buffer$2, lexbuf$2);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, "}");
        continue _L;
      }
      case 4: {
        return;
      }
      case 5: {
        const ___mbtlex_captures$4 = _bind._1;
        const _bind$5 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$4, 0);
        const __start_pos_of_t$4 = _bind$5._0;
        const __end_pos_of_t$4 = _bind$5._1;
        const t$4 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$4, __end_pos_of_t$4);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t$4);
        continue _L;
      }
      case 6: {
        moonbitlang$core$abort$$abort$1$("Unexpected end of input");
        return;
      }
      default: {
        moonbitlang$core$abort$$abort$1$("lex: fail to match");
        return;
      }
    }
  }
}
function moonbitlang$lex$lib$parser$$code_rparen_state_0(input) {
  return input === -1 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$code_rparen_tag_action_0 } : input >= 0 && input <= 39 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$code_rparen_tag_action_1 } : input === 40 ? { _0: 3, _1: moonbitlang$lex$lib$parser$$code_rparen_tag_action_1 } : input === 41 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$code_rparen_tag_action_1 } : input >= 42 && input <= 1114111 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$code_rparen_tag_action_1 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rparen_state_1(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rparen_state_2(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rparen_state_3(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rparen_state_4(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$code_rparen(buffer, lexbuf) {
  let _tmp = buffer;
  let _tmp$2 = lexbuf;
  _L: while (true) {
    const buffer$2 = _tmp;
    const lexbuf$2 = _tmp$2;
    const _bind = moonbitlang$lex$lib$parser$$LexEngine$run(moonbitlang$lex$lib$parser$$__mbtlex_engine_code_rparen, lexbuf$2);
    const _x = _bind._0;
    switch (_x) {
      case 0: {
        return;
      }
      case 1: {
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, "(");
        moonbitlang$lex$lib$parser$$code_rparen(buffer$2, lexbuf$2);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, ")");
        continue _L;
      }
      case 2: {
        const ___mbtlex_captures = _bind._1;
        const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
        const __start_pos_of_t = _bind$2._0;
        const __end_pos_of_t = _bind$2._1;
        const t = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t, __end_pos_of_t);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t);
        continue _L;
      }
      case 3: {
        moonbitlang$core$abort$$abort$1$("Unexpected end of input");
        return;
      }
      default: {
        moonbitlang$core$abort$$abort$1$("lex: fail to match");
        return;
      }
    }
  }
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_0(input) {
  return input === -1 ? { _0: 2, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 } : input >= 0 && input <= 33 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 } : input === 34 ? { _0: 4, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 } : input >= 35 && input <= 91 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 } : input === 92 ? { _0: 3, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 } : input >= 93 && input <= 1114111 ? { _0: 1, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_1 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_1(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_10(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_11(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_12(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_13(input) {
  return input >= 48 && input <= 57 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 65 && input <= 70 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 97 && input <= 102 ? { _0: 16, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input === 123 ? { _0: 15, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_6 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_14(input) {
  return input >= 48 && input <= 57 ? { _0: 17, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_7 } : input >= 65 && input <= 70 ? { _0: 17, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_7 } : input >= 97 && input <= 102 ? { _0: 17, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_7 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_15(input) {
  return input >= 48 && input <= 57 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : input >= 65 && input <= 70 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : input >= 97 && input <= 102 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_16(input) {
  return input >= 48 && input <= 57 ? { _0: 19, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 65 && input <= 70 ? { _0: 19, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 97 && input <= 102 ? { _0: 19, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_17(input) {
  if (input === 39) {
    return { _0: 20, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_9 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_18(input) {
  return input >= 48 && input <= 57 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : input >= 65 && input <= 70 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : input >= 97 && input <= 102 ? { _0: 18, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_8 } : input === 125 ? { _0: 21, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_10 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_19(input) {
  return input >= 48 && input <= 57 ? { _0: 22, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 65 && input <= 70 ? { _0: 22, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : input >= 97 && input <= 102 ? { _0: 22, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_2(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_20(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_21(input) {
  if (input === 39) {
    return { _0: 23, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_10 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_22(input) {
  return input >= 48 && input <= 57 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_11 } : input >= 65 && input <= 70 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_11 } : input >= 97 && input <= 102 ? { _0: 24, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_11 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_23(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_24(input) {
  if (input === 39) {
    return { _0: 25, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_12 };
  } else {
    return { _0: -1, _1: [] };
  }
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_25(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_3(input) {
  switch (input) {
    case 34: {
      return { _0: 5, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 92: {
      return { _0: 11, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 98: {
      return { _0: 6, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 110: {
      return { _0: 7, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 114: {
      return { _0: 9, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 116: {
      return { _0: 10, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 117: {
      return { _0: 13, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_2 };
    }
    case 118: {
      return { _0: 12, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_0 };
    }
    case 120: {
      return { _0: 8, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_3 };
    }
    default: {
      return { _0: -1, _1: [] };
    }
  }
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_4(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_5(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_6(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_7(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_8(input) {
  return input >= 48 && input <= 57 ? { _0: 14, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_4 } : input >= 65 && input <= 70 ? { _0: 14, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_4 } : input >= 97 && input <= 102 ? { _0: 14, _1: moonbitlang$lex$lib$parser$$string_inner_rquote_tag_action_4 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote_state_9(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$parser$$string_inner_rquote(buffer, lexbuf) {
  let _tmp = buffer;
  let _tmp$2 = lexbuf;
  _L: while (true) {
    const buffer$2 = _tmp;
    const lexbuf$2 = _tmp$2;
    const _bind = moonbitlang$lex$lib$parser$$LexEngine$run(moonbitlang$lex$lib$parser$$__mbtlex_engine_string_inner_rquote, lexbuf$2);
    const _x = _bind._0;
    switch (_x) {
      case 0: {
        return;
      }
      case 1: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 8);
        continue _L;
      }
      case 2: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 9);
        continue _L;
      }
      case 3: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 11);
        continue _L;
      }
      case 4: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 13);
        continue _L;
      }
      case 5: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 10);
        continue _L;
      }
      case 6: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 92);
        continue _L;
      }
      case 7: {
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, 34);
        continue _L;
      }
      case 8: {
        const ___mbtlex_captures = _bind._1;
        const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
        const __start_pos_of_t = _bind$2._0;
        const __end_pos_of_t = _bind$2._1;
        const t = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t, __end_pos_of_t);
        let _tmp$3;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$3 = moonbitlang$core$strconv$$parse_int(t, 16);
            let _tmp$4;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$4 = _ok._0;
            } else {
              const _err = _bind$3;
              const _tmp$5 = _err._0;
              _try_err = _tmp$5;
              break _L$3;
            }
            _tmp$3 = new Result$Ok$6$(_tmp$4);
            break _L$2;
          }
          _tmp$3 = new Result$Err$6$(_try_err);
        }
        const code = moonbitlang$core$result$$Result$unwrap$37$(_tmp$3);
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, code);
        return;
      }
      case 9: {
        const ___mbtlex_captures$2 = _bind._1;
        const _bind$3 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$2, 0);
        const __start_pos_of_t$2 = _bind$3._0;
        const __end_pos_of_t$2 = _bind$3._1;
        const t$2 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$2, __end_pos_of_t$2);
        let _tmp$4;
        let _try_err$2;
        _L$3: {
          _L$4: {
            const _bind$4 = moonbitlang$core$strconv$$parse_int(t$2, 16);
            let _tmp$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp$5 = _ok._0;
            } else {
              const _err = _bind$4;
              const _tmp$6 = _err._0;
              _try_err$2 = _tmp$6;
              break _L$4;
            }
            _tmp$4 = new Result$Ok$6$(_tmp$5);
            break _L$3;
          }
          _tmp$4 = new Result$Err$6$(_try_err$2);
        }
        const code$2 = moonbitlang$core$result$$Result$unwrap$37$(_tmp$4);
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, code$2);
        return;
      }
      case 10: {
        const ___mbtlex_captures$3 = _bind._1;
        const _bind$4 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$3, 0);
        const __start_pos_of_t$3 = _bind$4._0;
        const __end_pos_of_t$3 = _bind$4._1;
        const t$3 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$3, __end_pos_of_t$3);
        let _tmp$5;
        let _try_err$3;
        _L$4: {
          _L$5: {
            const _bind$5 = moonbitlang$core$strconv$$parse_int(t$3, 16);
            let _tmp$6;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp$6 = _ok._0;
            } else {
              const _err = _bind$5;
              const _tmp$7 = _err._0;
              _try_err$3 = _tmp$7;
              break _L$5;
            }
            _tmp$5 = new Result$Ok$6$(_tmp$6);
            break _L$4;
          }
          _tmp$5 = new Result$Err$6$(_try_err$3);
        }
        const code$3 = moonbitlang$core$result$$Result$unwrap$37$(_tmp$5);
        moonbitlang$core$builtin$$Logger$write_char$24$(buffer$2, code$3);
        return;
      }
      case 11: {
        const ___mbtlex_captures$4 = _bind._1;
        const _bind$5 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$4, 0);
        const __start_pos_of_t$4 = _bind$5._0;
        const __end_pos_of_t$4 = _bind$5._1;
        const t$4 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$4, __end_pos_of_t$4);
        moonbitlang$core$builtin$$Logger$write_string$24$(buffer$2, t$4);
        continue _L;
      }
      case 12: {
        moonbitlang$core$abort$$abort$1$("Unexpected end of input");
        return;
      }
      default: {
        moonbitlang$core$abort$$abort$1$("lex: fail to match");
        return;
      }
    }
  }
}
function moonbitlang$lex$lib$parser$$token(lexbuf) {
  let _tmp = lexbuf;
  _L: while (true) {
    const lexbuf$2 = _tmp;
    const _bind = moonbitlang$lex$lib$parser$$LexEngine$run(moonbitlang$lex$lib$parser$$__mbtlex_engine_token, lexbuf$2);
    const _x = _bind._0;
    switch (_x) {
      case 0: {
        continue _L;
      }
      case 1: {
        continue _L;
      }
      case 2: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EOI;
      }
      case 3: {
        const ___mbtlex_captures = _bind._1;
        const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
        const __start_pos_of_t = _bind$2._0;
        const __end_pos_of_t = _bind$2._1;
        const t = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t, __end_pos_of_t);
        const buffer1 = moonbitlang$core$builtin$$StringBuilder$new(0);
        const buffer2 = moonbitlang$core$builtin$$StringBuilder$new(0);
        moonbitlang$lex$lib$parser$$code_rparen(buffer1, lexbuf$2);
        moonbitlang$lex$lib$parser$$arrow_code_lbrace(buffer2, lexbuf$2);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE({ _0: t, _1: buffer1.val, _2: buffer2.val });
      }
      case 4: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$PARSE_LBRACE;
      }
      case 5: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$FAT_ARROW;
      }
      case 6: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$UNDERSCORE;
      }
      case 7: {
        const buffer = moonbitlang$core$builtin$$StringBuilder$new(0);
        moonbitlang$lex$lib$parser$$code_rbrace(buffer, lexbuf$2);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LBRACE_CODE_RBRACE(buffer.val);
      }
      case 8: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RBRACE;
      }
      case 9: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LPAREN;
      }
      case 10: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RPAREN;
      }
      case 11: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LBRACKET;
      }
      case 12: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$RBRACKET;
      }
      case 13: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EQ;
      }
      case 14: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$SEMICOLON;
      }
      case 15: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$BAR;
      }
      case 16: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$STAR;
      }
      case 17: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$PLUS;
      }
      case 18: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$QUESTION;
      }
      case 19: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$MINUS;
      }
      case 20: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CARET;
      }
      case 21: {
        const ___mbtlex_captures$2 = _bind._1;
        const _bind$3 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$2, 0);
        const __start_pos_of_t$2 = _bind$3._0;
        const __end_pos_of_t$2 = _bind$3._1;
        const t$2 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$2, __end_pos_of_t$2);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(moonbitlang$core$string$$String$char_at(t$2, 0));
      }
      case 22: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(8);
      }
      case 23: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(9);
      }
      case 24: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(11);
      }
      case 25: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(13);
      }
      case 26: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(10);
      }
      case 27: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(92);
      }
      case 28: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(39);
      }
      case 29: {
        const ___mbtlex_captures$3 = _bind._1;
        const _bind$4 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$3, 0);
        const __start_pos_of_t$3 = _bind$4._0;
        const __end_pos_of_t$3 = _bind$4._1;
        const t$3 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$3, __end_pos_of_t$3);
        let _tmp$2;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$5 = moonbitlang$core$strconv$$parse_int(t$3, 16);
            let _tmp$3;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp$3 = _ok._0;
            } else {
              const _err = _bind$5;
              const _tmp$4 = _err._0;
              _try_err = _tmp$4;
              break _L$3;
            }
            _tmp$2 = new Result$Ok$6$(_tmp$3);
            break _L$2;
          }
          _tmp$2 = new Result$Err$6$(_try_err);
        }
        const code = moonbitlang$core$result$$Result$unwrap$37$(_tmp$2);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(code);
      }
      case 30: {
        const ___mbtlex_captures$4 = _bind._1;
        const _bind$5 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$4, 0);
        const __start_pos_of_t$4 = _bind$5._0;
        const __end_pos_of_t$4 = _bind$5._1;
        const t$4 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$4, __end_pos_of_t$4);
        let _tmp$3;
        let _try_err$2;
        _L$3: {
          _L$4: {
            const _bind$6 = moonbitlang$core$strconv$$parse_int(t$4, 16);
            let _tmp$4;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$4 = _ok._0;
            } else {
              const _err = _bind$6;
              const _tmp$5 = _err._0;
              _try_err$2 = _tmp$5;
              break _L$4;
            }
            _tmp$3 = new Result$Ok$6$(_tmp$4);
            break _L$3;
          }
          _tmp$3 = new Result$Err$6$(_try_err$2);
        }
        const code$2 = moonbitlang$core$result$$Result$unwrap$37$(_tmp$3);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(code$2);
      }
      case 31: {
        const ___mbtlex_captures$5 = _bind._1;
        const _bind$6 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$5, 0);
        const __start_pos_of_t$5 = _bind$6._0;
        const __end_pos_of_t$5 = _bind$6._1;
        const t$5 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$5, __end_pos_of_t$5);
        let _tmp$4;
        let _try_err$3;
        _L$4: {
          _L$5: {
            const _bind$7 = moonbitlang$core$strconv$$parse_int(t$5, 16);
            let _tmp$5;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$5 = _ok._0;
            } else {
              const _err = _bind$7;
              const _tmp$6 = _err._0;
              _try_err$3 = _tmp$6;
              break _L$5;
            }
            _tmp$4 = new Result$Ok$6$(_tmp$5);
            break _L$4;
          }
          _tmp$4 = new Result$Err$6$(_try_err$3);
        }
        const code$3 = moonbitlang$core$result$$Result$unwrap$37$(_tmp$4);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$CHAR(code$3);
      }
      case 32: {
        const buffer$2 = moonbitlang$core$builtin$$StringBuilder$new(0);
        moonbitlang$lex$lib$parser$$string_inner_rquote(buffer$2, lexbuf$2);
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$STRING(buffer$2.val);
      }
      case 33: {
        const ___mbtlex_captures$6 = _bind._1;
        const _bind$7 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures$6, 0);
        const __start_pos_of_t$6 = _bind$7._0;
        const __end_pos_of_t$6 = _bind$7._1;
        const t$6 = moonbitlang$lex$lib$parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t$6, __end_pos_of_t$6);
        switch (t$6) {
          case "eof": {
            return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$EOF;
          }
          case "let": {
            return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LET;
          }
          case "as": {
            return $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$AS;
          }
          default: {
            return new $64$moonbitlang$47$lex$47$lib$47$parser$46$Token$LC_IDENT(t$6);
          }
        }
      }
      default: {
        return moonbitlang$core$abort$$abort$3$("lex: fail to match");
      }
    }
  }
}
function moonbitlang$lex$lib$parser$$error(stack, token, loc) {
  const expected = [];
  const _arr = [{ _0: 0, _1: 0 }, { _0: 1, _1: 1 }, { _0: 2, _1: 2 }, { _0: 3, _1: 3 }, { _0: 4, _1: 4 }, { _0: 5, _1: 5 }, { _0: 6, _1: 6 }, { _0: 7, _1: 7 }, { _0: 8, _1: 8 }, { _0: 9, _1: 9 }, { _0: 10, _1: 10 }, { _0: 11, _1: 11 }, { _0: 12, _1: 12 }, { _0: 13, _1: 13 }, { _0: 14, _1: 14 }, { _0: 15, _1: 15 }, { _0: 16, _1: 16 }, { _0: 17, _1: 17 }, { _0: 18, _1: 18 }, { _0: 19, _1: 19 }, { _0: 20, _1: 20 }, { _0: 21, _1: 21 }, { _0: 22, _1: 22 }, { _0: 23, _1: 23 }, { _0: 24, _1: 24 }];
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const term = _arr[_i];
      const kind = term._1;
      const symbol = term._0;
      let stack$2;
      _L: {
        stack$2 = stack;
        break _L;
      }
      let _tmp$2 = stack$2;
      _L$2: while (true) {
        const stack$3 = _tmp$2;
        if (stack$3.$tag === 0) {
          break;
        } else {
          const _Cons = stack$3;
          const _state = _Cons._0;
          let count;
          let symbol$2;
          _L$3: {
            _L$4: {
              const _bind = _state(symbol);
              switch (_bind.$tag) {
                case 0: {
                  break _L$4;
                }
                case 1: {
                  break _L$4;
                }
                case 2: {
                  const _Reduce = _bind;
                  const _count = _Reduce._0;
                  const _symbol = _Reduce._1;
                  count = _count;
                  symbol$2 = _symbol;
                  break _L$3;
                }
                case 3: {
                  const _ReduceNoLookahead = _bind;
                  const _count$2 = _ReduceNoLookahead._0;
                  const _symbol$2 = _ReduceNoLookahead._1;
                  count = _count$2;
                  symbol$2 = _symbol$2;
                  break _L$3;
                }
                default: {
                  break _L$2;
                }
              }
            }
            moonbitlang$core$array$$Array$push$68$(expected, kind);
            break;
          }
          let stack$4;
          let count$2;
          let symbol$3;
          _L$4: {
            stack$4 = stack$3;
            count$2 = count;
            symbol$3 = symbol$2;
            break _L$4;
          }
          let _tmp$3 = stack$4;
          let _tmp$4 = count$2;
          let _tmp$5 = symbol$3;
          _L$5: while (true) {
            const stack$5 = _tmp$3;
            const count$3 = _tmp$4;
            const symbol$4 = _tmp$5;
            const stack$6 = moonbitlang$core$immut$list$$T$drop$8$(stack$5, count$3);
            if (stack$6.$tag === 1) {
              const _Cons$2 = stack$6;
              const _state$2 = _Cons$2._0;
              let count$4;
              let symbol$5;
              _L$6: {
                const _bind = _state$2(symbol$4);
                switch (_bind.$tag) {
                  case 1: {
                    const _Shift = _bind;
                    const _state$3 = _Shift._0;
                    _tmp$2 = new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$(_state$3, stack$6);
                    continue _L$2;
                  }
                  case 2: {
                    const _Reduce = _bind;
                    const _count = _Reduce._0;
                    const _symbol = _Reduce._1;
                    count$4 = _count;
                    symbol$5 = _symbol;
                    break _L$6;
                  }
                  case 3: {
                    const _ReduceNoLookahead = _bind;
                    const _count$2 = _ReduceNoLookahead._0;
                    const _symbol$2 = _ReduceNoLookahead._1;
                    count$4 = _count$2;
                    symbol$5 = _symbol$2;
                    break _L$6;
                  }
                  default: {
                    $panic();
                    break _L$2;
                  }
                }
              }
              _tmp$3 = stack$6;
              _tmp$4 = count$4;
              _tmp$5 = symbol$5;
              continue;
            } else {
              $panic();
              break _L$2;
            }
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Err$14$(new Error$moonbitlang$47$lex$47$lib$47$parser$46$ParseError$46$UnexpectedToken(token, loc, expected));
}
function moonbitlang$lex$lib$parser$$yy_input(token, _start_pos, _end_pos) {
  switch (token.$tag) {
    case 0: {
      return { _0: 0, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 1: {
      return { _0: 1, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 2: {
      return { _0: 2, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 3: {
      return { _0: 3, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 4: {
      return { _0: 4, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 5: {
      return { _0: 5, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 6: {
      return { _0: 6, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 7: {
      return { _0: 7, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 8: {
      return { _0: 8, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 9: {
      return { _0: 9, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 10: {
      return { _0: 10, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 11: {
      return { _0: 11, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 12: {
      return { _0: 12, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 13: {
      return { _0: 13, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 14: {
      return { _0: 14, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 15: {
      return { _0: 15, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 16: {
      return { _0: 16, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 17: {
      return { _0: 17, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 18: {
      return { _0: 18, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 19: {
      return { _0: 19, _1: Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Void$46$YYObj_Void };
    }
    case 20: {
      const _RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE = token;
      const _data = _RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE._0;
      return { _0: 20, _1: new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String__String__String_$46$YYObj__String__String__String_(_data) };
    }
    case 21: {
      const _LBRACE_CODE_RBRACE = token;
      const _data$2 = _LBRACE_CODE_RBRACE._0;
      return { _0: 21, _1: new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(_data$2) };
    }
    case 22: {
      const _LC_IDENT = token;
      const _data$3 = _LC_IDENT._0;
      return { _0: 22, _1: new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(_data$3) };
    }
    case 23: {
      const _CHAR = token;
      const _data$4 = _CHAR._0;
      return { _0: 23, _1: new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_Char$46$YYObj_Char(_data$4) };
    }
    default: {
      const _STRING = token;
      const _data$5 = _STRING._0;
      return { _0: 24, _1: new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(_data$5) };
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_parse$133$(read_token, start_pos, start, return_) {
  const state_stack = { val: new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$(start, $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$12$) };
  const data_stack = [];
  const last_pos = { val: start_pos };
  const state = { val: start };
  let lookahead = undefined;
  let last_shifted_state_stack = state_stack.val;
  while (true) {
    let decision;
    const _func = state.val;
    const _bind = _func(45);
    switch (_bind.$tag) {
      case 3: {
        decision = _bind;
        break;
      }
      case 0: {
        decision = _bind;
        break;
      }
      default: {
        const _bind$2 = lookahead;
        if (_bind$2 === undefined) {
          const _bind$3 = read_token();
          const _token = _bind$3._0;
          const _start_pos = _bind$3._1;
          const _end_pos = _bind$3._2;
          const _bind$4 = moonbitlang$lex$lib$parser$$yy_input(_token, _start_pos, _end_pos);
          const _symbol = _bind$4._0;
          const _data = _bind$4._1;
          lookahead = { _0: _symbol, _1: { _0: _data, _1: _start_pos, _2: _end_pos }, _2: _token };
          const _func$2 = state.val;
          decision = _func$2(_symbol);
        } else {
          const _Some = _bind$2;
          const _la = _Some;
          const _func$2 = state.val;
          decision = _func$2(_la._0);
        }
      }
    }
    let action;
    let count;
    let symbol;
    _L: {
      _L$2: {
        switch (decision.$tag) {
          case 0: {
            return new Result$Ok$15$(return_(moonbitlang$core$array$$Array$unsafe_pop$9$(data_stack)._0));
          }
          case 1: {
            const _Shift = decision;
            const _next_state = _Shift._0;
            const _bind$3 = lookahead;
            if (_bind$3 === undefined) {
              $panic();
            } else {
              const _Some = _bind$3;
              const _la = _Some;
              moonbitlang$core$array$$Array$push$9$(data_stack, _la._1);
              state_stack.val = new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$(_next_state, state_stack.val);
              last_shifted_state_stack = state_stack.val;
              state.val = _next_state;
              last_pos.val = _la._1._2;
              lookahead = undefined;
            }
            break;
          }
          case 2: {
            const _Reduce = decision;
            const _count = _Reduce._0;
            const _symbol = _Reduce._1;
            const _action = _Reduce._2;
            action = _action;
            count = _count;
            symbol = _symbol;
            break _L$2;
          }
          case 3: {
            const _ReduceNoLookahead = decision;
            const _count$2 = _ReduceNoLookahead._0;
            const _symbol$2 = _ReduceNoLookahead._1;
            const _action$2 = _ReduceNoLookahead._2;
            action = _action$2;
            count = _count$2;
            symbol = _symbol$2;
            break _L$2;
          }
          default: {
            const _bind$4 = moonbitlang$core$option$$Option$unwrap$100$(lookahead);
            const _x = _bind$4._1;
            const _start_pos = _x._1;
            const _end_pos = _x._2;
            const _token = _bind$4._2;
            const _bind$5 = moonbitlang$lex$lib$parser$$error(last_shifted_state_stack, _token, { _0: _start_pos, _1: _end_pos });
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
          }
        }
        break _L;
      }
      let _tmp = count;
      let _tmp$2 = symbol;
      let _tmp$3 = action;
      _L$3: while (true) {
        const args = moonbitlang$core$array$$Array$op_as_view$9$(data_stack, data_stack.length - count | 0, undefined);
        const data = action(last_pos.val, args);
        let start_pos$2;
        let end_pos;
        _L$4: {
          if (args.len === 0) {
            const _tmp$4 = last_pos.val;
            const _tmp$5 = last_pos.val;
            start_pos$2 = _tmp$4;
            end_pos = _tmp$5;
            break _L$4;
          } else {
            const _tmp$4 = moonbitlang$core$array$$ArrayView$op_get$9$(args, 0)._1;
            const _tmp$5 = moonbitlang$core$array$$ArrayView$op_get$9$(args, args.len - 1 | 0)._2;
            start_pos$2 = _tmp$4;
            end_pos = _tmp$5;
            break _L$4;
          }
        }
        let _tmp$4 = 0;
        while (true) {
          const i = _tmp$4;
          if (i < count) {
            moonbitlang$core$array$$Array$unsafe_pop$9$(data_stack);
            state_stack.val = moonbitlang$core$immut$list$$T$tail$8$(state_stack.val);
            _tmp$4 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        state.val = moonbitlang$core$immut$list$$T$unsafe_head$8$(state_stack.val);
        moonbitlang$core$array$$Array$push$9$(data_stack, { _0: data, _1: start_pos$2, _2: end_pos });
        let action$2;
        let count$2;
        let symbol$2;
        _L$5: {
          const _func$2 = state.val;
          const _bind$3 = _func$2(symbol);
          switch (_bind$3.$tag) {
            case 0: {
              return new Result$Ok$15$(return_(moonbitlang$core$array$$Array$unsafe_pop$9$(data_stack)._0));
            }
            case 1: {
              const _Shift = _bind$3;
              const _next_state = _Shift._0;
              state_stack.val = new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$12$(_next_state, state_stack.val);
              state.val = _next_state;
              break _L$3;
            }
            case 2: {
              const _Reduce = _bind$3;
              const _count = _Reduce._0;
              const _symbol = _Reduce._1;
              const _action = _Reduce._2;
              action$2 = _action;
              count$2 = _count;
              symbol$2 = _symbol;
              break _L$5;
            }
            case 3: {
              const _ReduceNoLookahead = _bind$3;
              const _count$2 = _ReduceNoLookahead._0;
              const _symbol$2 = _ReduceNoLookahead._1;
              const _action$2 = _ReduceNoLookahead._2;
              action$2 = _action$2;
              count$2 = _count$2;
              symbol$2 = _symbol$2;
              break _L$5;
            }
            default: {
              $panic();
              break _L$3;
            }
          }
        }
        _tmp = count$2;
        _tmp$2 = symbol$2;
        _tmp$3 = action$2;
        continue;
      }
    }
    continue;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_31(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String("");
}
function moonbitlang$lex$lib$parser$$yy_action_4(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Lex$46$YYObj__type_Lex({ header: "", named_regexes: [], rules: [], trailer: "" });
}
function moonbitlang$lex$lib$parser$$yy_state_38(_lookahead) {
  return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Accept;
}
function moonbitlang$lex$lib$parser$$yy_action_15(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar1 = _YYObj_String._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_39(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 28, moonbitlang$lex$lib$parser$$yy_action_15);
}
function moonbitlang$lex$lib$parser$$yy_action_29(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__String___type_Regex__$46$YYObj__immut_list_T__String___type_Regex__($64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$16$);
}
function moonbitlang$lex$lib$parser$$yy_action_6(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex($64$moonbitlang$47$lex$47$lib$47$type$46$Regex$EOF);
}
function moonbitlang$lex$lib$parser$$yy_state_13(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_6);
}
function moonbitlang$lex$lib$parser$$yy_action_21(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex($64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Underscore);
}
function moonbitlang$lex$lib$parser$$yy_state_14(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_21);
}
function moonbitlang$lex$lib$parser$$yy_action_35(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar1 = _YYObj_String._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReStr(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_15(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_35);
}
function moonbitlang$lex$lib$parser$$yy_action_33(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 5) {
    const _YYObj_Char = _bind;
    const __dollar1 = _YYObj_Char._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$ReChar(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_16(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_33);
}
function moonbitlang$lex$lib$parser$$yy_action_25(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar1 = _YYObj_String._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Named(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_17(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_25);
}
function moonbitlang$lex$lib$parser$$yy_action_3(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 9) {
    const _YYObj__eof_char_set_T = _bind;
    const __dollar1 = _YYObj__eof_char_set_T._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$CharSet(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_18(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 41, moonbitlang$lex$lib$parser$$yy_action_3);
}
function moonbitlang$lex$lib$parser$$yy_action_30(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
  if (_bind.$tag === 9) {
    const _YYObj__eof_char_set_T = _bind;
    const __dollar2 = _YYObj__eof_char_set_T._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(__dollar2);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_12(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 42, moonbitlang$lex$lib$parser$$yy_action_30);
}
function moonbitlang$lex$lib$parser$$yy_state_11(_lookahead) {
  if (_lookahead === 10) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_12);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_0(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 5) {
    const _YYObj_Char = _bind;
    const __dollar1 = _YYObj_Char._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(moonbitlang$lex$lib$util$eof_char_set$$singleton(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_8(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 5) {
    const _YYObj_Char = _bind;
    const __dollar1 = _YYObj_Char._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
    if (_bind$2.$tag === 5) {
      const _YYObj_Char$2 = _bind$2;
      const __dollar3 = _YYObj_Char$2._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(moonbitlang$lex$lib$util$eof_char_set$$range(__dollar1, __dollar3));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_5(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 44, moonbitlang$lex$lib$parser$$yy_action_8);
}
function moonbitlang$lex$lib$parser$$yy_state_4(_lookahead) {
  if (_lookahead === 23) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_5);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_3(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 18: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_4);
      }
      case 10: {
        break _L;
      }
      case 23: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 44, moonbitlang$lex$lib$parser$$yy_action_0);
}
function moonbitlang$lex$lib$parser$$yy_action_11(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 9) {
    const _YYObj__eof_char_set_T = _bind;
    const __dollar1 = _YYObj__eof_char_set_T._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_38(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 9) {
    const _YYObj__eof_char_set_T = _bind;
    const __dollar1 = _YYObj__eof_char_set_T._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 9) {
      const _YYObj__eof_char_set_T$2 = _bind$2;
      const __dollar2 = _YYObj__eof_char_set_T$2._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(moonbitlang$core$builtin$$Add$op_add$91$(__dollar1, __dollar2));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_7(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 43, moonbitlang$lex$lib$parser$$yy_action_38);
}
function moonbitlang$lex$lib$parser$$yy_state_6(_lookahead) {
  switch (_lookahead) {
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_3);
    }
    case 44: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_6);
    }
    case 43: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_7);
    }
    case 10: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 43, moonbitlang$lex$lib$parser$$yy_action_11);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_7(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
  if (_bind.$tag === 9) {
    const _YYObj__eof_char_set_T = _bind;
    const __dollar3 = _YYObj__eof_char_set_T._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__eof_char_set_T$46$YYObj__eof_char_set_T(moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$negated(__dollar3));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_10(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(4, 42, moonbitlang$lex$lib$parser$$yy_action_7);
}
function moonbitlang$lex$lib$parser$$yy_state_9(_lookahead) {
  if (_lookahead === 10) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_10);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_8(_lookahead) {
  switch (_lookahead) {
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_3);
    }
    case 44: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_6);
    }
    case 43: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_9);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_2(_lookahead) {
  switch (_lookahead) {
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_3);
    }
    case 44: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_6);
    }
    case 19: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_8);
    }
    case 43: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_11);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_39(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar2 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar2);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_21(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 41, moonbitlang$lex$lib$parser$$yy_action_39);
}
function moonbitlang$lex$lib$parser$$yy_state_20(_lookahead) {
  if (_lookahead === 8) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_21);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_2(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_9(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Option(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_23(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 40, moonbitlang$lex$lib$parser$$yy_action_9);
}
function moonbitlang$lex$lib$parser$$yy_action_13(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Repetition(__dollar1));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_24(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 40, moonbitlang$lex$lib$parser$$yy_action_13);
}
function moonbitlang$lex$lib$parser$$yy_action_24(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Option(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Repetition(__dollar1)));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_25(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 40, moonbitlang$lex$lib$parser$$yy_action_24);
}
function moonbitlang$lex$lib$parser$$yy_state_22(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 17: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_23);
      }
      case 16: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_24);
      }
      case 15: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_25);
      }
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 7: {
        break _L;
      }
      case 8: {
        break _L;
      }
      case 9: {
        break _L;
      }
      case 12: {
        break _L;
      }
      case 13: {
        break _L;
      }
      case 14: {
        break _L;
      }
      case 22: {
        break _L;
      }
      case 23: {
        break _L;
      }
      case 24: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 40, moonbitlang$lex$lib$parser$$yy_action_2);
}
function moonbitlang$lex$lib$parser$$yy_action_1(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_17(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 8) {
      const _YYObj__type_Regex$2 = _bind$2;
      const __dollar2 = _YYObj__type_Regex$2._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Concat(__dollar1, __dollar2));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_27(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 39, moonbitlang$lex$lib$parser$$yy_action_17);
}
function moonbitlang$lex$lib$parser$$yy_action_12(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_5(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
    if (_bind$2.$tag === 8) {
      const _YYObj__type_Regex$2 = _bind$2;
      const __dollar3 = _YYObj__type_Regex$2._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Alter(__dollar1, __dollar3));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_30(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 38, moonbitlang$lex$lib$parser$$yy_action_5);
}
function moonbitlang$lex$lib$parser$$yy_action_18(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_10(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
    if (_bind$2.$tag === 4) {
      const _YYObj_String = _bind$2;
      const __dollar3 = _YYObj_String._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(new $64$moonbitlang$47$lex$47$lib$47$type$46$Regex$Capture(__dollar1, __dollar3));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_33(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 37, moonbitlang$lex$lib$parser$$yy_action_10);
}
function moonbitlang$lex$lib$parser$$yy_state_32(_lookahead) {
  if (_lookahead === 22) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_33);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_31(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 4: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_32);
      }
      case 0: {
        break _L;
      }
      case 8: {
        break _L;
      }
      case 12: {
        break _L;
      }
      case 13: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 37, moonbitlang$lex$lib$parser$$yy_action_18);
}
function moonbitlang$lex$lib$parser$$yy_state_19(_lookahead) {
  switch (_lookahead) {
    case 9: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
    }
    case 1: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
    }
    case 5: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
    }
    case 24: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
    }
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
    }
    case 22: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
    }
    case 42: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
    }
    case 7: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
    }
    case 37: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_20);
    }
    case 41: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
    }
    case 40: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
    }
    case 39: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_28);
    }
    case 38: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_31);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_26(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 9: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
      }
      case 1: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
      }
      case 5: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
      }
      case 24: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
      }
      case 23: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
      }
      case 22: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
      }
      case 42: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
      }
      case 7: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
      }
      case 41: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
      }
      case 40: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
      }
      case 39: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_27);
      }
      case 0: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 8: {
        break _L;
      }
      case 12: {
        break _L;
      }
      case 13: {
        break _L;
      }
      case 14: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 39, moonbitlang$lex$lib$parser$$yy_action_1);
}
function moonbitlang$lex$lib$parser$$yy_state_28(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 14: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_29);
      }
      case 0: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 8: {
        break _L;
      }
      case 12: {
        break _L;
      }
      case 13: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 38, moonbitlang$lex$lib$parser$$yy_action_12);
}
function moonbitlang$lex$lib$parser$$yy_state_29(_lookahead) {
  switch (_lookahead) {
    case 9: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
    }
    case 1: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
    }
    case 5: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
    }
    case 24: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
    }
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
    }
    case 22: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
    }
    case 42: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
    }
    case 7: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
    }
    case 41: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
    }
    case 40: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
    }
    case 39: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_28);
    }
    case 38: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_30);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_16(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Regex$46$YYObj__type_Regex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_34(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 36, moonbitlang$lex$lib$parser$$yy_action_16);
}
function moonbitlang$lex$lib$parser$$yy_action_36(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar2 = _YYObj_String._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 3)._0;
    if (_bind$2.$tag === 8) {
      const _YYObj__type_Regex = _bind$2;
      const __dollar4 = _YYObj__type_Regex._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__String___type_Regex_$46$YYObj__String___type_Regex_({ _0: __dollar2, _1: __dollar4 });
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_45(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(5, 31, moonbitlang$lex$lib$parser$$yy_action_36);
}
function moonbitlang$lex$lib$parser$$yy_state_44(_lookahead) {
  if (_lookahead === 12) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_45);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_43(_lookahead) {
  switch (_lookahead) {
    case 9: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
    }
    case 1: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
    }
    case 5: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
    }
    case 24: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
    }
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
    }
    case 22: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
    }
    case 42: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
    }
    case 7: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
    }
    case 41: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
    }
    case 40: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
    }
    case 39: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_28);
    }
    case 38: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_31);
    }
    case 37: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_34);
    }
    case 36: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_44);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_42(_lookahead) {
  if (_lookahead === 11) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_43);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_41(_lookahead) {
  if (_lookahead === 22) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_42);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_32(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 10) {
    const _YYObj__String___type_Regex_ = _bind;
    const __dollar1 = _YYObj__String___type_Regex_._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 7) {
      const _YYObj__immut_list_T__String___type_Regex__ = _bind$2;
      const __dollar2 = _YYObj__immut_list_T__String___type_Regex__._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__String___type_Regex__$46$YYObj__immut_list_T__String___type_Regex__(new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$16$(__dollar1, __dollar2));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_47(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 30, moonbitlang$lex$lib$parser$$yy_action_32);
}
function moonbitlang$lex$lib$parser$$yy_state_46(_lookahead) {
  switch (_lookahead) {
    case 3: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_41);
    }
    case 31: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_46);
    }
    case 30: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_47);
    }
    case 20: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 30, moonbitlang$lex$lib$parser$$yy_action_29);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_27(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__($64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$17$);
}
function moonbitlang$lex$lib$parser$$yy_action_26(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 8) {
    const _YYObj__type_Regex = _bind;
    const __dollar1 = _YYObj__type_Regex._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
    if (_bind$2.$tag === 4) {
      const _YYObj_String = _bind$2;
      const __dollar3 = _YYObj_String._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj___type_Regex___type_CodeBlock_$46$YYObj___type_Regex___type_CodeBlock_({ _0: __dollar1, _1: __dollar3 });
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_53(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(3, 35, moonbitlang$lex$lib$parser$$yy_action_26);
}
function moonbitlang$lex$lib$parser$$yy_state_52(_lookahead) {
  if (_lookahead === 21) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_53);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_51(_lookahead) {
  if (_lookahead === 13) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_52);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_19(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 12) {
    const _YYObj___type_Regex___type_CodeBlock_ = _bind;
    const __dollar1 = _YYObj___type_Regex___type_CodeBlock_._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 11) {
      const _YYObj__immut_list_T___type_Regex___type_CodeBlock__ = _bind$2;
      const __dollar2 = _YYObj__immut_list_T___type_Regex___type_CodeBlock__._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__$46$YYObj__immut_list_T___type_Regex___type_CodeBlock__(new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$17$(__dollar1, __dollar2));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_55(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 34, moonbitlang$lex$lib$parser$$yy_action_19);
}
function moonbitlang$lex$lib$parser$$yy_state_54(_lookahead) {
  switch (_lookahead) {
    case 9: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
    }
    case 1: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
    }
    case 5: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
    }
    case 24: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
    }
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
    }
    case 22: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
    }
    case 42: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
    }
    case 7: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
    }
    case 41: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
    }
    case 40: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
    }
    case 39: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_28);
    }
    case 38: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_31);
    }
    case 37: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_34);
    }
    case 36: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_51);
    }
    case 35: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_54);
    }
    case 34: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_55);
    }
    case 6: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 34, moonbitlang$lex$lib$parser$$yy_action_27);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_37(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 3) {
    const _YYObj__String__String__String_ = _bind;
    const __dollar1 = _YYObj__String__String__String_._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
    if (_bind$2.$tag === 11) {
      const _YYObj__immut_list_T___type_Regex___type_CodeBlock__ = _bind$2;
      const __dollar3 = _YYObj__immut_list_T___type_Regex___type_CodeBlock__._0;
      const _name = __dollar1._0;
      const _params = __dollar1._1;
      const _return_type = __dollar1._2;
      const patterns = moonbitlang$core$immut$list$$T$to_array$50$(__dollar3);
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Rule$46$YYObj__type_Rule({ name: _name, return_type: _return_type, params: _params, patterns: patterns });
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_58(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(5, 33, moonbitlang$lex$lib$parser$$yy_action_37);
}
function moonbitlang$lex$lib$parser$$yy_state_57(_lookahead) {
  if (_lookahead === 6) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_58);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_56(_lookahead) {
  if (_lookahead === 6) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_57);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_50(_lookahead) {
  switch (_lookahead) {
    case 9: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_2);
    }
    case 1: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_13);
    }
    case 5: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_14);
    }
    case 24: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_15);
    }
    case 23: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_16);
    }
    case 22: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_17);
    }
    case 42: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_18);
    }
    case 7: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_19);
    }
    case 41: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_22);
    }
    case 40: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_26);
    }
    case 39: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_28);
    }
    case 38: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_31);
    }
    case 37: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_34);
    }
    case 36: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_51);
    }
    case 35: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_54);
    }
    case 34: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_56);
    }
    case 6: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 34, moonbitlang$lex$lib$parser$$yy_action_27);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_49(_lookahead) {
  if (_lookahead === 2) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_50);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_action_23(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 13) {
    const _YYObj__type_Rule = _bind;
    const __dollar1 = _YYObj__type_Rule._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__type_Rule_$46$YYObj__immut_list_T__type_Rule_(new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$18$(__dollar1, $64$moonbitlang$47$core$47$immut$47$list$46$T$Nil$18$));
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_action_22(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 13) {
    const _YYObj__type_Rule = _bind;
    const __dollar1 = _YYObj__type_Rule._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 14) {
      const _YYObj__immut_list_T__type_Rule_ = _bind$2;
      const __dollar2 = _YYObj__immut_list_T__type_Rule_._0;
      return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__immut_list_T__type_Rule_$46$YYObj__immut_list_T__type_Rule_(new $64$moonbitlang$47$core$47$immut$47$list$46$T$Cons$18$(__dollar1, __dollar2));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_60(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 32, moonbitlang$lex$lib$parser$$yy_action_22);
}
function moonbitlang$lex$lib$parser$$yy_state_59(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 20: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_49);
      }
      case 33: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_59);
      }
      case 32: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_60);
      }
      case 0: {
        break _L;
      }
      case 21: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(1, 32, moonbitlang$lex$lib$parser$$yy_action_23);
}
function moonbitlang$lex$lib$parser$$yy_action_28(_last_pos, _args) {
  return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String("");
}
function moonbitlang$lex$lib$parser$$yy_action_20(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar1 = _YYObj_String._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj_String$46$YYObj_String(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_62(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(1, 29, moonbitlang$lex$lib$parser$$yy_action_20);
}
function moonbitlang$lex$lib$parser$$yy_action_34(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 4) {
    const _YYObj_String = _bind;
    const __dollar1 = _YYObj_String._0;
    const _bind$2 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 1)._0;
    if (_bind$2.$tag === 7) {
      const _YYObj__immut_list_T__String___type_Regex__ = _bind$2;
      const __dollar2 = _YYObj__immut_list_T__String___type_Regex__._0;
      const _bind$3 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 2)._0;
      if (_bind$3.$tag === 14) {
        const _YYObj__immut_list_T__type_Rule_ = _bind$3;
        const __dollar3 = _YYObj__immut_list_T__type_Rule_._0;
        const _bind$4 = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 3)._0;
        if (_bind$4.$tag === 4) {
          const _YYObj_String$2 = _bind$4;
          const __dollar4 = _YYObj_String$2._0;
          return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Lex$46$YYObj__type_Lex({ header: __dollar1, named_regexes: moonbitlang$core$immut$list$$T$to_array$48$(__dollar2), rules: moonbitlang$core$immut$list$$T$to_array$49$(__dollar3), trailer: __dollar4 });
        } else {
          return $panic();
        }
      } else {
        return $panic();
      }
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_63(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(4, 27, moonbitlang$lex$lib$parser$$yy_action_34);
}
function moonbitlang$lex$lib$parser$$yy_state_61(_lookahead) {
  switch (_lookahead) {
    case 21: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_62);
    }
    case 29: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_63);
    }
    case 0: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 29, moonbitlang$lex$lib$parser$$yy_action_28);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_48(_lookahead) {
  switch (_lookahead) {
    case 20: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_49);
    }
    case 33: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_59);
    }
    case 32: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_61);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_state_40(_lookahead) {
  switch (_lookahead) {
    case 3: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_41);
    }
    case 31: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_46);
    }
    case 30: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_48);
    }
    case 20: {
      return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 30, moonbitlang$lex$lib$parser$$yy_action_29);
    }
    default: {
      return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
    }
  }
}
function moonbitlang$lex$lib$parser$$yy_action_40(_last_pos, _args) {
  const _bind = moonbitlang$core$array$$ArrayView$op_get$9$(_args, 0)._0;
  if (_bind.$tag === 6) {
    const _YYObj__type_Lex = _bind;
    const __dollar1 = _YYObj__type_Lex._0;
    return new Error$moonbitlang$47$lex$47$lib$47$parser$46$YYObj__type_Lex$46$YYObj__type_Lex(__dollar1);
  } else {
    return $panic();
  }
}
function moonbitlang$lex$lib$parser$$yy_state_65(_lookahead) {
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$ReduceNoLookahead(2, 25, moonbitlang$lex$lib$parser$$yy_action_40);
}
function moonbitlang$lex$lib$parser$$yy_state_64(_lookahead) {
  if (_lookahead === 0) {
    return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_65);
  } else {
    return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
  }
}
function moonbitlang$lex$lib$parser$$yy_state_37(_lookahead) {
  _L: {
    switch (_lookahead) {
      case 25: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_38);
      }
      case 21: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_39);
      }
      case 28: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_40);
      }
      case 27: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Shift(moonbitlang$lex$lib$parser$$yy_state_64);
      }
      case 0: {
        return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 27, moonbitlang$lex$lib$parser$$yy_action_4);
      }
      case 3: {
        break _L;
      }
      case 20: {
        break _L;
      }
      default: {
        return $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Error;
      }
    }
  }
  return new $64$moonbitlang$47$lex$47$lib$47$parser$46$YYDecision$Reduce(0, 28, moonbitlang$lex$lib$parser$$yy_action_31);
}
function moonbitlang$lex$lib$parser$$lex_eoi(read_token, start_pos) {
  return moonbitlang$lex$lib$parser$$yy_parse$133$(read_token, start_pos, moonbitlang$lex$lib$parser$$yy_state_37, (_param9) => {
    if (_param9.$tag === 6) {
      const _YYObj__type_Lex = _param9;
      const _result = _YYObj__type_Lex._0;
      return _result;
    } else {
      return $panic();
    }
  });
}
function moonbitlang$lex$lib$parser$$parse_lex_from_string(input) {
  const lexbuf = moonbitlang$lex$lib$parser$$Lexbuf$from_string(input);
  return moonbitlang$lex$lib$parser$$lex_eoi(() => {
    const tok = moonbitlang$lex$lib$parser$$token(lexbuf);
    return { _0: tok, _1: undefined, _2: undefined };
  }, undefined);
}
function moonbitlang$core$builtin$$Show$output$68$(self, logger) {
  let _tmp;
  switch (self) {
    case 0: {
      _tmp = "EOI";
      break;
    }
    case 1: {
      _tmp = "\"eof\"";
      break;
    }
    case 2: {
      _tmp = "\"parse {\"";
      break;
    }
    case 3: {
      _tmp = "\"let\"";
      break;
    }
    case 4: {
      _tmp = "\"as\"";
      break;
    }
    case 5: {
      _tmp = "\"_\"";
      break;
    }
    case 6: {
      _tmp = "\"}\"";
      break;
    }
    case 7: {
      _tmp = "\"(\"";
      break;
    }
    case 8: {
      _tmp = "\")\"";
      break;
    }
    case 9: {
      _tmp = "\"[\"";
      break;
    }
    case 10: {
      _tmp = "\"]\"";
      break;
    }
    case 11: {
      _tmp = "\"=\"";
      break;
    }
    case 12: {
      _tmp = "\";\"";
      break;
    }
    case 13: {
      _tmp = "\"=>\"";
      break;
    }
    case 14: {
      _tmp = "\"|\"";
      break;
    }
    case 15: {
      _tmp = "\"*\"";
      break;
    }
    case 16: {
      _tmp = "\"+\"";
      break;
    }
    case 17: {
      _tmp = "\"?\"";
      break;
    }
    case 18: {
      _tmp = "\"-\"";
      break;
    }
    case 19: {
      _tmp = "\"^\"";
      break;
    }
    case 20: {
      _tmp = "RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE";
      break;
    }
    case 21: {
      _tmp = "LBRACE_CODE_RBRACE";
      break;
    }
    case 22: {
      _tmp = "LC_IDENT";
      break;
    }
    case 23: {
      _tmp = "CHAR";
      break;
    }
    default: {
      _tmp = "STRING";
    }
  }
  logger.method_0(logger.self, _tmp);
}
(() => {
})();
function moonbitlang$core$builtin$$Eq$op_equal$14$(_x_21, _x_22) {
  return moonbitlang$core$builtin$$Eq$op_equal$25$(_x_21.bits, _x_22.bits) && _x_21.len === _x_22.len;
}
function moonbitlang$lex$lib$util$bitset$$new(len) {
  return { bits: moonbitlang$core$array$$FixedArray$makei$6$((len + 32 | 0) / 32 | 0, (_i) => 0), len: len };
}
function moonbitlang$lex$lib$util$bitset$$Bitset$copy(self) {
  return { bits: moonbitlang$core$array$$FixedArray$copy$6$(self.bits), len: self.len };
}
function moonbitlang$lex$lib$util$bitset$$Bitset$get(self, index) {
  const _tmp = self.bits;
  const _tmp$2 = index / 32 | 0;
  $bound_check(_tmp, _tmp$2);
  return (_tmp[_tmp$2] & 1 << (index % 32 | 0)) !== 0;
}
function moonbitlang$lex$lib$util$bitset$$Bitset$set(self, index, value) {
  const t = index / 32 | 0;
  const _tmp = self.bits;
  const _tmp$2 = self.bits;
  $bound_check(_tmp$2, t);
  $bound_check(_tmp, t);
  _tmp[t] = _tmp$2[t] | moonbitlang$core$bool$$Bool$to_int(value) << index;
}
function moonbitlang$lex$lib$util$bitset$$Bitset$union(self, other) {
  return self.len !== other.len ? moonbitlang$core$abort$$abort$14$("") : { bits: moonbitlang$core$array$$FixedArray$makei$6$(self.bits.length, (i) => {
    const _tmp = self.bits;
    $bound_check(_tmp, i);
    const _tmp$2 = _tmp[i];
    const _tmp$3 = other.bits;
    $bound_check(_tmp$3, i);
    return _tmp$2 | _tmp$3[i];
  }), len: self.len };
}
function moonbitlang$core$builtin$$Eq$op_equal$47$(_x_274, _x_275) {
  return moonbitlang$core$builtin$$Eq$op_equal$128$(_x_274, _x_275);
}
function moonbitlang$core$builtin$$Hash$hash_combine$47$(self, hasher) {
  const _p = self.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = self[_p$2];
      const x = _p$3;
      moonbitlang$core$builtin$$Hasher$combine$12$(hasher, x);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Compare$compare$47$(self, other) {
  return moonbitlang$core$builtin$$Compare$compare$128$(self, other);
}
function moonbitlang$lex$lib$automaton$$TagState$new(size) {
  return moonbitlang$core$array$$Array$make$12$(size, undefined);
}
function moonbitlang$lex$lib$automaton$$TagState$copy(self) {
  return moonbitlang$core$array$$Array$copy$12$(self);
}
function moonbitlang$lex$lib$automaton$$TagState$update_by_tag(self, tag, rank) {
  const r = moonbitlang$core$array$$Array$op_get$12$(self, tag);
  if (r === undefined || moonbitlang$core$option$$Option$unwrap$6$(r) > rank) {
    moonbitlang$core$array$$Array$op_set$12$(self, tag, rank);
  }
  return self;
}
function moonbitlang$lex$lib$automaton$$TagState$update_by_tags(self, tags) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.length) {
      if (moonbitlang$lex$lib$util$bitset$$Bitset$get(tags, i)) {
        moonbitlang$lex$lib$automaton$$TagState$update_by_tag(self, i, -1);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return self;
}
function moonbitlang$lex$lib$automaton$$tagState_min(self_, other) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self_.length) {
      const _bind = moonbitlang$core$array$$Array$op_get$12$(self_, i);
      const _bind$2 = moonbitlang$core$array$$Array$op_get$12$(other, i);
      if (_bind === undefined) {
        return other;
      } else {
        if (_bind$2 === undefined) {
          return self_;
        } else {
          const _Some = _bind;
          const _r1 = _Some;
          const _Some$2 = _bind$2;
          const _r2 = _Some$2;
          if (_r1 !== _r2) {
            return _r1 < _r2 ? self_ : other;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return self_;
    }
  }
}
function moonbitlang$lex$lib$automaton$$DFA$new(code_blocks, captures, start_action) {
  const _bind = [];
  const _bind$2 = moonbitlang$core$builtin$$Map$new$97$(8);
  return { graph: _bind, end_nodes: _bind$2, code_blocks: code_blocks, captures: captures, start_action: start_action, node_count: 0 };
}
function moonbitlang$lex$lib$automaton$$DFA$new_node(self) {
  const id = self.node_count;
  self.node_count = self.node_count + 1 | 0;
  moonbitlang$core$array$$Array$push$87$(self.graph, []);
  return id;
}
function moonbitlang$lex$lib$automaton$$DFA$add_edge(self, from, e, action, to) {
  moonbitlang$core$array$$Array$push$119$(moonbitlang$core$array$$Array$op_get$87$(self.graph, from), { _0: e, _1: { _0: to, _1: action } });
}
function moonbitlang$lex$lib$automaton$$state_canonicalize(state, tag_count) {
  const mat = moonbitlang$core$array$$Array$makei$23$(tag_count, (_i) => []);
  const _bind = moonbitlang$core$immut$hashmap$$T$iter$40$(state);
  _bind((pair) => {
    const tags = pair._1;
    const _arr = tags;
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const rank = _arr[_i];
        if (!(rank === undefined)) {
          moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(mat, _i), moonbitlang$core$option$$Option$unwrap$6$(rank));
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 1;
  });
  const _p = mat.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = mat[_p$2];
      const x = _p$3;
      moonbitlang$core$array$$Array$op_set$23$(mat, _p$2, moonbitlang$core$sorted_set$$T$to_array$6$(moonbitlang$core$sorted_set$$from_iter$6$(moonbitlang$core$array$$Array$iter$6$(x))));
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = moonbitlang$core$immut$hashmap$$T$iter$40$(state);
  const new_state = moonbitlang$core$immut$hashmap$$from_iter$40$((_p$2) => _bind$2((_p$3) => {
    const tags = _p$3._1;
    const _p$4 = tags.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$5 = _tmp$2;
      if (_p$5 < _p$4) {
        const _p$6 = tags[_p$5];
        const tag = _p$5;
        const op = _p$6;
        moonbitlang$core$array$$Array$op_set$12$(tags, _p$5, moonbitlang$core$option$$Option$map$62$(op, (x) => {
          const _arr = moonbitlang$core$array$$Array$op_get$23$(mat, tag);
          const _len = _arr.length;
          let _tmp$3 = 0;
          while (true) {
            const _i = _tmp$3;
            if (_i < _len) {
              const y = _arr[_i];
              if (x === y) {
                return _i;
              }
              _tmp$3 = _i + 1 | 0;
              continue;
            } else {
              return moonbitlang$core$abort$$abort$6$("unreachable");
            }
          }
        }));
        _tmp$2 = _p$5 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$2({ _0: _p$3._0, _1: tags });
  }));
  return { _0: new_state, _1: mat };
}
function moonbitlang$lex$lib$automaton$$DFA$register_node(self, nfa, node, os) {
  const code_blocks = moonbitlang$core$builtin$$Iter$collect$6$(moonbitlang$core$builtin$$Iter$filter_map$130$(moonbitlang$core$immut$hashmap$$T$iter$40$(os), (x) => moonbitlang$core$builtin$$Map$get$62$(nfa.end_nodes, x._0.num)));
  if (!(code_blocks.length === 0)) {
    const _p = moonbitlang$core$array$$Array$op_get$6$(code_blocks, 0);
    let min_code_block;
    let _tmp = 0;
    let _tmp$2 = _p;
    while (true) {
      const _p$2 = _tmp;
      const _p$3 = _tmp$2;
      if (_p$2 < code_blocks.length) {
        const _tmp$3 = _p$2 + 1 | 0;
        const _tmp$4 = moonbitlang$core$math$$minimum$6$(_p$3, moonbitlang$core$array$$Array$op_get$6$(code_blocks, _p$2));
        _tmp = _tmp$3;
        _tmp$2 = _tmp$4;
        continue;
      } else {
        min_code_block = _p$3;
        break;
      }
    }
    const _bind = moonbitlang$core$immut$hashmap$$T$iter$40$(os);
    const end_nodes = moonbitlang$core$builtin$$Iter$to_array$45$((_p$2) => _bind((_p$3) => moonbitlang$core$builtin$$Eq$op_equal$64$(moonbitlang$core$builtin$$Map$get$62$(nfa.end_nodes, _p$3._0.num), min_code_block) ? _p$2(_p$3) : 1));
    if (end_nodes.length === 1) {
      const tagState = moonbitlang$core$array$$Array$op_get$45$(end_nodes, 0)._1;
      const _p$2 = moonbitlang$core$array$$Array$op_get$88$(nfa.captures, min_code_block);
      const _p$3 = new Array(_p$2.length);
      const _p$4 = _p$2.length;
      let _tmp$3 = 0;
      while (true) {
        const _p$5 = _tmp$3;
        if (_p$5 < _p$4) {
          const _p$6 = _p$2[_p$5];
          const _param180 = _p$6;
          const _x = _param180._1;
          const _begin = _x._0;
          const _end = _x._1;
          _p$3[_p$5] = { _0: { _0: _begin, _1: moonbitlang$core$option$$Option$unwrap$6$(moonbitlang$core$array$$Array$op_get$12$(tagState, _begin)) }, _1: { _0: _end, _1: moonbitlang$core$option$$Option$unwrap$6$(moonbitlang$core$array$$Array$op_get$12$(tagState, _end)) } };
          _tmp$3 = _p$5 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const min_tags = _p$3;
      moonbitlang$core$builtin$$Map$set$97$(self.end_nodes, node, { _0: min_code_block, _1: min_tags });
      return;
    } else {
      moonbitlang$core$abort$$abort$1$("error");
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$lex$lib$automaton$$get_eps_closure$46$get_bits$124$5(_env, n) {
  const result = _env._1;
  const empty_bits = _env._0;
  return moonbitlang$core$builtin$$Map$get_or_default$42$(result, n, empty_bits);
}
function moonbitlang$lex$lib$automaton$$NFA$get_eps_closure(self) {
  const _p = self.graph;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const x = _p$5;
      const empty_bits = moonbitlang$lex$lib$util$bitset$$new(self.tag_count);
      const result = moonbitlang$core$builtin$$Map$from_array$42$([{ _0: x, _1: empty_bits }]);
      const _env = { _0: empty_bits, _1: result };
      const queue = moonbitlang$core$queue$$from_array$13$([x]);
      while (true) {
        if (!(queue.length === 0)) {
          const o = moonbitlang$core$queue$$T$unsafe_pop$13$(queue);
          const o_bits = moonbitlang$lex$lib$automaton$$get_eps_closure$46$get_bits$124$5(_env, o);
          const _bind = moonbitlang$core$immut$sorted_set$$T$iter$29$(o.eps);
          _bind((e) => {
            const _u = e._0;
            const _tag = e._1;
            let new_u_bits = moonbitlang$lex$lib$util$bitset$$Bitset$union(moonbitlang$lex$lib$automaton$$get_eps_closure$46$get_bits$124$5(_env, _u), o_bits);
            if (!(_tag === undefined)) {
              new_u_bits = moonbitlang$lex$lib$util$bitset$$Bitset$copy(new_u_bits);
              moonbitlang$lex$lib$util$bitset$$Bitset$set(new_u_bits, moonbitlang$core$option$$Option$unwrap$6$(_tag), true);
            }
            if (moonbitlang$core$builtin$$op_notequal$78$(new_u_bits, moonbitlang$core$builtin$$Map$get$42$(result, _u))) {
              moonbitlang$core$builtin$$Map$set$42$(result, _u, new_u_bits);
              moonbitlang$core$queue$$T$push$13$(queue, _u);
            }
            return 1;
          });
          continue;
        } else {
          break;
        }
      }
      _p$2[_p$4] = moonbitlang$core$immut$hashmap$$from_iter$42$(moonbitlang$core$builtin$$Map$iter$42$(result));
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p$2;
}
function moonbitlang$lex$lib$automaton$$from_nfa$46$get_id$124$105(_env, state) {
  const node_map = _env._3;
  const dfa = _env._2;
  const queue = _env._1;
  const nfa = _env._0;
  return moonbitlang$core$builtin$$Map$get_or_init$93$(node_map, state, () => {
    const node = moonbitlang$lex$lib$automaton$$DFA$new_node(dfa);
    moonbitlang$lex$lib$automaton$$DFA$register_node(dfa, nfa, node, state);
    moonbitlang$core$queue$$T$push$19$(queue, state);
    return node;
  });
}
function moonbitlang$lex$lib$automaton$$from_nfa$46$42$func$124$410(_env, _p) {
  const _bind = _env._1;
  const _tag_state = _env._0;
  return _bind((_p$2) => {
    const _cset = _p$2._0;
    const _x = _p$2._1;
    const _target = _x._0;
    const _tag = _x._1;
    return _p({ _0: _cset, _1: { _0: _target, _1: _tag_state, _2: _tag } });
  });
}
function moonbitlang$lex$lib$automaton$$from_nfa$46$add_tran$124$130(new_nfa_trans, cset, targets) {
  if (!moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$is_empty(cset)) {
    moonbitlang$core$array$$Array$push$117$(new_nfa_trans, { _0: cset, _1: targets });
    return;
  } else {
    return;
  }
}
function moonbitlang$lex$lib$automaton$$DFA$from_nfa(nfa) {
  const eps_closure = moonbitlang$lex$lib$automaton$$NFA$get_eps_closure(nfa);
  const initial = moonbitlang$core$array$$Array$op_get$20$(eps_closure, 0);
  const _bind = moonbitlang$core$immut$hashmap$$T$iter$42$(initial);
  const initial_state = moonbitlang$core$immut$hashmap$$from_iter$40$((_p) => _bind((_p$2) => {
    const _x = _p$2._0;
    const _y = _p$2._1;
    return _p({ _0: _x, _1: moonbitlang$lex$lib$automaton$$TagState$update_by_tags(moonbitlang$lex$lib$automaton$$TagState$new(nfa.tag_count), _y) });
  }));
  const _bind$2 = moonbitlang$lex$lib$automaton$$state_canonicalize(initial_state, nfa.tag_count);
  const _initial_state = _bind$2._0;
  const _start_action = _bind$2._1;
  const _p = nfa.captures;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const x = _p$5;
      const _p$6 = new Array(x.length);
      const _p$7 = x.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$8 = _tmp$2;
        if (_p$8 < _p$7) {
          const _p$9 = x[_p$8];
          const y = _p$9;
          _p$6[_p$8] = y._0;
          _tmp$2 = _p$8 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _p$2[_p$4] = _p$6;
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const captures = _p$2;
  const dfa = moonbitlang$lex$lib$automaton$$DFA$new(nfa.code_blocks, captures, _start_action);
  const node_map = moonbitlang$core$builtin$$Map$new$93$(8);
  const queue = moonbitlang$core$queue$$new$19$();
  const _env = { _0: nfa, _1: queue, _2: dfa, _3: node_map };
  moonbitlang$lex$lib$automaton$$from_nfa$46$get_id$124$105(_env, _initial_state);
  while (true) {
    if (!(queue.length === 0)) {
      const cur_state = moonbitlang$core$option$$Option$unwrap$19$(moonbitlang$core$queue$$T$pop$19$(queue));
      const from_n = moonbitlang$core$option$$Option$unwrap$6$(moonbitlang$core$builtin$$Map$get$93$(node_map, cur_state));
      const _bind$3 = moonbitlang$core$immut$hashmap$$T$iter$40$(cur_state);
      const char_set_by_nfa_target = moonbitlang$core$builtin$$Map$from_array$98$([]);
      const _p$4 = (nfa_tran) => {
        const _cset = nfa_tran._0;
        const _target = nfa_tran._1;
        const _bind$4 = moonbitlang$core$builtin$$Map$get$98$(char_set_by_nfa_target, _target);
        if (_bind$4 === undefined) {
          moonbitlang$core$builtin$$Map$op_set$98$(char_set_by_nfa_target, _target, _cset);
        } else {
          const _Some = _bind$4;
          const _old_cset = _Some;
          moonbitlang$core$builtin$$Map$op_set$98$(char_set_by_nfa_target, _target, moonbitlang$core$builtin$$Add$op_add$91$(_old_cset, _cset));
        }
        return 1;
      };
      _bind$3((_p$5) => {
        const _nfa_node = _p$5._0;
        const _tag_state = _p$5._1;
        const _bind$4 = moonbitlang$core$array$$Array$iter$120$(_nfa_node.trans);
        const _env$2 = { _0: _tag_state, _1: _bind$4 };
        return moonbitlang$lex$lib$automaton$$from_nfa$46$42$func$124$410(_env$2, _p$4);
      });
      const nfa_trans = { val: [] };
      const all_char_set = { val: moonbitlang$lex$lib$util$eof_char_set$$empty };
      const _bind$4 = moonbitlang$core$builtin$$Map$iter2$98$(char_set_by_nfa_target);
      _bind$4((target, char_set) => {
        const targets = new $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Node$2$($64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$2$, 1, target);
        const new_nfa_trans = [];
        moonbitlang$lex$lib$automaton$$from_nfa$46$add_tran$124$130(new_nfa_trans, moonbitlang$core$builtin$$Sub$op_sub$91$(char_set, all_char_set.val), targets);
        const _arr = nfa_trans.val;
        const _len = _arr.length;
        let _tmp$2 = 0;
        while (true) {
          const _i = _tmp$2;
          if (_i < _len) {
            const nfa_tran = _arr[_i];
            const _old_cset = nfa_tran._0;
            const _old_targets = nfa_tran._1;
            moonbitlang$lex$lib$automaton$$from_nfa$46$add_tran$124$130(new_nfa_trans, moonbitlang$core$builtin$$BitAnd$land$91$(_old_cset, char_set), moonbitlang$core$builtin$$Add$op_add$32$(_old_targets, targets));
            moonbitlang$lex$lib$automaton$$from_nfa$46$add_tran$124$130(new_nfa_trans, moonbitlang$core$builtin$$Sub$op_sub$91$(_old_cset, char_set), _old_targets);
            _tmp$2 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        all_char_set.val = moonbitlang$core$builtin$$Add$op_add$91$(all_char_set.val, char_set);
        nfa_trans.val = new_nfa_trans;
        return 1;
      });
      const next_states = moonbitlang$core$builtin$$Map$new$94$(8);
      const _arr = nfa_trans.val;
      const _len = _arr.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len) {
          const tran = _arr[_i];
          const _cset = tran._0;
          const _targets = tran._1;
          const _bind$5 = moonbitlang$core$immut$sorted_set$$T$iter$28$(_targets);
          _bind$5((target) => {
            const _step_node = target._0;
            const _from_tagState = target._1;
            const _tag = target._2;
            const state_map = { val: moonbitlang$core$option$$Option$or_else$19$(moonbitlang$core$builtin$$Map$get$94$(next_states, _cset), () => $64$moonbitlang$47$core$47$immut$47$hashmap$46$T$Empty$8$) };
            if (_tag === undefined) {
              const _bind$6 = moonbitlang$core$immut$hashmap$$T$iter$42$(moonbitlang$core$array$$Array$op_get$20$(eps_closure, _step_node.num));
              _bind$6((pair) => {
                const _eps_node = pair._0;
                const _bits = pair._1;
                const upd_tagState = moonbitlang$lex$lib$automaton$$TagState$update_by_tags(moonbitlang$lex$lib$automaton$$TagState$copy(_from_tagState), _bits);
                const old_tagState = moonbitlang$core$immut$hashmap$$T$op_get$40$(state_map.val, _eps_node);
                const new_tagState = moonbitlang$core$option$$Option$is_empty$47$(old_tagState) ? upd_tagState : moonbitlang$lex$lib$automaton$$tagState_min(upd_tagState, moonbitlang$core$option$$Option$unwrap$47$(old_tagState));
                state_map.val = moonbitlang$core$immut$hashmap$$T$add$40$(state_map.val, _eps_node, new_tagState);
                return 1;
              });
              moonbitlang$core$builtin$$Map$op_set$94$(next_states, _cset, state_map.val);
            } else {
              moonbitlang$core$abort$$abort$1$("error");
            }
            return 1;
          });
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const trans = moonbitlang$core$builtin$$Iter$to_array$118$(moonbitlang$core$builtin$$Map$iter$94$(next_states));
      const _len$2 = trans.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$2) {
          const tran = trans[_i];
          const _cset = tran._0;
          const _state = tran._1;
          const _bind$5 = moonbitlang$lex$lib$automaton$$state_canonicalize(_state, nfa.tag_count);
          const _state$2 = _bind$5._0;
          const _action = _bind$5._1;
          const to_n = moonbitlang$lex$lib$automaton$$from_nfa$46$get_id$124$105(_env, _state$2);
          moonbitlang$lex$lib$automaton$$DFA$add_edge(dfa, from_n, _cset, _action, to_n);
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return dfa;
}
function moonbitlang$lex$lib$automaton$$NFA$new_nfa() {
  const _bind = [];
  const _bind$2 = [];
  const _bind$3 = moonbitlang$core$builtin$$Map$new$62$(8);
  const _bind$4 = [];
  return { graph: _bind, end_nodes: _bind$3, code_blocks: _bind$2, captures: _bind$4, node_count: 0, tag_count: 0 };
}
function moonbitlang$lex$lib$automaton$$NFA$new_node(self) {
  const new_id = self.node_count;
  self.node_count = self.node_count + 1 | 0;
  const node = { num: new_id, eps: $64$moonbitlang$47$core$47$immut$47$sorted_set$46$T$Empty$1$, trans: [] };
  moonbitlang$core$array$$Array$push$13$(self.graph, node);
  return (new_id + 1 | 0) === self.graph.length ? node : $panic();
}
function moonbitlang$lex$lib$automaton$$NFA$add_edge(self, from, s, tag, to) {
  if (s.$tag === 0) {
    from.eps = moonbitlang$core$immut$sorted_set$$T$add$29$(from.eps, { _0: to, _1: tag });
    return;
  } else {
    const _EChar = s;
    const _c = _EChar._0;
    moonbitlang$core$array$$Array$push$120$(from.trans, { _0: _c, _1: { _0: to, _1: tag } });
    return;
  }
}
function moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self, node, re, name2tag) {
  let _tmp = self;
  let _tmp$2 = node;
  let _tmp$3 = re;
  let _tmp$4 = name2tag;
  _L: while (true) {
    const self$2 = _tmp;
    const node$2 = _tmp$2;
    const re$2 = _tmp$3;
    const name2tag$2 = _tmp$4;
    switch (re$2.$tag) {
      case 0: {
        const next_node = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, new $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(moonbitlang$lex$lib$util$eof_char_set$$any), undefined, next_node);
        return next_node;
      }
      case 1: {
        const next_node$2 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, new $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(moonbitlang$lex$lib$util$eof_char_set$$eof), undefined, next_node$2);
        return next_node$2;
      }
      case 3: {
        const _ReChar = re$2;
        const _c = _ReChar._0;
        const next_node$3 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, new $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(moonbitlang$lex$lib$util$eof_char_set$$singleton(_c)), undefined, next_node$3);
        return next_node$3;
      }
      case 2: {
        const _ReStr = re$2;
        const _s = _ReStr._0;
        const next_node$4 = { val: node$2 };
        const last_node = { val: node$2 };
        const _bind = moonbitlang$core$string$$String$iter(_s);
        _bind((c) => {
          next_node$4.val = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
          moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, last_node.val, new $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(moonbitlang$lex$lib$util$eof_char_set$$singleton(c)), undefined, next_node$4.val);
          last_node.val = next_node$4.val;
          return 1;
        });
        return next_node$4.val;
      }
      case 4: {
        const _CharSet = re$2;
        const _cset = _CharSet._0;
        const next_node$5 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, new $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$EChar(_cset), undefined, next_node$5);
        return next_node$5;
      }
      case 6: {
        const _Option = re$2;
        const _re = _Option._0;
        const new_node = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        const final_ = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, new_node, _re, name2tag$2);
        const new_final = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, new_node);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, final_, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, new_final);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, new_final);
        return new_final;
      }
      case 5: {
        const _Repetition = re$2;
        const _re$2 = _Repetition._0;
        const new_node$2 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        const final_$2 = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, new_node$2, _re$2, name2tag$2);
        const new_final$2 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, new_node$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, final_$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, new_final$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, new_final$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, node$2);
        return new_final$2;
      }
      case 8: {
        const _Concat = re$2;
        const _re1 = _Concat._0;
        const _re2 = _Concat._1;
        const mid = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, node$2, _re1, name2tag$2);
        _tmp$2 = mid;
        _tmp$3 = _re2;
        continue _L;
      }
      case 7: {
        const _Alter = re$2;
        const _re1$2 = _Alter._0;
        const _re2$2 = _Alter._1;
        const final_1 = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, node$2, _re1$2, name2tag$2);
        const final_2 = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, node$2, _re2$2, name2tag$2);
        const final_$3 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, final_1, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, final_$3);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, final_2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, undefined, final_$3);
        return final_$3;
      }
      case 9: {
        const _Capture = re$2;
        const _re$3 = _Capture._0;
        const _name = _Capture._1;
        const start = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        const final_$4 = moonbitlang$lex$lib$automaton$$NFA$new_node(self$2);
        const tail = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self$2, start, _re$3, name2tag$2);
        const _bind$2 = name2tag$2(_name);
        const _begin_tag = _bind$2._0;
        const _end_tag = _bind$2._1;
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, node$2, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, _begin_tag, start);
        moonbitlang$lex$lib$automaton$$NFA$add_edge(self$2, tail, $64$moonbitlang$47$lex$47$lib$47$automaton$46$Input$Eps, _end_tag, final_$4);
        return final_$4;
      }
      default: {
        return moonbitlang$core$abort$$abort$13$("Named should be resolved before building NFA");
      }
    }
  }
}
function moonbitlang$lex$lib$automaton$$NFA$register_regex(self, node, re, code_block, name2tag) {
  const final_ = moonbitlang$lex$lib$automaton$$NFA$register_regex_rec(self, node, re, name2tag);
  const id = self.code_blocks.length;
  moonbitlang$core$array$$Array$push$2$(self.code_blocks, code_block);
  moonbitlang$core$builtin$$Map$set$62$(self.end_nodes, final_.num, id);
}
function moonbitlang$lex$lib$automaton$$NFA$from_rule(rule) {
  const nfa = moonbitlang$lex$lib$automaton$$NFA$new_nfa();
  const node = moonbitlang$lex$lib$automaton$$NFA$new_node(nfa);
  const _arr = rule.patterns;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const pattern = _arr[_i];
      const _re = pattern._0;
      const _code_block = pattern._1;
      const _p = moonbitlang$lex$lib$type$$Regex$get_capture_names(_re);
      const _p$2 = new Array(_p.length);
      const _p$3 = _p.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$4 = _tmp$2;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          const name = _p$5;
          const begin_tag = nfa.tag_count;
          const end_tag = nfa.tag_count + 1 | 0;
          nfa.tag_count = nfa.tag_count + 2 | 0;
          _p$2[_p$4] = { _0: name, _1: { _0: begin_tag, _1: end_tag } };
          _tmp$2 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const capture_names = _p$2;
      const map = moonbitlang$core$builtin$$Map$from_array$99$(capture_names);
      moonbitlang$lex$lib$automaton$$NFA$register_regex(nfa, node, _re, _code_block, (x) => moonbitlang$core$option$$Option$unwrap$75$(moonbitlang$core$builtin$$Map$get$99$(map, x)));
      moonbitlang$core$array$$Array$push$88$(nfa.captures, capture_names);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nfa;
}
function moonbitlang$lex$lib$automaton$$DFA$from_rule(rule) {
  return moonbitlang$lex$lib$automaton$$DFA$from_nfa(moonbitlang$lex$lib$automaton$$NFA$from_rule(rule));
}
function moonbitlang$core$builtin$$Hash$hash_combine$13$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self.num);
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$from_string(content) {
  return { content: content, pos: 0 };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$next(self) {
  if (self.pos < self.content.length) {
    const _tmp = self.content;
    const _tmp$2 = self.pos;
    $bound_check(_tmp, _tmp$2);
    const ch = _tmp.charCodeAt(_tmp$2);
    self.pos = self.pos + 1 | 0;
    return ch;
  } else {
    return -1;
  }
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$substring(self, start, end) {
  return moonbitlang$core$string$$String$substring(self.content, start, end);
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$LexEngine$run(self, lexbuf) {
  let state = 0;
  let tagState = [];
  let longest_match = undefined;
  const _arr = self.start_tags;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const tag = _arr[_i];
      while (true) {
        if (tagState.length <= tag) {
          moonbitlang$core$array$$Array$push$23$(tagState, []);
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(tagState, tag), lexbuf.pos);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (state !== -1) {
      const _bind = moonbitlang$core$array$$Array$op_get$22$(self.end_nodes, state);
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _t = _Some;
        longest_match = { _0: _t._0, _1: lexbuf.pos, _2: state, _3: tagState };
      }
      const _bind$2 = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$next(lexbuf);
      let b;
      if (_bind$2 === -1) {
        b = -1;
      } else {
        const _Some = _bind$2;
        const _b = _Some;
        b = _b;
      }
      const _func = moonbitlang$core$array$$Array$op_get$86$(self.graph, state);
      const next = _func(b);
      state = next._0;
      const new_tagState = [];
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < next._1.length) {
          moonbitlang$core$array$$Array$push$23$(new_tagState, []);
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < moonbitlang$core$array$$Array$op_get$23$(next._1, i).length) {
              const t = moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(next._1, i), j);
              if (t === -1) {
                moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(new_tagState, i), lexbuf.pos);
              } else {
                moonbitlang$core$array$$Array$push$6$(moonbitlang$core$array$$Array$op_get$23$(new_tagState, i), moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(tagState, i), t));
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      tagState = new_tagState;
      continue;
    } else {
      break;
    }
  }
  const _bind = longest_match;
  if (_bind === undefined) {
    return { _0: self.code_blocks_n, _1: [] };
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _index = _x._0;
    const _pos = _x._1;
    const _state = _x._2;
    const _tagState = _x._3;
    lexbuf.pos = _pos;
    const _p = moonbitlang$core$option$$Option$unwrap$69$(moonbitlang$core$array$$Array$op_get$22$(self.end_nodes, _state))._1;
    const _p$2 = new Array(_p.length);
    const _p$3 = _p.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$4 = _tmp$2;
      if (_p$4 < _p$3) {
        const _p$5 = _p[_p$4];
        const _param69 = _p$5;
        const _x$2 = _param69._0;
        const _b_t = _x$2._0;
        const _b_r = _x$2._1;
        const _x$3 = _param69._1;
        const _e_t = _x$3._0;
        const _e_r = _x$3._1;
        _p$2[_p$4] = { _0: moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(_tagState, _b_t), _b_r), _1: moonbitlang$core$array$$Array$op_get$6$(moonbitlang$core$array$$Array$op_get$23$(_tagState, _e_t), _e_r) };
        _tmp$2 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const captures = _p$2;
    return { _0: _index, _1: captures };
  }
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_0(input) {
  return input >= 0 && input <= 35 ? { _0: 1, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 36 ? { _0: 2, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_1 } : input >= 37 && input <= 122 ? { _0: 1, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 123 ? { _0: 4, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 124 ? { _0: 1, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 125 ? { _0: 3, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 126 && input <= 1114111 ? { _0: 1, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_1(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_2(input) {
  return input >= 65 && input <= 90 ? { _0: 5, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 5, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 100 ? { _0: 5, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 101 ? { _0: 6, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 102 && input <= 114 ? { _0: 5, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 115 ? { _0: 7, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 116 && input <= 122 ? { _0: 5, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_3(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_4(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_5(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_6(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 109 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 110 ? { _0: 9, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 111 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_7(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 115 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 116 ? { _0: 10, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 117 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_8(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_9(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 99 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 100 ? { _0: 11, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 101 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_10(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 97 ? { _0: 12, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 98 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_11(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 111 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 112 ? { _0: 13, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 113 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_12(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 113 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 114 ? { _0: 14, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 115 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_13(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 110 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 111 ? { _0: 15, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 112 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_14(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 115 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 116 ? { _0: 16, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 117 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_15(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 114 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 115 ? { _0: 17, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_3 } : input >= 116 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_16(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 111 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 112 ? { _0: 18, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 113 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_17(input) {
  return input === 40 ? { _0: 19, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_18(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 110 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 111 ? { _0: 20, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_2 } : input >= 112 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_19(input) {
  return input === 9 ? { _0: 22, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input === 32 ? { _0: 22, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input >= 65 && input <= 90 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input === 95 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 97 && input <= 122 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_20(input) {
  return input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 114 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 115 ? { _0: 23, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_3 } : input >= 116 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_21(input) {
  return input === 9 ? { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 } : input === 32 ? { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 } : input === 41 ? { _0: 26, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_7 } : input >= 48 && input <= 57 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 65 && input <= 90 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input === 95 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 97 && input <= 122 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_22(input) {
  return input === 9 ? { _0: 22, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input === 32 ? { _0: 22, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input >= 65 && input <= 90 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input === 95 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 97 && input <= 122 ? { _0: 21, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_23(input) {
  return input === 40 ? { _0: 19, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_4 } : input >= 48 && input <= 57 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 65 && input <= 90 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input === 95 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : input >= 97 && input <= 122 ? { _0: 8, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_0 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_24(input) {
  return input === 9 ? { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 } : input === 32 ? { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 } : input === 41 ? { _0: 26, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_7 } : input >= 48 && input <= 57 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 65 && input <= 90 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input === 95 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : input >= 97 && input <= 122 ? { _0: 24, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_5 } : { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_25(input) {
  switch (input) {
    case 9: {
      return { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 };
    }
    case 32: {
      return { _0: 25, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_6 };
    }
    case 41: {
      return { _0: 26, _1: moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_tag_action_7 };
    }
    default: {
      return { _0: -1, _1: [] };
    }
  }
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace_state_26(input) {
  return { _0: -1, _1: [] };
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace(subst, lexbuf) {
  let _tmp = subst;
  let _tmp$2 = lexbuf;
  _L: while (true) {
    const subst$2 = _tmp;
    const lexbuf$2 = _tmp$2;
    const _bind = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$LexEngine$run(moonbitlang$lex$lib$codegen$internal$codeblock_parser$$__mbtlex_engine_scan_codeblock_rbrace, lexbuf$2);
    const _x = _bind._0;
    switch (_x) {
      case 0: {
        moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace(subst$2, lexbuf$2);
        continue _L;
      }
      case 1: {
        return;
      }
      case 2: {
        const ___mbtlex_captures = _bind._1;
        const _bind$2 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 0);
        const __start_pos_of_t = _bind$2._0;
        const __end_pos_of_t = _bind$2._1;
        moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t, __end_pos_of_t);
        const _bind$3 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 1);
        const __start_pos_of_t1 = _bind$3._0;
        const __end_pos_of_t1 = _bind$3._1;
        const t1 = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t1, __end_pos_of_t1);
        const _bind$4 = moonbitlang$core$array$$Array$op_get$75$(___mbtlex_captures, 2);
        const __start_pos_of_t2 = _bind$4._0;
        const __end_pos_of_t2 = _bind$4._1;
        const t2 = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$substring(lexbuf$2, __start_pos_of_t2, __end_pos_of_t2);
        let _tmp$3;
        switch (t1) {
          case "startpos": {
            _tmp$3 = new $64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$StartPosOf(t2);
            break;
          }
          case "endpos": {
            _tmp$3 = new $64$moonbitlang$47$lex$47$lib$47$codegen$47$internal$47$codeblock_parser$46$SubstItemDesc$EndPosOf(t2);
            break;
          }
          default: {
            _tmp$3 = $panic();
          }
        }
        moonbitlang$core$array$$Array$push$116$(subst$2, { start: __start_pos_of_t, end: __end_pos_of_t, desc: _tmp$3 });
        continue _L;
      }
      case 3: {
        continue _L;
      }
      case 4: {
        continue _L;
      }
      case 5: {
        return;
      }
      default: {
        moonbitlang$core$abort$$abort$1$("lex: fail to match");
        return;
      }
    }
  }
}
function moonbitlang$lex$lib$codegen$internal$codeblock_parser$$parse_codeblock(str) {
  const lexbuf = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$Lexbuf$from_string(str);
  const subst = [];
  moonbitlang$lex$lib$codegen$internal$codeblock_parser$$scan_codeblock_rbrace(subst, lexbuf);
  return subst;
}
function moonbitlang$lex$lib$codegen$$group_trans$46$42$func$124$137(_env, _p) {
  const _state = _env._2;
  const _bind = _env._1;
  const action = _env._0;
  return _bind((_p$2) => {
    const _min = _p$2._0;
    const _max = _p$2._1;
    const _bind$2 = moonbitlang$lex$lib$util$eof_char_set$$EofChar$repr(_min);
    let _tmp;
    if (_bind$2.$tag === 0) {
      _tmp = -1;
    } else {
      const _Char = _bind$2;
      const _c = _Char._0;
      _tmp = _c;
    }
    const _tmp$2 = _tmp;
    const _bind$3 = moonbitlang$lex$lib$util$eof_char_set$$EofChar$repr(_max);
    let _tmp$3;
    if (_bind$3.$tag === 0) {
      _tmp$3 = -1;
    } else {
      const _Char = _bind$3;
      const _c = _Char._0;
      _tmp$3 = _c;
    }
    return _p({ _0: { _0: _tmp$2, _1: _tmp$3 }, _1: { _0: _state, _1: action } });
  });
}
function moonbitlang$lex$lib$codegen$$group_trans(trans) {
  const char_set_by_state = moonbitlang$core$builtin$$Map$from_array$95$([]);
  const tag_action_by_state = moonbitlang$core$builtin$$Map$from_array$96$([]);
  const _len = trans.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const tran = trans[_i];
      const _char_set = tran._0;
      const _x = tran._1;
      const _next_state = _x._0;
      const _tag_action = _x._1;
      moonbitlang$core$builtin$$Map$op_set$96$(tag_action_by_state, _next_state, _tag_action);
      const _bind = moonbitlang$core$builtin$$Map$get$95$(char_set_by_state, _next_state);
      if (_bind === undefined) {
        moonbitlang$core$builtin$$Map$op_set$95$(char_set_by_state, _next_state, _char_set);
      } else {
        const _Some = _bind;
        const _existing_char_set = _Some;
        moonbitlang$core$builtin$$Map$op_set$95$(char_set_by_state, _next_state, moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$union(_char_set, _existing_char_set));
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = moonbitlang$core$builtin$$Map$iter$95$(char_set_by_state);
  const result = moonbitlang$core$builtin$$Iter$to_array$15$((_p) => _bind((_p$2) => {
    const _state = _p$2._0;
    const _char_set = _p$2._1;
    const action = moonbitlang$core$option$$Option$unwrap$101$(moonbitlang$core$builtin$$Map$get$96$(tag_action_by_state, _state));
    const _bind$2 = moonbitlang$lex$lib$util$eof_char_set$$EofCharSet$iter_ranges(_char_set);
    const _env = { _0: action, _1: _bind$2, _2: _state };
    return moonbitlang$lex$lib$codegen$$group_trans$46$42$func$124$137(_env, _p);
  }));
  moonbitlang$core$array$$Array$sort$15$(result);
  return result;
}
function moonbitlang$lex$lib$codegen$$rewrite_codeblock(codeblock, subst) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(0);
  let last_index = 0;
  const _len = subst.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = subst[_i];
      moonbitlang$core$builtin$$Logger$write_substring$24$(buf, codeblock, last_index, item.start - last_index | 0);
      const _bind = item.desc;
      if (_bind.$tag === 0) {
        const _StartPosOf = _bind;
        const _name = _StartPosOf._0;
        moonbitlang$core$builtin$$Logger$write_string$24$(buf, `_start_pos_of_${_name}`);
      } else {
        const _EndPosOf = _bind;
        const _name = _EndPosOf._0;
        moonbitlang$core$builtin$$Logger$write_string$24$(buf, `_end_pos_of_${_name}`);
      }
      last_index = item.end;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (last_index < codeblock.length) {
    moonbitlang$core$builtin$$Logger$write_substring$24$(buf, codeblock, last_index, codeblock.length - last_index | 0);
  }
  return buf.val;
}
function moonbitlang$lex$lib$codegen$$codegen_rule$46$get_tag_action_id$124$12(_env, tag_action) {
  const next_tag_action_id = _env._1;
  const tag_action_dedup = _env._0;
  const _bind = moonbitlang$core$sorted_map$$T$get$52$(tag_action_dedup, tag_action);
  if (_bind === undefined) {
    const id = next_tag_action_id.val;
    moonbitlang$core$sorted_map$$T$op_set$52$(tag_action_dedup, tag_action, id);
    next_tag_action_id.val = next_tag_action_id.val + 1 | 0;
    return id;
  } else {
    const _Some = _bind;
    const _id = _Some;
    return _id;
  }
}
function moonbitlang$lex$lib$codegen$$codegen_rule(rule) {
  const dfa = moonbitlang$lex$lib$automaton$$DFA$from_rule(rule);
  const _p = rule.name;
  const engine = `__mbtlex_engine_${_p}`;
  const next_tag_action_row_id = { val: 0 };
  const tag_action_row_dedup = moonbitlang$core$sorted_map$$new$51$();
  const next_tag_action_id = { val: 0 };
  const tag_action_dedup = moonbitlang$core$sorted_map$$new$52$();
  const _env = { _0: tag_action_dedup, _1: next_tag_action_id };
  const states_code = moonbitlang$core$builtin$$StringBuilder$new(0);
  const graph_code = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Logger$write_string$24$(graph_code, "[");
  const _arr = dfa.graph;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const trans = _arr[_i];
      const _p$2 = rule.name;
      moonbitlang$core$builtin$$Logger$write_string$24$(states_code, `fn ${_p$2}_state_${moonbitlang$core$builtin$$Show$to_string$6$(_i)}(input : LexInput) -> (LexState, LexTagAction) {\n  match input {\n`);
      const _arr$2 = moonbitlang$lex$lib$codegen$$group_trans(trans);
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i$2 = _tmp$2;
        if (_i$2 < _len$2) {
          const tran = _arr$2[_i$2];
          const _x = tran._0;
          const _first_char = _x._0;
          const _last_char = _x._1;
          const _x$2 = tran._1;
          const _next_state = _x$2._0;
          const _tag_action = _x$2._1;
          if (_first_char === _last_char) {
            const _tmp$3 = moonbitlang$core$builtin$$Show$to_string$6$(_first_char);
            const _tmp$4 = moonbitlang$core$builtin$$Show$to_string$6$(_next_state);
            const _p$3 = rule.name;
            moonbitlang$core$builtin$$Logger$write_string$24$(states_code, `    ${_tmp$3} => (${_tmp$4}, ${_p$3}_tag_action_${moonbitlang$core$builtin$$Show$to_string$6$(moonbitlang$lex$lib$codegen$$codegen_rule$46$get_tag_action_id$124$12(_env, _tag_action))})\n`);
          } else {
            const _tmp$3 = moonbitlang$core$builtin$$Show$to_string$6$(_first_char);
            const _tmp$4 = moonbitlang$core$builtin$$Show$to_string$6$(_last_char);
            const _tmp$5 = moonbitlang$core$builtin$$Show$to_string$6$(_next_state);
            const _p$3 = rule.name;
            moonbitlang$core$builtin$$Logger$write_string$24$(states_code, `    ${_tmp$3}..=${_tmp$4} => (${_tmp$5}, ${_p$3}_tag_action_${moonbitlang$core$builtin$$Show$to_string$6$(moonbitlang$lex$lib$codegen$$codegen_rule$46$get_tag_action_id$124$12(_env, _tag_action))})\n`);
          }
          _tmp$2 = _i$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$24$(states_code, "    _ => (-1, [])\n");
      moonbitlang$core$builtin$$Logger$write_string$24$(states_code, "  }\n}\n");
      const _p$3 = rule.name;
      moonbitlang$core$builtin$$Logger$write_string$24$(graph_code, `${_p$3}_state_${moonbitlang$core$builtin$$Show$to_string$6$(_i)}, `);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$Logger$write_string$24$(graph_code, "]");
  const end_nodes = moonbitlang$core$array$$Array$makei$22$(dfa.node_count, (i) => moonbitlang$core$builtin$$Map$get$97$(dfa.end_nodes, i));
  const shared_tag_actions_code = moonbitlang$core$builtin$$StringBuilder$new(0);
  const _bind = moonbitlang$core$sorted_map$$T$iter2$52$(tag_action_dedup);
  _bind((tag_action, id) => {
    const rows_code = moonbitlang$core$builtin$$StringBuilder$new(0);
    moonbitlang$core$builtin$$Logger$write_string$24$(rows_code, "[");
    const _len$2 = tag_action.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len$2) {
        const row = tag_action[_i];
        if (_i > 0) {
          moonbitlang$core$builtin$$Logger$write_string$24$(rows_code, ", ");
        }
        const _p$2 = rule.name;
        const _bind$2 = moonbitlang$core$sorted_map$$T$get$51$(tag_action_row_dedup, row);
        let _tmp$3;
        if (_bind$2 === undefined) {
          const id$2 = next_tag_action_row_id.val;
          moonbitlang$core$sorted_map$$T$op_set$51$(tag_action_row_dedup, row, id$2);
          next_tag_action_row_id.val = next_tag_action_row_id.val + 1 | 0;
          _tmp$3 = id$2;
        } else {
          const _Some = _bind$2;
          const _id = _Some;
          _tmp$3 = _id;
        }
        moonbitlang$core$builtin$$Logger$write_string$24$(rows_code, `${_p$2}_tag_action_row_${moonbitlang$core$builtin$$Show$to_string$6$(_tmp$3)}`);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$builtin$$Logger$write_string$24$(rows_code, "]");
    const _p$2 = rule.name;
    moonbitlang$core$builtin$$Logger$write_string$24$(shared_tag_actions_code, `let ${_p$2}_tag_action_${moonbitlang$core$builtin$$Show$to_string$6$(id)} : Array[Array[Int]] = ${moonbitlang$core$builtin$$Show$to_string$124$(rows_code)}\n`);
    return 1;
  });
  const start_tags = [];
  const _arr$2 = dfa.start_action;
  const _len$2 = _arr$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const action = _arr$2[_i];
      if (!(action.length === 0)) {
        moonbitlang$core$array$$Array$push$6$(start_tags, _i);
      }
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const shared_tag_action_rows_code = moonbitlang$core$builtin$$StringBuilder$new(0);
  const _bind$2 = moonbitlang$core$sorted_map$$T$iter2$51$(tag_action_row_dedup);
  _bind$2((tag_action_row, id) => {
    const _p$2 = rule.name;
    moonbitlang$core$builtin$$Logger$write_string$24$(shared_tag_action_rows_code, `let ${_p$2}_tag_action_row_${moonbitlang$core$builtin$$Show$to_string$6$(id)} : Array[Int] = ${moonbitlang$core$builtin$$Show$to_string$125$(tag_action_row)}\n`);
    return 1;
  });
  const _tmp$3 = shared_tag_action_rows_code.val;
  const _tmp$4 = shared_tag_actions_code.val;
  const _tmp$5 = states_code.val;
  const _tmp$6 = `let ${engine}: LexEngine = { graph: ${moonbitlang$core$builtin$$Show$to_string$124$(graph_code)}, end_nodes: ${moonbitlang$core$builtin$$Show$to_string$126$(end_nodes)}, start_tags: ${moonbitlang$core$builtin$$Show$to_string$125$(start_tags)}, code_blocks_n: ${moonbitlang$core$builtin$$Show$to_string$6$(dfa.code_blocks.length)} }`;
  const _p$2 = rule.name;
  const _tmp$7 = `fn ${_p$2}(`;
  const _tmp$8 = moonbitlang$core$builtin$$Eq$op_equal$10$(moonbitlang$core$string$$String$trim(rule.params, { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$180, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$180.length }), { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$181, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$181.length }) ? "lexbuf : Lexbuf" : `${rule.params}, lexbuf : Lexbuf`;
  return moonbitlang$core$array$$Array$join([_tmp$3, _tmp$4, _tmp$5, _tmp$6, moonbitlang$core$array$$Array$join([_tmp$7, _tmp$8, ")", "->", rule.return_type, "{"], { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$182, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$182.length }), moonbitlang$core$array$$Array$join(moonbitlang$core$array$$Array$flatten$2$([[`  match ${engine}.run(lexbuf) {`], moonbitlang$core$array$$Array$makei$2$(dfa.code_blocks.length, (i) => {
    const codeblock = moonbitlang$core$array$$Array$op_get$2$(dfa.code_blocks, i);
    const subst = moonbitlang$lex$lib$codegen$internal$codeblock_parser$$parse_codeblock(codeblock);
    const _tmp$9 = [`    (${moonbitlang$core$builtin$$Show$to_string$6$(i)}, __mbtlex_captures) => {`];
    const _p$3 = moonbitlang$core$array$$Array$op_get$85$(dfa.captures, i);
    let _tmp$10;
    let _p$4;
    _L: {
      _L$2: {
        if (_p$3.length === 0) {
          const _tmp$11 = [];
          _p$4 = _tmp$11;
          break _L$2;
        }
        const _p$5 = new Array(_p$3.length);
        const _p$6 = _p$3.length;
        let _tmp$11 = 0;
        while (true) {
          const _p$7 = _tmp$11;
          if (_p$7 < _p$6) {
            const _p$8 = _p$3[_p$7];
            const i$2 = _p$7;
            const name = _p$8;
            let inject_ignore;
            let _tmp$12;
            let _return_value;
            _L$3: {
              _L$4: {
                const _len$3 = subst.length;
                let _tmp$13 = 0;
                while (true) {
                  const _i = _tmp$13;
                  if (_i < _len$3) {
                    const item = subst[_i];
                    let n;
                    _L$5: {
                      const _bind$3 = item.desc;
                      if (_bind$3.$tag === 0) {
                        const _StartPosOf = _bind$3;
                        const _n = _StartPosOf._0;
                        n = _n;
                        break _L$5;
                      } else {
                        const _EndPosOf = _bind$3;
                        const _n = _EndPosOf._0;
                        n = _n;
                        break _L$5;
                      }
                    }
                    if (n === name) {
                      _return_value = true;
                      break _L$4;
                    }
                    _tmp$13 = _i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _tmp$12 = false;
                break _L$3;
              }
              _tmp$12 = _return_value;
            }
            if (_tmp$12) {
              inject_ignore = `ignore(${name})`;
            } else {
              inject_ignore = "";
            }
            _p$5[_p$7] = `  let (_start_pos_of_${name}, _end_pos_of_${name}) = __mbtlex_captures[${moonbitlang$core$builtin$$Show$to_string$6$(i$2)}]\n  let ${name}: String = lexbuf.substring(_start_pos_of_${name}, _end_pos_of_${name})\n  ${inject_ignore}`;
            _tmp$11 = _p$7 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$10 = _p$5;
        break _L;
      }
      _tmp$10 = _p$4;
    }
    return moonbitlang$core$array$$Array$join(moonbitlang$core$array$$Array$flatten$2$([_tmp$9, _tmp$10, [moonbitlang$lex$lib$codegen$$rewrite_codeblock(codeblock, subst)], ["    }"]]), { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$191, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$191.length });
  }), ["    _ => abort(\"lex: fail to match\")"], ["  }"]]), { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$192, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$192.length }), "}"], { str: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$193, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_rule$46$42$bind$124$193.length });
}
function moonbitlang$lex$lib$codegen$$codegen_lex(lex) {
  const _tmp = lex.header;
  const _p = lex.rules;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = moonbitlang$lex$lib$codegen$$codegen_rule(_p$5);
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$3 = moonbitlang$core$array$$Array$join(_p$2, { str: moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$198, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$198.length });
  return moonbitlang$core$array$$Array$join([moonbitlang$lex$lib$codegen$$runtime, _tmp, _tmp$3, lex.trailer], { str: moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$199, start: 0, end: moonbitlang$lex$lib$codegen$$codegen_lex$46$42$bind$124$199.length });
}
function Yoorkin$trie$$T$lookup$134$(self, path) {
  const _bind = moonbitlang$core$string$$String$to_array(path);
  let _tmp = { buf: _bind, start: 0, len: _bind.length };
  let _tmp$2 = self;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    if (_param.len === 0) {
      return _param$2.value;
    } else {
      const _x = _param.buf[_param.start];
      const _tmp$3 = _param.buf;
      const _tmp$4 = 1 + _param.start | 0;
      const _some = _param.len;
      const _x$2 = { buf: _tmp$3, start: _tmp$4, len: _some - 1 | 0 };
      const _bind$2 = moonbitlang$core$immut$sorted_map$$T$op_get$39$(_param$2.forks, _x);
      if (_bind$2 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$2;
        const _subtree = _Some;
        _tmp = _x$2;
        _tmp$2 = _subtree;
        continue;
      }
    }
  }
}
function Yoorkin$trie$$add$46$aux$47$4747(value, _param18, _param19) {
  if (_param18.len === 0) {
    return { value: value, forks: _param19.forks };
  } else {
    const _x = _param18.buf[_param18.start];
    const _tmp = _param18.buf;
    const _tmp$2 = 1 + _param18.start | 0;
    const _some = _param18.len;
    const _x$2 = { buf: _tmp, start: _tmp$2, len: _some - 1 | 0 };
    const subtree = moonbitlang$core$option$$Option$or$63$(moonbitlang$core$immut$sorted_map$$T$op_get$39$(_param19.forks, _x), { value: undefined, forks: $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Empty$7$ });
    return { value: _param19.value, forks: moonbitlang$core$immut$sorted_map$$T$add$39$(_param19.forks, _x, Yoorkin$trie$$add$46$aux$47$4747(value, _x$2, subtree)) };
  }
}
function Yoorkin$trie$$T$add$134$(self, path, value) {
  const _bind = moonbitlang$core$string$$String$to_array(path);
  return Yoorkin$trie$$add$46$aux$47$4747(value, { buf: _bind, start: 0, len: _bind.length }, self);
}
function Yoorkin$trie$$empty$134$() {
  return { value: undefined, forks: $64$moonbitlang$47$core$47$immut$47$sorted_map$46$T$Empty$7$ };
}
function Yoorkin$ArgParser$$interpret(trie, xs, fallback) {
  const _bind = xs.length;
  let _tmp = xs;
  let _tmp$2 = 0;
  let _tmp$3 = _bind;
  _L: while (true) {
    const _param_buf = _tmp;
    const _param_start = _tmp$2;
    const _param_len = _tmp$3;
    if (_param_len === 0) {
      return;
    } else {
      const _x = _param_buf[_param_start];
      const _bind$2 = 1 + _param_start | 0;
      const _some = _param_len;
      const _bind$3 = _some - 1 | 0;
      const _bind$4 = Yoorkin$trie$$T$lookup$134$(trie, _x);
      if (_bind$4 === undefined) {
        fallback(_x);
        _tmp$2 = _bind$2;
        _tmp$3 = _bind$3;
        continue;
      } else {
        const _Some = _bind$4;
        const _spec = _Some;
        _L$2: {
          switch (_spec.$tag) {
            case 1: {
              const _String = _spec;
              const _f = _String._0;
              if (_bind$3 >= 1) {
                const _y = _param_buf[_bind$2];
                const _bind$5 = 1 + _bind$2 | 0;
                const _some$2 = _bind$3;
                const _bind$6 = _some$2 - 1 | 0;
                _f(_y);
                _tmp$2 = _bind$5;
                _tmp$3 = _bind$6;
                continue _L;
              } else {
                break _L$2;
              }
            }
            case 2: {
              const _Set_string = _spec;
              const _r = _Set_string._0;
              if (_bind$3 >= 1) {
                const _y = _param_buf[_bind$2];
                const _bind$5 = 1 + _bind$2 | 0;
                const _some$2 = _bind$3;
                const _bind$6 = _some$2 - 1 | 0;
                _r.val = _y;
                _tmp$2 = _bind$5;
                _tmp$3 = _bind$6;
                continue _L;
              } else {
                break _L$2;
              }
            }
            case 3: {
              const _Set = _spec;
              const _r$2 = _Set._0;
              _r$2.val = true;
              _tmp$2 = _bind$2;
              _tmp$3 = _bind$3;
              continue _L;
            }
            case 4: {
              const _Clear = _spec;
              const _r$3 = _Clear._0;
              _r$3.val = false;
              _tmp$2 = _bind$2;
              _tmp$3 = _bind$3;
              continue _L;
            }
            default: {
              const _Unit = _spec;
              const _f$2 = _Unit._0;
              _f$2();
              _tmp$2 = _bind$2;
              _tmp$3 = _bind$3;
              continue _L;
            }
          }
        }
        moonbitlang$core$builtin$$println$2$(`missing argument for ${_x}`);
        return;
      }
    }
  }
}
function Yoorkin$ArgParser$$parse$46$aux$124$7(_param5, _param6) {
  const _x = _param5._0;
  const _help_msg = _param5._1;
  const _a = _param6._0;
  const _b = _param6._1;
  const _spec = _param6._2;
  const _help = _param6._3;
  const trie = Yoorkin$trie$$T$add$134$(Yoorkin$trie$$T$add$134$(_x, _a, _spec), _b, _spec);
  const help_msg = `${_help_msg}  ${_a}\t${_b}\t${_help}\n`;
  return { _0: trie, _1: help_msg };
}
function Yoorkin$ArgParser$$parse(speclist, rest, usage_msg, argv) {
  const _p = { _0: Yoorkin$trie$$empty$134$(), _1: `${usage_msg}\n options:\n` };
  let _bind;
  let _tmp = 0;
  let _tmp$2 = _p;
  while (true) {
    const _p$2 = _tmp;
    const _p$3 = _tmp$2;
    if (_p$2 < speclist.length) {
      const _tmp$3 = _p$2 + 1 | 0;
      const _tmp$4 = Yoorkin$ArgParser$$parse$46$aux$124$7(_p$3, moonbitlang$core$array$$Array$op_get$84$(speclist, _p$2));
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      _bind = _p$3;
      break;
    }
  }
  const _trie = _bind._0;
  const _help_msg = _bind._1;
  const help_spec = new $64$Yoorkin$47$ArgParser$46$Spec$Unit(() => {
    moonbitlang$core$builtin$$println$2$(_help_msg);
  });
  const trie = Yoorkin$trie$$T$add$134$(Yoorkin$trie$$T$add$134$(_trie, "--help", help_spec), "-h", help_spec);
  Yoorkin$ArgParser$$interpret(trie, argv, rest);
}
function moonbitlang$x$internal$ffi$$mbt_string_to_utf8_bytes(str, is_filename) {
  const res = [];
  const len = str.length;
  let i = 0;
  while (true) {
    if (i < len) {
      const _tmp = i;
      $bound_check(str, _tmp);
      let c = str.charCodeAt(_tmp);
      if (55296 <= c && c <= 56319) {
        c = c - 55296 | 0;
        i = i + 1 | 0;
        const _tmp$2 = i;
        $bound_check(str, _tmp$2);
        const l = str.charCodeAt(_tmp$2) - 56320 | 0;
        c = ((c << 10) + l | 0) + 65536 | 0;
      }
      if (c < 128) {
        moonbitlang$core$array$$Array$push$38$(res, c & 255);
      } else {
        if (c < 2048) {
          moonbitlang$core$array$$Array$push$38$(res, (192 + (c >> 6) | 0) & 255);
          moonbitlang$core$array$$Array$push$38$(res, (128 + (c & 63) | 0) & 255);
        } else {
          if (c < 65536) {
            moonbitlang$core$array$$Array$push$38$(res, (224 + (c >> 12) | 0) & 255);
            moonbitlang$core$array$$Array$push$38$(res, (128 + (c >> 6 & 63) | 0) & 255);
            moonbitlang$core$array$$Array$push$38$(res, (128 + (c & 63) | 0) & 255);
          } else {
            moonbitlang$core$array$$Array$push$38$(res, (240 + (c >> 18) | 0) & 255);
            moonbitlang$core$array$$Array$push$38$(res, (128 + (c >> 12 & 63) | 0) & 255);
            moonbitlang$core$array$$Array$push$38$(res, (128 + (c >> 6 & 63) | 0) & 255);
            moonbitlang$core$array$$Array$push$38$(res, (128 + (c & 63) | 0) & 255);
          }
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (is_filename) {
    moonbitlang$core$array$$Array$push$38$(res, 0 & 255);
  }
  return moonbitlang$core$bytes$$Bytes$from_array(res);
}
function moonbitlang$x$internal$ffi$$utf8_bytes_to_mbt_string(bytes) {
  const res = [];
  const len = bytes.length;
  let i = 0;
  while (true) {
    if (i < len) {
      const _tmp = i;
      $bound_check(bytes, _tmp);
      let c = bytes[_tmp];
      if (c < 128) {
        moonbitlang$core$array$$Array$push$5$(res, c);
        i = i + 1 | 0;
      } else {
        if (c < 224) {
          if ((i + 1 | 0) >= len) {
            break;
          }
          const _tmp$2 = (c & 31) << 6;
          const _tmp$3 = i + 1 | 0;
          $bound_check(bytes, _tmp$3);
          c = _tmp$2 | bytes[_tmp$3] & 63;
          moonbitlang$core$array$$Array$push$5$(res, c);
          i = i + 2 | 0;
        } else {
          if (c < 240) {
            if ((i + 2 | 0) >= len) {
              break;
            }
            const _tmp$2 = (c & 15) << 12;
            const _tmp$3 = i + 1 | 0;
            $bound_check(bytes, _tmp$3);
            const _tmp$4 = _tmp$2 | (bytes[_tmp$3] & 63) << 6;
            const _tmp$5 = i + 2 | 0;
            $bound_check(bytes, _tmp$5);
            c = _tmp$4 | bytes[_tmp$5] & 63;
            moonbitlang$core$array$$Array$push$5$(res, c);
            i = i + 3 | 0;
          } else {
            if ((i + 3 | 0) >= len) {
              break;
            }
            const _tmp$2 = (c & 7) << 18;
            const _tmp$3 = i + 1 | 0;
            $bound_check(bytes, _tmp$3);
            const _tmp$4 = _tmp$2 | (bytes[_tmp$3] & 63) << 12;
            const _tmp$5 = i + 2 | 0;
            $bound_check(bytes, _tmp$5);
            const _tmp$6 = _tmp$4 | (bytes[_tmp$5] & 63) << 6;
            const _tmp$7 = i + 3 | 0;
            $bound_check(bytes, _tmp$7);
            c = _tmp$6 | bytes[_tmp$7] & 63;
            c = c - 65536 | 0;
            moonbitlang$core$array$$Array$push$5$(res, (c >> 10) + 55296 | 0);
            moonbitlang$core$array$$Array$push$5$(res, (c & 1023) + 56320 | 0);
            i = i + 4 | 0;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$string$$String$from_array(res);
}
function moonbitlang$x$sys$internal$ffi$$get_cli_args() {
  return moonbitlang$x$sys$internal$ffi$$get_cli_args_internal();
}
function moonbitlang$x$sys$$get_cli_args() {
  return moonbitlang$x$sys$internal$ffi$$get_cli_args();
}
function moonbitlang$x$fs$$read_file_to_bytes_internal(path) {
  const res = moonbitlang$x$fs$$read_file_ffi(path);
  if (res === -1) {
    return new Result$Err$19$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(moonbitlang$x$fs$$get_error_message_ffi()));
  }
  return new Result$Ok$20$(moonbitlang$x$fs$$get_file_content_ffi());
}
function moonbitlang$x$fs$$read_file_to_string_internal(path, encoding) {
  if (encoding === "utf8") {
    const _bind = moonbitlang$x$fs$$read_file_to_bytes_internal(path);
    let bytes;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      bytes = _ok._0;
    } else {
      return _bind;
    }
    return new Result$Ok$22$(moonbitlang$x$internal$ffi$$utf8_bytes_to_mbt_string(bytes));
  } else {
    return new Result$Err$21$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(`Unsupported encoding: ${encoding}, only utf8 is supported for now`));
  }
}
function moonbitlang$x$fs$$write_bytes_to_file_internal(path, content) {
  const res = moonbitlang$x$fs$$write_file_ffi(path, content);
  if (res === -1) {
    return new Result$Err$24$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(moonbitlang$x$fs$$get_error_message_ffi()));
  } else {
    return new Result$Ok$23$(undefined);
  }
}
function moonbitlang$x$fs$$write_string_to_file_internal(path, content, encoding) {
  if (encoding === "utf8") {
    const bytes = moonbitlang$x$internal$ffi$$mbt_string_to_utf8_bytes(content, false);
    return moonbitlang$x$fs$$write_bytes_to_file_internal(path, bytes);
  } else {
    return new Result$Err$24$(new Error$moonbitlang$47$x$47$fs$46$IOError$46$IOError(`Unsupported encoding: ${encoding}, only utf8 is supported for now`));
  }
}
function moonbitlang$x$fs$$read_file_to_string(path, encoding) {
  return moonbitlang$x$fs$$read_file_to_string_internal(path, encoding);
}
function moonbitlang$x$fs$$write_string_to_file(path, content, encoding) {
  return moonbitlang$x$fs$$write_string_to_file_internal(path, content, encoding);
}
(() => {
  const output_file = moonbitlang$core$ref$$new$2$("");
  const input_file = moonbitlang$core$ref$$new$2$("");
  const exit = { val: false };
  Yoorkin$ArgParser$$parse([{ _0: "--output-file", _1: "-o", _2: new $64$Yoorkin$47$ArgParser$46$Spec$Set_string(output_file), _3: "Output file" }, { _0: "--version", _1: "-v", _2: new $64$Yoorkin$47$ArgParser$46$Spec$Unit(() => {
    exit.val = true;
    moonbitlang$core$builtin$$println$2$("moonlex 0.1.0");
  }), _3: "Show version" }], (rest) => {
    input_file.val = rest;
  }, moonbitlang$lex$main$$_init$42$46$usage$124$1, moonbitlang$x$sys$$get_cli_args());
  if (exit.val) {
    return;
  }
  const _p = input_file.val;
  const _p$2 = "";
  if (!(_p === _p$2)) {
    let _tmp;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = moonbitlang$x$fs$$read_file_to_string(input_file.val, "utf8");
        let _tmp$2;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind;
          const _tmp$3 = _err._0;
          _try_err = _tmp$3;
          break _L$2;
        }
        _tmp = new Result$Ok$22$(_tmp$2);
        break _L;
      }
      _tmp = new Result$Err$22$(_try_err);
    }
    const lexer_spec_src = moonbitlang$core$result$$Result$unwrap$35$(_tmp);
    let lex;
    let _try_err$2;
    _L$2: {
      _L$3: {
        const _bind = moonbitlang$lex$lib$parser$$parse_lex_from_string(lexer_spec_src);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          lex = _ok._0;
        } else {
          const _err = _bind;
          const _tmp$2 = _err._0;
          _try_err$2 = _tmp$2;
          break _L$3;
        }
        break _L$2;
      }
      moonbitlang$core$builtin$$println$82$(_try_err$2);
      lex = $panic();
    }
    const lex$2 = moonbitlang$lex$lib$type$$Lex$eliminate_named(lex);
    const output = moonbitlang$lex$lib$codegen$$codegen_lex(lex$2);
    if (output_file.val === "") {
      moonbitlang$core$builtin$$println$2$(output);
      return;
    } else {
      let _tmp$2;
      let _try_err$3;
      _L$3: {
        _L$4: {
          const _bind = moonbitlang$x$fs$$write_string_to_file(output_file.val, output, "utf8");
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            const _err = _bind;
            const _tmp$3 = _err._0;
            _try_err$3 = _tmp$3;
            break _L$4;
          }
          _tmp$2 = new Result$Ok$23$(undefined);
          break _L$3;
        }
        _tmp$2 = new Result$Err$23$(_try_err$3);
      }
      moonbitlang$core$result$$Result$unwrap$36$(_tmp$2);
      return;
    }
  } else {
    moonbitlang$core$abort$$abort$1$("Input file is required");
    return;
  }
})();
