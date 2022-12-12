export function logError(error: any, context: any): void {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  console.log(error, context);
}
