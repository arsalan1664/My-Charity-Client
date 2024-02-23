import styled from "styled-components";

const SuccessContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SuccessMessage = styled.div`
  background-color: rgba(46, 204, 113, 0.15);
  padding: 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #2ecc71;
  height: 3rem;
  & svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const FormSuccess = ({ message }) => {
  if (!message) return null;

  return (
    <SuccessContainer show={true}>
      <SuccessMessage>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p>{message}</p>
      </SuccessMessage>
    </SuccessContainer>
  );
};
