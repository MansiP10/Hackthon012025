const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors()); // Use the cors middleware
const upload = multer();

// Load the list of valid skills from valid_skills.txt asynchronously
function loadValidSkills() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'valid_skills.txt'), 'utf-8', (err, data) => {
      if (err) {
        reject('Error reading skills file');
      } else {
        // Split the skills by new lines or commas and trim any extra spaces
        const validSkills = data.split(/\s*[\n,;]\s*/).map(skill => skill.trim().toLowerCase());
        resolve(validSkills);
      }
    });
  });
}

async function extractDataFromText(text) {
  const extractedData = {};

  // Extract name (first 3 words)
  const nameParts = text.trim().split(/\s+/).slice(0, 3);
  extractedData.name = nameParts.join(' ');

  // Extract phone number (starting with +91)
  const phoneRegex = /\+91\s?([6-9]\d{9})/; // Adjusted regex for phone numbers
  const phoneMatch = text.match(phoneRegex);
  extractedData.phone = phoneMatch ? phoneMatch[0] : '';

  // Extract email
  const emailRegex = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
  const emailMatch = emailRegex.exec(text);
  extractedData.email = emailMatch ? emailMatch[0] : '';

  // Extract skills (unique and valid)
  const wordsInText = text.split(/\s+/); // Split text into words
  let extractedSkills = [];

  try {
    // Load the valid skills list
    const validSkills = await loadValidSkills();

    // Iterate through each word and check if it matches a valid skill
    wordsInText.forEach(word => {
      const normalizedWord = word.toLowerCase(); // Normalize word for case-insensitive matching
      if (validSkills.includes(normalizedWord)) {
        extractedSkills.push(word); // Add matched skill to the array
      }
    });

    // Ensure skills are unique
    extractedData.skills = [...new Set(extractedSkills)];
  } catch (err) {
    console.error('Error loading valid skills:', err);
    extractedData.skills = [];
  }

  // Extract projects (assume they are listed under a "Projects" section)
  const projectRegex = /projects?:?\s*(.*?)(?=education:|$)/is; // Match "Projects:" until "Education" or end of text
  const projectMatch = text.match(projectRegex);
  extractedData.projects = projectMatch ? projectMatch[1].trim().split(/\n+/) : [];

  // Extract education details (assume they are listed under an "Education" section)
  const educationRegex = /education:?\s*(.*?)(?=projects:|$)/is; // Match "Education:" until "Projects" or end of text
  const educationMatch = text.match(educationRegex);
  extractedData.education = educationMatch ? educationMatch[1].trim().split(/\n+/) : [];

  return extractedData;
}

app.post('/api/upload', upload.single('resume'), async (req, res) => {
  try {
    const { buffer } = req.file;

    // Ensure the file is a PDF
    const fileType = req.file.originalname.split('.').pop().toLowerCase();

    if (fileType !== 'pdf') {
      return res.status(400).json({ error: 'Unsupported file type. Only PDF files are supported.' });
    }

    // Parse the PDF file
    const data = await pdf(buffer);
    const text = data.text;

    // Extract data from text
    const extractedData = await extractDataFromText(text);
    console.log(extractedData);
    res.json(extractedData);
  } catch (error) {
    console.error('Error processing resume:', error.message || error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
