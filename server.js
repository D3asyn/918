fetch("https://dummyjson.com/comments")
	.then((response) => response.json())
	.then((data) => {
		const commentsSection = document.getElementById("list");

		data.comments.forEach((comment) => {
			const commentDiv = document.createElement("div");
			commentDiv.classList.add("comment-container");

			const username = document.createElement("div");
			username.classList.add("username");
			username.textContent = `User: ${comment.user.username}`;

			const commentBody = document.createElement("div");
			commentBody.classList.add("comment-body");
			commentBody.textContent = comment.body;

			const likes = document.createElement("div");
			likes.classList.add("likes");
			likes.textContent = `Likes: ${comment.likes}`;

			commentDiv.appendChild(username);
			commentDiv.appendChild(commentBody);
			commentDiv.appendChild(likes);

			commentsSection.appendChild(commentDiv);
		});
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});
