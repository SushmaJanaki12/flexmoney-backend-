import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  // Perform basic validations
  const { name, age, selectedBatch } = req.body;

  if (!name || age < 18 || age > 65 || !selectedBatch) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const database = [];

  database.push({ name, age, selectedBatch });
  console.log('Data stored in the database:', database);
  return res.json({ success: true, message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
