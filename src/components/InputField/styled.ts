import styled from 'styled-components';
import { ALERT_COLOR } from 'appConstants/colors';
import { Label } from 'typography';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;

export const ValidationAlert = styled.div`
  color: ${ALERT_COLOR};
  font-size: 14px;
  height: 22px;
`;

export const FLabel = styled(Label)`
  margin-bottom: 5px;
`;
