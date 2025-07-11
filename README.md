# AWS-TextToSpeech-Project

A fully serverless web app that converts user-submitted text to speech using Amazon Polly.  
Built with AWS Lambda, API Gateway, DynamoDB, SNS, S3, and Polly.  
Includes a simple HTML/CSS/JS frontend and event-driven backend.  
Great for learning cloud automation without managing servers.

---

![App Demo](https://github.com/Shameera1111/AWS-TextToSpeech-Project/blob/d3564e4eaa58ba9e7fc0c723c3ed9b4d68f849eb/WhatsApp%20Image%202025-07-03%20at%2023.59.57_de623ac2.jpg)

---

## 🔧 Components Used

### Frontend
- `index.html`, `styles.css`, `scripts.js`  
  Provides UI for text input, voice selection, and displays results.

### Backend
- **API Gateway:** Exposes REST endpoints for the frontend.
- **Lambda Functions:**
  - `add_new_posts.py`: Handles new text submissions, stores them in DynamoDB, and triggers SNS.
  - `convert_text_to_audio.py`: Triggered by SNS, reads text from DynamoDB, uses Polly to synthesize speech, stores MP3 in S3, and updates DynamoDB with the audio URL.
  - `read_table_items.py`: Returns all items from DynamoDB for display in the frontend.
- **DynamoDB:** Stores text, voice, status, and audio URL.
- **SNS:** Triggers audio conversion asynchronously.
- **Amazon Polly:** Converts text to speech.
- **S3:** Stores generated MP3 files and serves them publicly.

---

## 🚀 Usage

1. Deploy the backend (Lambda, DynamoDB, SNS, S3, API Gateway) with the provided Python scripts.  
2. Configure environment variables for Lambda functions:  
   - `DB_TABLE_NAME`: DynamoDB table name  
   - `BUCKET_NAME`: S3 bucket name  
   - `SNS_TOPIC`: SNS topic ARN  
3. Serve the frontend (`index.html`, `styles.css`, `scripts.js`) from a static web host or locally.  
4. Interact with the app:  
   - Select a voice, enter text, and click "Process".  
   - The table displays all requests, their status, and provides an audio player when ready.

---

## 📁 File Overview

- `serverless-web/index.html` – Main web UI  
- `serverless-web/styles.css` – Styles for the UI  
- `serverless-web/scripts.js` – Frontend logic (AJAX, DOM updates)  
- `add_new_posts.py` – Lambda: Handles new submissions  
- `convert_text_to_audio.py` – Lambda: Converts text to audio  
- `read_table_items.py` – Lambda: Reads all posts  
- `error.html` – Simple error page

---

## 📝 Notes

- Ensure all AWS resources (Lambda, DynamoDB, S3, SNS, Polly) are in the `us-east-1` region.  
- The application is designed for demonstration and learning purposes.
