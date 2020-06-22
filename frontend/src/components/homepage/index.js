import React from 'react';
import { AppLocation } from '../config';

export default {
  Dir: AppLocation(),
  Comp: () => {
    return <h2>Homepage</h2>;
  },
};
