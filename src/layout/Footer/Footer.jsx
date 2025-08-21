import './Footer.scss';
import React from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className="footer">
      <div className="pagination">
        <button className="pagination-btn">
          <ChevronLeft sx={{ fontSize: 22, color: '#666' }} />
        </button>
        <span className="page-number">1</span>
        <button className="pagination-btn">
          <ChevronRight sx={{ fontSize: 22, color: '#666' }} />
        </button>
      </div>
    </div>
  )
}

export default Footer
