// import Container from '../Container/Container';
import Form from '../Form/Form';
// import SimpleMap from '../SimpleMap/SimpleMap';
import { StyledSection, StyledFooter } from './HomePage.styled';
import Footer from '../Footer/Footer';

// import Cloud from '../Cloud/Cloud';
import { StyledImg } from '../img-component/Cloud/SmileYyellowSmall/SmileYellowSmall.styled';
import { StyledImgSmile } from '../img-component/Cloud/SmileYyellowSmall/SmileYellow.styled';
import SmileRose from '../img-component/Cloud/Smile-rose/Smile-rose';
import SmileGreen from '../img-component/Cloud/Smile-green';
import SmileYellowSmall from '../img-component/Cloud/SmileYyellowSmall/SmileYyellowSmall';

export default function HomePage() {
  // const [data, setData] = useState([]);

  const takeData = evt => {
    console.log(evt);
  };
  return (
    <>
      <StyledSection>
        <SmileYellowSmall img={StyledImgSmile} />
        <Form onClick={takeData} />
        {/* <SimpleMap /> */}
      </StyledSection>
      <StyledFooter>
        <SmileRose />
        <Footer />
        <SmileGreen />
        <SmileYellowSmall img={StyledImg} />
      </StyledFooter>
    </>
  );
}
