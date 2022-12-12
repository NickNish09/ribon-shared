import {
  act,
} from "@testing-library/react";

export async function waitForPromises() {
  // eslint-disable-next-line no-promise-executor-return
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}
