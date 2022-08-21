import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nogueiragabriela.png',
      name: 'Gabriela Nogueira',
      jobRole: 'Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'gabriela.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-18 10:57:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RafaelPrado409.png',
      name: 'Rafael Prado',
      jobRole: 'RPA and Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋 finalmente finalizei meu novo site/portfólio'},
      {type: 'paragraph', content: 'Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻. Acesse e deixe seu feedback.'},
      {type: 'link', content: 'rafaelprado.design'},
    ],
    publishedAt: new Date('2022-08-15 19:30:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
