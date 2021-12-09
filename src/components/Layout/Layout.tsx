import {Footer} from '@components/Footer';
import {styled} from '@stitches';

const StyledLayout = styled('main', {
  width: 'min(900px, 90%)',
  marginX: 'auto',
  mt: '30px',
  minH: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 40px',
});

type LayoutProps = {
  footer?: boolean;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const {footer, children} = props;
  return (
    <StyledLayout>
      {children}
      {footer && <Footer />}
    </StyledLayout>
  );
};
