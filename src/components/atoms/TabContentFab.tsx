import React from 'react';
import Fab from '@mui/material/Fab';
import { SxProps, Theme } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';

type TabStyleEnum = 'naviBefore' | 'naviNext';

type TabContentFabType = {
  label: string;
  tooltipTitle: string;
  sxProps: SxProps<Theme>;
  styleEnum: TabStyleEnum;
  isDisabled: boolean;
  onClick: () => void;
};

type TabStyleProps = {
  color:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'default'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  icon: JSX.Element;
};

const styleMap: { [P in TabStyleEnum]: TabStyleProps } = {
  naviBefore: {
    color: 'primary',
    icon: <NavigateBeforeIcon />,
  },
  naviNext: {
    color: 'primary',
    icon: <NavigateNextIcon />,
  },
};

export const TabContentFab: React.FC<TabContentFabType> = ({
  label,
  tooltipTitle,
  sxProps,
  styleEnum,
  isDisabled,
  onClick,
}) => {
  const transitionDuration = {
    enter: 150,
    exit: 150,
  };
  const renderFab = () => (
    <Fab
      color={styleMap[styleEnum].color}
      aria-label={label}
      sx={sxProps}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={label}
    >
      {styleMap[styleEnum].icon}
    </Fab>
  );

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      {isDisabled ? (
        renderFab()
      ) : (
        <Tooltip title={tooltipTitle}>{renderFab()}</Tooltip>
      )}
    </Zoom>
  );
};
