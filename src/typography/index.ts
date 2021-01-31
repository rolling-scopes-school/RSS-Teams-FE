import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SVGIcon } from '../assets/svg/logo.svg';

export const LinkText = styled(Link)`
  font: 600 18px/22px 'Oswald', sans-serif;
  letter-spacing: 3px;
`;

export const Logo = styled(SVGIcon)`
  width: 50px;
  height: 50px;
`;
