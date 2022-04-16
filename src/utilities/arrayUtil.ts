export function getItemById(arr: any[], id: string) {
  return arr.find((item) => item.id === id);
}
