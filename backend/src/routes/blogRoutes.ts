import { Hono } from "hono";
import { verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBlogInput, updateBlogInput } from "@100xdevs/medium-common";

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

  const authHeader = c.req.header("Authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET);
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
  const {success} = createBlogInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({
      message:"Inputs not correct"
    })
  }
  const authorId = Number(c.get("userId"))

  try{
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
  }catch(err){
    c.status(403)
    return c.json({
      message:"Some error occured"
    })
  }

  

})

blogRoutes.put('/blog', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()
  const {success} = updateBlogInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({
      message:"Inputs not correct"
    })
  }

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

// Add pagination
blogRoutes.get('/bulk', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany()
  console.log(blogs)

  return c.json({
    blogs
  })
 

})

blogRoutes.get('/:id', async (c) => {


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const id= c.req.param("id")
try{
  
  const blog = await prisma.post.findFirst({
    where: {
      id: Number(id)
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




export default blogRoutes;