import React from 'react'
import ReactDOM from 'react-dom/client'
import { EpiasChart } from './EpiasChart'
import { EpiasTable } from './EpiasTable'

// Find the mount points and render the components
const chartRoot = document.getElementById('epias-chart-root')
if (chartRoot) {
  ReactDOM.createRoot(chartRoot).render(
    <React.StrictMode>
      <EpiasChart />
    </React.StrictMode>
  )
}

const tableRoot = document.getElementById('epias-table-root')
if (tableRoot) {
  ReactDOM.createRoot(tableRoot).render(
    <React.StrictMode>
      <EpiasTable />
    </React.StrictMode>
  )
}
