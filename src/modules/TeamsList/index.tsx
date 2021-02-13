import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error } from 'components';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';

export const TeamsList: FC = () => {
  const reactCourseId = '9c5a1bee-efb7-4eae-b306-c3d2061e9a32';
  const userData = useSelector(selectUserData); // current User
  const [pageNumber, setPageNumber] = useState(1);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId,
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
      <Teams teams={teams} />

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
