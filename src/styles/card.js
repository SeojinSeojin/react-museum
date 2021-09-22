import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  padding: 20px;
  border: 1px solid #e5e7eb;
  flex: 1;
`;

const CardTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  margin-top: 20px;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-self: center;
  &:hover {
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 20px;
  }
`;

export { CardContainer, CardWrapper, CardTitle, CardImage };
