import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";

import {Button, Accordion} from 'react-bootstrap';
  
  export default function App() {
    return (
      <html>
        <head>

          <Meta />
          <Links />
        </head>
        <body>
          <h1>Hello world!</h1>
          <Button />
          <Outlet />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }