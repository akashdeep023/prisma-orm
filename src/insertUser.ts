import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
	email: string,
	password: string,
	firstName: string,
	lastName: string
) {
	const res = await prisma.user.create({
		data: {
			email,
			password,
			firstName,
			lastName,
		},
		select: {
			id: true,
			firstName: true,
			lastName: true,
		},
	});
	console.log(res);
}

insertUser("jack1@jack.com", "123456", "jack1", "ji");
