import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./app.module.css";
import "./global.css";

// author: { avatar-url: "", role: ""}
// publishedAt: date
// content: string

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/caiohmg.png",
      name: "Caio Henrique",
      role: " Estudante",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: '👉 <a href=""> caio.design/doctorcare</a>' },
    ],
    publishedAt: new Date("2022-12-05 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: " Educater @Rocketset",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: '👉 <a href=""> caio.design/doctorcare</a>' },
    ],
    publishedAt: new Date("2022-12-20 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
