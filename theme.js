import React from "react";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Provider = props => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
            .cs-title {
              text-align: center;
              font-size: 1.5em;
            }
          `
      }}
    />
    {props.children}
    <div
      css={{
        position: "fixed",
        right: 0,
        bottom: 0,
        margin: 16
      }}
    >
      Typage de bout en bout avec TypeScript et GraphQL {props.index + 1} / {props.slides.length}
    </div>
  </>
);

export default {
  // add a custom font
  font:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  css: {
    textAlign: "left",
  },
  // custom colors
  colors: {
    text: "black",
    background: "white",
    link: "black",
    code: "grey"
  },
  Slide: {
    padding: "80px"
  },
  inlineCode: {
    color: "blue"
  },
  pre: {
    fontSize: "0.35em",
  },
  ul: {
    lineHeight: "1.5"
  },
  prism: {
    style: atomDark
  },
  Provider
};
