import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      setLoading(false);
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:888/api/auth/register",
        userData
      );

      // Сохранение токена доступа в localStorage
      const accessToken = response.data.tokens.access_token;
      localStorage.setItem("token", accessToken);

      // Перенаправление пользователя, например, на главную страницу
      window.location.href = "/";
    } catch (err) {
      setError("Ошибка регистрации. Пожалуйста, попробуйте снова.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Фамилия:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Электронная почта:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Подтвердите пароль:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" disabled={loading}>
            Зарегистрироваться
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}

export default RegisterForm;
