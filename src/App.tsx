import React from "react";
import { DynamicGraph } from './DynamicGraph';
import { graphData } from './data';

export const App: React.FC = () => {
  return <DynamicGraph graphData={graphData} />;
};
