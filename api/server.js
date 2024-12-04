const express = require('express');
const { createServer } = require('http')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/matchRoutes');
const messageRoutes = require('./routes/messageRoutes');
const connectDB  = require('./config/db');
const { initializeSocket } = require('./socket/socket.server')
const cors = require('cors');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const httpServer = createServer(app);

initializeSocket(httpServer);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}

httpServer.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    connectDB();
});