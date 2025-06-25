import React, { Component } from "react";
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
  MenuItem,
  Popover,
  Typography,
  Button,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// Sample anime data
const animeList = [
  {
    title: "Jujutsu Kaisen",
    description:
      "A world of curses and sorcerers. Epic battles and dark themes.",
  },
  {
    title: "Solo Leveling",
    description:
      "A weak hunter becomes the stxs: Extra small (0px) rongest through a mysterious system.",
  },
  {
    title: "Attack on Titan",
    description: "Humanity fights for survival against massive titans.",
  },
  {
    title: "Demon Slayer",
    description:
      "A brother’s quest to cure his demon sister in a demon-infested world.",
  },
  {
    title: "One Piece",
    description:
      "Luffy sets sail to become Pirate King and find the One Piece.",
  },
  {
    title: "Naruto",
    description: "A young ninja strives to be Hokage while facing a dark past.",
  },
  {
    title: "Bleach",
    description: "A high schooler becomes a Soul Reaper battling evil spirits.",
  },
  {
    title: "Fullmetal Alchemist",
    description:
      "Two brothers search for the Philosopher's Stone to restore their bodies.",
  },
  {
    title: "My Hero Academia",
    description: "A world of quirks where students train to become pro heroes.",
  },
  {
    title: "Death Note",
    description:
      "A student finds a deadly notebook and tries to reshape the world.",
  },
];

let itemsPerPage = 3;

class RadioListWithPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnime: "",
      age: "0",
      page: 1,
      anchor: null,
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ selectedAnime: value });
    console.log("Selected Anime:", value);
  };

  handlePageChange = (_, page) => {
    console.log("page number : ", page);
    this.setState({ page });
  };

  handleDropDown = (val) => {
    const tt = val.target.value;
    this.setState({ age: tt });
    console.log("The value of the age : ", tt);
  };

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation("/");
  };

  render() {
    const { selectedAnime, page, age, anchor } = this.state;

    const startIndex = (page - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const paginatedAnime = animeList.slice(startIndex, endIndex);

    const totalPages = Math.ceil(animeList.length / itemsPerPage);

    return (
      <Box sx={{ p: 4 }}>
        <h2>Anime Selector</h2>

        <FormControl>
          <FormLabel>Choose Your Favorite Anime</FormLabel>
          <RadioGroup value={selectedAnime} onChange={this.handleChange}>
            {paginatedAnime.map((item, index) => {
              if (item.title === null || item.description === null) return null;
              return (
                <div
                  key={index}
                  style={{
                    padding: "16px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>{item.title}</h3>
                    <p
                      style={{
                        margin: "4px 0",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <FormControlLabel
                    value={item.title}
                    control={<Radio />}
                    label=""
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={this.handlePageChange}
            color="primary"
            shape="rounded"
            showLastButton
            showFirstButton
            // color : secondary
          />
        </div>

        {/* checkbox */}
        <FormControlLabel
          required
          control={<Checkbox sx={{ color: pink[800] }} />}
          label="Required"
          sx={{
            marginTop: "24px",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        />
        <br />

        {/* drop down  */}
        <FormControl
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={this.handleDropDown}
          >
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Button
            variant="contained"
            onClick={(x) => this.setState({ anchor: x.currentTarget })}
          >
            Open Popover
          </Button>
          <Popover
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={() => this.setState({ anchor: null })}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>

          <button onClick={this.handleNavigation}> Navigation </button>
        </div>
      </Box>
    );
  }
}

function MuiWithHooks(props) {
  const navigate = useNavigate();

  return <RadioListWithPagination {...props} navigation={navigate} />;
}

export default MuiWithHooks;
