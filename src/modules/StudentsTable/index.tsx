import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_PER_PAGE } from 'appConstants';
import { Loader, Pagination, FilterForm, ErrorModal } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Dashboard } from './components/Dashboard';
import { StudentTableWrapper, TableTitle } from './styled';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { FilterButton } from 'components/FilterForm/styled';
import filterIcon from 'assets/svg/filterIcon.svg';
import crossIcon from 'assets/svg/cross.svg';
import { WHITE_COLOR } from 'appConstants/colors';
import { defaultFilterData, filterSelectFields } from 'components/FilterForm/filterFormFields';
import { selectFilterData } from './selectors';
import { TFilterForm } from 'types';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { setFilterData } from './studentsTableReducer';
import { ContentPageWrapper } from 'typography';

export const StudentsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValues, setInputValues] = useState<TFilterForm>(defaultFilterData);
  const { t } = useTranslation();
  const { register, handleSubmit, errors, reset } = useForm<TFilterForm>({
    defaultValues: inputValues,
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const currCourse = useSelector(selectCurrCourse);
  const filterData = useSelector(selectFilterData);

  // TODO remove after backend role filter
  const filterDataWithoutRoleFilter = {
    discord: filterData.discord,
    github: filterData.github,
    location: filterData.location,
    courseName: filterData.courseName,
  };

  const { loadingU, errorU, users } = useUsersQuery({
    filter: {
      ...filterDataWithoutRoleFilter,
      sortingOrder: `${
        filterSelectFields[0].options.find(({ name }) => name === filterData.sortingOrder)?.value
      }`,
      teamFilter: !!filterSelectFields[1].options.find(({ name }) => name === filterData.teamFilter)
        ?.value,
    },
    reactCourseId: currCourse.id,
    page,
  });

  const loading = loadingU;
  const error = errorU;

  if (error) return <ErrorModal error={error} />;
  if (loading) return <Loader />;

  const pageCount: number = Math.ceil(users.count / USERS_PER_PAGE);
  const isValuesEqual =
    Object.values(defaultFilterData).toString() !== Object.values(filterData).toString();
  const onClickClearBtnHandler = () => {
    setInputValues(defaultFilterData);
    dispatch(setFilterData(defaultFilterData));
    setPage(0);
    setIsFilterOpen(false);
  };
  const onClickOpenFilterBtnHandler = () => {
    setIsFilterOpen(!isFilterOpen);
    reset(filterData);
    setInputValues(filterData);
  };

  return (
    <ContentPageWrapper>
      <StudentTableWrapper>
        <TeamsTitleWrapper>
          <TableTitle>{t('Dashboard')}</TableTitle>
          {isValuesEqual && !isFilterOpen && (
            <FilterButton clearBtn outerBtn onClick={onClickClearBtnHandler}>
              {<img src={crossIcon} alt="clear filter icon" />}
              {t('Clear filter')}
            </FilterButton>
          )}
          <FilterButton
            onClick={onClickOpenFilterBtnHandler}
            bgColor={WHITE_COLOR}
            className="seventhStep"
          >
            {<img src={filterIcon} alt="Filter icon" />} {t('Filter')}
          </FilterButton>
          {isFilterOpen && (
            <FilterForm
              {...{
                inputValues,
                setInputValues,
                setIsFilterOpen,
                setPage,
                register,
                handleSubmit,
                errors,
                reset,
              }}
            />
          )}
        </TeamsTitleWrapper>
        <Dashboard users={users.results} page={page} />
        {!!users.results.length && (
          <Pagination pageCount={pageCount} changePage={setPage} page={page} />
        )}
      </StudentTableWrapper>
    </ContentPageWrapper>
  );
};
