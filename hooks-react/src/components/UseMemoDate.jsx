import { useMemo, useState } from "react";

const posts = [
  {
    slug: "html-desde-0",
    date: "Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)"
  },
  {
    slug: "css-desde-0",
    date: "Thu Feb 17 2022 18:15:00 GMT+0100 (Central European Standard Time)"
  },
  {
    slug: "javascript-desde-0",
    date: "Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)"
  }
];

const UseMemoDate = () => {
  // toggle para solicitar un render y ver si hace el calculo de nuevo
  const [rerender, setRerender] = useState(false);
  const orderedPostsWithTitle = useMemo(() => {
    // Pruébalo por tu cuenta y verás que no se repite este log!
    console.log("Generating posts...");
    return posts
      .map((post) => ({
        ...post,
        // transformamos la fecha a tipo fecha
        date: new Date(post.date),
        // formateamos el título
        title: post.slug.split("-").join(" ").toUpperCase()
      }))
      // ordenamos comparando las fechas
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((post) => ({
        ...post,
        // Volvemos a transformar las fechas a formato es-ES
        date: new Intl.DateTimeFormat("es-ES").format(post.date)
      }));
  }, [posts]);

  return (
    <div>
      <h1>Post destacados 😍</h1>
      <ul>
        {orderedPostsWithTitle.map((post) => (
          <li key={post.slug}>
            <h3>{post.title}</h3> {post.date}
            <hr />
          </li>
        ))}
      </ul>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default UseMemoDate;