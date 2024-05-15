import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';
import {signupInput} from '@100xdevs/medium-common'
import { signinInput } from "@100xdevs/medium-common";


const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
  }>()

userRoutes.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    const {success} = signupInput.safeParse(body)
    if(!success) {
      c.status(411)
      return c.json({
        message:"Inputs not correct"
      })
    }
    try {

      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
  
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
      return c.json({ jwt: token })
    } catch (e) {
      c.status(411)
      return c.text("User already exists with this email")
    }
  
  
  })
  
userRoutes.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const {success} = signinInput.safeParse(body)
    if(!success) {
      c.status(411)
      return c.json({
        message:"Inputs not correct"
      })
    }
  
    try{
      
    const user = await prisma.user.findUnique({
      where: {
        username: body.username,
        password: body.password
      }
    })
  
    if (!user) {
      c.status(403);
      return c.json({ error: "Invalid credentials" })
    }
  
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
  
    return c.json({ jwt: jwt })
  
    } catch(e){
      c.status(411)
      return c.text("Invalid")
    }
  
  
    
  })

export default userRoutes;