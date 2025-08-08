import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userId: number) {
	const todos = await prisma.todo.findMany({
		where: {
			userId: userId,
		},
	});
	console.log(todos);
}

getTodos(1);
