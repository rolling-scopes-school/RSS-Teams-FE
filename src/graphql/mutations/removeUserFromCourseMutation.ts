import { gql } from '@apollo/client';

export const REMOVE_USER_FROM_COURSE_MUTATION = gql`
  mutation removeUserFromCourse($data: RemoveUserFromCourseInput!) {
    removeUserFromCourse(data: $data) {
      id
      firstName
      lastName
      github
      telegram
      discord
      score
      country
      city
      isAdmin
      courses {
        id
        name
      }
      teams {
        id
        password
        number
        courseId
        socialLink
        members {
          id
          firstName
          lastName
          github
          telegram
          discord
          score
          country
          city
        }
      }
    }
  }
`;
