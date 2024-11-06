export default async function Page({
    params,
}: {
    params: Promise<{ alias: string }>
}) {
    const alias = (await params).alias
    return <div>My Post: {alias}</div>
}
