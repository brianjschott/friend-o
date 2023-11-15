
import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";

import {Button} from 'react-bootstrap';
import FriendList from "./routes/allfriends";
import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css';

export const links = () => [
    {rel: "stylesheet", href: bootstrapCSS}
]

export const meta = () => [

]

export const scripts = () => [

]

  export default function App() {
    return (
      <html>
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <h1 class="display-1">Friend Zone</h1>
          <Outlet />
          <Scripts />
          <LiveReload />
          
        </body>
      </html>
    );
  }