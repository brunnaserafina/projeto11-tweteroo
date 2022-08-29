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

	if (
		!username ||
		!avatar ||
		!(avatar.startsWith("https://") || avatar.startsWith("http://"))
	) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	users.push(req.body);

	res.status(201).send("OK");
});

server.post("/tweets", (req, res) => {
	const username = req.headers.user;
	const tweet = req.body.tweet;
	const avatar = users.find((user) => user.username === username).avatar;

	if (!username || !tweet) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	tweets.unshift({ username, tweet });
	posts.unshift({ username, avatar, tweet });

	res.status(201).send("OK");
});

server.get("/tweets", (req, res) => {
	let page = Number(req.query.page);
	const tweetsPerPage = 10;
	const qtdPages = Math.ceil(tweets.length / tweetsPerPage);

	if (tweets.length === 0) {
		return res.send(tweets);
	}

	if (page < 1 || page > qtdPages) {
		return res.status(400).send("Informe uma página válida!");
	} else if (!page) {
		page = 1;
	}

	let lastTweets = posts.slice(tweetsPerPage * (page - 1), tweetsPerPage * page);

	res.status(200).send(lastTweets);
});

server.get("/tweets/:username", (req, res) => {
	const { username } = req.params;
	const userTweets = posts.filter((value) => value.username === username);

	if (!userTweets) {
		return res.status(400).send("Usuário não encontrado!");
	}

	res.status(200).send(userTweets);
});

server.listen(5000, () => console.log("Listening on port 5000"));
