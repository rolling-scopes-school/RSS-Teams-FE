import { TFilterForm } from 'types';
import { InputFieldProps } from '../../components/InputField';

export const filterFormFields: InputFieldProps[] = [
  {
    name: 'discord',
    labelText: 'Discord',
    placeholder: 'Enter discord name',
    register: {
      pattern: {
        value: /^[A-Za-z0-9@#-_() ]+$/i,
        message: 'This input is letters and digits only.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'github',
    labelText: 'GitHub',
    placeholder: 'Enter github name',
    register: {
      pattern: {
        value: /^[A-Za-z0-9-_ ]+$/i,
        message: 'This input is letters and digits only.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'location',
    labelText: 'Location',
    placeholder: 'Enter location',
    register: {
      pattern: {
        value: /^[A-Za-z\- ]+$/i,
        message: 'This input is letters only.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
  {
    name: 'courseName',
    labelText: 'Course',
    placeholder: 'Enter course name',
    register: {
      pattern: {
        value: /^[A-Za-z\- ]+$/i,
        message: 'This input is letters only.',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
    },
  },
];

export const filterSelectFields: {
  id: string;
  name: string;
  options: {
    name: string;
    value: string | boolean;
  }[];
  value: string;
}[] = [
  {
    id: 'sortingOrder',
    name: 'Sort by score',
    options: [
      { name: 'Max score', value: 'DESC' },
      { name: 'Min score', value: 'ASC' },
    ],
    value: '100%',
  },
  {
    id: 'teamFilter',
    name: 'Sort by team',
    options: [
      { name: 'All', value: false },
      { name: 'Without team', value: true },
    ],
    value: '100%',
  },
  {
    id: 'roleFilter',
    name: 'Sort by role',
    options: [
      { name: 'All', value: 'all' },
      { name: 'Student', value: 'student' },
      { name: 'Mentor', value: 'mentor' },
    ],
    value: '100%',
  },
];

export const defaultFilterData: TFilterForm = {
  discord: null,
  github: null,
  location: null,
  courseName: null,
  sortingOrder: 'Max score',
  teamFilter: 'All',
  roleFilter: 'All',
};
