var name = prompt("Qual é o seu Nome?");

document.addEventListener("DOMContentLoaded", function() {
    
    const questions = [
        {   //Pergunta 1
            question: "O que HTML representa?", 
            options: ["High Tech Modern Language", "Hyperlink and Text Markup Language", "Hyper Text Markup Language"],
            correctAnswer: "Hyper Text Markup Language"
        },
        {   //Pergunta 2
            question: "O que é JavaScript e para que ele é comumente usado em desenvolvimento web?",
            options: ["Uma linguagem de programação usada para criar documentos HTML", "Uma linguagem de programação usada para estilizar páginas da web", "Uma linguagem de programação usada para criar interatividade em páginas"],
            correctAnswer: "Uma linguagem de programação usada para criar interatividade em páginas"
        },
        {   //Pergunta 3
            question: "Como você declara uma variável em JavaScript?",
            options: ["Usando a palavra-chave (var)", "Usando a palavra-chave (variável)", "Não é possível declarar variáveis em JavaScript"],
            correctAnswer: "Usando a palavra-chave (var)"
        },
        {   //Pergunta 4
            question: "Qual propriedade do CSS é usada para alterar a cor do texto?",
            options: ["font-color", "color", "text-color"],
            correctAnswer: "color"
        },
        {   //Pergunta 5
            question: "Qual função do JavaScript é usada para exibir algo no console?",
            options: ["console.log()", "print()", "display()"],
            correctAnswer: "console.log()"
        },
        {   //Pergunta 6
            question: "Quais são todos os estados possíveis que um tipo lógico pode assumir?",
            options: ["Verdadeiro, Duvidoso, Falso", "Verdadeiro, Duvidoso, Errado", "Verdadeiro, Falso"],
            correctAnswer: "Verdadeiro, Falso"
        },
        {   //Pergunta 7
            question: "Um loop (while) é uma estrutura de controle que executa um bloco de código repetidamente enquanto uma condição especificada for verdadeira.",
            options: ["Verdadeiro","Falso"],
            correctAnswer: "Verdadeiro"
        },
        {   //Pergunta 8
            question: "A negação, na lógica de programação, é uma operação que inverte o valor de uma variável booleana.",
            options: ["Verdadeiro","Falso"],
            correctAnswer: "Falso"
        },
        {   //Pergunta 9
            question: "Uma variável booleana só pode ter dois valores possíveis: verdadeiro (true) ou falso (false).",
            options: ["Verdadeiro","Falso"],
            correctAnswer: "Verdadeiro"
        },
        {   //Pergunta 10
            question: "A qual operação lógica essa tabela-verdade se refere?",
            options: ["NOT", "AND", "OR"],
            correctAnswer: "OR",
            imagem: "images/imagem.jpg"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function atualizaPontos() {
    const scoreValueElement = document.getElementById("score-value");
    if (scoreValueElement) {
        scoreValueElement.innerText = score;
    } else {}
}


    function carregaPergunta() {
    const questionContainer = document.getElementById("question-container");
    const currentQuestionData = questions[currentQuestion];

    questionContainer.innerHTML = `
        <p>${currentQuestionData.question}</p>
        ${currentQuestionData.imagem ? `<img src="${currentQuestionData.imagem}" alt="imagem.jpg">` : ''}
        <ul>
            ${currentQuestionData.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join('')}
        </ul>
    `;

    atualizaPontos(); 
}

    
    document.getElementById('submit-btn').addEventListener('click', verificaResposta);

    function verificaResposta() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (!selectedAnswer) {
            alert("Por favor, selecione uma resposta.");
            return;
        }

        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            score++;
        } else {
            mostraRespostaCorreta(); // Chamando a função para mostrar a resposta correta
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            carregaPergunta();
        } else {
            mostraResultado();
        }

        atualizaPontos();
    }

    function mostraRespostaCorreta() {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        alert(`Resposta incorreta! A resposta correta é: ${correctAnswer}`);
    }

    function mostraResultado() {
        const quizContainer = document.getElementById("quiz-container");

        if (score <= 6) {
            quizContainer.innerHTML = `<h1>${name}, estude um pouco mais!!!</h1><p>Sua pontuação é: ${score} de ${questions.length} perguntas</p>`;
        } else {
            quizContainer.innerHTML = `<h1>Quiz Concluído!</h1><p>${name}, sua pontuação é: ${score} de ${questions.length} perguntas</p>`;
        }
    }

    // Carregando a primeira pergunta
    carregaPergunta();
});