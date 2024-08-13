import { App } from "./App.js";

App.listen(process.env.PORT, () => {
    console.log(`Listen port at: http://localhost:${process.env.PORT}`)
})