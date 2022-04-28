import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MuiPhoneNumber from "material-ui-phone-number";
import * as React from "react";

export default function App() {
  return (
    <div className="App">
      <div>
        <div>
          <toolbar>
            <h1>Registration Form </h1>
          </toolbar>
        </div>
        <div>
          <form>
            <div style={{ display: "flex", alignItems: "center" }}>Name</div>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="First Name"
              variant="outlined"
              required
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Middle Name"
              variant="outlined"
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Last Name"
              variant="outlined"
              required
            />
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              Email Address
            </div>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Email"
              variant="outlined"
              required
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              Phone Number
            </div>
            <MuiPhoneNumber
              style={{ margin: "5px" }}
              name="phone"
              defaultCountry={"us"}
              onChange={console.log("change")}
            />
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>Gender</div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>Address</div>
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Street Address"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Address Line 2"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="City"
              variant="outlined"
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="State/Province"
              variant="outlined"
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="Number"
              label="Zip Code"
              variant="outlined"
            />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "16px",
              }}
            >
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
