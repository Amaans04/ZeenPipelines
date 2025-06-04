// Google Sheets API endpoint (you'll need to deploy this as a web app)
const GOOGLE_SHEETS_API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

export const submitToGoogleSheets = async (formData: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  subscribe: boolean;
  timestamp: string;
}) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}; 