import React, { FC } from 'react';
import { SwitchInput, SwitchLabel, SwitchButton, FirstOption, SecondOption } from './styled';
import { MAIN1_COLOR } from 'appConstants/colors';
import { useTranslation } from 'react-i18next';

type SwitchProps = {
  id: string;
  toggled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Student: FC = () => {
  const { t } = useTranslation();
  return (
    <FirstOption color={MAIN1_COLOR} fontSize="20px">
      {t('Student')}
    </FirstOption>
  );
};

const Mentor: FC = () => {
  const { t } = useTranslation();
  return (
    <SecondOption color={MAIN1_COLOR} fontSize="20px">
      {t('Mentor')}
    </SecondOption>
  );
};

export const Switch: FC<SwitchProps> = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        {toggled ? <Student /> : <Mentor />}
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};
