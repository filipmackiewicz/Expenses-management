import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0px 15px;
  font-size: 17px;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.5;
  }
`;
