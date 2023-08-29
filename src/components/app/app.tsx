import Blend from '../blend/blend';
import Cards from '../cards/cards';
import Flip from '../flip/flip';
import Gallery from '../gallery/gallery';
import Header from '../header/header';
import Paragraphs from '../paragraphs/paragraphs';
import Scroll from '../scroll/scroll';
import Typewriter from '../typewritter/typewriter';
export default function App() {
  return (
    <>
      <Header />
      <Paragraphs />
      <Typewriter />
      <Cards></Cards>
      <Scroll />
      <Gallery />
      <Blend />
      <Flip></Flip>
    </>
  );
}
