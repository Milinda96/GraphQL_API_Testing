async function feed(parent, args, context, info) {
  // return context.prisma.link.findMany()
  const where = args.filter
    ? {
      OR: [
        { description: { contains: args.filter } },
        { url: { contains: args.filter } },
      ],
    }
    : {}

  const links = await context.prisma.link.findMany({
    where,
  })

  return links
}

module.exports = {
  feed,
}