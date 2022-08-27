import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

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
	const { username, tweet } = req.body;

	if (!username || !tweet) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	tweets.push(req.body);

	const picture = users.find((value) => value.username === username);
	req.body.avatar = picture.avatar;
	posts.push(req.body);

	res.status(201).send("OK");
});

server.get("/tweets", (req, res) => {
	const lastTweets = posts.slice(-10);

	res.send(lastTweets);
});

server.listen(5000);
