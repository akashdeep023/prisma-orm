import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
	const user = await prisma.user.findFirst({
		where: {
			email: username,
		},
	});
	console.log(user);
}

getUser("jack1@jack.com");
