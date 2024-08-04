export const formatErrorMessages = (errorDetails: any) => {
  return Object.entries(errorDetails)
    .flatMap(([key, messages]: any) =>
      messages.map((message: any) => `${message}`)
    )
    .join(" <br />\n");
};
