import React, { Component } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Pagination,
  Box,
  Checkbox,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { pink } from '@mui/material/colors';

// Sample anime data
const animeList = [
  { title: 'Jujutsu Kaisen', description: 'A world of curses and sorcerers. Epic battles and dark themes.' },
  { title: 'Solo Leveling', description: 'A weak hunter becomes the strongest through a mysterious system.' },
  { title: 'Attack on Titan', description: 'Humanity fights for survival against massive titans.' },
  { title: 'Demon Slayer', description: 'A brother’s quest to cure his demon sister in a demon-infested world.' },
  { title: 'One Piece', description: 'Luffy sets sail to become Pirate King and find the One Piece.' },
  { title: 'Naruto', description: 'A young ninja strives to be Hokage while facing a dark past.' },
  { title: 'Bleach', description: 'A high schooler becomes a Soul Reaper battling evil spirits.' },
  { title: 'Fullmetal Alchemist', description: 'Two brothers search for the Philosopher\'s Stone to restore their bodies.' },
  { title: 'My Hero Academia', description: 'A world of quirks where students train to become pro heroes.' },
  { title: 'Death Note', description: 'A student finds a deadly notebook and tries to reshape the world.' },
];

const itemsPerPage = 3;

class RadioListWithPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnime: '',
      age : "20",
      page: 1,
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ selectedAnime: value });
    console.log('Selected Anime:', value);
  };

  handlePageChange = (_, page) => {
    console.log(page);
    
    this.setState({ page });
  };

  handleDropDown = (val) => {
    this.setState({age : val})
    console.log("The value of the age : ",this.age);
  };

  render() {
    const { selectedAnime , age} = this.state; 

    return (
      <Box sx={{ p: 4 }}>
        <h2>Anime Selector</h2>

        <FormControl>
          <FormLabel>Choose Your Favorite Anime</FormLabel>
          <RadioGroup value={selectedAnime} onChange={this.handleChange}>
            {animeList.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '16px',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #ccc',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ margin: '4px 0', color: '#555', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                </div>
                <FormControlLabel value={item.title} control={<Radio />} label="" />
              </div>
            ))}
          </RadioGroup>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <Pagination
          count={3}
          // page={this.state.page}
            onChange={this.handlePageChange}
            color="secondary"
            shape="rounded"
          />
        </div>


          {/* checkbox */}
        <FormControlLabel
          required
          control={<Checkbox sx={{ color: pink[800] }} />}
          label="Required"
          sx={{ marginTop: '24px' }}
        />
        <br />


        {/* drop down  */}
         <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          // onChange={this.handleDropDown(value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
    );
  }
}

export default RadioListWithPagination;
