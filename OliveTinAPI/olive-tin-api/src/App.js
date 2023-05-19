import React, { useState } from 'react';
import { Select } from 'antd';
import './App.css';
import getLastDump from './services/getLog';

function App() {

  const [lastDumpDate, setLastDumpDate] = useState("Noch kein Dump vorhanden.");

  async function handleChange(selectedDb) {
    //todo fetch date from backend
    // const lastDumpDate = await 
    getLastDump(selectedDb);
    // setLastDumpDate(lastDumpDate);
  };

  return (
    <div>
      <Select 
        defaultValue="hlr"
        style={{
          width: 120,
        }}
        onChange={(item) => handleChange(item)}
        options={[
          {
            value: 'hlr',
            label: 'hlr',
          },
          {
            value: 'ges',
            label: 'ges',
          },
        ]}
      />
      <h1>{lastDumpDate}</h1>
    </div>
  );
}

export default App;