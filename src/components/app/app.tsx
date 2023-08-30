import Blend from '../blend/blend';
import Cards from '../cards/cards';
import Gallery from '../gallery/gallery';
import Header from '../header/header';
import Paragraphs from '../paragraphs/paragraphs';
import Scroll from '../scroll/scroll';
import Theme from '../theme/theme';
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
      <Theme></Theme>
    </>
  );
}
