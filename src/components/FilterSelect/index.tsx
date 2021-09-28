import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { SelectCourse } from 'components/CourseField/styled';
import { useTranslation } from 'react-i18next';
import { FilterSelectWrapper } from './styled';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { useSelector } from 'react-redux';
import { DEFAULT_LANGUAGE } from 'appConstants';
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  placeholder: string;
  register: any;
  options: string[];
  currentOption: string;
}

export const FilterSelect: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  register,
  options,
  currentOption,
  ...rest
}) => {
  const { t } = useTranslation();
  const currentLanguage = useSelector(selectCurrLanguage);

  const filterFieldOptions =
    options.map((option: string) => (
      <option key={option} value={option}>
        {t(option)}
      </option>
    )) ?? null;

  return (
    <FilterSelectWrapper responsiveByLang={currentLanguage !== DEFAULT_LANGUAGE}>
      {labelText && <Label>{labelText}</Label>}
      <SelectCourse>
        <Select>
          <SelectInner placeholder={t(placeholder)} ref={register} value={currentOption} {...rest}>
            {filterFieldOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
    </FilterSelectWrapper>
  );
};
