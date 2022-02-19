

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <>
      <div className="mx-auto px-4">
        
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  );
};

export default Layout;

