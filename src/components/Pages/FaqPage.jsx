import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Accordion from '../Accordion';
import Button from '../Button';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import Spacing from '../Spacing';

export default function FaqPage() {
  pageTitle('Frequently Asked Questions');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
      />
      <Spacing lg="150" md="40" />
      <Div className="container">
        <Div className="row">
            <Spacing lg="0" md="40" />
            <Accordion />
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
