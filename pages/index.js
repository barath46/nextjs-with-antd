import Link from "next/link";

function importAll(r) {
  let files = {};
  r.keys()
    .filter((item) => {
      return !item.startsWith("modules");
    })
    .map((item, index) => {
      files[item.replace("./", "")] = r(item).default;
    });
  return files;
}

const components = importAll(require.context("../modules", false, /\.(tsx)$/));
console.log(components);

export default function IndexPage() {
  return (
    <div>
      {Object.entries(components).map(([key, Component], index) => {
        return (
          <div key={index}>
            <h1>{key}</h1> <br />
            <Component />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
