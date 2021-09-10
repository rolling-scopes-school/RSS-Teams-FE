import { gql } from '@apollo/client';

export const UPDATE_COURSE_MUTATION = gql`
  mutation updateCourse($course: UpdateCourseInput!) {
    updateCourse(course: $course) {
      id
      name
      teamSize
      isActive
    }
  }
`;
