/**
 * Api route to get the users accessToken used in the apollo client.
 * @param req The HTTP Next JS Request.
 * @param res The HTTP Next JS Response.
 * @returns The users access token
 */
export default async function token(req, res) {
  try {
    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.error(error);
    res.status(error?.status || 500).end(error.message);
  }
}
