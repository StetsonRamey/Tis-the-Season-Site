/**
 * Log Visit to Airtable
 * 
 * Tracks page visits for A/B test analytics
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
    const { variant, sessionId, userAgent, referrer } = JSON.parse(event.body);

    // Validate required fields
    if (!variant || !sessionId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Prepare Airtable record
    const record = {
      fields: {
        Timestamp: new Date().toISOString(),
        Variant: variant,
        'Session ID': sessionId,
        'User Agent': userAgent || '',
        Referrer: referrer || '',
      },
    };

    // Send to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_VISITS_TABLE}`,
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
      throw new Error('Failed to log visit to Airtable');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error logging visit:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to log visit' }),
    };
  }
};
