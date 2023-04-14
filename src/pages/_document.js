import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="lemonade" lang="en">
      <Head />
      <body>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
