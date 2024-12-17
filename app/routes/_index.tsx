import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { MarqueeDemoVertical } from "~/components/UI/MarqueeDemoVertical";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Shadcn/ui" },
    { name: "description", content: "Remix + Shadcn/ui" },
  ];
};

export default function Index() {
  return (
    <main>
      <Button>Click me</Button>
      <MarqueeDemoVertical />
    </main>
  );
}
