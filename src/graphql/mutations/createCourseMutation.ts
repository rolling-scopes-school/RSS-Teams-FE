import { gql } from '@apollo/client';

export const CREATE_COURSE_MUTATION = gql`
  mutation createCourse($course: CreateCourseInput!) {
    createCourse(course: $course) {
      id
      name
      teamSize
      isActive
    }
  }
`;
