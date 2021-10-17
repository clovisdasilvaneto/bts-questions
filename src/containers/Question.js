import React, { useState } from "react";

import questions from "../config/questions";
import ticket from "../assets/ingresso.pdf";

function Question({ profile }) {
  const question = questions[profile.toLowerCase()];
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [answer, setAnswer] = useState();

  const handleAnswerChange = ({ target }) => {
    setAnswer(target.value);
    setError(false);
  };

  const handleSubmit = () => {
    if (answer.toLowerCase() !== question.answer.toLowerCase()) {
      setError(true);
      return;
    }

    setLoading(true);

    window.location.href = ticket;
  };

  return (
    <div className="container">
      <div className="animation-container">
        <header>
          <h1>{question.title}</h1>
        </header>

        <div>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Sua resposta aqui!"
          />

          {error && (
            <p className="error">Tony Montana? Lachimolala? Tente novamente!</p>
          )}

          <button onClick={handleSubmit}>
            {loading ? "Abrindo surpresa..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
