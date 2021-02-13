import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error } from 'components';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';

export const TeamsList: FC = () => {
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const [pageNumber, setPageNumber] = useState(1);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
  });
  const loading = loadingT;
  const error = errorT;
  const handlePageClick = () => {
    setPageNumber(pageNumber + 1);
  };

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <StyledTeams>
      {/* TODO: Replace when getting real data "myTeam" */}
      <Teams teams={teams} myTeam={teams.results[0]} />

      {userData && <p>My github: {userData.github}</p>}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageNumber}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        // subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      <Link to="/studentsTable">Dashboard</Link>
    </StyledTeams>
  );
};
