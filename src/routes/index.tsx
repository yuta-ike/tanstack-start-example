import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getNum = createServerFn({
  method: "GET",
}).handler<any>(() => 1); // remove <any> to return 1

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
