import * as algorithmModules from './algorithms/index';

export interface Algorithm {
  name: string;
  code: string;
  language: string;
  sampleInput: any;
  sampleOutput: any;
  explanation: string;
}

export const algorithms: { [key: string]: Algorithm } = {
  ...algorithmModules
};
