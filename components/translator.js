const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  constructor() {
    this.americanOnly = americanOnly;
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
    this.britishOnly = britishOnly;
  }

  translateTitle(text, locale) {
    const reg =
      locale === "american-to-british"
        ? /\b(Mr|Mrs|Ms|Mx|Dr|Prof)\./gi
        : /\b(Mr|Mrs|Ms|Mx|Dr|Prof)\b/gi;
    let result = text.replace(reg, (match) => {
      if (locale === "american-to-british")
        return `<span class='highlight'>${match.slice(0, -1)}</span>`;
      else return `<span class='highlight'>${match}.</span>`;
    });
    return result;
  }
  translateTime(text, locale) {
    const reg =
      locale === "american-to-british"
        ? /\b(\d{1,2}):(\d{2})\b/g
        : /\b(\d{1,2})\.(\d{2})\b/g;
    let result = text.replace(reg, (match, p1, p2) => {
      if (locale === "american-to-british")
        return `<span class='highlight'>${p1}.${p2}</span>`;
      else return `<span class='highlight'>${p1}:${p2}</span>`;
    });
    return result;
  }
  translateWords(text, locale) {
    let sortedTranslations =
      locale === "american-to-british" ? this.americanOnly : this.britishOnly;
    sortedTranslations = Object.entries(sortedTranslations).sort(
      (a, b) => b[0].length - a[0].length
    );
    let result = text;
    for (const [key, value] of sortedTranslations) {
      const reg = new RegExp(`\\b${key}\\b`, 'gi');
      result = result.replace(reg, `<span class='highlight'>${value}</span>`);
    }
    return result;
  }
  translateSpelling(text, locale) {
    let result = text;
    let sortedTranslations = this.americanToBritishSpelling;
    if (locale === "british-to-american")
      sortedTranslations = Object.fromEntries(
        Object.entries(sortedTranslations).map(([key, value]) => [value, key])
      );
    sortedTranslations = Object.entries(sortedTranslations).sort(
      (a, b) => b[0].length - a[0].length
    );
    for (const [key, value] of sortedTranslations) {
      const reg = new RegExp(`\\b${key}\\b`, 'gi');
      result = result.replace(reg, `<span class='highlight'>${value}</span>`);
    }
    return result;
  }
  translate(text, locale) {
    let translation = text;
    if (locale !== "british-to-american" && locale !== "american-to-british")
      return "Invalid locale";
    translation = this.translateTitle(translation, locale);
    translation = this.translateTime(translation, locale);
    translation = this.translateWords(translation, locale);
    translation = this.translateSpelling(translation, locale);

    if (translation === text) translation="Everything looks good to me!";
      return { text, translation };
  }
}
module.exports = Translator;
