import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertTodo(userId: number, title: string, description: string) {
	const todo = await prisma.todo.create({
		data: {
			userId,
			title,
			description,
		},
	});
	console.log(todo);
}

insertTodo(1, "go to gym", "go to gym and do 10 pushups");
