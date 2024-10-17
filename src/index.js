import http from 'http'
import dotenv from 'dotenv'

dotenv.config()
const projectName = process.env.PROJECT_NAME

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    if (req.url === '/test' && req.method === 'GET') {
        res.write('test\n')
    } else {
        res.write('start page\n')
    }
    res.end('finish')
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000')
    console.log(projectName)
})
