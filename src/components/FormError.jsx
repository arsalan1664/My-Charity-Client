import styled from "styled-components";
import { FrownOutlined } from "@ant-design/icons";

const ErrorContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ErrorMessage = styled.div`
  background-color: rgba(231, 76, 60, 0.15);
  padding: 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #e74c3c;

  & svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <ErrorContainer show={true}>
      <ErrorMessage>
        <FrownOutlined style={{ height: "1rem" }} />
        <p>{message}</p>
      </ErrorMessage>
    </ErrorContainer>
  );
};
