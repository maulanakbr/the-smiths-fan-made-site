const extractPath = (data: string): string => {
  return data!.split("/")[2].toUpperCase();
};

export default extractPath;
