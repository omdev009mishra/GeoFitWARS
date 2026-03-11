import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.API_PORT ?? 8787)

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
