import React, { FC } from 'react';
import { useTeamsQuery, useWhoAmIQuery } from 'hooks/graphql';
import { Loader, Error } from 'components';
import { Team } from 'types';
import { Link, Redirect } from 'react-router-dom';

export const TeamsList: FC = () => {
  const reactCourseId = '97c79b78-3f45-4fc1-9a62-4d99b1ee6fab';
  const { loadingW, errorW, whoAmI } = useWhoAmIQuery();

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId,
    skip: loadingW,
  });
  const loading = loadingW || loadingT;
  const error = errorW || errorT;
  const isUserNew = !whoAmI?.telegram;
  // const isUserNew = whoAmI?.telegram; // switch to enable login/registration flow

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (isUserNew) return <Redirect to="/editProfile" />;

  return (
    <div>
      <p>Teams length {teams.count}</p>
      {teams &&
        teams.results.map((item: Team) => {
          return <div key={item.id}>Team №{item.number}</div>;
        })}
      <p>This is teams list!</p>
      <Link to="/studentsTable">Dashboard</Link>
    </div>
  );
};
