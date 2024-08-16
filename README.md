This project is designed to reproduce a crash in V8

the crash specifically relates to a new V8 feature (V8ProfileGuidedOptimization).

To reproduce this crash:

1. `npm ci`
2. `npm run start`
3. launch chrome, and navigate to `http://localhost:3000/`
4. open dev tools
5. click Sources
6. click `_N_E` (Next.js)
7. click `pages`
8. click `index.tsx`
9. add a breakpoint on line 3 (`const queue = [1,2,3];`)
10. in the console, run: `xx()`
11. keep on pressing the down arrow key until the render crashes
