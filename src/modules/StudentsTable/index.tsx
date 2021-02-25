import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FILTER_DATA, USERS_PER_PAGE } from 'appConstants';
import { Loader, Error, Pagination, FilterForm } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Dashboard } from './components/Dashboard';
import { StudentTableWrapper, TableTitle } from './styled';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { FilterButton } from 'components/FilterForm/styled';
import filterIcon from 'assets/svg/filterIcon.svg';
import crossIcon from 'assets/svg/cross.svg';
import { WHITE_COLOR } from 'appConstants/colors';
import {
  defaultFilterData,
  filterSelectFields,
} from 'components/FilterForm/filterFormFields';
import { selectFilterData } from './selectors';
import { TFilterForm } from 'types';

export const StudentsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<TFilterForm>(
    defaultFilterData
  );

  const dispatch = useDispatch();

  const currCourse = useSelector(selectCurrCourse);
  const filterData = useSelector(selectFilterData);

  const { loadingU, errorU, users } = useUsersQuery({
    filter: {
      ...filterData,
      sortingOrder: (filterSelectFields[0][1].find(
        (item) => item[0] === filterData.sortingOrder
      ) as string[])[1],
      teamFilter: (filterSelectFields[1][1].find(
        (item) => item[0] === filterData.teamFilter
      ) as [string, boolean])[1],
    },
    reactCourseId: currCourse.id,
    page: page,
  });

  const loading = loadingU;
  const error = errorU;

  if (loading) return <Loader />;
  if (error) return <Error />;

  const pageCount: number = Math.ceil(users.count / USERS_PER_PAGE);

  return (
    <StudentTableWrapper>
      <TeamsTitleWrapper>
        <TableTitle>Dashboard</TableTitle>
        {Object.values(defaultFilterData).toString() !==
          Object.values(filterData).toString() && (
          <FilterButton
            clearBtn={true}
            outerBtn={true}
            onClick={() => {
              setInputValues(defaultFilterData);
              dispatch({
                type: SET_FILTER_DATA,
                payload: defaultFilterData,
              });
              setIsFilterOpen(false);
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
        <FilterButton
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          bgColor={WHITE_COLOR}
        >
          {<img src={filterIcon} alt="Filter icon" />} Filter
        </FilterButton>
        {isFilterOpen && (
          <FilterForm {...{ inputValues, setInputValues, setIsFilterOpen }} />
        )}
      </TeamsTitleWrapper>
      <Dashboard users={users.results} page={page} />
      <Pagination pageCount={pageCount} changePage={setPage} page={page} />
    </StudentTableWrapper>
  );
};
