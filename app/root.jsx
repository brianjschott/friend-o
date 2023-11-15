
import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";

import {Button} from 'react-bootstrap';
import FriendList from "./routes/allfriends";
import 'bootstrap/dist/css/bootstrap.css';


  export default function App() {
    return (
      <html>
        <head>
          <Meta />
          <Links />
          <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
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