import { InputFieldProps } from '../../components/InputField';

export const formFields: InputFieldProps[] = [
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

/*
<InputField
            name="score"
            labelText="Score"
            placeholder="Enter score"
            message={errors.score?.message}
            aria-invalid={errors.score ? 'true' : 'false'}
            onChange={changeInputValue}
            register={register({
              required: 'This is required.',
              pattern: {
                value: /^[0-9]+$/i,
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
            })}
          />
 */
