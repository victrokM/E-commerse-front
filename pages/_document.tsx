import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
