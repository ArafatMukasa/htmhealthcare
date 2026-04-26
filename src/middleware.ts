// Marketing site — no auth middleware needed.
// Static export does not run middleware at request time anyway.
export function middleware() {}

export const config = { matcher: [] }
