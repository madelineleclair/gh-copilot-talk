import { createServer } from 'node:http'
import { copyFile, mkdir, readFile } from 'node:fs/promises'

const port = Number(process.env.PORT) || 3030
const source = new URL('./presentation.html', import.meta.url)
const output = new URL('./dist/index.html', import.meta.url)

async function build() {
  await mkdir(new URL('./dist/', import.meta.url), { recursive: true })
  await copyFile(source, output)
  console.log('Built dist/index.html from presentation.html.')
}

async function serve() {
  const server = createServer(async (_request, response) => {
    try {
      const presentation = await readFile(source)
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      response.end(presentation)
    } catch (error) {
      response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end(error instanceof Error ? error.message : 'Unable to load presentation')
    }
  })

  server.listen(port, '0.0.0.0', () => {
    console.log(`Copilot 101 presentation available at http://localhost:${port}`)
  })
}

if (process.argv.includes('--serve')) {
  await serve()
} else {
  await build()
}