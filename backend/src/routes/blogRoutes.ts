import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';

const blogRoutes = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>()

blogRoutes.use('/*', async (c, next) => {

    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1]
    const response = await verify(token, c.env.JWT_SECRET);
    if (response.id) {
  
      await next()
    } else {
      c.status(403);
      return c.json({ error: "unauthorized" })
    }
  })

blogRoutes.post('/blog', (c) => {

    return c.text('Hello')
  
  })
  
  blogRoutes.put('/blog', (c) => {
  
    return c.text('Hello')
  
  })
  
  blogRoutes.get('/blog/:id', (c) => {
  
    return c.text('Hello')
  
  })
  
  blogRoutes.get('/blog/bulk', (c) => {
  
    return c.text('Hello')
  
  })


  export default blogRoutes