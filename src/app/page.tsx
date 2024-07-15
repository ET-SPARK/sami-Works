import Footer from "@/components/Footer/page";
import Landing from "@/components/Landing/page";
import MenuBar from "@/components/MenuBar/page";
import Projects from "@/components/Projects/page";

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>Samuel works</title>
      </head>
      <MenuBar />
      <Landing />
      <Projects />
      <Footer />
    </>
  );
}
