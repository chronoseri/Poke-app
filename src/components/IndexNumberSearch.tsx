import { ChangeEvent, MouseEventHandler, useState } from "react";

interface Props {
  onClickSearch: (value: number) => void;
}

export const IndexNumberSearch = (props: Props) => {
  const [inputValue, setInputValue] = useState(1);

  const indexNumberChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number.parseInt(event.target.value));
  };

  const onClickSubmit = () => {
    props.onClickSearch(inputValue);
  };

  return (
    <div className="flex">
      <span>図鑑No: </span>
      <input type="number" min={1} onChange={indexNumberChanged}></input>
      <button type="submit" onClick={onClickSubmit}>
        検索
      </button>
    </div>
  );
};
