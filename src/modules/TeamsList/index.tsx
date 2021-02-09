import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, Redirect } from 'react-router-dom';
import { useTeamsQuery, useWhoAmIQuery } from 'hooks/graphql';
import { Logo } from 'typography';
import { Loader, Error } from 'components';
import { Team } from 'types';

export const TeamsList: FC = () => {
  const reactCourseId = '97c79b78-3f45-4fc1-9a62-4d99b1ee6fab';
  const [pageCount, setPageCount] = useState(1);
  const { loadingW, errorW, whoAmI } = useWhoAmIQuery();

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId,
    skip: loadingW,
  });
  const loading = loadingW || loadingT;
  const error = errorW || errorT;
  // const isUserNew = !whoAmI?.telegram;
  const isUserNew = whoAmI?.telegram; // switch to enable login/registration flow
  const handlePageClick = () => {};

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (isUserNew) return <Redirect to="/editProfile" />;

  return (
    <div>
      <Logo />
      <p>Teams length {teams.count}</p>
      {teams &&
        teams.results.map((item: Team) => {
          return <div key={item.id}>Team №{item.number}</div>;
        })}
      <p>This is teams list!</p>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
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
