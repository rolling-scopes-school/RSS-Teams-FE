import React, { FC, useState } from 'react';
import { SHOW_COURSES_OPTIONS } from 'appConstants';
import { CommonSelectList } from 'components';

interface ShowCourseSelectProps {
  currentOption: string;
  setCurrentOption: (newOption: string) => void;
}

export const ShowCourseSelect: FC<ShowCourseSelectProps> = ({
  currentOption,
  setCurrentOption,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const onOptionChange = (item: { id: string; name: string }) => {
    setCurrentOption(item.name);
  };

  const options: { id: string; name: string }[] = SHOW_COURSES_OPTIONS.filter(
    (option) => option.name !== currentOption
  );

  return (
    <CommonSelectList
      title="Show"
      listItems={options}
      onClickHandler={onOptionChange}
      currItem={currentOption}
      displayList={isSelectOpen}
      setDisplayList={setIsSelectOpen}
      customStyle
      showOptionsSelect
    />
  );
};
