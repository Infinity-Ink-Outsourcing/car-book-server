/*
  Helpers functions
*/
import moment from 'moment';

// Get UTC timestamp
export const utcTimestamp = () => moment().utc().valueOf();

// Get UTC timestamp
export const utcISOstring = () => moment().utc().toISOString();
