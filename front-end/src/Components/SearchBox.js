import React from 'react';

const SearchBox = ({ searchChange, holder }) => {
  return (
    <div className='w-100'>
      <input
        className='w-100 pa3 bb'
        type='search'
        placeholder={`Search by student ${holder}...`}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;