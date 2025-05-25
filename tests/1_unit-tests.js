const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();
  suite("British to American", () => {
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
          text: "Paracetamol takes up to an hour to work.",
          locale: "british-to-american",
        },
        expected: {
          text: "Paracetamol takes up to an hour to work.",
          translation:
            "<span class='highlight'>Tylenol</span> takes up to an hour to work.",
        },
      },
      {
        body: {
          text: "First, caramelise the onions.",
          locale: "british-to-american",
        },
        expected: {
          text: "First, caramelise the onions.",
          translation:
            "First, <span class='highlight'>caramelize</span> the onions.",
        },
      },
      {
        body: {
          text: "I spent the bank holiday at the funfair.",
          locale: "british-to-american",
        },
        expected: {
          text: "I spent the bank holiday at the funfair.",
          translation:
            "I spent the <span class='highlight'>public holiday</span> at the <span class='highlight'>carnival</span>.",
        },
      },
      {
        body: {
          text: "I had a bicky then went to the chippy.",
          locale: "british-to-american",
        },
        expected: {
          text: "I had a bicky then went to the chippy.",
          translation:
            "I had a <span class='highlight'>cookie</span> then went to the <span class='highlight'>fish-and-chip shop</span>.",
        },
      },
      {
        body: {
          text: "I've just got bits and bobs in my bum bag.",
          locale: "british-to-american",
        },
        expected: {
          text: "I've just got bits and bobs in my bum bag.",
          translation:
            "I've just got <span class='highlight'>odds and ends</span> in my <span class='highlight'>fanny pack</span>.",
        },
      },
      {
        body: {
          text: "The car boot sale at Boxted Airfield was called off.",
          locale: "british-to-american",
        },
        expected: {
          text: "The car boot sale at Boxted Airfield was called off.",
          translation:
            "The <span class='highlight'>swap meet</span> at Boxted Airfield was called off.",
        },
      },
      {
        body: {
          text: "Have you met Mrs Kalyani?",
          locale: "british-to-american",
        },
        expected: {
          text: "Have you met Mrs Kalyani?",
          translation:
            "Have you met <span class='highlight'>Mrs.</span> Kalyani?",
        },
      },
      {
        body: {
          text: "Tea time is usually around 4 or 4.30.",
          locale: "british-to-american",
        },
        expected: {
          text: "Tea time is usually around 4 or 4.30.",
          translation:
            "Tea time is usually around 4 or <span class='highlight'>4:30</span>.",
        },
      },
      {
        body: {
          text: "Prof Joyner of King's College, London.",
          locale: "british-to-american",
        },
        expected: {
          text: "Prof Joyner of King's College, London.",
          translation:
            "<span class='highlight'>Prof.</span> Joyner of King's College, London.",
        },
      },
    ];

    cases.forEach(({ body, expected }) => {
      test("", (done) => {
        assert.deepEqual(
          translator.translate(body.text, body.locale),
          expected
        );
        done();
      });
    });
  });

  suite("American to British", () => {
    const cases = [
      {
        body: {
          text: "Mangoes are my favorite fruit.",
          locale: "american-to-british",
        },
        expected: {
          text: "Mangoes are my favorite fruit.",
          translation: "Mangoes are my <span class='highlight'>favourite</span> fruit.",
        },
      },
      {
        body: {
          text: "I ate yogurt for breakfast.",
          locale: "american-to-british",
        },
        expected: {
          text: "I ate yogurt for breakfast.",
          translation: "I ate <span class='highlight'>yoghurt</span> for breakfast.",
        },
      },
      {
        body: {
          text: "We had a party at my friend's condo.",
          locale: "american-to-british",
        },
        expected: {
          text: "We had a party at my friend's condo.",
          translation:
            "We had a party at my friend's <span class='highlight'>flat</span>.",
        },
      },
      {
        body: {
          text: "Can you toss this in the trashcan for me?",
          locale: "american-to-british",
        },
        expected: {
          text: "Can you toss this in the trashcan for me?",
          translation:
            "Can you toss this in the <span class='highlight'>bin</span> for me?",
        },
      },
      {
        body: {
          text: "The parking lot was full.",
          locale: "american-to-british",
        },
        expected: {
          text: "The parking lot was full.",
          translation:
            "The <span class='highlight'>car park</span> was full.",
        },
      },
      {
        body: {
          text: "Like a high tech Rube Goldberg machine.",
          locale: "american-to-british",
        },
        expected: {
          text: "Like a high tech Rube Goldberg machine.",
          translation:
            "Like a high tech <span class='highlight'>Heath Robinson device</span>.",
        },
      },
      {
        body: {
          text: "To play hooky means to skip class or work.",
          locale: "american-to-british",
        },
        expected: {
          text: "To play hooky means to skip class or work.",
          translation:
            "To <span class='highlight'>bunk off</span> means to skip class or work.",
        },
      },
      {
        body: {
          text: "No Mr. Bond, I expect you to die.",
          locale: "american-to-british",
        },
        expected: {
          text: "No Mr. Bond, I expect you to die.",
          translation:
            "No <span class='highlight'>Mr</span> Bond, I expect you to die.",
        },
      },
      {
        body: {
          text: "Dr. Grosh will see you now.",
          locale: "american-to-british",
        },
        expected: {
          text: "Dr. Grosh will see you now.",
          translation:
            "<span class='highlight'>Dr</span> Grosh will see you now.",
        },
      },
      {
        body: {
          text: "Lunch is at 12:15 today.",
          locale: "american-to-british",
        },
        expected: {
          text: "Lunch is at 12:15 today.",
          translation:
            "Lunch is at <span class='highlight'>12.15</span> today.",
        },
      },
    ];

    cases.forEach(({ body, expected }) => {
      test("", (done) => {
        assert.deepEqual(
          translator.translate(body.text, body.locale),
          expected
        );
        done();
      });
    });  
  });
});
