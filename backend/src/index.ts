import express, { Request, Response } from 'express';
import cors from 'cors';
import episodesRouter from './routes/episodes';
import seriesRouter from './routes/series';
import seasonsRouter from './routes/seasons';
import railsRouter from './routes/rails';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/episodes', episodesRouter);
app.use('/api/series', seriesRouter);
app.use('/api/seasons', seasonsRouter);
app.use('/api/rails', railsRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📺 API available at http://localhost:${PORT}/api`);
});

