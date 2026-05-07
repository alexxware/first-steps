export default function GeneralLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Te damos la bienvenida a</span>
            {children}
        </main>
    )
}