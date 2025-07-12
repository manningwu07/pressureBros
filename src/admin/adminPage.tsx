"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminAuth from "~/admin/adminAuth";
import AdminInterface from "~/admin/adminInterface";
import LandingPage from "~/app/page";
import content from "~/content.json";
import type { PressureBrosData } from "~/types/types";

function AdminPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage adminContent={content as PressureBrosData} adminError={false} />} />
        <Route
          path="/admin"
          element={
            <AdminAuth>
              <AdminInterface />
            </AdminAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default AdminPage;