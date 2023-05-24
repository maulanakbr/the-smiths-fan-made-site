const extractPath = (data: string | undefined): string => {
  if (data !== undefined) {
    const splitData: string[] = data!.split("/");

    return splitData[2].toUpperCase();
  } else {
    throw new Error("Error when extracting path");
  }
};

export default extractPath;
