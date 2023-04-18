import React from 'react'
import styled from 'styled-components';
import CapyFont from './assets/Capy-Regular.ttf'

const CapyFontFace = styled.div`
  @font-face {
    font-family: 'Capy';
    src: url(${CapyFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default CapyFontFace;