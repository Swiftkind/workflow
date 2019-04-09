import { NavigationComponent } from '../../components/partials/navigation/navigation.component';
import { SideMenuComponent } from '../../components/partials/side-menu/side-menu.component';


export function ContentOnly (content) {
  return { content : content };
}

export function NavContent (content) {
  return {
    sidemenu   : SideMenuComponent,
    navigation : NavigationComponent,
    content    : content
  };
}