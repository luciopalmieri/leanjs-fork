import React from "react";
import { UniversalRouter, Host } from "@leanjs/react-router";
import {
  createRuntime,
  HostProvider,
} from "@leanjs/e2e-test-subjects-package-runtime-react";
import { Link, Route, Routes } from "react-router-dom";
import reactApp from "@leanjs/e2e-test-subjects-remote-react-1";
// import reactThrowErrorApp from "@leanjs/e2e-test-subjects-remote-react-throw-error";
import { _ } from "@leanjs/react";

import SubPages from "./SubPages";

// const { ErrorBoundary } = _;

const runtime = createRuntime();

export function App() {
  return (
    <HostProvider origin="http://localhost:56500" runtime={runtime}>
      <UniversalRouter>
        <h1>React Router shell</h1>
        <Link to="/">Link to home shell</Link>
        <Routes>
          <Route path="/micro/*" element={<SubPages />} />
          <Route
            path="/*"
            element={
              <>
                <h2>🏠 Home page</h2>
                <Link to="/micro">Visit micro-frontend on another page</Link>

                <Host app={reactApp} />
              </>
            }
          />
          {/* <Route
            path="/error-boundary"
            element={
              <ErrorBoundary
                errorComponent={() => (
                  <h1>React Router Shell Error Boundary</h1>
                )}
              >
                <Host app={reactThrowErrorApp} errorComponent={null} />
              </ErrorBoundary>
            }
          /> */}
        </Routes>
      </UniversalRouter>
    </HostProvider>
  );
}
