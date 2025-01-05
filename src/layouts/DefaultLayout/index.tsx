import { DefaultContainerLayout } from './styles';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';

// interface defaultContainerProps {
//   children: ReactNode;
// }

export const DefaultContainer = () =>
  // { children }: defaultContainerProps
  {
    return (
      <DefaultContainerLayout>
        <Header />
        <Outlet />
      </DefaultContainerLayout>
    );
  };
