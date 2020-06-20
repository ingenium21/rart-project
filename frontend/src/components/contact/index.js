import React from 'react';
import { AppLocation } from '../config';

export default {
  Dir: AppLocation('info/contact'),
  Comp: () => {
    return <h2>Contact</h2>;
  },
};
