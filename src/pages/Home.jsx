import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import Print from "../components/Print";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          name: "Frozen yoghurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
        { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly Bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        { name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
        { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
      ],
      // rows end here
      page: 0,
      rowsPerPage: 5,
    };
  }

  addRow = () => {
    const newRow = {
      name: "Brownie",
      calories: 320,
      fat: 18,
      carbs: 42,
      protein: 5.1,
    };

    this.setState({ rows: [...this.state.rows, newRow] });
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  handleNavigation = () => {
    // e.preventDefaut();
    const { navigate } = this.props;
    navigate("/mui");
    console.log("Trial");
  };


  // handleLogout = () => {

  // }

  render() {
    const { rows, page, rowsPerPage } = this.state;
    const visibleRows = rows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );

    return (
      <>
        <h1>Welcome to the Home page</h1>
        <h3>You are Logged in</h3>
        <button onClick={() => this.props.logout()}> Logout </button>

        <button onClick={this.addRow}>Add Row</button>
        <TableContainer style={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 600 }} aria-label="dynamic table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={this.handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>

        <button onClick={this.handleNavigation}>Navigate</button>
        <button onClick={() => this.props.navigate("/product")}> Products </button>

        {/* <Print>Hello world</Print> */}
      </>
    );
  }
}

function HomeCompWithHooks(props) {
  const navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}

export default HomeCompWithHooks;
