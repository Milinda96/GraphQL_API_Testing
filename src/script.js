const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
	// create new links
	// const newLink = await prisma.link.create({
	// 	data: {
	// 		description: 'My testing graphQL 1',
	// 		url: 'www.teting.com',
	// 	},
	// })

	// fetch all links
	const allLinks = await prisma.link.findMany()
	console.log(allLinks)
}

main().catch(e => {
	throw e
}).finally(async () => {
	await prisma.$disconnect()
})