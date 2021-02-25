import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FieldError, useForm } from 'react-hook-form';
import { FilterSelect, InputField } from 'components';
import { InputsWrapper } from 'modules/EditProfile/styled';
import { TFilterForm } from 'types';
import { FilterFormBase, FilterButtonsWrapper, FilterButton } from './styled';
import {
  filterFormFields,
  filterSelectFields,
  defaultFilterData,
} from './filterFormFields';
import { FILTER_FORM_INPUTS, SET_FILTER_DATA } from 'appConstants';
import { DARK_TEXT_COLOR } from 'appConstants/colors';
import { Button } from 'typography';
import crossIcon from 'assets/svg/cross.svg';

type TFilter = {
  inputValues: TFilterForm;
  setInputValues: (data: TFilterForm) => void;
  setIsFilterOpen: (data: boolean) => void;
};

export const FilterForm: FC<TFilter> = ({
  inputValues,
  setInputValues,
  setIsFilterOpen,
}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, reset } = useForm<TFilterForm>({
    defaultValues: inputValues,
    mode: 'onChange',
  });

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

  return (
    <FilterFormBase onSubmit={handleSubmit(onFilterFormSubmit)}>
      <InputsWrapper>
        {filterSelectFields.map(
          (
            item: [string, [string, string | boolean][], string, string],
            index: number
          ) => {
            return (
              <FilterSelect
                key={`filterSelectKey-${index}`}
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
        {filterFormFields.map((item, index) => {
          return (
            <InputField
              key={`filterFieldKey-${index}`}
              name={item.name}
              value={inputValues[item.name as keyof TFilterForm] ?? ''}
              labelText={item.labelText}
              placeholder={item.placeholder}
              aria-invalid={
                (errors[
                  FILTER_FORM_INPUTS[index] as keyof TFilterForm
                ] as FieldError)
                  ? 'true'
                  : 'false'
              }
              message={
                (errors[
                  FILTER_FORM_INPUTS[index] as keyof TFilterForm
                ] as FieldError)?.message
              }
              onChange={changeInputValue}
              register={register(item.register)}
            />
          );
        })}
      </InputsWrapper>
      <FilterButtonsWrapper>
        {Object.values(defaultFilterData).toString() !==
          Object.values(inputValues).toString() && (
          <FilterButton
            clearBtn={true}
            onClick={() => {
              setInputValues(defaultFilterData);
              reset(defaultFilterData);
            }}
          >
            {
              <img
                src={crossIcon}
                alt="clear filter icon"
                className="CrossClearFilter"
              />
            }{' '}
            Clear filter
          </FilterButton>
        )}
        <Button
          className="SecondButtonForm"
          type="button"
          onClick={() => {
            {
              Object.values(defaultFilterData).toString() !==
                Object.values(inputValues).toString() &&
                dispatch({
                  type: SET_FILTER_DATA,
                  payload: inputValues,
                });
            }
            setIsFilterOpen(false);
          }}
        >
          Apply
        </Button>
      </FilterButtonsWrapper>
    </FilterFormBase>
  );
};
