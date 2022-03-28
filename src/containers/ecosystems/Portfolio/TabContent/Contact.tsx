import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Header } from 'components/molecules/Header';
import React from 'react';

export const Contact = () => (
  <>
    <Header iconName='contact' title='連絡先' explanation='' />
    <Tooltip title='※(マシュマロというサービスへのリンクとなっています。)' arrow={true}>
      <Button variant='contained' rel='noopener noreferrer' href='https://marshmallow-qa.com/_niranken?utm_medium=url_text&utm_source=promotion' target='_brank'>
        ご連絡はこちら
      </Button>
    </Tooltip>
  </>
);