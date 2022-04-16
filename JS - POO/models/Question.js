export class Question {
  /**
   *
   * @param {string} text Text Question
   * @param {string[]} choices Array with choices
   * @param {string} answer Correct answer
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answer is correct
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

