export function classes(...strings: (string | null)[]) {
  return strings.filter((item) => !!item).join(' ')
}
