import { Route, Routes } from "react-router-dom";

type Props = { children?: JSX.Element | JSX.Element[] };
const RoutesWithNotFound = ({ children }: Props) => (
  <>
    <Routes>
      {children}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </>
);
export default RoutesWithNotFound;
