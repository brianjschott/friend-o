
import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";

import {Button} from 'react-bootstrap';
import FriendList from "./routes/allfriends";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

export const links = () => [
    {rel: "stylesheet", href: bootstrap}
]

  export default function App() {
    return (
      <html>
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Friend-O App</h1>
          <Outlet />
          <Scripts />
          <LiveReload />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap**@5.1.0**/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>

        </body>
      </html>
    );
  }