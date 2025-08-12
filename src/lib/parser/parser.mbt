
pub(all) enum Token {
  EOI
  EOF
  PARSE_LBRACE
  LET
  AS
  UNDERSCORE
  RBRACE
  LPAREN
  RPAREN
  LBRACKET
  RBRACKET
  EQ
  SEMICOLON
  FAT_ARROW
  BAR
  STAR
  PLUS
  QUESTION
  MINUS
  CARET
  RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE((String, String, String))
  LBRACE_CODE_RBRACE(String)
  LC_IDENT(String)
  CHAR(Char)
  STRING(String)
} derive(Show)

pub fn Token::kind(self : Token) -> TokenKind {
  match self {
    EOI => TK_EOI
    EOF => TK_EOF
    PARSE_LBRACE => TK_PARSE_LBRACE
    LET => TK_LET
    AS => TK_AS
    UNDERSCORE => TK_UNDERSCORE
    RBRACE => TK_RBRACE
    LPAREN => TK_LPAREN
    RPAREN => TK_RPAREN
    LBRACKET => TK_LBRACKET
    RBRACKET => TK_RBRACKET
    EQ => TK_EQ
    SEMICOLON => TK_SEMICOLON
    FAT_ARROW => TK_FAT_ARROW
    BAR => TK_BAR
    STAR => TK_STAR
    PLUS => TK_PLUS
    QUESTION => TK_QUESTION
    MINUS => TK_MINUS
    CARET => TK_CARET
    RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE(_) => TK_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE
    LBRACE_CODE_RBRACE(_) => TK_LBRACE_CODE_RBRACE
    LC_IDENT(_) => TK_LC_IDENT
    CHAR(_) => TK_CHAR
    STRING(_) => TK_STRING
  }
}

pub(all) enum TokenKind {
  TK_EOI
  TK_EOF
  TK_PARSE_LBRACE
  TK_LET
  TK_AS
  TK_UNDERSCORE
  TK_RBRACE
  TK_LPAREN
  TK_RPAREN
  TK_LBRACKET
  TK_RBRACKET
  TK_EQ
  TK_SEMICOLON
  TK_FAT_ARROW
  TK_BAR
  TK_STAR
  TK_PLUS
  TK_QUESTION
  TK_MINUS
  TK_CARET
  TK_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE
  TK_LBRACE_CODE_RBRACE
  TK_LC_IDENT
  TK_CHAR
  TK_STRING
}

pub impl Show for TokenKind with output(self, logger) {
  logger.write_string(
    match self {
      TK_EOI => "EOI"
      TK_EOF => "\"eof\""
      TK_PARSE_LBRACE => "\"parse {\""
      TK_LET => "\"let\""
      TK_AS => "\"as\""
      TK_UNDERSCORE => "\"_\""
      TK_RBRACE => "\"}\""
      TK_LPAREN => "\"(\""
      TK_RPAREN => "\")\""
      TK_LBRACKET => "\"[\""
      TK_RBRACKET => "\"]\""
      TK_EQ => "\"=\""
      TK_SEMICOLON => "\";\""
      TK_FAT_ARROW => "\"=>\""
      TK_BAR => "\"|\""
      TK_STAR => "\"*\""
      TK_PLUS => "\"+\""
      TK_QUESTION => "\"?\""
      TK_MINUS => "\"-\""
      TK_CARET => "\"^\""
      TK_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => "RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE"
      TK_LBRACE_CODE_RBRACE => "LBRACE_CODE_RBRACE"
      TK_LC_IDENT => "LC_IDENT"
      TK_CHAR => "CHAR"
      TK_STRING => "STRING"
    }
  )
}

pub suberror ParseError {
  UnexpectedToken(Token, (Unit, Unit), Array[TokenKind])
} derive(Show)

typealias Error as YYObj

priv suberror YYObj_Void

priv suberror YYObj_Char Char

priv suberror YYObj_String String

priv suberror YYObj__list_List__type_Rule_ @list.List[@type.Rule]

priv suberror YYObj__list_List__String___type_Regex__ @list.List[(String, @type.Regex)]

priv suberror YYObj__list_List___type_Regex___type_CodeBlock__ @list.List[(@type.Regex, @type.CodeBlock)]

priv suberror YYObj__type_Lex @type.Lex

priv suberror YYObj__type_Rule @type.Rule

priv suberror YYObj__type_Regex @type.Regex

priv suberror YYObj__eof_char_set_T @eof_char_set.T

priv suberror YYObj__String___type_Regex_ (String, @type.Regex)

priv suberror YYObj___type_Regex___type_CodeBlock_ (@type.Regex, @type.CodeBlock)

priv suberror YYObj__String__String__String_ (String, String, String)

typealias (YYSymbol) -> YYDecision as YYState

typealias (Unit, ArrayView[(YYObj, Unit, Unit)]) -> YYObj as YYAction

priv enum YYDecision {
  Accept
  Shift(YYState)
  Reduce(Int, YYSymbol, YYAction)
  ReduceNoLookahead(Int, YYSymbol, YYAction)
  Error
}

priv enum YYSymbol {
  T_EOI
  T_EOF
  T_PARSE_LBRACE
  T_LET
  T_AS
  T_UNDERSCORE
  T_RBRACE
  T_LPAREN
  T_RPAREN
  T_LBRACKET
  T_RBRACKET
  T_EQ
  T_SEMICOLON
  T_FAT_ARROW
  T_BAR
  T_STAR
  T_PLUS
  T_QUESTION
  T_MINUS
  T_CARET
  T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE
  T_LBRACE_CODE_RBRACE
  T_LC_IDENT
  T_CHAR
  T_STRING
  NT_lex_eoi
  NT_regex_eoi
  NT_lex
  NT_header
  NT_trailer
  NT_named_regex_list
  NT_named_regex
  NT_nonempty_rule_list
  NT_rule
  NT_rule_item_list
  NT_rule_item
  NT_regex
  NT_alias
  NT_alternation
  NT_concatenation
  NT_repetition
  NT_atom
  NT_character_class
  NT_character_class_inner
  NT_character_class_item
  EOI
}

// Workaround for EOI unused warning
fn init {
  match (EOI : YYSymbol) {
    EOI => ()
    _ => ()
  }
}

// file:///./parser.mbty
// 143|    CHAR                                { @eof_char_set.singleton($1) }
fn yy_action_0(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_Char(_dollar1)
  YYObj__eof_char_set_T({();  @eof_char_set.singleton(_dollar1) })
}

// file:///./parser.mbty
// 110|    repetition                          { $1 }
fn yy_action_1(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 115|    atom                                { $1 }
fn yy_action_2(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 123|    character_class                     { CharSet($1) }
fn yy_action_3(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__eof_char_set_T(_dollar1)
  YYObj__type_Regex({();  CharSet(_dollar1) })
}

// file:///./parser.mbty
// 44|                                        {
// 45|                                          { header: "", named_regexes: [], rules: [],  trailer: "" }
// 46|                                        }
fn yy_action_4(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj__type_Lex({(); 
                                          { header: "", named_regexes: [], rules: [],  trailer: "" }
                                        })
}

// file:///./parser.mbty
// 106|    concatenation "|" alternation       { Alter($1, $3) }
fn yy_action_5(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  guard _args[2].0 is YYObj__type_Regex(_dollar3)
  YYObj__type_Regex({();  Alter(_dollar1, _dollar3) })
}

// file:///./parser.mbty
// 128|    EOF                                 { EOF }
fn yy_action_6(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj__type_Regex({();  EOF })
}

// file:///./parser.mbty
// 133|    "[" "^" character_class_inner "]"   { $3.negated() }
fn yy_action_7(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[2].0 is YYObj__eof_char_set_T(_dollar3)
  YYObj__eof_char_set_T({();  _dollar3.negated() })
}

// file:///./parser.mbty
// 144|    CHAR "-" CHAR                       { @eof_char_set.range($1, $3)}
fn yy_action_8(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_Char(_dollar1)
  guard _args[2].0 is YYObj_Char(_dollar3)
  YYObj__eof_char_set_T({();  @eof_char_set.range(_dollar1, _dollar3)})
}

// file:///./parser.mbty
// 118|    atom "?"                            { Option($1) }
fn yy_action_9(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  Option(_dollar1) })
}

// file:///./parser.mbty
// 101|    alternation "as" LC_IDENT           { Capture($1, $3) }
fn yy_action_10(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  guard _args[2].0 is YYObj_String(_dollar3)
  YYObj__type_Regex({();  Capture(_dollar1, _dollar3) })
}

// file:///./parser.mbty
// 139|    character_class_item                { $1 }
fn yy_action_11(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__eof_char_set_T(_dollar1)
  YYObj__eof_char_set_T({();  _dollar1 })
}

// file:///./parser.mbty
// 105|    concatenation                       { $1 }
fn yy_action_12(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 117|    atom "+"                            { Repetition($1) }
fn yy_action_13(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  Repetition(_dollar1) })
}

// file:///./parser.mbty
// 40|    regex EOI                           { $1 }
fn yy_action_14(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 54|    LBRACE_CODE_RBRACE                  { $1 }
fn yy_action_15(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_String(_dollar1)
  YYObj_String({();  _dollar1 })
}

// file:///./parser.mbty
// 96|    alias                               { $1 }
fn yy_action_16(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 111|    repetition concatenation            { Concat($1, $2) }
fn yy_action_17(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  guard _args[1].0 is YYObj__type_Regex(_dollar2)
  YYObj__type_Regex({();  Concat(_dollar1, _dollar2) })
}

// file:///./parser.mbty
// 100|    alternation                         { $1 }
fn yy_action_18(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  _dollar1 })
}

// file:///./parser.mbty
// 87|    rule_item rule_item_list            { @list.construct($1, $2) }
fn yy_action_19(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj___type_Regex___type_CodeBlock_(_dollar1)
  guard _args[1].0 is YYObj__list_List___type_Regex___type_CodeBlock__(_dollar2)
  YYObj__list_List___type_Regex___type_CodeBlock__({();  @list.construct(_dollar1, _dollar2) })
}

// file:///./parser.mbty
// 59|    LBRACE_CODE_RBRACE                  { $1 }
fn yy_action_20(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_String(_dollar1)
  YYObj_String({();  _dollar1 })
}

// file:///./parser.mbty
// 127|    UNDERSCORE                          { Underscore }
fn yy_action_21(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj__type_Regex({();  Underscore })
}

// file:///./parser.mbty
// 74|    rule nonempty_rule_list             { @list.construct($1, $2) }
fn yy_action_22(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Rule(_dollar1)
  guard _args[1].0 is YYObj__list_List__type_Rule_(_dollar2)
  YYObj__list_List__type_Rule_({();  @list.construct(_dollar1, _dollar2) })
}

// file:///./parser.mbty
// 73|    rule                                { @list.construct($1, @list.empty()) }
fn yy_action_23(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Rule(_dollar1)
  YYObj__list_List__type_Rule_({();  @list.construct(_dollar1, @list.empty()) })
}

// file:///./parser.mbty
// 116|    atom "*"                            { Option(Repetition($1)) }
fn yy_action_24(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  YYObj__type_Regex({();  Option(Repetition(_dollar1)) })
}

// file:///./parser.mbty
// 124|    LC_IDENT                            { Named($1) }
fn yy_action_25(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_String(_dollar1)
  YYObj__type_Regex({();  Named(_dollar1) })
}

// file:///./parser.mbty
// 92|    regex "=>" LBRACE_CODE_RBRACE       { ($1, $3) }
fn yy_action_26(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Regex(_dollar1)
  guard _args[2].0 is YYObj_String(_dollar3)
  YYObj___type_Regex___type_CodeBlock_({();  (_dollar1, _dollar3) })
}

// file:///./parser.mbty
// 88|                                        { @list.empty() }
fn yy_action_27(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj__list_List___type_Regex___type_CodeBlock__({();  @list.empty() })
}

// file:///./parser.mbty
// 60|                                        { "" }
fn yy_action_28(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj_String({();  "" })
}

// file:///./parser.mbty
// 65|    { @list.empty() }
fn yy_action_29(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj__list_List__String___type_Regex__({();  @list.empty() })
}

// file:///./parser.mbty
// 132|    "[" character_class_inner "]"       { $2 }
fn yy_action_30(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[1].0 is YYObj__eof_char_set_T(_dollar2)
  YYObj__eof_char_set_T({();  _dollar2 })
}

// file:///./parser.mbty
// 55|                                        { "" }
fn yy_action_31(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  YYObj_String({();  "" })
}

// file:///./parser.mbty
// 64|    named_regex named_regex_list        { @list.construct($1, $2) }
fn yy_action_32(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__String___type_Regex_(_dollar1)
  guard _args[1].0 is YYObj__list_List__String___type_Regex__(_dollar2)
  YYObj__list_List__String___type_Regex__({();  @list.construct(_dollar1, _dollar2) })
}

// file:///./parser.mbty
// 125|    CHAR                                { ReChar($1) }
fn yy_action_33(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_Char(_dollar1)
  YYObj__type_Regex({();  ReChar(_dollar1) })
}

// file:///./parser.mbty
// 47|    header named_regex_list nonempty_rule_list trailer 
// 48|                                        {
// 49|                                          { header: $1, named_regexes: $2.to_array(), rules: $3.to_array(), trailer: $4 }
// 50|                                        }
fn yy_action_34(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_String(_dollar1)
  guard _args[1].0 is YYObj__list_List__String___type_Regex__(_dollar2)
  guard _args[2].0 is YYObj__list_List__type_Rule_(_dollar3)
  guard _args[3].0 is YYObj_String(_dollar4)
  YYObj__type_Lex({(); 
                                          { header: _dollar1, named_regexes: _dollar2.to_array(), rules: _dollar3.to_array(), trailer: _dollar4 }
                                        })
}

// file:///./parser.mbty
// 126|    STRING                              { ReStr($1) }
fn yy_action_35(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj_String(_dollar1)
  YYObj__type_Regex({();  ReStr(_dollar1) })
}

// file:///./parser.mbty
// 69|    "let" LC_IDENT "=" regex ";"        { ($2, $4) }
fn yy_action_36(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[1].0 is YYObj_String(_dollar2)
  guard _args[3].0 is YYObj__type_Regex(_dollar4)
  YYObj__String___type_Regex_({();  (_dollar2, _dollar4) })
}

// file:///./parser.mbty
// 78|    RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE "parse {" rule_item_list "}" "}" 
// 79|                                        {
// 80|                                          let (name, params, return_type) = $1
// 81|                                          let patterns = $3.to_array()
// 82|                                          { name, params, return_type, patterns }
// 83|                                        }
fn yy_action_37(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__String__String__String_(_dollar1)
  guard _args[2].0 is YYObj__list_List___type_Regex___type_CodeBlock__(_dollar3)
  YYObj__type_Rule({(); 
                                          let (name, params, return_type) = _dollar1
                                          let patterns = _dollar3.to_array()
                                          { name, params, return_type, patterns }
                                        })
}

// file:///./parser.mbty
// 137|    character_class_item character_class_inner 
// 138|                                        { $1 + $2 }
fn yy_action_38(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__eof_char_set_T(_dollar1)
  guard _args[1].0 is YYObj__eof_char_set_T(_dollar2)
  YYObj__eof_char_set_T({();  _dollar1 + _dollar2 })
}

// file:///./parser.mbty
// 122|    "(" alias ")"                       { $2 }
fn yy_action_39(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[1].0 is YYObj__type_Regex(_dollar2)
  YYObj__type_Regex({();  _dollar2 })
}

// file:///./parser.mbty
// 36|    lex EOI                             { $1 }
fn yy_action_40(_last_pos : Unit, _args : ArrayView[(YYObj, Unit, Unit)]) -> YYObj {
  guard _args[0].0 is YYObj__type_Lex(_dollar1)
  YYObj__type_Lex({();  _dollar1 })
}

fn yy_input(token : Token, _start_pos : Unit, _end_pos : Unit) -> (YYSymbol, YYObj) {
  match token {
    EOI => (T_EOI, YYObj_Void)
    EOF => (T_EOF, YYObj_Void)
    PARSE_LBRACE => (T_PARSE_LBRACE, YYObj_Void)
    LET => (T_LET, YYObj_Void)
    AS => (T_AS, YYObj_Void)
    UNDERSCORE => (T_UNDERSCORE, YYObj_Void)
    RBRACE => (T_RBRACE, YYObj_Void)
    LPAREN => (T_LPAREN, YYObj_Void)
    RPAREN => (T_RPAREN, YYObj_Void)
    LBRACKET => (T_LBRACKET, YYObj_Void)
    RBRACKET => (T_RBRACKET, YYObj_Void)
    EQ => (T_EQ, YYObj_Void)
    SEMICOLON => (T_SEMICOLON, YYObj_Void)
    FAT_ARROW => (T_FAT_ARROW, YYObj_Void)
    BAR => (T_BAR, YYObj_Void)
    STAR => (T_STAR, YYObj_Void)
    PLUS => (T_PLUS, YYObj_Void)
    QUESTION => (T_QUESTION, YYObj_Void)
    MINUS => (T_MINUS, YYObj_Void)
    CARET => (T_CARET, YYObj_Void)
    RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE(data) => (T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE, YYObj__String__String__String_(data))
    LBRACE_CODE_RBRACE(data) => (T_LBRACE_CODE_RBRACE, YYObj_String(data))
    LC_IDENT(data) => (T_LC_IDENT, YYObj_String(data))
    CHAR(data) => (T_CHAR, YYObj_Char(data))
    STRING(data) => (T_STRING, YYObj_String(data))
  }
}

// [1, regex_eoi → • regex EOI, $]
// [17, regex → • alias, EOI]
// [18, alias → • alternation, EOI]
// [19, alias → • alternation AS LC_IDENT, EOI]
// [20, alternation → • concatenation, EOI / AS]
// [21, alternation → • concatenation BAR alternation, EOI / AS]
// [22, concatenation → • repetition, EOI / AS / BAR]
// [23, concatenation → • repetition concatenation, EOI / AS / BAR]
// [24, repetition → • atom, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [42, regex_eoi_prime → • regex_eoi, $]
fn yy_state_0(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    NT_regex_eoi => Shift(yy_state_1)
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_31)
    NT_alias => Shift(yy_state_34)
    NT_regex => Shift(yy_state_35)
    _ => Error
  }
}

// [42, regex_eoi_prime → regex_eoi •, $]
fn yy_state_1(_lookahead : YYSymbol) -> YYDecision {
  Accept
}

// [35, character_class → LBRACKET • character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → LBRACKET • CARET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [37, character_class_inner → • character_class_item character_class_inner, RBRACKET]
// [38, character_class_inner → • character_class_item, RBRACKET]
// [39, character_class_item → • CHAR, RBRACKET / CHAR]
// [40, character_class_item → • CHAR MINUS CHAR, RBRACKET / CHAR]
fn yy_state_2(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_CHAR => Shift(yy_state_3)
    NT_character_class_item => Shift(yy_state_6)
    T_CARET => Shift(yy_state_8)
    NT_character_class_inner => Shift(yy_state_11)
    _ => Error
  }
}

// [39, character_class_item → CHAR •, RBRACKET / CHAR]
// [40, character_class_item → CHAR • MINUS CHAR, RBRACKET / CHAR]
fn yy_state_3(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_MINUS => Shift(yy_state_4)
    T_RBRACKET | T_CHAR => Reduce(1, NT_character_class_item, yy_action_0)
    _ => Error
  }
}

// [40, character_class_item → CHAR MINUS • CHAR, RBRACKET / CHAR]
fn yy_state_4(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_CHAR => Shift(yy_state_5)
    _ => Error
  }
}

// [40, character_class_item → CHAR MINUS CHAR •, RBRACKET / CHAR]
fn yy_state_5(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_character_class_item, yy_action_8)
}

// [37, character_class_inner → • character_class_item character_class_inner, RBRACKET]
// [37, character_class_inner → character_class_item • character_class_inner, RBRACKET]
// [38, character_class_inner → • character_class_item, RBRACKET]
// [38, character_class_inner → character_class_item •, RBRACKET]
// [39, character_class_item → • CHAR, RBRACKET / CHAR]
// [40, character_class_item → • CHAR MINUS CHAR, RBRACKET / CHAR]
fn yy_state_6(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_CHAR => Shift(yy_state_3)
    NT_character_class_item => Shift(yy_state_6)
    NT_character_class_inner => Shift(yy_state_7)
    T_RBRACKET => Reduce(1, NT_character_class_inner, yy_action_11)
    _ => Error
  }
}

// [37, character_class_inner → character_class_item character_class_inner •, RBRACKET]
fn yy_state_7(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_character_class_inner, yy_action_38)
}

// [36, character_class → LBRACKET CARET • character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [37, character_class_inner → • character_class_item character_class_inner, RBRACKET]
// [38, character_class_inner → • character_class_item, RBRACKET]
// [39, character_class_item → • CHAR, RBRACKET / CHAR]
// [40, character_class_item → • CHAR MINUS CHAR, RBRACKET / CHAR]
fn yy_state_8(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_CHAR => Shift(yy_state_3)
    NT_character_class_item => Shift(yy_state_6)
    NT_character_class_inner => Shift(yy_state_9)
    _ => Error
  }
}

// [36, character_class → LBRACKET CARET character_class_inner • RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_9(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RBRACKET => Shift(yy_state_10)
    _ => Error
  }
}

// [36, character_class → LBRACKET CARET character_class_inner RBRACKET •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_10(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(4, NT_character_class, yy_action_7)
}

// [35, character_class → LBRACKET character_class_inner • RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_11(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RBRACKET => Shift(yy_state_12)
    _ => Error
  }
}

// [35, character_class → LBRACKET character_class_inner RBRACKET •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_12(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_character_class, yy_action_30)
}

// [34, atom → EOF •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_13(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_6)
}

// [33, atom → UNDERSCORE •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_14(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_21)
}

// [32, atom → STRING •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_15(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_35)
}

// [31, atom → CHAR •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_16(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_33)
}

// [30, atom → LC_IDENT •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_17(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_25)
}

// [29, atom → character_class •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_18(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_atom, yy_action_3)
}

// [18, alias → • alternation, RPAREN]
// [19, alias → • alternation AS LC_IDENT, RPAREN]
// [20, alternation → • concatenation, AS / RPAREN]
// [21, alternation → • concatenation BAR alternation, AS / RPAREN]
// [22, concatenation → • repetition, AS / RPAREN / BAR]
// [23, concatenation → • repetition concatenation, AS / RPAREN / BAR]
// [24, repetition → • atom, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [28, atom → LPAREN • alias RPAREN, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_19(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_alias => Shift(yy_state_20)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_31)
    _ => Error
  }
}

// [28, atom → LPAREN alias • RPAREN, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_20(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RPAREN => Shift(yy_state_21)
    _ => Error
  }
}

// [28, atom → LPAREN alias RPAREN •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_21(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_atom, yy_action_39)
}

// [24, repetition → atom •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → atom • STAR, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → atom • PLUS, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → atom • QUESTION, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
fn yy_state_22(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_QUESTION => Shift(yy_state_23)
    T_PLUS => Shift(yy_state_24)
    T_STAR => Shift(yy_state_25)
    T_EOI | T_EOF | T_AS | T_UNDERSCORE | T_LPAREN | T_RPAREN | T_LBRACKET | T_SEMICOLON | T_FAT_ARROW | T_BAR | T_LC_IDENT | T_CHAR | T_STRING => Reduce(1, NT_repetition, yy_action_2)
    _ => Error
  }
}

// [27, repetition → atom QUESTION •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
fn yy_state_23(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_repetition, yy_action_9)
}

// [26, repetition → atom PLUS •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
fn yy_state_24(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_repetition, yy_action_13)
}

// [25, repetition → atom STAR •, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
fn yy_state_25(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_repetition, yy_action_24)
}

// [22, concatenation → • repetition, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [22, concatenation → repetition •, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [23, concatenation → • repetition concatenation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [23, concatenation → repetition • concatenation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [24, repetition → • atom, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_26(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_27)
    T_EOI | T_AS | T_RPAREN | T_SEMICOLON | T_FAT_ARROW | T_BAR => Reduce(1, NT_concatenation, yy_action_1)
    _ => Error
  }
}

// [23, concatenation → repetition concatenation •, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
fn yy_state_27(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_concatenation, yy_action_17)
}

// [20, alternation → concatenation •, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
// [21, alternation → concatenation • BAR alternation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
fn yy_state_28(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_BAR => Shift(yy_state_29)
    T_EOI | T_AS | T_RPAREN | T_SEMICOLON | T_FAT_ARROW => Reduce(1, NT_alternation, yy_action_12)
    _ => Error
  }
}

// [20, alternation → • concatenation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
// [21, alternation → • concatenation BAR alternation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
// [21, alternation → concatenation BAR • alternation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
// [22, concatenation → • repetition, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [23, concatenation → • repetition concatenation, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW / BAR]
// [24, repetition → • atom, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOI / EOF / AS / UNDERSCORE / LPAREN / RPAREN / LBRACKET / SEMICOLON / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_29(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_30)
    _ => Error
  }
}

// [21, alternation → concatenation BAR alternation •, EOI / AS / RPAREN / SEMICOLON / FAT_ARROW]
fn yy_state_30(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_alternation, yy_action_5)
}

// [18, alias → alternation •, EOI / RPAREN / SEMICOLON / FAT_ARROW]
// [19, alias → alternation • AS LC_IDENT, EOI / RPAREN / SEMICOLON / FAT_ARROW]
fn yy_state_31(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_AS => Shift(yy_state_32)
    T_EOI | T_RPAREN | T_SEMICOLON | T_FAT_ARROW => Reduce(1, NT_alias, yy_action_18)
    _ => Error
  }
}

// [19, alias → alternation AS • LC_IDENT, EOI / RPAREN / SEMICOLON / FAT_ARROW]
fn yy_state_32(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LC_IDENT => Shift(yy_state_33)
    _ => Error
  }
}

// [19, alias → alternation AS LC_IDENT •, EOI / RPAREN / SEMICOLON / FAT_ARROW]
fn yy_state_33(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_alias, yy_action_10)
}

// [17, regex → alias •, EOI / SEMICOLON / FAT_ARROW]
fn yy_state_34(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_regex, yy_action_16)
}

// [1, regex_eoi → regex • EOI, $]
fn yy_state_35(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_EOI => Shift(yy_state_36)
    _ => Error
  }
}

// [1, regex_eoi → regex EOI •, $]
fn yy_state_36(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_regex_eoi, yy_action_14)
}

// [0, lex_eoi → • lex EOI, $]
// [2, lex → •, EOI]
// [3, lex → • header named_regex_list nonempty_rule_list trailer, EOI]
// [4, header → • LBRACE_CODE_RBRACE, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [5, header → •, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [41, lex_eoi_prime → • lex_eoi, $]
fn yy_state_37(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    NT_lex_eoi => Shift(yy_state_38)
    T_LBRACE_CODE_RBRACE => Shift(yy_state_39)
    NT_header => Shift(yy_state_40)
    NT_lex => Shift(yy_state_64)
    T_EOI => Reduce(0, NT_lex, yy_action_4)
    T_LET | T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => Reduce(0, NT_header, yy_action_31)
    _ => Error
  }
}

// [41, lex_eoi_prime → lex_eoi •, $]
fn yy_state_38(_lookahead : YYSymbol) -> YYDecision {
  Accept
}

// [4, header → LBRACE_CODE_RBRACE •, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_39(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_header, yy_action_15)
}

// [3, lex → header • named_regex_list nonempty_rule_list trailer, EOI]
// [8, named_regex_list → • named_regex named_regex_list, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [9, named_regex_list → •, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [10, named_regex → • LET LC_IDENT EQ regex SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_40(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LET => Shift(yy_state_41)
    NT_named_regex => Shift(yy_state_46)
    NT_named_regex_list => Shift(yy_state_48)
    T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => Reduce(0, NT_named_regex_list, yy_action_29)
    _ => Error
  }
}

// [10, named_regex → LET • LC_IDENT EQ regex SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_41(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LC_IDENT => Shift(yy_state_42)
    _ => Error
  }
}

// [10, named_regex → LET LC_IDENT • EQ regex SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_42(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_EQ => Shift(yy_state_43)
    _ => Error
  }
}

// [10, named_regex → LET LC_IDENT EQ • regex SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [17, regex → • alias, SEMICOLON]
// [18, alias → • alternation, SEMICOLON]
// [19, alias → • alternation AS LC_IDENT, SEMICOLON]
// [20, alternation → • concatenation, AS / SEMICOLON]
// [21, alternation → • concatenation BAR alternation, AS / SEMICOLON]
// [22, concatenation → • repetition, AS / SEMICOLON / BAR]
// [23, concatenation → • repetition concatenation, AS / SEMICOLON / BAR]
// [24, repetition → • atom, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / SEMICOLON / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_43(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_31)
    NT_alias => Shift(yy_state_34)
    NT_regex => Shift(yy_state_44)
    _ => Error
  }
}

// [10, named_regex → LET LC_IDENT EQ regex • SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_44(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_SEMICOLON => Shift(yy_state_45)
    _ => Error
  }
}

// [10, named_regex → LET LC_IDENT EQ regex SEMICOLON •, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_45(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(5, NT_named_regex, yy_action_36)
}

// [8, named_regex_list → • named_regex named_regex_list, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [8, named_regex_list → named_regex • named_regex_list, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [9, named_regex_list → •, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
// [10, named_regex → • LET LC_IDENT EQ regex SEMICOLON, LET / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_46(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LET => Shift(yy_state_41)
    NT_named_regex => Shift(yy_state_46)
    NT_named_regex_list => Shift(yy_state_47)
    T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => Reduce(0, NT_named_regex_list, yy_action_29)
    _ => Error
  }
}

// [8, named_regex_list → named_regex named_regex_list •, RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE]
fn yy_state_47(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_named_regex_list, yy_action_32)
}

// [3, lex → header named_regex_list • nonempty_rule_list trailer, EOI]
// [11, nonempty_rule_list → • rule, EOI / LBRACE_CODE_RBRACE]
// [12, nonempty_rule_list → • rule nonempty_rule_list, EOI / LBRACE_CODE_RBRACE]
// [13, rule → • RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE rule_item_list RBRACE RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_48(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => Shift(yy_state_49)
    NT_rule => Shift(yy_state_59)
    NT_nonempty_rule_list => Shift(yy_state_61)
    _ => Error
  }
}

// [13, rule → RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE • PARSE_LBRACE rule_item_list RBRACE RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_49(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_PARSE_LBRACE => Shift(yy_state_50)
    _ => Error
  }
}

// [13, rule → RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE • rule_item_list RBRACE RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
// [14, rule_item_list → • rule_item rule_item_list, RBRACE]
// [15, rule_item_list → •, RBRACE]
// [16, rule_item → • regex FAT_ARROW LBRACE_CODE_RBRACE, EOF / UNDERSCORE / RBRACE / LPAREN / LBRACKET / LC_IDENT / CHAR / STRING]
// [17, regex → • alias, FAT_ARROW]
// [18, alias → • alternation, FAT_ARROW]
// [19, alias → • alternation AS LC_IDENT, FAT_ARROW]
// [20, alternation → • concatenation, AS / FAT_ARROW]
// [21, alternation → • concatenation BAR alternation, AS / FAT_ARROW]
// [22, concatenation → • repetition, AS / FAT_ARROW / BAR]
// [23, concatenation → • repetition concatenation, AS / FAT_ARROW / BAR]
// [24, repetition → • atom, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_50(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_31)
    NT_alias => Shift(yy_state_34)
    NT_regex => Shift(yy_state_51)
    NT_rule_item => Shift(yy_state_54)
    NT_rule_item_list => Shift(yy_state_56)
    T_RBRACE => Reduce(0, NT_rule_item_list, yy_action_27)
    _ => Error
  }
}

// [16, rule_item → regex • FAT_ARROW LBRACE_CODE_RBRACE, EOF / UNDERSCORE / RBRACE / LPAREN / LBRACKET / LC_IDENT / CHAR / STRING]
fn yy_state_51(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_FAT_ARROW => Shift(yy_state_52)
    _ => Error
  }
}

// [16, rule_item → regex FAT_ARROW • LBRACE_CODE_RBRACE, EOF / UNDERSCORE / RBRACE / LPAREN / LBRACKET / LC_IDENT / CHAR / STRING]
fn yy_state_52(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACE_CODE_RBRACE => Shift(yy_state_53)
    _ => Error
  }
}

// [16, rule_item → regex FAT_ARROW LBRACE_CODE_RBRACE •, EOF / UNDERSCORE / RBRACE / LPAREN / LBRACKET / LC_IDENT / CHAR / STRING]
fn yy_state_53(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(3, NT_rule_item, yy_action_26)
}

// [14, rule_item_list → • rule_item rule_item_list, RBRACE]
// [14, rule_item_list → rule_item • rule_item_list, RBRACE]
// [15, rule_item_list → •, RBRACE]
// [16, rule_item → • regex FAT_ARROW LBRACE_CODE_RBRACE, EOF / UNDERSCORE / RBRACE / LPAREN / LBRACKET / LC_IDENT / CHAR / STRING]
// [17, regex → • alias, FAT_ARROW]
// [18, alias → • alternation, FAT_ARROW]
// [19, alias → • alternation AS LC_IDENT, FAT_ARROW]
// [20, alternation → • concatenation, AS / FAT_ARROW]
// [21, alternation → • concatenation BAR alternation, AS / FAT_ARROW]
// [22, concatenation → • repetition, AS / FAT_ARROW / BAR]
// [23, concatenation → • repetition concatenation, AS / FAT_ARROW / BAR]
// [24, repetition → • atom, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [25, repetition → • atom STAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [26, repetition → • atom PLUS, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [27, repetition → • atom QUESTION, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / LC_IDENT / CHAR / STRING]
// [28, atom → • LPAREN alias RPAREN, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [29, atom → • character_class, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [30, atom → • LC_IDENT, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [31, atom → • CHAR, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [32, atom → • STRING, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [33, atom → • UNDERSCORE, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [34, atom → • EOF, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [35, character_class → • LBRACKET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
// [36, character_class → • LBRACKET CARET character_class_inner RBRACKET, EOF / AS / UNDERSCORE / LPAREN / LBRACKET / FAT_ARROW / BAR / STAR / PLUS / QUESTION / LC_IDENT / CHAR / STRING]
fn yy_state_54(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACKET => Shift(yy_state_2)
    T_EOF => Shift(yy_state_13)
    T_UNDERSCORE => Shift(yy_state_14)
    T_STRING => Shift(yy_state_15)
    T_CHAR => Shift(yy_state_16)
    T_LC_IDENT => Shift(yy_state_17)
    NT_character_class => Shift(yy_state_18)
    T_LPAREN => Shift(yy_state_19)
    NT_atom => Shift(yy_state_22)
    NT_repetition => Shift(yy_state_26)
    NT_concatenation => Shift(yy_state_28)
    NT_alternation => Shift(yy_state_31)
    NT_alias => Shift(yy_state_34)
    NT_regex => Shift(yy_state_51)
    NT_rule_item => Shift(yy_state_54)
    NT_rule_item_list => Shift(yy_state_55)
    T_RBRACE => Reduce(0, NT_rule_item_list, yy_action_27)
    _ => Error
  }
}

// [14, rule_item_list → rule_item rule_item_list •, RBRACE]
fn yy_state_55(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_rule_item_list, yy_action_19)
}

// [13, rule → RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE rule_item_list • RBRACE RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_56(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RBRACE => Shift(yy_state_57)
    _ => Error
  }
}

// [13, rule → RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE rule_item_list RBRACE • RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_57(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RBRACE => Shift(yy_state_58)
    _ => Error
  }
}

// [13, rule → RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE rule_item_list RBRACE RBRACE •, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_58(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(5, NT_rule, yy_action_37)
}

// [11, nonempty_rule_list → • rule, EOI / LBRACE_CODE_RBRACE]
// [11, nonempty_rule_list → rule •, EOI / LBRACE_CODE_RBRACE]
// [12, nonempty_rule_list → • rule nonempty_rule_list, EOI / LBRACE_CODE_RBRACE]
// [12, nonempty_rule_list → rule • nonempty_rule_list, EOI / LBRACE_CODE_RBRACE]
// [13, rule → • RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE PARSE_LBRACE rule_item_list RBRACE RBRACE, EOI / RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE / LBRACE_CODE_RBRACE]
fn yy_state_59(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE => Shift(yy_state_49)
    NT_rule => Shift(yy_state_59)
    NT_nonempty_rule_list => Shift(yy_state_60)
    T_EOI | T_LBRACE_CODE_RBRACE => Reduce(1, NT_nonempty_rule_list, yy_action_23)
    _ => Error
  }
}

// [12, nonempty_rule_list → rule nonempty_rule_list •, EOI / LBRACE_CODE_RBRACE]
fn yy_state_60(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_nonempty_rule_list, yy_action_22)
}

// [3, lex → header named_regex_list nonempty_rule_list • trailer, EOI]
// [6, trailer → • LBRACE_CODE_RBRACE, EOI]
// [7, trailer → •, EOI]
fn yy_state_61(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_LBRACE_CODE_RBRACE => Shift(yy_state_62)
    NT_trailer => Shift(yy_state_63)
    T_EOI => Reduce(0, NT_trailer, yy_action_28)
    _ => Error
  }
}

// [6, trailer → LBRACE_CODE_RBRACE •, EOI]
fn yy_state_62(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(1, NT_trailer, yy_action_20)
}

// [3, lex → header named_regex_list nonempty_rule_list trailer •, EOI]
fn yy_state_63(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(4, NT_lex, yy_action_34)
}

// [0, lex_eoi → lex • EOI, $]
fn yy_state_64(_lookahead : YYSymbol) -> YYDecision {
  match _lookahead {
    T_EOI => Shift(yy_state_65)
    _ => Error
  }
}

// [0, lex_eoi → lex EOI •, $]
fn yy_state_65(_lookahead : YYSymbol) -> YYDecision {
  ReduceNoLookahead(2, NT_lex_eoi, yy_action_40)
}

fn[T] yy_parse(
  read_token : () -> (Token, Unit, Unit),
  start_pos : Unit,
  start : YYState,
  return_ : (YYObj) -> T
) -> T raise ParseError {
  let mut state_stack : @list.List[YYState] = @list.construct(start, @list.empty())
  let data_stack : Array[(YYObj, Unit, Unit)] = []
  let mut last_pos = start_pos
  let mut state = start
  let mut lookahead : Option[(YYSymbol, (YYObj, Unit, Unit), Token)] = None
  let mut last_shifted_state_stack = state_stack
  while true {
    let decision = match state(EOI) {
      ReduceNoLookahead(_) | Accept as t => t
      _ => {
        match lookahead {
          Some(la) => state(la.0)
          None => {
            let (token, start_pos, end_pos) = read_token()
            let (symbol, data) = yy_input(token, start_pos, end_pos)
            lookahead = Some((symbol, (data, start_pos, end_pos), token))
            state(symbol)
          }
        }
      }
    }
    match decision {
      Accept => return return_(data_stack.unsafe_pop().0)
      Shift(next_state) => {
        guard lookahead is Some(la)
        data_stack.push(la.1)
        state_stack = @list.construct(next_state, state_stack)
        last_shifted_state_stack = state_stack
        state = next_state
        last_pos = la.1.2
        lookahead = None
      }
      Reduce(count, symbol, action)
      | ReduceNoLookahead(count, symbol, action) => {
        loop (count, symbol, action) {
          _ => {
            let args = data_stack[data_stack.length() - count:]
            let data = action(last_pos, args)
            let (start_pos, end_pos) = if args.length() == 0 {
              (last_pos, last_pos)
            } else {
              (args[0].1, args[args.length() - 1].2)
            }
            for i in 0..<count {
              ignore(data_stack.unsafe_pop())
              state_stack = state_stack.unsafe_tail()
            }
            state = state_stack.unsafe_head()
            data_stack.push((data, start_pos, end_pos))
            match state(symbol) {
              Accept => return return_(data_stack.unsafe_pop().0)
              Shift(next_state) => {
                state_stack = @list.construct(next_state, state_stack)
                state = next_state
              }
              Reduce(count, symbol, action)
              | ReduceNoLookahead(count, symbol, action) => continue (count, symbol, action)
              _ => panic()
            }
          }
        }
      }
      Error => {
        let (_, (_, start_pos, end_pos), token) = lookahead.unwrap()
        error(last_shifted_state_stack, token, (start_pos, end_pos))
      }
    }
  }
  panic()
}

fn error(stack : @list.List[YYState], token : Token, loc : (Unit, Unit)) -> Unit raise ParseError {
  let expected = []
  fn try_add(symbol : YYSymbol, kind : TokenKind) {
    fn go(stack : @list.List[YYState]) {
      match stack {
        Empty => ()
        More(state, ..) => {
          match state(symbol) {
            Accept | Shift(_) => expected.push(kind)
            Reduce(count, symbol, _) | ReduceNoLookahead(count, symbol, _) => {
              fn inner_go(stack : @list.List[YYState], count, symbol) {
                let stack = stack.drop(count)
                guard stack is More(state, ..)
                match state(symbol) {
                  Shift(state) => go(@list.construct(state, stack))
                  Reduce(count, symbol, _) | ReduceNoLookahead(count, symbol, _) => inner_go(stack, count, symbol)
                  _ => panic()
                }
              }
              inner_go(stack, count, symbol)
            }
            Error => ()
          }
        }
      }
    }
    go(stack)
  }
  for term in ([(T_EOI, TK_EOI), (T_EOF, TK_EOF), (T_PARSE_LBRACE, TK_PARSE_LBRACE), (T_LET, TK_LET), (T_AS, TK_AS), (T_UNDERSCORE, TK_UNDERSCORE), (T_RBRACE, TK_RBRACE), (T_LPAREN, TK_LPAREN), (T_RPAREN, TK_RPAREN), (T_LBRACKET, TK_LBRACKET), (T_RBRACKET, TK_RBRACKET), (T_EQ, TK_EQ), (T_SEMICOLON, TK_SEMICOLON), (T_FAT_ARROW, TK_FAT_ARROW), (T_BAR, TK_BAR), (T_STAR, TK_STAR), (T_PLUS, TK_PLUS), (T_QUESTION, TK_QUESTION), (T_MINUS, TK_MINUS), (T_CARET, TK_CARET), (T_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE, TK_RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE), (T_LBRACE_CODE_RBRACE, TK_LBRACE_CODE_RBRACE), (T_LC_IDENT, TK_LC_IDENT), (T_CHAR, TK_CHAR), (T_STRING, TK_STRING)] : Array[(YYSymbol, TokenKind)]) {
    try_add(term.0, term.1)
  }
  raise UnexpectedToken(token, loc, expected)
}

pub fn lex_eoi(read_token : () -> (Token, Unit, Unit), start_pos : Unit) -> @type.Lex raise ParseError {
  yy_parse(
    read_token,
    start_pos,
    yy_state_37,
    (it) => {
      guard it is YYObj__type_Lex(result)
      result
    },
  )
}
pub fn regex_eoi(read_token : () -> (Token, Unit, Unit), start_pos : Unit) -> @type.Regex raise ParseError {
  yy_parse(
    read_token,
    start_pos,
    yy_state_0,
    (it) => {
      guard it is YYObj__type_Regex(result)
      result
    },
  )
}
