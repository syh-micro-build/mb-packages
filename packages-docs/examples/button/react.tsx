import Container, {
  PropsCheckJsonSchema
} from "@mb-kit/react-container";
import React from "react";

import Json from "./index.json";

export default function Index(): React.ReactElement {
  return <Container value={Json as PropsCheckJsonSchema} />;
}
