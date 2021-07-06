import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import LabelSmallGroup from '../../group/LabelSmallGroup';
import { LabelDataProps } from '../../../../utils/types/sideBarType';

const LabelContent = ({ checkedLabel }: LabelDataProps): JSX.Element => {
  return (
    <>
      {checkedLabel?.map((label) => (
        <LabelSmallGroup
          key={uuidv4()}
          color={label.textColor}
          backgroundColor={label.backgroundColor}
          label={label.title}
        />
      ))}
    </>
  );
};

export default LabelContent;
