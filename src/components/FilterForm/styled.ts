import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { EditProfileWrapper } from 'modules/EditProfile/styled';
import { Button } from 'typography';

type TFilerButtonProps = {
  bgColor?: string | undefined;
  clearBtn?: boolean;
  outerBtn?: boolean;
};

export const FilterFormBase = styled(EditProfileWrapper)`
  z-index: 1;
  position: absolute;
  top: 25px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 412px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    top: 5px;
    right: -10px;
  }
`;

export const FilterButton = styled(Button)<TFilerButtonProps>`
  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
  color: ${MAIN1_COLOR};
  display: flex;
  align-items: center;
  gap: ${({ clearBtn = false }) => (clearBtn ? '11px' : '20px')};
  margin-left: ${({ outerBtn = false }) => (outerBtn ? 'auto' : '0')};
  padding: ${({ clearBtn = false }) =>
    clearBtn ? '13px 20px 13px 0' : '20px 30px'};

  @media (max-width: 767px) and (min-width: 550px) {
    padding: ${({ clearBtn = false }) =>
      clearBtn ? '13px 8px 13px 0' : '8px 30px'};
    gap: ${({ clearBtn = false }) => (clearBtn ? '10px' : '16px')};
  }
  @media (max-width: 549px) and (min-width: 440px) {
    padding: ${({ clearBtn = false }) =>
      clearBtn ? '11px 5px 11px 0' : '5px 25px'};
    gap: ${({ clearBtn = false }) => (clearBtn ? '8px' : '13px')};
  }
  @media (max-width: 439px) and (min-width: 320px) {
    padding: ${({ clearBtn = false }) =>
      clearBtn ? '9px 5px 9px 0' : '5px 20px'};
    gap: ${({ clearBtn = false }) => (clearBtn ? '6px' : '10px')};
  }

  img {
    filter: invert(100%) sepia() saturate(10000%) hue-rotate(-110deg);

    @media (max-width: 767px) and (min-width: 550px) {
      width: 14px;
    }
    @media (max-width: 549px) and (min-width: 440px) {
      width: 12px;
    }
    @media (max-width: 439px) and (min-width: 320px) {
      width: 10px;
    }
  }
`;

export const FilterButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .SecondButtonForm {
    margin-left: auto;
  }
`;
