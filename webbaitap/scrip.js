const quizData = [
    {
        question: "1 + 1 bằng bao nhiêu?",
        answers: ["1", "2", "3", "4"],
        correct: "2"
    },
    {
        question: "Thủ đô của Việt Nam là gì?",
        answers: ["Hà Nội", "Hải Phòng", "TP.HCM", "Đà Nẵng"],
        correct: "Hà Nội"
    },
    {
        question: "Màu của lá cây là gì?",
        answers: ["Đỏ", "Vàng", "Xanh", "Tím"],
        correct: "Xanh"
    },
    {
        question: "Nước nào có diện tích lớn nhất thế giới?",
        answers: ["Mỹ", "Nga", "Trung Quốc", "Canada"],
        correct: "Nga"
    },
    {
        question: "Ai là người sáng lập Microsoft?",
        answers: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        correct: "Bill Gates"
    },
    {
        question: "Con vật nào là biểu tượng của Trung Quốc?",
        answers: ["Hổ", "Gấu trúc", "Rồng", "Voi"],
        correct: "Gấu trúc"
    },
    {
        question: "Loài chim nào không biết bay?",
        answers: ["Đại bàng", "Chim cánh cụt", "Chim sẻ", "Cú mèo"],
        correct: "Chim cánh cụt"
    },
    {
        question: "Đâu là hành tinh lớn nhất trong Hệ Mặt Trời?",
        answers: ["Trái Đất", "Sao Kim", "Sao Mộc", "Sao Hỏa"],
        correct: "Sao Mộc"
    },
    {
        question: "Ai là tác giả của truyện Kiều?",
        answers: ["Nguyễn Du", "Hồ Xuân Hương", "Nguyễn Trãi", "Tố Hữu"],
        correct: "Nguyễn Du"
    },
    {
        question: "Công thức hóa học của nước là gì?",
        answers: ["H2O", "CO2", "O2", "NaCl"],
        correct: "H2O"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

// Hiển thị câu hỏi
function loadQuiz() {
    let quizHTML = "";
    quizData.forEach((q, index) => {
        quizHTML += `
            <div class="question">${q.question}</div>
            <div class="answers">
                ${q.answers.map(answer => `
                    <label>
                        <input type="radio" name="question${index}" value="${answer}">
                        ${answer}
                    </label>
                `).join("")}
            </div>
        `;
    });
    quizContainer.innerHTML = quizHTML;
}

// Kiểm tra đáp án
function checkAnswers() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correct) {
            score++;
        }
    });

    resultContainer.innerHTML = `Bạn đã trả lời đúng ${score}/${quizData.length} câu!`;
}

// Load câu hỏi khi mở trang
loadQuiz();
submitButton.addEventListener("click", checkAnswers);
