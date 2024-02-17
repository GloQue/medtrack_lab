import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ShowLabInfo from "./pages/ShowLabInfo";
import LandingPage from "./pages/LandingPage";
import Pharmacy from "./pages/Pharmacy";
import Labs from "./pages/Labs";
import LabTable from "./components/LabTable";
import EditLabForm from "./pages/EditLabForm";
import LabForm from "./components/LabForm";
import EditPharmacyForm from "./pages/EditPharmacyForm";
import ShowPharmacyInfo from "./pages/ShowPharmacyInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/labform" element={<LabForm />} />
      <Route path="/labtabledata" element={<LabTable />} />
      <Route path="/editlabform/:id" element={<EditLabForm />} />
      <Route path="/showlabinfo/:id" element={<ShowLabInfo />} />
      <Route path="/editpharmacyform/:id" element={<EditPharmacyForm />} />
      <Route path="/showpharmacyinfo/:id" element={<ShowPharmacyInfo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
