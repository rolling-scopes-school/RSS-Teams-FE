import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldError, FieldErrors } from 'react-hook-form';
import { FilterSelect, InputField } from 'components';
import { InputsWrapper } from 'modules/EditProfile/styled';
import { TFilterForm } from 'types';
import { FilterFormBase, FilterButtonsWrapper, FilterButton } from './styled';
import {
  filterFormFields,
  filterSelectFields,
  defaultFilterData,
} from './filterFormFields';
import { SET_FILTER_DATA } from 'appConstants';
import { DARK_TEXT_COLOR } from 'appConstants/colors';
import { Button } from 'typography';
import crossIcon from 'assets/svg/cross.svg';
import { selectFilterData } from 'modules/StudentsTable/selectors';

type TFilter = {
  inputValues: TFilterForm;
  setInputValues: (data: TFilterForm) => void;
  setIsFilterOpen: (data: boolean) => void;
  register: any;
  handleSubmit: any;
  errors: FieldErrors;
  reset: any;
};

export const FilterForm: FC<TFilter> = ({
  inputValues,
  setInputValues,
  setIsFilterOpen,
  register,
  handleSubmit,
  errors,
  reset,
}) => {
  const filterData = useSelector(selectFilterData);
  const dispatch = useDispatch();

  const changeInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value.trim(),
    });
  };

  const onFilterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isValuesInnerEqual =
    Object.values(defaultFilterData).toString() !==
    Object.values(inputValues).toString();

  return (
    <FilterFormBase onSubmit={handleSubmit(onFilterFormSubmit)}>
      <InputsWrapper>
        {filterSelectFields.map(
          (item: [string, [string, string | boolean][], string, string]) => {
            return (
              <FilterSelect
                key={JSON.stringify(item)}
                name={item[3]}
                labelText={item[0]}
                placeholder={item[0]}
                register={register}
                options={item[1].map((it) => it[0])}
                widthSelect={item[2]}
                onChange={changeInputValue}
                currentOption={
                  inputValues[item[3] as keyof TFilterForm] as string
                }
                color={DARK_TEXT_COLOR}
              />
            );
          }
        )}
        {filterFormFields.map((item) => {
          return (
            <InputField
              key={JSON.stringify(item)}
              name={item.name}
              value={filterData[item.name as keyof TFilterForm] ?? ''}
              labelText={item.labelText}
              placeholder={item.placeholder}
              aria-invalid={
                (errors[item.name as keyof TFilterForm] as FieldError)
                  ? 'true'
                  : 'false'
              }
              message={
                (errors[item.name as keyof TFilterForm] as FieldError)?.message
              }
              onChange={changeInputValue}
              register={register(item.register)}
            />
          );
        })}
      </InputsWrapper>
      <FilterButtonsWrapper>
        {isValuesInnerEqual && (
          <FilterButton
            clearBtn={true}
            type="button"
            onClick={() => {
              reset(defaultFilterData);
              setInputValues(defaultFilterData);
            }}
          >
            {
              <img
                src={crossIcon}
                alt="clear filter icon"
                className="CrossClearFilter"
              />
            }
            Clear filter
          </FilterButton>
        )}
        <Button
          className="SecondButtonForm"
          type="button"
          onClick={() => {
            dispatch({
              type: SET_FILTER_DATA,
              payload: inputValues,
            });
            setIsFilterOpen(false);
          }}
        >
          Apply
        </Button>
      </FilterButtonsWrapper>
    </FilterFormBase>
  );
};
