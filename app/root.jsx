import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";

import {Container, Row, Col, Image} from 'react-bootstrap';

import FriendList from "./components/friendmenu";
import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.min.css';
import accordionStyles from "./styles/accordion-styles.css"

export const links = () => [
    {rel: "stylesheet", href: bootstrapCSS},
    {rel: "stylesheet", href: bootstrapIcons},
    {rel: "stylesheet", href: accordionStyles}
]

export const meta = () => [

]

const rootStyles = {
  backgroundColor: "#23D2FA",
  height: "100vh"
}

const appName = "FriendUp"


export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <title>{appName}</title>
      </head>
      <body>
        <Container style={rootStyles} fluid>
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <h1 className="display-1">{appName}</h1>
              <FriendList />
              <Outlet />
            </Col>
          </Row>
        </Container>
        <Scripts />
        <LiveReload />
        
      </body>
    </html>
  );
}