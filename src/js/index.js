"use strict";

import questions from "./questions";

let score = 0;

const getRandomQuizzes = (num) => {
    let selectedQuizzes = [];
    let questionsCopy = [...questions];
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * questionsCopy.length);
        selectedQuizzes.push(questionsCopy.splice(randomIndex, 1)[0]);
    }
    return selectedQuizzes;
}

const randomQuizzes = getRandomQuizzes(10);

console.log(randomQuizzes);
