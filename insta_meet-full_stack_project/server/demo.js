import express from 'express';
import fetch from 'node-fetch';
import base64 from 'base-64';
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json());

const zoomAccountId = "xflBSet3SKWa4GjHBGRJ5A";
const clientId = "zntGMM35TUu7rOts3SEuXQ";
const secret = "i4L2KGwDJwP8pKFPlvdaSSbZq18rpMTh";

const getAuthHeaders = () => ({
  Authorization: `Basic ${base64.encode(`${clientId}:${secret}`)}`,
  'Content-Type': 'application/json',
});

const getToken = async () => {
  const response = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,
    {
      method: 'POST',
      headers: getAuthHeaders(),
    }
  );
  const data = await response.json();
  return data.access_token;
};

app.post('/create-meeting', async (req, res) => {
  try {
    const token = await getToken();

    const response = await fetch(`https://api.zoom.us/v2/users/me/meetings`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: 'Zoom Meeting from React App',
        type: 2,
        start_time: new Date(Date.now() + 30 * 60000).toISOString(),
        duration: 30,
        timezone: 'Asia/Kolkata',
        password: '12345',
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
        },
      }),
    });

    const meetingData = await response.json();

    if (!response.ok) {
      return res.status(400).json({ error: meetingData });
    }

    // Send the meeting URL to the frontend
    res.json({ join_url: meetingData.join_url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create meeting' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));