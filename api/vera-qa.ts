export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method Not Allowed' } });
  }

  const backendUrl = process.env.VERA_QA_BACKEND_URL;
  const sharedSecret = process.env.VERA_QA_SHARED_SECRET;

  if (!backendUrl || !sharedSecret) {
    console.error('Missing VERA_QA_BACKEND_URL or VERA_QA_SHARED_SECRET environment variables.');
    return res.status(500).json({ error: { code: 'internal_error', message: 'Server configuration error.' } });
  }

  const { question, history = [] } = req.body || {};

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: { code: 'invalid_request', message: 'Question is required.' } });
  }

  if (question.length > 1000) {
    return res.status(400).json({ error: { code: 'invalid_request', message: 'Question must be 1000 characters or less.' } });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Vera-QA-Secret': sharedSecret,
      },
      body: JSON.stringify({ question, history }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Some endpoints might return non-JSON if they completely crash, so try-catch parsing
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error('Failed to parse backend response as JSON', parseError);
      return res.status(500).json({ 
        error: { 
          code: 'internal_error', 
          message: 'Something went wrong. Please try again.' 
        } 
      });
    }
    
    // Relay the status code and JSON body exactly as-is
    return res.status(response.status).json(data);

  } catch (error) {
    console.error('Error proxying to Vera QA backend:', error);
    return res.status(500).json({ 
      error: { 
        code: 'internal_error', 
        message: 'Something went wrong. Please try again.' 
      } 
    });
  }
}
