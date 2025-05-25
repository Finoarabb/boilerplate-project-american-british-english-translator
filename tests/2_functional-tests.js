const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  const cases = [
    {
      body: {
        text: "We watched the footie match for a while.",
        locale: "british-to-american",
      },
      expected: {
        text: "We watched the footie match for a while.",
        translation:
          "We watched the <span class='highlight'>soccer</span> match for a while.",
      },
    },
    {
      body: {
        text: "Everything looks good",
        locale: "british-to-american",
      },
      expected: {
        text: "Everything looks good",
        translation: "Everything looks good to me!",
      },
    },
    {
      body: {
        locale: "british-to-american",
      },
      expected: {
        error: "Required field(s) missing",
      },
    },
    {
      body: {
        text: "",
        locale: "british-to-american",
      },
      expected: {
        error: "No text to translate",
      },
    },
    {
      body: {
        text: "We watched the footie match for a while.",
      },
      expected: {
        error: "Required field(s) missing",
      },
    },
    {
      body: {
        text: "We watched the footie match for a while.",
        locale: "to-american",
      },
      expected: {
        error: "Invalid value for locale field",
      },
    },
  ];

  cases.forEach(({ body, expected }) => {
    test("", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send(body)
        .end((err, res) => {
          assert.deepEqual(res.body, expected);
          done();
        });
    });
  });
});
