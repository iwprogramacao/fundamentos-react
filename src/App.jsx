import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Igor Wiepieski"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas ea maiores laudantium delectus voluptatem sapiente tempora natus cupiditate"
          />
        </main>
      </div>
    </div>
  );
}
