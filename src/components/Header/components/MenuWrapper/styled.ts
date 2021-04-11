import styled from 'styled-components';
import { ReactComponent as MenuToggle } from 'assets/svg/menuToggle.svg';

export const StyledMenuWrapper = styled.div`
  display: flex;
  height: 60px;
  @media (max-width: 992px) {
    height: 56px;
  }
  @media (max-width: 700px) {
    height: 50px;
  }
`;

export const MenuButton = styled(MenuToggle)`
  width: 0;
  height: 0;

  @media (max-width: 1260px) {
    width: 24px;
    height: 24px;
    margin: 8px 0 0 40px;
  }
  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
    margin: 10px 0 0 30px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
  @media (max-width: 440px) {
    width: 16px;
    height: 16px;
    margin-top: 12px;
  }
`;
