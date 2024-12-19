import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['idle', 'running', 'completed'], default: 'idle' },
  totalTime: { type: Number, default: 0 },
  lastStartTime: { type: Date },
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);
export default Task;