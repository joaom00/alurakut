import jwt from 'jsonwebtoken'

export default async function githubAuth(req, res) {
  const token = req.headers.authorization
  const tokenDecoded = jwt.decode(token)

  if (!tokenDecoded) {
    return res.status(404).json({
      isAuthenticated: false
    })
  }

  const response = await fetch(
    `https://api.github.com/users/${tokenDecoded.sub}`
  )
  const data = await response.json()

  if (data.message === 'Not Found' || !data) {
    res.status(404).json({
      isAuthenticated: false
    })
  } else {
    res.json({
      isAuthenticated: true,
      token
    })
  }
}
