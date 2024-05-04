import { Hono } from 'hono'
import userRoutes from './routes/userRoutes';
import blogRoutes from './routes/blogRoutes';
import { decode, sign, verify } from 'hono/jwt';


const app = new Hono<{
  Bindings: {
    JWT_SECRET: string
  }
}>()




app.route('/api/v1/user', userRoutes)
app.route('/api/v1/blog', blogRoutes)







export default app
