import './FilterSection.scss';
import React, { useState, useEffect, useRef } from 'react'
import { 
  Inventory2,
  DateRange, 
  BarChart, 
  AttachMoney,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Check
} from '@mui/icons-material'

const FilterSection = () => {
  // Initialize to match Figma design exactly
  const [selectedFilters, setSelectedFilters] = useState({
    product: '',
    timeframe: '',
    channel: '',
    spend: ''
  })

  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRefs = useRef({})

  // Mock data for dropdown options - matching the design
  const filterOptions = {
    product: [
      { id: 'shell-station', label: 'Shell Station' },
      { id: 'deli2go', label: 'Deli2go' },
      { id: 'shell-recharge', label: 'Shell Recharge' },
      { id: 'shell-fuels', label: 'Shell Fuels' }
    ],
    timeframe: [
      { id: 'last-7-days', label: 'Last 7 days' },
      { id: 'last-15-days', label: 'Last 15 days' },
      { id: 'last-30-days', label: 'Last 30 days' },
      { id: 'last-60-days', label: 'Last 60 days' },
      { id: 'last-90-days', label: 'Last 90 days' }
    ],
    channel: [
      { id: 'email', label: 'Email' },
      { id: 'sms', label: 'SMS' },
      { id: 'instagram', label: 'Instagram' },
      { id: 'facebook', label: 'Facebook' },
      { id: 'google', label: 'Google' }
    ],
    spend: [
      { id: 'above-10000', label: '>10000' },
      { id: '10k-50k', label: '10k - 50k' },
      { id: '50k-1l', label: '50k - 1L' },
      { id: 'above-1l', label: '1L>' }
    ]
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const handleDropdownToggle = (filterType) => {
    setOpenDropdown(openDropdown === filterType ? null : filterType)
  }

  const handleFilterSelect = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
    setOpenDropdown(null)
  }

  const generateBreadcrumb = () => {
    const parts = []
    if (selectedFilters.product) parts.push(selectedFilters.product)
    if (selectedFilters.timeframe) parts.push(selectedFilters.timeframe)
    if (selectedFilters.channel) parts.push(selectedFilters.channel)
    return parts.join(' > ')
  }

  const renderDropdown = (filterType, icon, label) => {
    const isOpen = openDropdown === filterType
    const options = filterOptions[filterType]
    const selectedValue = selectedFilters[filterType]

    return (
      <div 
        className="filter-dropdown-container" 
        ref={el => dropdownRefs.current[filterType] = el}
      >
        <div 
          className={`filter-dropdown ${isOpen ? 'open' : ''}`}
          onClick={() => handleDropdownToggle(filterType)}
        >
          {icon}
          <span className="filter-label">
            {selectedValue || label}
          </span>
          {isOpen ? 
            <KeyboardArrowUp sx={{ fontSize: 20, color: '#000000' }} /> : 
            <KeyboardArrowDown sx={{ fontSize: 20, color: '#000000' }} />
          }
        </div>
        
        {isOpen && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option.id}
                className={`dropdown-item ${selectedValue === option.label ? 'selected' : ''}`}
                onClick={() => handleFilterSelect(filterType, option.label)}
              >
                <span className="dropdown-item-label">{option.label}</span>
                {selectedValue === option.label && (
                  <Check sx={{ fontSize: 16, color: '#4648ff', position: 'absolute', right: '12px' }} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="filter-section">
      <div className="filter-controls">
        {renderDropdown('product', 
          <Inventory2 sx={{ fontSize: 18, color: '#000000' }} />, 
          'Product'
        )}
        {renderDropdown('timeframe', 
          <DateRange sx={{ fontSize: 18, color: '#000000' }} />, 
          'Timeframe'
        )}
        {renderDropdown('channel', 
          <BarChart sx={{ fontSize: 18, color: '#000000' }} />, 
          'Channel'
        )}
        {renderDropdown('spend', 
          <AttachMoney sx={{ fontSize: 18, color: '#000000' }} />, 
          'Spend'
        )}
      </div>

      {/* Breadcrumb Path - matches Figma design */}
      <div className="breadcrumb-path">
        Product > Timeframe > Channel > Instagram
      </div>
    </div>
  )
}

export default FilterSection
