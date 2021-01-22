interface Props {
  list: string[];
}

export const ToDoList = ({ list }: Props) => {
  return (
    <div>
      {list.map((list, index) => {
        return <div key={index}>{list}</div>;
      })}
    </div>
  );
};
