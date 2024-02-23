import { gql } from "@apollo/client";

//////////////// Start Auth Queries /////////////////

export const LOGIN_MUTATION = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      message
      success
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation ($registerUsername2: String!, $registerPassword2: String!) {
    register(username: $registerUsername2, password: $registerPassword2) {
      message
      success
    }
  }
`;

export const EDITUSER_MUTATION = gql`
  mutation ($token: String!, $newUsername: String!, $newPassword: String!) {
    editUser(
      token: $token
      newUsername: $newUsername
      newPassword: $newPassword
    ) {
      message
      success
    }
  }
`;

//////////////// End Auth Queries /////////////////

//////////////// Start Crud Queries /////////////////

export const CREATEDONOR_MUTATION = gql`
  mutation ($name: String!, $email: String!, $amount: Float!) {
    createDonor(name: $name, email: $email, amount: $amount) {
      message
      success
    }
  }
`;

export const DONORS_QUERY = gql`
  query {
    donors {
      _id
      name
      email
      amount
      updatedAt
    }
  }
`;

export const UPDATEDONOR_MUTATION = gql`
  mutation (
    $updateDonorId: ID!
    $name: String
    $email: String
    $amount: Float
  ) {
    updateDonor(
      id: $updateDonorId
      name: $name
      email: $email
      amount: $amount
    ) {
      message
      success
    }
  }
`;

export const DELETEDONOR_MUTATION = gql`
  mutation ($deleteDonorId: ID!) {
    deleteDonor(id: $deleteDonorId) {
      message
      success
    }
  }
`;

//////////////// End Crud Queries /////////////////

//////////////// start strip Queries /////////////////
export const CREATECHECKOUTSESSION = gql`
  mutation ($name: String!, $email: String!, $lineItems: [LineItems]!) {
    createCheckoutSession(name: $name, email: $email, lineItems: $lineItems)
  }
`;
//////////////// End strip Queries /////////////////
