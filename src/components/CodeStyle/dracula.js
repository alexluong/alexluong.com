import { css } from "styled-components"

const dracular = css`
  /** PrismJS 1.14.0
http://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+actionscript+ada+apacheconf+apl+applescript+c+arff+asciidoc+asm6502+aspnet+autohotkey+autoit+bash+basic+batch+bison+brainfuck+bro+cpp+csharp+arduino+coffeescript+clojure+ruby+csp+css-extras+d+dart+diff+django+docker+eiffel+elixir+elm+markup-templating+erlang+fsharp+flow+fortran+gedcom+gherkin+git+glsl+go+graphql+groovy+haml+handlebars+haskell+haxe+http+hpkp+hsts+ichigojam+icon+inform7+ini+io+j+java+jolie+json+julia+keyman+kotlin+latex+less+liquid+lisp+livescript+lolcode+lua+makefile+markdown+erb+matlab+mel+mizar+monkey+n4js+nasm+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+perl+php+php-extras+sql+powershell+processing+prolog+properties+protobuf+pug+puppet+pure+python+q+qore+r+jsx+typescript+renpy+reason+rest+rip+roboconf+crystal+rust+sas+sass+scss+scala+scheme+smalltalk+smarty+plsql+soy+stylus+swift+tcl+textile+twig+tsx+vbnet+velocity+verilog+vhdl+vim+visual-basic+wasm+wiki+xeora+xojo+yaml&plugins=line-numbers+toolbar+show-language */
  /**
  * prism.js default theme for JavaScript, CSS and HTML
  * Based on dabblet (http://dabblet.com)
  * @author Lea Verou
  */

  /**
  * Dracula Theme for Prism.JS
  *
  * @author Gustavo Costa
  * e-mail: gusbemacbe@gmail.com
  *
  * @contributor Jon Leopard
  * e-mail: jonlprd@gmail.com
  *
  * @license MIT 2016-2018
  */

  pre[class*="language-"] {
    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-track {
      background-color: #6272a4;
      border-radius: 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #bd93f9;
      border-radius: 0px;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    background: rgb(40, 41, 54);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    &::selection,
    *::selection {
      text-shadow: none;
      background-color: #5a5f80;
    }
  }

  .limit-300 {
    height: 300px !important;
  }

  .limit-400 {
    height: 400px !important;
  }

  .limit-500 {
    height: 500px !important;
  }

  .limit-600 {
    height: 600px !important;
  }

  .limit-700 {
    height: 700px !important;
  }

  .limit-800 {
    height: 800px !important;
  }

  .token.comment {
    color: rgba(98, 114, 164, 1);
  }

  .token.prolog {
    color: rgba(207, 207, 194, 1);
  }

  .token.tag {
    color: rgba(220, 104, 170, 1);
  }

  .token.entity {
    color: rgba(139, 233, 253, 1);
  }

  .token.atrule {
    color: rgba(98, 239, 117, 1);
  }

  .token.url {
    color: rgba(102, 217, 239, 1);
  }

  .token.selector {
    color: rgba(207, 207, 194, 1);
  }

  .token.string {
    color: rgba(241, 250, 140, 1);
  }

  .token.property {
    color: rgba(255, 184, 108, 1);
  }

  .token.important {
    color: rgba(255, 121, 198, 1);
    font-weight: bold;
  }

  .token.punctuation {
    color: rgba(230, 219, 116, 1);
  }

  .token.number {
    color: rgba(189, 147, 249, 1);
  }

  .token.function {
    color: rgba(80, 250, 123, 1);
  }

  .token.class-name {
    color: rgba(255, 184, 108, 1);
  }

  .token.keyword {
    color: rgba(255, 121, 198, 1);
  }

  .token.boolean {
    color: rgba(255, 184, 108, 1);
  }

  .token.operator {
    color: rgba(139, 233, 253, 1);
  }

  .token.char {
    color: rgba(255, 135, 157, 1);
  }

  .token.regex {
    color: rgba(80, 250, 123, 1);
  }

  .token.variable {
    color: rgba(80, 250, 123, 1);
  }

  .token.constant {
    color: rgba(255, 184, 108, 1);
  }

  .token.symbol {
    color: rgba(255, 184, 108, 1);
  }

  .token.builtin {
    color: rgba(255, 121, 198, 1);
  }

  .token.attr-value {
    color: #7ec699;
  }

  .token.deleted {
    color: #e2777a;
  }

  .token.namespace {
    color: #e2777a;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token {
    color: #ff79c6;
  }

  .language-cpp {
    .token.string {
      color: #8be9fd;
    }
  }

  .language-c {
    .token.string {
      color: #8be9fd;
    }
  }

  .language-css {
    .token.selector {
      color: rgba(80, 250, 123, 1);
    }

    .token.property {
      color: rgba(255, 184, 108, 1);
    }
  }

  .language-java {
    .token.class-name {
      color: #8be9fd;
    }

    .token.class-name {
      color: #8be9fd;
    }
  }

  .language-markup {
    .token.attr-value {
      color: rgba(102, 217, 239, 1);
    }

    .token.tag {
      color: rgba(80, 250, 123, 1);
    }
  }

  .language-objectivec {
    .token.property {
      color: #66d9ef;
    }

    .token.string {
      color: #50fa7b;
    }
  }

  .language-php {
    .token.boolean {
      color: #8be9fd;
    }

    .token.function {
      color: #ff79c6;
    }

    .token.keyword {
      color: #66d9ef;
    }
  }

  .language-ruby {
    .token.symbol {
      color: #8be9fd;
    }

    .token.class-name {
      color: #cfcfc2;
    }
  }

  .line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  .line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`

export default dracular
