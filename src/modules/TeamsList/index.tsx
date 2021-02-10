import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useTeamsQuery } from 'hooks/graphql';
import { Logo } from 'typography';
import { Loader, Error } from 'components';
import { Team } from 'types';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const TeamsList: FC = () => {
  const reactCourseId = '97c79b78-3f45-4fc1-9a62-4d99b1ee6fab';
  const userData = useSelector(selectUserData);
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
    <div>
      <Logo />
      <p>Teams length {teams.count}</p>
      {teams &&
        teams.results.map((item: Team) => {
          return <div key={item.id}>Team №{item.number}</div>;
        })}
      <p>This is teams list!</p>
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
    </div>
  );
};
