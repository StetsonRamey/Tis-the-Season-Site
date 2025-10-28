/**
 * A/B Split Test Edge Function
 * 
 * Intercepts requests to /qr-code.html and randomly assigns visitors
 * to variant A or B. Uses cookies to ensure consistent experience.
 */

const VARIANT_A_PATH = '/qr-code-variant-a.html';
const VARIANT_B_PATH = '/qr-code-variant-b.html';
const COOKIE_NAME = 'tts_ab_variant';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

export default async (request, context) => {
  // Get existing variant from cookie
  const cookies = request.headers.get('cookie') || '';
  const variantMatch = cookies.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  let variant = variantMatch ? variantMatch[1] : null;

  // Generate session ID for tracking (if not exists)
  const sessionMatch = cookies.match(/tts_session_id=([^;]+)/);
  let sessionId = sessionMatch ? sessionMatch[1] : generateSessionId();

  // If no variant assigned, randomly choose one (50/50 split)
  if (!variant || !['A', 'B'].includes(variant)) {
    variant = Math.random() < 0.5 ? 'A' : 'B';
  }

  // Determine which file to serve
  const variantPath = variant === 'A' ? VARIANT_A_PATH : VARIANT_B_PATH;

  // Rewrite the request to serve the variant file
  const response = await context.rewrite(variantPath);

  // Clone the response so we can modify headers
  const modifiedResponse = new Response(response.body, response);

  // Set cookies for variant and session tracking
  const cookieOptions = `Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  modifiedResponse.headers.append('Set-Cookie', `${COOKIE_NAME}=${variant}; ${cookieOptions}`);
  modifiedResponse.headers.append('Set-Cookie', `tts_session_id=${sessionId}; ${cookieOptions}`);

  // Add variant info to response headers for debugging
  modifiedResponse.headers.set('X-AB-Variant', variant);
  modifiedResponse.headers.set('X-Session-ID', sessionId);

  return modifiedResponse;
};

/**
 * Generate a unique session ID for tracking
 */
function generateSessionId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

export const config = {
  path: '/qr-code.html',
};
