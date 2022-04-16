// Encode string to base64
export function btoa(str: string) {
  return Buffer.from(str).toString("base64");
}

// Decode base64 to string
export function atob(b64str: string) {
  return Buffer.from(b64str, "base64").toString("utf8");
}
