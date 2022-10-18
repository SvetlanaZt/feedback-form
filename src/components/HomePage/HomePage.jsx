// import Container from '../Container/Container';
import Form from '../Form/Form';
import SimpleMap from '../SimpleMap/SimpleMap';
import {
  StyledSection,
  StyledFooter,
  StyledDiv,
  StyledImgRoseFooter,
  StyledImgSmileRose,
} from './HomePage.styled';
import Footer from '../Footer/Footer';

// import Cloud from '../Cloud/Cloud';
import SmileRose from '../img-component/Cloud/Smile-rose/Smile-rose';
import SmileGreen from '../img-component/Cloud/Smile-green';
import SmileYellowSmall from '../img-component/Cloud/SmileYyellowSmall/SmileYyellowSmall';
import {
  StyledImg,
  StyledImgSmile,
} from '../img-component/Cloud/SmileYyellowSmall/SmileYellowSmall.styled';
import SmileYellow from '../img-component/Cloud/Smile-yellow/Smile-yellow';

export default function HomePage() {
  const takeData = evt => {
    console.log(evt);
  };
  return (
    <>
      <StyledSection>
        <SmileYellowSmall Img={StyledImgSmile} />
        <Form onClick={takeData} />
        <StyledDiv>
          <SmileYellow />
          <SmileRose Img={StyledImgSmileRose} />
          <SimpleMap />
        </StyledDiv>
      </StyledSection>
      <StyledFooter>
        <SmileRose Img={StyledImgRoseFooter} />
        <Footer />
        <SmileGreen />
        <SmileYellowSmall Img={StyledImg} />
      </StyledFooter>
    </>
  );
}
