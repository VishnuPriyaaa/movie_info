import styled from 'styled-components';
export const FiltersContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-width: 875px;
  justify-content: flex-end;
  @media screen and (max-width: 1182px) {
    margin: 20px auto 30px auto;
  }
  @media screen and (max-width: 864px) {
    min-width: 0;
    margin: 10px 100px 28px 100px;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    margin: 10px 0 28px 0;
  }
`;

export const FilterButtonsContainer = styled.div`
  max-width: 65%;
  display: flex;
  @media screen and (max-width: 1182px) {
    margin-left: 5%;
  }
  @media screen and (max-width: 870px) {
    width: auto;
    margin: 0;
    max-width: none;
  }
`;
export const RattingButton = styled.button`
  display: block;
  margin: 0;
  width: auto;
  overflow: visible;
  background: #000;
  font: inherit;
  outline: none;
  height: 39px;
  margin-left: 15px;
  transition: all 0.2s ease 0s;
  padding: 0 10px;
  border: ${({ checked }) => (checked ? '1px solid #8e95a5' : '1px solid #424754')};
  color: ${({ checked }) => (checked ? '#bbc6df' : '#8e95a5')};
  line-height: 32px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  text-align: start;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const PopularityButton = styled(RattingButton)`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;