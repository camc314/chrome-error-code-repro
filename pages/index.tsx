if (typeof window !== 'undefined') {
    (window as any).xx = async () => {
        const queue = [1, 2, 3];

        while (queue.length) {
            const node = queue.shift();

            if (node === 2) {
                return;
            }
        }

        return;
    };
}

function App() {
    return <h1>test</h1>;
}

export default App;
