import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

const ProductTable = () => {

  const [days,setdays] = useState(30);

  const handleChange = (e)=>{
    setdays(e.target.value);
  }

  let products = [{

  },
  {

  }]
  return (
    <div className='table-wrapper'>
      <div className='table-header'>
        <div className='table-heading'>Product Sell</div>
        <div className='search-filter-wrapper'>
        <div className='table-search'>
          <input className='search' type='text' placeholder={'search'} />
        </div>
        <div className='table-filter'>
          <Select
            inputProps={{ 'aria-label': 'Without label' }}
            // id="demo-select-small"
            value={days}
            onChange={handleChange}
            // label="Age"
          >
            <MenuItem value={7}>last 7 days</MenuItem>
            <MenuItem value={30}>last 30 days</MenuItem>
            <MenuItem value={90}>last 90 days</MenuItem>
          </Select>
        </div>
        </div>
      
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <div className="product">
                    <div className="product-image">
                      {/* <img src="" alt="product" /> */}
                    </div>
                    <div className="product-text">
                      <div className="product-heading">
                        Abstract 3D
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">{32}</TableCell>
                <TableCell align="right">{10}</TableCell>
                <TableCell align="right">{12}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default ProductTable