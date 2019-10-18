import { Home } from "./Pages/Home/Home";
import { Contact } from "./Pages/Contact/Contact";
import { Events } from "./Pages/Events/Events";
import { Useful } from "./Pages/Useful/Useful";
import { Users } from "./Pages/Users/Users";


export function getPage(pageName) {
  switch (pageName) {
    case 'Home':
      return Home
    case 'Contact':
      return Contact;
    case 'Events':
      return Events;
    case 'Useful':
      return Useful;
    case 'Users':
      return Users;
    default:
      return  null;
  }
}