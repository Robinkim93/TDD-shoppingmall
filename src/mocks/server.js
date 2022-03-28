import { setupServer } from "msw/node";
import { handler } from "./handler";

// mocking server 생성

const server = setupServer(...handler);

export default server;
