import { Course } from 'types';
import { InputFieldProps } from '../../components/InputField';

export const formFields: InputFieldProps[] = [
  {
    name: 'firstName',
    labelText: 'First Name',
    placeholder: 'Enter first name',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 2,
        message: 'Minimal length is 2.',
      },
      maxLength: {
        value: 15,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'lastName',
    labelText: 'Last Name',
    placeholder: 'Enter last name',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 2,
        message: 'Minimal length is 2.',
      },
      maxLength: {
        value: 20,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'discord',
    labelText: 'Discord',
    placeholder: 'Enter discord',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z0-9@#-_() ]+$/i,
        message: 'This input is letters and digits only.',
      },
      minLength: {
        value: 3,
        message: 'Minimal length is 3.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'telegram',
    labelText: 'Telegram',
    placeholder: 'Enter telegram',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z0-9-_ ]+$/i,
        message: 'This input is letters and digits only.',
      },
      minLength: {
        value: 3,
        message: 'Minimal length is 3.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'city',
    labelText: 'City',
    placeholder: 'Enter city',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z\- ]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 2,
        message: 'Minimal length is 2.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'country',
    labelText: 'Country',
    placeholder: 'Enter country',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[A-Za-z\- ]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 2,
        message: 'Minimal length is 2.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'score',
    labelText: 'Score',
    placeholder: 'Enter score',
    register: {
      required: 'This is required.',
      pattern: {
        value: /^[1-9]+\d*$/i,
        message: 'This input is number only.',
      },
      minLength: {
        value: 1,
        message: 'Minimal length is 1.',
      },
      maxLength: {
        value: 5,
        message: 'This input exceed maxLength.',
      },
    },
  },
];

export const checkIsCoursesEqual = (courses: Course[]) => {
  return JSON.stringify(courses.map((course) => course.name).sort());
};
