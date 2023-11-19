import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Замените URL на реальный эндпоинт вашего сервера для авторизации
      const response = await axios.post("http://localhost:888/api/auth/login", {
        email,
        password,
      });

      // Обработка успешного ответа
      // Например, сохранение токена в localStorage и перенаправление пользователя
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      // Перенаправление пользователя, например, на главную страницу
      // window.location.href = "/";
    } catch (err) {
      // Обработка ошибок, например, отображение сообщения об ошибке
      setError(
        "Ошибка входа. Пожалуйста, проверьте ваши учетные данные и попробуйте снова."
      );
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
          <button type="submit" disabled={loading}>
            Войти
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}

export default LoginForm;
