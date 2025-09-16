

const questions = [
  {
    text: "1. Qual é o principal objetivo do gerenciamento ágil?",
  
    options: [
      { value: "a", label: "Entregar valor contínuo ao cliente" },
      { value: "b", label: "Entregar tudo de uma vez no final" },
      { value: "c", label: "Seguir um plano fixo sem mudanças" },
      { value: "d", label: "Reduzir custos apenas" }
    ],
    answer: "a"
  },
  {
    text: "2. Qual é a metodologia ágil mais conhecida?",
    options: [
      { value: "a", label: "Scrum" },
      { value: "b", label: "PMBOK" },
      { value: "c", label: "Waterfall" },
      { value: "d", label: "Kanban" }
    ],
    answer: "a"
  },
  {
    text: "3. O que é um Sprint no contexto do Scrum?",
    options: [
      { value: "a", label: "Uma reunião diária" },
      { value: "b", label: "Um período de trabalho fixo" },
      { value: "c", label: "Um documento de planejamento" },
      { value: "d", label: "Um tipo de gráfico" }
    ],
    answer: "b"
  },
  {
    text: "4. O que é o Kanban?",
    options: [
      { value: "a", label: "Uma metodologia ágil" },
      { value: "b", label: "Uma ferramenta de gestão visual" },
      { value: "c", label: "Um tipo de reunião" },
      { value: "d", label: "Um documento de requisitos" }
    ],
    answer: "a"
  },
  {
    text: "5. Qual é a principal medida de progresso em um projeto ágil?",
    options: [
      { value: "a", label: "O número de horas trabalhadas" },
      { value: "b", label: "A quantidade de funcionalidades entregues" },
      { value: "c", label: "A satisfação do cliente" },
      { value: "d", label: "O cumprimento do cronograma" }
    ],
    answer: "c"
  },
  {
    text: "6. O que é um backlog?",
    options: [
      { value: "a", label: "Uma lista de tarefas e suas prioridades estado" },
      { value: "b", label: "Um gráfico de burndown" },
      { value: "c", label: "Um tipo de reunião" },
      { value: "d", label: "Um documento de planejamento" }
    ],
    answer: "a"
  },
  {
    text: "7. Qual é o objetivo da reunião diária (Daily Scrum)?",
    options: [
      { value: "a", label: "Discutir o que foi feito, o que será feito e impedimentos" },
      { value: "b", label: "Planejar o próximo mês" },
      { value: "c", label: "Revisar o trabalho do mês passado" },
      { value: "d", label: "Apresentar relatórios para a gerência" }
    ],
    answer: "a"
  },

  {
    text: "8. Qual é a importância da retrospectiva no Scrum?",
    options: [
      { value: "a", label: "Definir o próximo Sprint" },
      { value: "b", label: "Revisar e melhorar o processo" },
      { value: "c", label: "Apresentar resultados para os stakeholders" },
      { value: "d", label: "Treinar a equipe em novas tecnologias" }
    ],
    answer: "b"
  }
];

function renderQuiz() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = '';
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<p>${q.text}</p>` +
      q.options.map(opt =>
        `<label><input type="radio" name="q${i+1}" value="${opt.value}"> ${opt.label}</label><br>`
      ).join('');
    quizContainer.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  questions.forEach((q, i) => {
    const radios = document.getElementsByName(`q${i+1}`);
    radios.forEach(radio => {
      if (radio.checked && radio.value === q.answer) {
        score++;
      }
    });
  });
  const result = document.getElementById('result');
  result.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  const bilhete = document.getElementById('bilhete');
  bilhete.style.display = score === questions.length ? 'block' : 'none';
}

window.onload = renderQuiz;