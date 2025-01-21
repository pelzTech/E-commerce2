import React from 'react';
import Select from 'react-select';
import { products } from '../utils/products'; 

const options = [
  { value: 'perfume', label: 'Perfume' },
  { value: 'hair', label: 'Hair' },
  { value: 'mens wares', label: "Men's Wares" },
  { value: 'female wares', label: 'Female Wares' },
  { value: 'cosmetics', label: 'Cosmetics' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#0f3460',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 'none',
    width: '200px',
    height: '40px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#0f3460' : 'white',
    color: state.isSelected ? 'white' : '#0f3460',
    '&:hover': {
      backgroundColor: '#0f3460',
      color: 'white',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      const filteredProducts = products.filter(
        (item) => item.category === selectedOption.value
      );
      setFilterList(filteredProducts); 
    } else {
      setFilterList(products);
    }
  };

  return (
    <Select
      options={options}
      defaultValue={{ value: '', label: 'Select a Category' }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
