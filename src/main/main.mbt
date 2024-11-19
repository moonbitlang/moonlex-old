fn main {
  let usage =
    #|Usage: moonlex [options] <input-file>
  let output_file = @ref.new("")
  let input_file = @ref.new("")
  let mut exit = false
  @ArgParser.parse(
    [
      ("--output-file", "-o", Set_string(output_file), "Output file"),
      (
        "--version",
        "-v",
        Unit(
          fn() {
            exit = true
            println("moonlex 0.1.0")
          },
        ),
        "Show version",
      ),
    ],
    fn(rest) { input_file.val = rest },
    usage,
    @sys.get_cli_args(),
  )
  if exit {
    return
  }
  guard input_file.val != "" else { abort("Input file is required") }
  let lexer_spec_src = try {
    @fs.read_file_to_string!(path=input_file.val)
  } catch {
    err => abort(Show::to_string(err))
  }
  let parser_buf = @parser.ParserBuf::from_string(lexer_spec_src)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  let output = @codegen.codegen_lex(lex)
  if output_file.val == "" {
    println(output)
  } else {
    @fs.write_string_to_file(path=output_file.val, content=output)
  }
}
