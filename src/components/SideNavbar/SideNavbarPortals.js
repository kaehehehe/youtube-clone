import ReactDOM from 'react-dom';

export const SideNavbarPortals = ({ children }) => {
  const SideNavbarElement = document.querySelector('#sideNavbar');
  return ReactDOM.createPortal(children, SideNavbarElement);
};