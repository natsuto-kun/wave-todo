import { useState, useContext } from "react";
import styled from "styled-components";
import { countContext } from "../contexts/countContext";
import { IListItem, listContext } from "../contexts/listContext";

const ToDo = styled.div`
  padding-top: auto;
`;

const Check = styled.input`
  padding-left: 40px;
  padding-bottom: 50%;
  position: relative;
  margin-right: 20px;
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 4px;
`;

const DeleteButton = styled.button``;

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
    <ToDo>
      <Check
        type="checkbox"
        id="Checkbox"
        checked={item.isChecked}
        onChange={checkedHandler}
      />
      {item.value}
      <DeleteButton>×</DeleteButton>
    </ToDo>
  );
};
