import axios from "axios";
import { useRef, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faCheckCircle,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/ThemeContext";
import { notification } from "antd"; // Import Ant Design notification

const ContactPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
      placement: "topRight", // Positioning the notification at the top right
      duration: 2, // Duration for which notification is visible
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      openNotification("error", "Please fill out all fields.");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    setIsLoading(true);

    try {
      await axios.post("/api/send-message", formData);
      setIsLoading(false);
      
      // Clear form fields
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
      
      // Show success notification
      openNotification("success", "Message sent successfully!");

    } catch (error) {
      setIsLoading(false);
      console.error("Error sending message:", error);
      openNotification("error", "Failed to send message, please try again later.");
    }
  };

  // Define common sx styles for TextField
  const textFieldStyles = {
    "& .MuiInputBase-root": {
      color: theme.text,
    },
    "& .MuiFormLabel-root": {
      color: theme.text,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.text,
      },
      "&:hover fieldset": {
        borderColor: theme.text,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.text,
      },
    },
  };

  return (
    <section className="py-16 px-5 font-boska ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16">
        Let's connect
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 p-8 rounded-l-lg">
          <Typography
            variant="h4"
            component="h1"
            className="text-4xl font-bold mb-4"
          >
            Let's Get in Touch
          </Typography>
          <p className="mb-6 text-xl">
            I’d love to hear from you! Whether you have a question, a project
            proposal, or just want to say hello, feel free to send me a message.
          </p>
          <ul className="space-y-2 ">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
              />
              <span className="text-xl italic">Email: &nbsp;rahulmamoria@gmail.com </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="mr-2"
              />
              <span className="text-xl italic">Phone: &nbsp;+91 7690898460 </span>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Box>
              <TextField
                label="Name"
                variant="outlined"
                inputRef={nameRef}
                fullWidth
                required
                sx={textFieldStyles}
              />
            </Box>
            <Box>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                inputRef={emailRef}
                fullWidth
                required
                sx={textFieldStyles}
              />
            </Box>
            <Box>
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                inputRef={phoneRef}
                fullWidth
                required
                sx={textFieldStyles}
              />
            </Box>
            <Box>
              <TextField
                label="Message"
                variant="outlined"
                inputRef={messageRef}
                fullWidth
                required
                multiline
                rows={4}
                sx={textFieldStyles}
              />
            </Box>
            <div className="flex justify-between items-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading} // Disable button while loading
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              >Send Message   {isLoading ? <CircularProgress className="ml-4" size={18} color="inherit" /> : ""}
              </Button>
              
              <Button
                type="reset"
                variant="outlined"
                color="secondary"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded"
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
