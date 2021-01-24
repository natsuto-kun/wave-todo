import { useContext } from "react";
import styled from "styled-components";
import { countContext } from "../contexts/countContext";
import { IListItem, listContext } from "../contexts/listContext";

const Check = styled.input`
  padding-left: 40px;
  padding-bottom: 50%;
  position: relative;
  content: "";
  display: flex;
  width: 23px;
  height: 23px;
  border: 1px solid #00485e;
  border-radius: 4px;
  background-color: #fff;
  color: #00485e;
`;

const CheckText = styled.div`
  text-align: center;
  display: flex;
`;

interface Props {
  index: number;
  item: IListItem;
}

export const CheckBox = ({ index, item }: Props) => {
  const { count, setCount } = useContext(countContext);
  const { list, setList } = useContext(listContext);

  const checkedHandler = () => {
    if (item.isChecked) setCount(count - 1);
    else setCount(count + 1);

    const newList = [...list];
    newList.splice(index, 1, {
      ...item,
      isChecked: !newList[index].isChecked,
    });

    setList(newList);
  };

  return (
    <CheckText>
      <Check
        type="checkbox"
        id="Checkbox"
        checked={item.isChecked}
        onChange={checkedHandler}
      />
      {item.value}
    </CheckText>
  );
};
