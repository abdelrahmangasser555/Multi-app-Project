import { CodeBlock, dracula } from "@react-email/code-block";
import { Container, Button, Heading } from "@react-email/components";
import { useState } from "react";
export default function CodeEmail() {
  const code = `export default async (req, res) => {
  try {
    const html = await renderAsync(
      EmailTemplate({ firstName: 'John' })
    );
    return NextResponse.json({ html });
  } catch (error) {
    return NextResponse.json({ error });
  }
}`;

  return (
    <Container>
      <Heading as="h2">my email title</Heading>
      <CodeBlock
        code={code}
        lineNumbers // add this so that there are line numbers beside each code line
        theme={dracula}
        language="javascript"
      />

      <Button>click me </Button>
    </Container>
  );
}
