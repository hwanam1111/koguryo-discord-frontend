import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const Nexon = styled.span`
  display: inline-block;
  color: #fff;

  & > strong {
    font-weight: 900;
  }
`;

const MadeBy = styled.span`
  color: #fff;

  & > strong {
    font-weight: 900;
  }
`;

const Github = styled.span`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-weight: 600;

  & > svg {
    margin-right: 7px;
    font-size: 1.5rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Nexon>
        Data based on <strong>NEXON DEVELOPERS</strong>
      </Nexon>
      <a href="https://github.com/hwanam1111" target="_blank" rel="noreferrer">
        <MadeBy>
          Made By&nbsp;<strong>LeeJun Kim</strong>
        </MadeBy>
        <Github>
          <AiFillGithub />
          Github Link
        </Github>
      </a>
    </FooterContainer>
  );
}

export default Footer;
