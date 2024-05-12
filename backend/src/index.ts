import { Hono } from 'hono'
import userRoutes from './routes/userRoutes';
import blogRoutes from './routes/blogRoutes';
import { decode, sign, verify } from 'hono/jwt';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()



app.route('/api/v1/blog', blogRoutes)
app.route('/api/v1/user', userRoutes)








export default app
