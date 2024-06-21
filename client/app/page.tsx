import HomeArticles from "./components/HomeArticles";
import NavBar from "./components/NavBar";
import Featured from "./components/Featured/Featured";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Featured/>
      <HomeArticles/>
    </main>
  );
}
