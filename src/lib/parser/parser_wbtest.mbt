///|
test {
  let lex = parse_lex_from_string(lexer_src)
  @json.inspect(lex, content={
    "header": "",
    "named_regexes": [
      [
        "ws",
        {
          "$tag": "Repetition",
          "0": {
            "$tag": "CharSet",
            "0": [
              [["EofChar", 9], ["EofChar", 10]],
              [["EofChar", 13], ["EofChar", 13]],
              [["EofChar", 32], ["EofChar", 32]],
            ],
          },
        },
      ],
      [
        "hex_digit",
        {
          "$tag": "CharSet",
          "0": [
            [["EofChar", 48], ["EofChar", 57]],
            [["EofChar", 65], ["EofChar", 70]],
            [["EofChar", 97], ["EofChar", 102]],
          ],
        },
      ],
      [
        "lc_ident",
        {
          "$tag": "Concat",
          "0": {
            "$tag": "CharSet",
            "0": [
              [["EofChar", 95], ["EofChar", 95]],
              [["EofChar", 97], ["EofChar", 122]],
            ],
          },
          "1": {
            "$tag": "Option",
            "0": {
              "$tag": "Repetition",
              "0": {
                "$tag": "CharSet",
                "0": [
                  [["EofChar", 48], ["EofChar", 57]],
                  [["EofChar", 65], ["EofChar", 90]],
                  [["EofChar", 95], ["EofChar", 95]],
                  [["EofChar", 97], ["EofChar", 122]],
                ],
              },
            },
          },
        },
      ],
    ],
    "rules": [
      {
        "name": "token",
        "return_type": "Token",
        "params": "",
        "patterns": [
          [{ "$tag": "Named", "0": "ws" }, " token(lexbuf) "],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "//" },
              "1": {
                "$tag": "Concat",
                "0": {
                  "$tag": "Option",
                  "0": {
                    "$tag": "Repetition",
                    "0": {
                      "$tag": "CharSet",
                      "0": [
                        [["EofChar", 0], ["EofChar", 9]],
                        [["EofChar", 11], ["EofChar", 1114111]],
                      ],
                    },
                  },
                },
                "1": { "$tag": "Option", "0": { "$tag": "ReChar", "0": "\n" } },
              },
            },
            " token(lexbuf) ",
          ],
          [{ "$tag": "EOF" }, " EOI "],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "rule" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "Named", "0": "ws" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Capture",
                    "0": { "$tag": "Named", "0": "lc_ident" },
                    "1": "t",
                  },
                  "1": {
                    "$tag": "Concat",
                    "0": {
                      "$tag": "Option",
                      "0": { "$tag": "Named", "0": "ws" },
                    },
                    "1": {
                      "$tag": "Concat",
                      "0": { "$tag": "ReStr", "0": "(" },
                      "1": {
                        "$tag": "Option",
                        "0": { "$tag": "Named", "0": "ws" },
                      },
                    },
                  },
                },
              },
            },
            "\n      let buffer1 = StringBuilder::new()\n      let buffer2 = StringBuilder::new()\n      code_rparen(buffer1, lexbuf)\n      arrow_code_lbrace(buffer2, lexbuf)\n      RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE((t, buffer1.to_string(), buffer2.to_string()))\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "parse" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "Option", "0": { "$tag": "Named", "0": "ws" } },
                "1": { "$tag": "ReStr", "0": "{" },
              },
            },
            " PARSE_LBRACE ",
          ],
          [{ "$tag": "ReStr", "0": "=>" }, " FAT_ARROW "],
          [{ "$tag": "ReStr", "0": "_" }, " UNDERSCORE "],
          [
            { "$tag": "ReStr", "0": "{" },
            " \n      let buffer = StringBuilder::new()\n      code_rbrace(buffer, lexbuf)\n      LBRACE_CODE_RBRACE(buffer.to_string())\n    ",
          ],
          [{ "$tag": "ReStr", "0": "}" }, " RBRACE "],
          [{ "$tag": "ReStr", "0": "(" }, " LPAREN "],
          [{ "$tag": "ReStr", "0": ")" }, " RPAREN "],
          [{ "$tag": "ReStr", "0": "[" }, " LBRACKET "],
          [{ "$tag": "ReStr", "0": "]" }, " RBRACKET "],
          [{ "$tag": "ReStr", "0": "=" }, " EQ "],
          [{ "$tag": "ReStr", "0": ";" }, " SEMICOLON "],
          [{ "$tag": "ReStr", "0": "|" }, " BAR "],
          [{ "$tag": "ReStr", "0": "*" }, " STAR "],
          [{ "$tag": "ReStr", "0": "+" }, " PLUS "],
          [{ "$tag": "ReStr", "0": "?" }, " QUESTION "],
          [{ "$tag": "ReStr", "0": "-" }, " MINUS "],
          [{ "$tag": "ReStr", "0": "^" }, " CARET "],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": {
                  "$tag": "Capture",
                  "0": {
                    "$tag": "CharSet",
                    "0": [
                      [["EofChar", 0], ["EofChar", 38]],
                      [["EofChar", 40], ["EofChar", 91]],
                      [["EofChar", 93], ["EofChar", 1114111]],
                    ],
                  },
                  "1": "t",
                },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR(t.get_char(0).unwrap()) ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\b" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\u{08}') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\t" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\t') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\v" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\u{0b}') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\r" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\r') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\n" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\n') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\\\" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\\\') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\'" },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            " CHAR('\\'') ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\x" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Capture",
                    "0": {
                      "$tag": "Concat",
                      "0": { "$tag": "Named", "0": "hex_digit" },
                      "1": { "$tag": "Named", "0": "hex_digit" },
                    },
                    "1": "t",
                  },
                  "1": { "$tag": "ReChar", "0": "'" },
                },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      CHAR(code.unsafe_to_char())\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\u" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Capture",
                    "0": {
                      "$tag": "Concat",
                      "0": { "$tag": "Named", "0": "hex_digit" },
                      "1": {
                        "$tag": "Concat",
                        "0": { "$tag": "Named", "0": "hex_digit" },
                        "1": {
                          "$tag": "Concat",
                          "0": { "$tag": "Named", "0": "hex_digit" },
                          "1": { "$tag": "Named", "0": "hex_digit" },
                        },
                      },
                    },
                    "1": "t",
                  },
                  "1": { "$tag": "ReChar", "0": "'" },
                },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      CHAR(code.unsafe_to_char())\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReChar", "0": "'" },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "\\u{" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Capture",
                    "0": {
                      "$tag": "Repetition",
                      "0": { "$tag": "Named", "0": "hex_digit" },
                    },
                    "1": "t",
                  },
                  "1": {
                    "$tag": "Concat",
                    "0": { "$tag": "ReChar", "0": "}" },
                    "1": { "$tag": "ReChar", "0": "'" },
                  },
                },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      CHAR(code.unsafe_to_char())\n    ",
          ],
          [
            { "$tag": "ReChar", "0": "\"" },
            "\n      let buffer = StringBuilder::new()\n      string_inner_rquote(buffer, lexbuf)\n      STRING(buffer.to_string())\n    ",
          ],
          [
            {
              "$tag": "Capture",
              "0": { "$tag": "Named", "0": "lc_ident" },
              "1": "t",
            },
            "\n      match t {\n        \"eof\" => EOF\n        \"let\" => LET\n        \"as\" => AS\n        _ => LC_IDENT(t)\n      }\n    ",
          ],
        ],
      },
      {
        "name": "string_inner_rquote",
        "return_type": "Unit",
        "params": "buffer : StringBuilder",
        "patterns": [
          [{ "$tag": "ReChar", "0": "\"" }, " () "],
          [
            { "$tag": "ReStr", "0": "\\b" },
            "\n      buffer.write_char('\\u{08}')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\t" },
            "\n      buffer.write_char('\\t')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\v" },
            "\n      buffer.write_char('\\u{0b}')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\r" },
            "\n      buffer.write_char('\\r')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\n" },
            "\n      buffer.write_char('\\n')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\\\" },
            "\n      buffer.write_char('\\\\')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "\\\"" },
            "\n      buffer.write_char('\"')\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "\\x" },
              "1": {
                "$tag": "Concat",
                "0": {
                  "$tag": "Capture",
                  "0": {
                    "$tag": "Concat",
                    "0": { "$tag": "Named", "0": "hex_digit" },
                    "1": { "$tag": "Named", "0": "hex_digit" },
                  },
                  "1": "t",
                },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      buffer.write_char(code.unsafe_to_char())\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "\\u" },
              "1": {
                "$tag": "Concat",
                "0": {
                  "$tag": "Capture",
                  "0": {
                    "$tag": "Concat",
                    "0": { "$tag": "Named", "0": "hex_digit" },
                    "1": {
                      "$tag": "Concat",
                      "0": { "$tag": "Named", "0": "hex_digit" },
                      "1": {
                        "$tag": "Concat",
                        "0": { "$tag": "Named", "0": "hex_digit" },
                        "1": { "$tag": "Named", "0": "hex_digit" },
                      },
                    },
                  },
                  "1": "t",
                },
                "1": { "$tag": "ReChar", "0": "'" },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      buffer.write_char(code.unsafe_to_char())\n    ",
          ],
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "ReStr", "0": "\\u{" },
              "1": {
                "$tag": "Concat",
                "0": {
                  "$tag": "Capture",
                  "0": {
                    "$tag": "Repetition",
                    "0": { "$tag": "Named", "0": "hex_digit" },
                  },
                  "1": "t",
                },
                "1": {
                  "$tag": "Concat",
                  "0": { "$tag": "ReChar", "0": "}" },
                  "1": { "$tag": "ReChar", "0": "'" },
                },
              },
            },
            "\n      let code = (try? @strconv.parse_int(t, base=16)).unwrap()\n      buffer.write_char(code.unsafe_to_char())\n    ",
          ],
          [
            { "$tag": "Capture", "0": { "$tag": "Underscore" }, "1": "t" },
            "\n      buffer.write_string(t)\n      string_inner_rquote(buffer, lexbuf)\n    ",
          ],
          [{ "$tag": "EOF" }, " abort(\"Unexpected end of input\") "],
        ],
      },
      {
        "name": "code_rparen",
        "return_type": "Unit",
        "params": "buffer : StringBuilder",
        "patterns": [
          [{ "$tag": "ReStr", "0": ")" }, " () "],
          [
            { "$tag": "ReStr", "0": "(" },
            "\n      buffer.write_string(\"(\")\n      code_rparen(buffer, lexbuf)\n      buffer.write_string(\")\")\n      code_rparen(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "Capture", "0": { "$tag": "Underscore" }, "1": "t" },
            "\n      buffer.write_string(t)\n      code_rparen(buffer, lexbuf)\n    ",
          ],
          [{ "$tag": "EOF" }, " abort(\"Unexpected end of input\") "],
        ],
      },
      {
        "name": "arrow_code_lbrace",
        "return_type": "Unit",
        "params": "buffer : StringBuilder",
        "patterns": [
          [
            {
              "$tag": "Concat",
              "0": { "$tag": "Option", "0": { "$tag": "Named", "0": "ws" } },
              "1": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "->" },
                "1": {
                  "$tag": "Concat",
                  "0": { "$tag": "Option", "0": { "$tag": "Named", "0": "ws" } },
                  "1": {
                    "$tag": "Concat",
                    "0": {
                      "$tag": "Capture",
                      "0": {
                        "$tag": "Concat",
                        "0": {
                          "$tag": "CharSet",
                          "0": [
                            [["EofChar", 0], ["EofChar", 8]],
                            [["EofChar", 11], ["EofChar", 12]],
                            [["EofChar", 14], ["EofChar", 31]],
                            [["EofChar", 33], ["EofChar", 122]],
                            [["EofChar", 124], ["EofChar", 1114111]],
                          ],
                        },
                        "1": {
                          "$tag": "Option",
                          "0": {
                            "$tag": "Repetition",
                            "0": {
                              "$tag": "Concat",
                              "0": {
                                "$tag": "Option",
                                "0": { "$tag": "Named", "0": "ws" },
                              },
                              "1": {
                                "$tag": "CharSet",
                                "0": [
                                  [["EofChar", 0], ["EofChar", 8]],
                                  [["EofChar", 11], ["EofChar", 12]],
                                  [["EofChar", 14], ["EofChar", 31]],
                                  [["EofChar", 33], ["EofChar", 122]],
                                  [["EofChar", 124], ["EofChar", 1114111]],
                                ],
                              },
                            },
                          },
                        },
                      },
                      "1": "t",
                    },
                    "1": {
                      "$tag": "Concat",
                      "0": {
                        "$tag": "Option",
                        "0": { "$tag": "Named", "0": "ws" },
                      },
                      "1": { "$tag": "ReStr", "0": "{" },
                    },
                  },
                },
              },
            },
            "\n      buffer.write_string(t)\n    ",
          ],
        ],
      },
      {
        "name": "code_rbrace",
        "return_type": "Unit",
        "params": "buffer : StringBuilder",
        "patterns": [
          [
            {
              "$tag": "Capture",
              "0": {
                "$tag": "Concat",
                "0": { "$tag": "ReStr", "0": "//" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Repetition",
                    "0": {
                      "$tag": "CharSet",
                      "0": [
                        [["EofChar", 0], ["EofChar", 9]],
                        [["EofChar", 11], ["EofChar", 1114111]],
                      ],
                    },
                  },
                  "1": { "$tag": "ReChar", "0": "\n" },
                },
              },
              "1": "t",
            },
            "\n      buffer.write_string(t)\n      code_rbrace(buffer, lexbuf)\n    ",
          ],
          [
            {
              "$tag": "Capture",
              "0": {
                "$tag": "Concat",
                "0": { "$tag": "ReChar", "0": "\"" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "Option",
                    "0": {
                      "$tag": "Repetition",
                      "0": {
                        "$tag": "Alter",
                        "0": {
                          "$tag": "CharSet",
                          "0": [
                            [["EofChar", 0], ["EofChar", 33]],
                            [["EofChar", 35], ["EofChar", 91]],
                            [["EofChar", 93], ["EofChar", 1114111]],
                          ],
                        },
                        "1": {
                          "$tag": "Concat",
                          "0": { "$tag": "ReChar", "0": "\\" },
                          "1": { "$tag": "Underscore" },
                        },
                      },
                    },
                  },
                  "1": { "$tag": "ReChar", "0": "\"" },
                },
              },
              "1": "t",
            },
            "\n      buffer.write_string(t)\n      code_rbrace(buffer, lexbuf)\n    ",
          ],
          [
            {
              "$tag": "Capture",
              "0": {
                "$tag": "Concat",
                "0": { "$tag": "ReChar", "0": "'" },
                "1": {
                  "$tag": "Concat",
                  "0": {
                    "$tag": "CharSet",
                    "0": [
                      [["EofChar", 0], ["EofChar", 38]],
                      [["EofChar", 40], ["EofChar", 91]],
                      [["EofChar", 93], ["EofChar", 1114111]],
                    ],
                  },
                  "1": { "$tag": "ReChar", "0": "'" },
                },
              },
              "1": "t",
            },
            "\n      buffer.write_string(t)\n      code_rbrace(buffer, lexbuf)\n    ",
          ],
          [
            { "$tag": "ReStr", "0": "{" },
            "\n      buffer.write_string(\"{\")\n      code_rbrace(buffer, lexbuf)\n      buffer.write_string(\"}\")\n      code_rbrace(buffer, lexbuf)\n    ",
          ],
          [{ "$tag": "ReStr", "0": "}" }, " () "],
          [
            { "$tag": "Capture", "0": { "$tag": "Underscore" }, "1": "t" },
            "\n      buffer.write_string(t)\n      code_rbrace(buffer, lexbuf)\n    ",
          ],
          [{ "$tag": "EOF" }, " abort(\"Unexpected end of input\") "],
        ],
      },
    ],
    "trailer": "",
  })
}
