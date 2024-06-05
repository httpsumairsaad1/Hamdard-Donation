import React from 'react'
import './Transactions.css'
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';

const Transactions = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 6,
    editable: true,
  });

  
  return (
    <div>
      <h1 className='heading'>Recent Transactions</h1>
        <div style={{ height: 300, width: '100%' }}>
      <DataGridPremium {...data} disableClipboardPaste />
    </div>



    </div>
  )
}

export default Transactions