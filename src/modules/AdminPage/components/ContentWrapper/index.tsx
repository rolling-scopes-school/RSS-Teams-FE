import React, { FC, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AdminPageContentWrapper, ListTitle, CourseListSettings } from './styled';
import { HeaderDecor } from 'modules/TeamsList/components/Teams/components/MyTeam/styled';
import { AddCourseBlock } from './components/AddCourseBlock';
import { CoursesList } from './components/CoursesList';
import { useCoursesQuery } from 'hooks/graphql';
import { ErrorModal, Loader } from 'components';
import { Course } from 'types';
import { ShowCourseSelect } from './components/ShowCourseSelect';
import { ModalInput } from 'typography';
import { SHOW_COURSES_OPTIONS } from 'appConstants';

const filterCourseList = (courses: Course[], filter: string, searchValue?: string) => {
  switch (filter) {
    case 'Active':
      return courses.filter(
        ({ isActive, name }) => isActive && (searchValue ? name.includes(searchValue) : true)
      );
    case 'Terminated':
      return courses.filter(
        ({ isActive, name }) => !isActive && (searchValue ? name.includes(searchValue) : true)
      );
    case 'All':
    default:
      return searchValue ? courses.filter(({ name }) => name.includes(searchValue)) : courses;
  }
};

export const AdminPageWrapper: FC = () => {
  const { t } = useTranslation();
  const { loading, courses, error } = useCoursesQuery();
  const [currentShowCoursesOption, setCurrentShowCoursesOption] = useState(
    SHOW_COURSES_OPTIONS[0].name
  );
  const [searchValue, setSearchValue] = useState('');

  const checkIsCourseNameUniq = (courseName: string) => {
    return !courses.find(({ name }: Course) => name === courseName);
  };

  const filteredCourseList = useMemo(
    () => filterCourseList(courses, currentShowCoursesOption, searchValue),
    [courses, currentShowCoursesOption, searchValue]
  );

  if (loading) return <Loader />;
  if (error) return <ErrorModal />;

  return (
    <AdminPageContentWrapper>
      <HeaderDecor />
      <AddCourseBlock checkIsCourseNameUniq={checkIsCourseNameUniq} />
      <ListTitle>{t('Courses list')}</ListTitle>
      <CourseListSettings>
        <ShowCourseSelect
          currentOption={currentShowCoursesOption}
          setCurrentOption={setCurrentShowCoursesOption}
        />
        <ModalInput
          name="inputValue"
          required
          value={searchValue}
          mt="0px"
          autoComplete={'off'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value.trimLeft())
          }
          placeholder={t('Search course')}
        />
      </CourseListSettings>
      <CoursesList courses={filteredCourseList} checkIsCourseNameUniq={checkIsCourseNameUniq} />
    </AdminPageContentWrapper>
  );
};
