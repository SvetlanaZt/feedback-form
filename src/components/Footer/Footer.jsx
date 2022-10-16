import svg from 'img/sprite.svg';
import { StyledFDiv, StyledUl, StyledLi, StyledSvg } from './Footer.styled';

export default function Footer() {
  return (
    <div>
      <StyledUl>
        <StyledLi>
          <a href="*">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-linkedin2'}></use>
            </StyledSvg>
          </a>
        </StyledLi>
        <StyledLi>
          <a href="*">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-twitter'}></use>
            </StyledSvg>
          </a>
        </StyledLi>
        <StyledLi>
          <a href="*">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-facebook'}></use>
            </StyledSvg>
          </a>
        </StyledLi>
        <StyledLi>
          <a href="*">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-pinterest2'}></use>
            </StyledSvg>
          </a>
        </StyledLi>
      </StyledUl>
    </div>
  );
}
