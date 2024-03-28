export default function Header() {
  return (
    <div className="Header">
      <p className="Quiz">InQuizitive</p>
      <a href="/">
        <img src="/Frame_2.svg" alt="Logo" />
      </a>
      <div className="Group1">
        <a className="CreateQuiz" href="Create.jsx">
          Create Quiz
        </a>
        <a className="CreateQuiz" href="Register.jsx">
          Register/Login
        </a>
      </div>
    </div>
  );
}
