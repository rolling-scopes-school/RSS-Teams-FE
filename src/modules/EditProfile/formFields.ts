import { InputFieldProps } from '../../components/InputField';

export const formFields: InputFieldProps[] = [
  {
    name: 'firstName',
    labelText: 'First Name',
    placeholder: 'Enter first name',
    register: {
      required: 'This is required.',
      pattern: {
        value: '/^[A-Za-z]+$/i',
        message: 'This input is letters only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
      },
      maxLength: {
        value: 12,
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
        value: 3,
        message: 'minimal length is 3',
      },
      maxLength: {
        value: 14,
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
        value: /^[A-Za-z0-9@#_]+$/i,
        message: 'This input is letters and digits only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
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
        value: /^[A-Za-z0-9]+$/i,
        message: 'This input is letters and digits only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
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
        value: /^[A-Za-z]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
      },
      maxLength: {
        value: 12,
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
        value: /^[A-Za-z]+$/i,
        message: 'This input is letters only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
      },
      maxLength: {
        value: 12,
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
        value: '/^[0-9]+$/i',
        message: 'This input is number only.',
      },
      minLength: {
        value: 3,
        message: 'minimal length is 3',
      },
      maxLength: {
        value: 5,
        message: 'This input exceed maxLength.',
      },
    },
  },
];
