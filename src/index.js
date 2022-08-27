import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];
const posts = [];

server.post("/sign-up", (req, res) => {
	const user = req.body;
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		return res.sendStatus(400);
	}

	users.push(user);

	res.send("OK");
});

server.post("/tweets", (req, res) => {
	const tweet = req.body;
	tweets.push(tweet);

	const picture = users.find((value) => value.username === tweet.username);
	tweet.avatar = picture.avatar;
	posts.push(tweet);

	res.send("OK");
});

server.get("/tweets", (req, res) => {
	const lastTweets = posts.slice(-10);

	res.send(lastTweets);
});

server.listen(5000);
