const now = new Date()

export default function Header() {
    return (
        <header>
            <h1>SHOP</h1>
            <nav>
                <ul>
                    <li id="class">Home</li>
                    <li id="class">About</li>
                    <li id="class">Price</li>
                    <li id="class">FAQ</li>
                </ul>
                <span>Время сейчас: {now.toLocaleTimeString()}</span>
            </nav>
        </header>
    )
}
