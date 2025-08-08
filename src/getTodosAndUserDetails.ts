import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number) {
	// const user = await prisma.user.findUnique({
	// 	where: {
	// 		id: userId,
	// 	},
	// });
	// const todos = await prisma.todo.findMany({
	// 	where: {
	// 		userId: userId,
	// 	},
	// });
	// console.log(todos);
	// console.log(user);

	// Using `joins`
	const todos = await prisma.todo.findMany({
		where: {
			userId: userId,
		},
		select: {
			user: {
				select: {
					firstName: true,
					lastName: true,
					email: true,
				},
			},
			title: true,
			description: true,
		},
	});
	console.log(todos);
}

getTodosAndUserDetails(1);
