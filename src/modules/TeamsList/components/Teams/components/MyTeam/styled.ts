import styled from 'styled-components';
import { ReactComponent as HeaderDecoration } from 'assets/svg/team-header-decorations.svg';
import { MAIN2_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { PageSubTitle } from 'typography';

type StyledMyTeamProps = {
  open: boolean;
};

type TableWrapperProps = {
  open: boolean;
};

export const StyledMyTeam = styled.div<StyledMyTeamProps>`
  margin-bottom: 40px;

  .myTeam__header {
    position: relative;
    color: ${WHITE_COLOR};
    background-color: ${MAIN2_COLOR};
    border-radius: 20px;
    z-index: 0;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 200px 200px;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'title leave button' 'info info toggle';

    @media (max-width: 992px) {
      grid-template-columns: 1fr 180px 180px;
      grid-template-rows: auto auto auto;
      grid-template-areas: 'title leave button' 'info info info' 'toggle toggle toggle';
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 160px 160px;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr 160px 160px;
      grid-template-rows: auto auto auto auto;
      grid-template-areas: 'title title button' 'title title leave' 'info info info' 'toggle toggle toggle';
    }

    @media (max-width: 440px) {
      grid-template-columns: 1fr 130px 130px;
    }

    @media (max-width: 350px) {
      grid-template-columns: 1fr 115px 115px;
    }

    @media (max-width: 580px) {
      overflow: hidden;
    }

    .myTeam__title {
      grid-area: title;
      ${PageSubTitle};
      margin: 5px 0 37px;
    }

    .myTeam__info-wrapper {
      grid-area: info;
      display: flex;
      gap: 30px;

      @media (max-width: 580px) {
        flex-direction: column;
      }
    }
    .myTeam__leave,
    .myTeam__button {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      @media (max-width: 550px) {
        button {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    }
    .myTeam__leave {
      grid-area: leave;
    }
    .myTeam__button {
      grid-area: button;
    }
    .myTeam__toggle {
      grid-area: toggle;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      @media (max-width: 992px) {
        margin-top: 20px;
      }
    }
  }

  .myTeam__table-wrapper {
    background-color: ${WHITE_COLOR};
    margin-bottom: ${({ open }) => (open ? '40px' : '0')};
    margin-top: ${({ open }) => (open ? '-20px' : '0')};
    ${({ open }) => (open ? 'padding: 60px 30px 30px' : null)};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all 0.3s;
  }
`;

export const TableWrapper = styled.div<TableWrapperProps>`
  background-color: ${WHITE_COLOR};
  margin-bottom: ${({ open }) => (open ? '40px' : '0')};
  margin-top: ${({ open }) => (open ? '-20px' : '0')};
  ${({ open }) => (open ? 'padding: 60px 30px 30px' : null)};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    overflow-x: ${({ open }) => (open ? 'scroll' : 'auto')};
  }
`;

export const HeaderDecor = styled(HeaderDecoration)`
  top: 0;
  width: 220px;
  height: 160px;
  position: absolute;
  right: 0;
  z-index: -1;
`;
