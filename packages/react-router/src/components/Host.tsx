import React from "react";
import { _ as ReactUtils } from "@leanjs/react";
import type { HostProps } from "@leanjs/react";
import { useNavigate } from "react-router-dom";
import { useListen } from "./UniversalRouter";

const { useHost, Mount, DefaultError } = ReactUtils;

interface ReactRouterHostProps extends HostProps {
  basename?: string;
  pathname?: string;
}

export function Host({
  app,
  basename = "/",
  loadingComponent: LoadingComponent = () => <>...</>,
  errorComponent: ErrorComponent = DefaultError,
  ...rest
}: ReactRouterHostProps) {
  const navigate = useNavigate();
  const { mount, error, runtime } = useHost({ app });
  const listen = useListen();

  return mount ? (
    <Mount
      {...rest}
      mount={mount}
      navigate={navigate}
      listen={listen}
      basename={basename}
      runtime={runtime}
    />
  ) : error ? (
    <ErrorComponent error={error} />
  ) : (
    <LoadingComponent />
  );
}
