const extractPath = (data: string | undefined): string => {
  if (data !== undefined) {
    return data!.split("/")[2].toUpperCase();
  }

  return "Request error";
};

export default extractPath;
