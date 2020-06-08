export const htmlEntities = Vue => {
  Vue.filter("htmlEntities", value => {
    if (!value) return;
    return htmlEntities(value);
  });

  Vue.prototype.$htmlEntities = value => {
    return htmlEntities(value);
  };

  function htmlEntities(value) {
    if (value && isNaN(value)) {
      const quote = value.replace(/&quot;/g, '"');
      const quote1 = quote.replace(/&#34;/g, '"');

      const exclamation = quote1.replace(/&excl;/g, "!");
      const exclamation1 = exclamation.replace(/&#33;/g, "!");

      const hash = exclamation1.replace(/&num;/g, "#");
      const hash1 = hash.replace(/&#35;/g, "#");

      const doller = hash1.replace(/&dollar;/g, "$");
      const doller1 = doller.replace(/&#36;/g, "$");

      const percent = doller1.replace(/&percnt;/g, "%");
      const percent1 = percent.replace(/&#37;/g, "%");

      const amp = percent1.replace(/&amp;/g, "%");
      const amp1 = amp.replace(/&#38;/g, "%");

      const apo = amp1.replace(/&apos;/g, "'");
      const apo1 = apo.replace(/&#39;/g, "'");

      const lpar = apo1.replace(/&lpar;/g, "(");
      const lpar1 = lpar.replace(/&#40;/g, "(");

      const rpar = lpar1.replace(/&rpar;/g, ")");
      const rpar1 = rpar.replace(/&#41;/g, ")");

      const ast = rpar1.replace(/&ast;/g, "*");
      const ast1 = ast.replace(/&#42;/g, "*");

      const commat = ast1.replace(/&commat;/g, "@");
      const commat1 = commat.replace(/&#64;/g, "@");

      const space = commat1.replace(/&nbsp;/g, " ");
      const space1 = space.replace(/&#160;/g, " ");

      const copy = space1.replace(/&copy;/g, "©");
      const copy1 = copy.replace(/&#169;/g, "©");

      const pound = copy1.replace(/&pound;/g, "£");
      const pound1 = pound.replace(/&#163;/g, "£");

      const euro = pound1.replace(/&euro;/g, "₤");
      const euro1 = euro.replace(/&#8364;/g, "₤");

      const yen = euro1.replace(/&yen;/g, "¥");
      const yen1 = yen.replace(/&#165;/g, "¥");

      const micro = yen1.replace(/&micro;/g, "μ");
      const micro1 = micro.replace(/&#181;/g, "μ");

      return micro1;
    } else return value;
  }
};
