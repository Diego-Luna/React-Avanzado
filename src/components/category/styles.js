import styled from 'styled-components';
// para ponerle estilos a un link
import { Link as LinkRouter } from 'react-router-dom';

// para ponerle estilos a un link
export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;
