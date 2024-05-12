import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()


blogRoutes.use('/*', async (c, next) => {

  const authHeader = c.req.header("authorization") || "";
  const token = authHeader.split(" ")[1]
  const user = await verify(token, c.env.JWT_SECRET);
  if (user) {
    c.set("userId", user.id);
    await next()
  } else {
    c.status(403);
    return c.json({ error: "Authorizdation failed" })
  }
})

blogRoutes.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()
  const authorId = Number(c.get("userId"))

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId
    }
  })


  return c.json({
    id: blog.id
  })

})

blogRoutes.put('/blog', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()

  const blog = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content,
    }
  })


  return c.json({
    id: blog.id
  })

})

blogRoutes.get('/blog/:id', async (c) => {


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()
try{
  
  const blog = await prisma.post.findFirst({
    where: {
      id: body.id
    }
  })

  return c.json({
    blog
  })

}catch (err) {
  c.status(411)
  return c.json({
    message: "Error while fetching the blog",
})

}

})

// Add pagination
blogRoutes.get('/blog/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany()

  return c.json({
    blogs
  })
 

})


export default blogRoutes