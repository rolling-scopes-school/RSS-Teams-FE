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
  z-index: 2;
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
  @media (max-width: 440px) {
    top: 5px;
    right: -13px;
    width: 320px;
  }
`;

export const FilterButton = styled(Button)<TFilerButtonProps>`
  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
  color: ${MAIN1_COLOR};
  display: flex;
  align-items: center;
  gap: ${({ clearBtn = false }) => (clearBtn ? '11px' : '20px')};
  margin-left: ${({ outerBtn = false }) => (outerBtn ? 'auto' : '0')};
  padding: ${({ clearBtn = false }) => (clearBtn ? '13px 20px 13px 0' : '20px 30px')};

  @media (max-width: 1200px) {
    padding: ${({ clearBtn = false }) => (clearBtn ? '12px 16px 12px 0' : '18px 28px')};
    gap: ${({ clearBtn = false }) => (clearBtn ? '10px' : '18px')};
  }
  @media (max-width: 992px) {
    padding: ${({ clearBtn = false }) => (clearBtn ? '13px 12px 13px 0' : '14px 26px')};
    gap: ${({ clearBtn = false }) => (clearBtn ? '10px' : '17px')};
  }
  @media (max-width: 768px) {
    padding: ${({ clearBtn = false }) => (clearBtn ? '13px 8px 13px 0' : '8px 26px')};
    gap: ${({ clearBtn = false }) => (clearBtn ? '10px' : '16px')};
  }
  @media (max-width: 550px) {
    padding: ${({ clearBtn = false }) => (clearBtn ? '11px 5px 11px 0' : '5px 25px')};
    gap: ${({ clearBtn = false }) => (clearBtn ? '8px' : '13px')};
  }
  @media (max-width: 440px) {
    padding: ${({ clearBtn = false }) => (clearBtn ? '9px 5px 9px 0' : '5px 20px')};
    gap: ${({ clearBtn = false }) => (clearBtn ? '6px' : '10px')};
  }

  img {
    filter: invert(100%) sepia() saturate(10000%) hue-rotate(-110deg);

    @media (max-width: 992px) {
      width: 15px;
    }
    @media (max-width: 768px) {
      width: 14px;
    }
    @media (max-width: 550px) {
      width: 12px;
    }
    @media (max-width: 440px) {
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
