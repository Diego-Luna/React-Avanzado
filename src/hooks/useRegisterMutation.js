/* eslint-disable import/prefer-default-export */
import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
// export const useRegisterMutation = () => {
export const useRegisterMutation = (email, password) => {
  // const [registerMutation] = useMutation(REGISTER);
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER, {
    variables: { input: { email, password } },
  });

  // return { registerMutation };
  return { registerMutation, data, loading, error };
};
