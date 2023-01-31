import React, { useContext } from "react";
import { Container } from "./ContactStyles";
import Navbar from "../../components/Navbar/Navbar";
import AppContext from "../../components/Context/Appcontext";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormControl from "@mui/material/FormControl";
// import bg from "../../bgcontact.jpeg";

const Contact = () => {
  const { showCart } = useContext(AppContext);
  return (
    <Container>
      <div>
        {showCart && <Cart />}
        <Navbar />
        {/* <img src={bg} alt="Background" /> */}
        <form
        noValidate
        autoComplete="off"
        onSubmit=''
        action="">
        <FormControl className="formcontrol" >
          <div className="names">
            <TextField
              className="textfield"
              helperText="Please enter your first name"
              id="demo-helper-text-aligned"
              label="First Name"
            />
            <TextField
              className="textfields"
              helperText="Please enter your last name"
              id="demo-helper-text-aligned"
              label="Last Name"
            />
          </div>
          <TextField
            className="textfield"
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="Email"
          />
          <TextField
            id="outlined-multiline-static"
            label="We listen"
            multiline
            rows={4}
            defaultValue="Tell us..."
            helperText="By Clicking send, you agree to subscribe with us"
          />
          <Button 
          type="submit"
          variant="contained" 
          endIcon={<SendIcon />}>
        Send
      </Button>
        </FormControl>
        </form>

        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
