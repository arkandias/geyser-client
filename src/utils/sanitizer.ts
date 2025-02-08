import xss from "xss";

const options = {
  whiteList: {
    font: ["face"],
    div: ["style"],
    span: ["style"],
    p: [],
    br: [],
    b: [],
    i: [],
    u: [],
    strike: [],
    sub: [],
    sup: [],
    hr: [],
    a: ["href"],
    ol: [],
    ul: [],
    li: ["style"],
  },
  css: {
    whiteList: {
      "font-family": true,
      "text-align": true,
    },
  },
};

export const sanitize = (html: string) => xss(html, options);
