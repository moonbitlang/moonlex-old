///|
fn main {
  let usage =
    #|Usage: moonlex [options] <input-file>
  let output_file = @ref.new("")
  let input_file = @ref.new("")
  let mut code_unit = @type.CodeUnit4
  let mut default_encoding: @type.Encoding? = None
  let mut exit = false
  @ArgParser.parse(
    [
      ("--output-file", "-o", Set_string(output_file), "Output file"),
      (
        "--version",
        "-v",
        Unit(fn() {
          exit = true
          println("moonlex 0.1.0")
        }),
        "Show version",
      ),
      (
        "--code-unit",
        "",
        String(fn(code_unit_str) {
          code_unit = match code_unit_str {
            "1" => @type.CodeUnit1
            "2" => @type.CodeUnit2
            "4" => @type.CodeUnit4
            _ => {
              abort("Invalid code unit: \{code_unit_str}")
              return
            }
          }
        }),
        "Set code unit (1, 2, or 4)",
      ),
      (
        "--default-encoding",
        "",
        String(fn(encoding) {
          default_encoding = Some(match encoding {
            "ascii" => @type.Ascii
            "latin1" => @type.Latin1
            "utf8" => @type.Utf8
            "utf16" => @type.Utf16
            _ => {
              abort("Invalid encoding: \{encoding}")
              return
            }
          })
        }),
        "Set default encoding (ascii, latin1, utf8, or utf16). Only valid when code unit is 1",
      )
    ],
    fn(rest) { input_file.val = rest },
    usage,
    @sys.get_cli_args(),
  )
  if exit {
    return
  }
  guard input_file.val != "" else { abort("Input file is required") }
  let lexer_spec_src = @fs.read_file_to_string?(input_file.val).unwrap()
  let lex = try {
    @parser.parse_lex_from_string!(lexer_spec_src)
  } catch {
    err => {
      println(err)
      panic()
    }
  }
  let output = @codegen.codegen_lex(lex, code_unit~, default_encoding~)
  if output_file.val == "" {
    println(output)
  } else {
    @fs.write_string_to_file?(output_file.val, output).unwrap()
  }
}
