import React from 'react';
import { Progress } from './Progress';

function App() {
  return (
    <React.Fragment>
      <Progress
        barColor='rgba(0, 0, 0, 0.7)'
        color='rgba(253, 70, 25, 0.7)'
        label='this a lable'
        radius={10}
        size={10}
        value={10}
        striped
        animate
      />
    </React.Fragment>
  );
}

export default App;
