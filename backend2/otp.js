// otp.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

// const { twilio } = require('twilio');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Twilio credentials
const accountSid = 'AC92d1de64e182b483dde900f218ea9b59';
const authToken = '071d754fca8de51d3c343e37b7bbb130';
const fromPhoneNumber = '+18304944852'; // Your Twilio number

// Create a Twilio client
const client = twilio(accountSid, authToken);

// API to send OTP
app.post('/send-otp', (req, res) => {
  const { toPhoneNumber } = req.body;

  // Simulate OTP generation
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

  client.messages
    .create({
      body: `Your OTP is ${otp}`,
      from: fromPhoneNumber,
      to: toPhoneNumber,
    })
    .then((message) => {
      console.log(`Message sent successfully! SID: ${message.sid}`);
      res.status(200).send({ message: 'OTP sent successfully!' });
    })
    .catch((error) => {
      console.error(`Failed to send message: ${error}`);
      res.status(500).send({ error: 'Failed to send OTP' });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
