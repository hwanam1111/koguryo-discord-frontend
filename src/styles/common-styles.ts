import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.media.desktop`
    width: 1200px;
    margin: 0 auto;
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}

  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

interface IBlockProps {
  margin?: string;
  desktopMargin?: string;
  tabletMargin?: string;
  mobileMargin?: string;
  padding?: string;
  desktopPadding?: string;
  tabletPadding?: string;
  mobilePadding?: string;
  backgroundColor?: string;
}

export const Block = styled.section`
  ${({ margin }: IBlockProps) => margin && `margin: ${margin};`};
  ${({ padding }: IBlockProps) => padding && `padding: ${padding};`};
  ${({ backgroundColor }: IBlockProps) =>
    backgroundColor && `background-color: ${backgroundColor};`};

  ${({ theme }) => theme.media.desktop`
    ${({ desktopMargin }: IBlockProps) =>
      desktopMargin && `margin: ${desktopMargin};`};
    ${({ desktopPadding }: IBlockProps) =>
      desktopPadding && `padding: ${desktopPadding};`};
  `}

  ${({ theme }) => theme.media.tablet`
    ${({ tabletMargin }: IBlockProps) =>
      tabletMargin && `margin: ${tabletMargin};`};
    ${({ tabletPadding }: IBlockProps) =>
      tabletPadding ? `padding: ${tabletPadding};` : 'padding: 0 1rem;'};
  `}

  ${({ theme }) => theme.media.mobile`
    ${({ mobileMargin }: IBlockProps) =>
      mobileMargin && `margin: ${mobileMargin};`};
    ${({ mobilePadding }: IBlockProps) =>
      mobilePadding ? `padding: ${mobilePadding};` : 'padding: 0 1rem;'};
  `}
`;

export const XScrollBlock = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ${({ padding }: IBlockProps) => padding && `padding: ${padding};`};
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const XScrollBlockMore = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 65%);
  pointer-events: none;
`;

export const BodyScrollBlock = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
