const extractPath = (data: string | undefined): string => {
  if (data !== undefined) {
    const splitData: string[] = data!.split("/");

    console.log(splitData);

    return splitData[2].toUpperCase();
  }

  return "Error when extracting path";
};

export default extractPath;
