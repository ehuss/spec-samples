use mdbook::book::Book;
use mdbook::errors::Error;
use mdbook::preprocess::{CmdPreprocessor, Preprocessor, PreprocessorContext};
use mdbook::BookItem;
use regex::{Captures, Regex};
use semver::{Version, VersionReq};
use std::io;
use std::process;

fn main() {
    let mut args = std::env::args().skip(1);
    match args.next().as_deref() {
        Some("supports") => {
            // Supports all renderers.
            return;
        }
        Some(arg) => {
            eprintln!("unknown argument: {arg}");
            std::process::exit(1);
        }
        None => {}
    }

    let preprocessor = Spec::new();

    if let Err(e) = handle_preprocessing(&preprocessor) {
        eprintln!("{}", e);
        process::exit(1);
    }
}

fn handle_preprocessing(pre: &dyn Preprocessor) -> Result<(), Error> {
    let (ctx, book) = CmdPreprocessor::parse_input(io::stdin())?;

    let book_version = Version::parse(&ctx.mdbook_version)?;
    let version_req = VersionReq::parse(mdbook::MDBOOK_VERSION)?;

    if !version_req.matches(&book_version) {
        eprintln!(
            "Warning: The {} plugin was built against version {} of mdbook, \
             but we're being called from version {}",
            pre.name(),
            mdbook::MDBOOK_VERSION,
            ctx.mdbook_version
        );
    }

    let processed_book = pre.run(&ctx, book)?;
    serde_json::to_writer(io::stdout(), &processed_book)?;

    Ok(())
}

struct Spec;

impl Spec {
    pub fn new() -> Spec {
        Spec
    }
}

impl Preprocessor for Spec {
    fn name(&self) -> &str {
        "nop-preprocessor"
    }

    fn run(&self, _ctx: &PreprocessorContext, mut book: Book) -> Result<Book, Error> {
        let rule_re = Regex::new(r"(?m)^r\[([^]]+)]$").unwrap();
        let admonition_re =
            Regex::new(r"(?m)^ *> \[!(?<admon>[^]]+)\]\n(?<blockquote>(?: *> .*\n)+)").unwrap();
        for section in &mut book.sections {
            let BookItem::Chapter(ch) = section else {
                continue;
            };
            let new_content = rule_re.replace_all(
                &ch.content,
                "<div class=\"rule\" id=\"$1\"><a class=\"rule-link\" href=\"#$1\">[$1]</a></div>\n",
            );
            ch.content = new_content.to_string();

            let new_content = admonition_re.replace_all(&ch.content, |caps: &Captures| {
                let lower = caps["admon"].to_lowercase();
                format!(
                    "<div class=\"{lower}\">\n\n{}\n\n</div>\n",
                    &caps["blockquote"]
                )
            });
            ch.content = new_content.to_string();
        }

        Ok(book)
    }
}
