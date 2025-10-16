import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getNum = createServerFn({
  method: "GET",
}).handler<number>(() => 1); // remove <number> to return 1

export const Route = createFileRoute("/")({
  component: App,
  loader: () => getNum(),
});

function App() {
  const num = Route.useLoaderData();
  return (
    <div>
      num: {num} (type: {typeof num})
    </div>
  );
}
