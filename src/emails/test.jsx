import { Tailwind, Button, Container, Head } from "@react-email/components";

export default function Testing() {
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
      {todayTodoList.map((task, index) => {
        return (
          <Container
            key={index}
            className="flex border-t border-b border-gray-400"
          >
            <Head
              className="w-1/3 border-r border-gray-400 px-4 py-2"
              key={index}
            >
              {task.start}
            </Head>
            <Head
              className="w-1/3 border-r border-l border-gray-400 px-4 py-2 bg-brand"
              key={index}
            >
              {task.task}
            </Head>
            <Head
              className="w-1/3 border-l border-gray-400 px-4 py-2"
              key={index}
            >
              {task.end}
            </Head>
          </Container>
        );
      })}
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <Button
        href="https://example.com"
        className="bg-brand px-1 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>
    </Tailwind>
  );
}
