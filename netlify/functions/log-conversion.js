/**
 * Log Conversion to Airtable
 * 
 * Tracks form submissions for A/B test conversion analytics
 */

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { variant, sessionId, formData } = JSON.parse(event.body);

    // Validate required fields
    if (!variant || !sessionId || !formData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Extract key fields for easy filtering
    const email = formData.email || '';
    const firstName = formData.firstName || '';
    const lastName = formData.lastName || '';

    // Prepare Airtable record
    const record = {
      fields: {
        Timestamp: new Date().toISOString(),
        Variant: variant,
        'Session ID': sessionId,
        Email: email,
        'First Name': firstName,
        'Last Name': lastName,
        'Form Data Snapshot': JSON.stringify(formData, null, 2),
      },
    };

    // Send to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_CONVERSIONS_TABLE}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Airtable error:', error);
      throw new Error('Failed to log conversion to Airtable');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error logging conversion:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to log conversion' }),
    };
  }
};
