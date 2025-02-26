import * as dataStructureModules from './dataStructures/index';

export interface DataStructure {
  name: string;
  code: string;
  language: string;
  sampleData: any[];
  explanation: string;
}

export const dataStructures: { [key: string]: DataStructure } = {
  ...dataStructureModules
};
