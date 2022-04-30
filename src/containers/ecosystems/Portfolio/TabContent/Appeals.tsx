import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Header } from 'components/molecules/Header';
import { AppealContent } from 'ducks/appeals/AppealContent';
import React from 'react';
import { Appeal } from './Appeal';

type AppealsProps = {
  appeals: AppealContent[];
  isLoading: () => boolean;
};

// TODO: 互い違いで段々にするのもおもろいかも
export const Appeals: React.FC<AppealsProps> = ({
  appeals,
  isLoading,
}: AppealsProps) => (
  <>
    <Header iconName="appeals" title="3つのスキルアピール" explanation="" />
    {isLoading() ? (
      <CircularProgress />
    ) : (
      <Grid container direction="column" spacing={2}>
        {appeals.map((appealContent) => (
          <Grid key={appealContent.id} item>
            <Appeal {...{ appealContent }} />
          </Grid>
        ))}
      </Grid>
    )}
  </>
);
