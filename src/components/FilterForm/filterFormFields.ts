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

export const filterSelectFields: [
  string,
  [string, string | boolean][],
  string,
  string
][] = [
  [
    'Sort by score',
    [
      ['Max score', 'DESC'],
      ['Min score', 'ASC'],
    ],
    '100%',
    'sortingOrder',
  ],
  [
    'Sort by team',
    [
      ['All', false],
      ['My team', true],
    ],
    '100%',
    'teamFilter',
  ],
];

export const defaultFilterData: TFilterForm = {
  discord: null,
  github: null,
  location: null,
  courseName: null,
  sortingOrder: filterSelectFields[0][1][0][0],
  teamFilter: filterSelectFields[1][1][0][0],
};
