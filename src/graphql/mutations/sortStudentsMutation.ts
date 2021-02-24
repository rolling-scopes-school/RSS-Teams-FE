import { gql } from '@apollo/client';

export const SORT_STUDENTS_MUTATION = gql`
  mutation sortStudents($courseId: String!) {
    sortStudents(courseId: $courseId)
  }
`;
