export const formattedErrors = (err: any) => {
  err.map((issue : any) => ({
    field: issue.path.join("."), // name / email / password
    message: issue.message, // readable message
  }));
};
