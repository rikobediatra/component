import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import DropdownPages from "./pages/DropDownPages";
import AccordionPages from './pages/AccordionPages';
import ButtonPages from './pages/ButtonPages';
import ModalPages from "./pages/ModalPages";
import TabelPages from "./pages/TablePages";

function App() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
        <div className="col-span-5">
          <Route path={'/'}>
            <DropdownPages />
          </Route>
          <Route path={'/accordion'}>
            <AccordionPages />
          </Route>
          <Route path={'/buttons'}>
            <ButtonPages />
          </Route>
          <Route path={'/modal'}>
            <ModalPages />
          </Route>
          <Route path={'/tabel'}>
            <TabelPages />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
