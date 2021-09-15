import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },

  seeds(server) {
    server.db.loadData({
      todos: [
        {
          id: 1,
          title: "Terminar katas codewars",
          description: "Terminar lista de katas no code wars até sexta",
          isCompleted: false,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Marcar consulta médica",
          description: "Marcar consulta com o Dr. Stranger para o próximo mês",
          isCompleted: false,
          createdAt: new Date("2021-07-20 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", () => {
      return this.schema.all("todos");
    });

    this.post("/todos", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("todos", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
