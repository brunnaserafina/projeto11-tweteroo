import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];
const posts = [];

server.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	users.push(req.body);

	res.status(201).send("OK");
});

server.post("/tweets", (req, res) => {
	const { user: username } = req.headers;
	const { tweet } = req.body;
	const picture = users.find((value) => value.username === username);
	const avatar = picture.avatar;

	if (!username || !tweet) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	tweets.push({ username, tweet });

	posts.push({ username, avatar, tweet });

	res.status(201).send("OK");
});

server.get("/tweets", (req, res) => {
	const lastTweets = posts.slice(-10);

	res.send(lastTweets);
});

server.get("/tweets/:username", (req, res) => {
	const username = req.params.username;

	const userTweets = posts.filter((value) => value.username === username);

	res.send(userTweets);
});

server.listen(5000);
