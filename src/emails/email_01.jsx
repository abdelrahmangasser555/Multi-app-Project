import { Button, Html, Head } from "@react-email/components";
import { Container, Tailwind } from "@react-email/components";
import * as React from "react";
import "../emailStyles/taskEmail.css";

export default function Email() {
  const todayTodoList = [
    {
      start: "11:00am",
      end: "12:00pm",
      task: "finish homework",
    },
    {
      start: "03 : 15pm",
      end: "05 : 15pm",
      task: "finish homework",
    },
  ];
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
        {todayTodoList.map((task, index) => {
          return (
            <Container
              key={index}
              className="flex border-t border-b border-gray-400"
            >
              <header
                className="w-1/3 border-r border-gray-400 px-4 py-2"
                key={index}
              >
                {task.start}
              </header>
              <h1
                className="w-1/3 border-r border-l border-gray-400 px-4 py-2"
                key={index}
              >
                {task.task}
              </h1>
              <h1
                className="w-1/3 border-l border-gray-400 px-4 py-2"
                key={index}
              >
                {task.end}
              </h1>
            </Container>
          );
        })}
        <Button
          href="https://example.com"
          style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
        >
          Click me
        </Button>
      </Html>
    </Tailwind>
  );
}
