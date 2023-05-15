export function getUploadPath(url: string) {
  return `${process.env.APP_URL!}/uploads/${url}`
}
