import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Paper
} from "@mui/material";

export default function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("casual");
  const [response, setResponse] = useState("");

  const generateEmail = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone
        }
      );
      setResponse(res.data);
    } catch (err) {
      console.error(err);
      alert("Error generating email");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    alert("Copied!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: "20px"
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            ✨ AI Email Assistant
          </Typography>

          <Typography align="center" color="text.secondary" mb={3}>
            Generate smart replies instantly 🚀
          </Typography>

          {/* Input */}
          <TextField
            label="Enter Email Content"
            multiline
            rows={5}
            fullWidth
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Tone */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone</InputLabel>
            <Select
              value={tone}
              label="Tone"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="casual">Casual 😄</MenuItem>
              <MenuItem value="professional">Professional 🧑‍💼</MenuItem>
            </Select>
          </FormControl>

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={generateEmail}
            sx={{
              py: 1.5,
              fontSize: "16px",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #667eea, #764ba2)"
            }}
          >
            Generate Reply
          </Button>

          {/* Output */}
          {response && (
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                ✉️ Generated Reply
              </Typography>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: "10px",
                  background: "#f9f9f9"
                }}
              >
                <Typography>{response}</Typography>
              </Paper>

              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}