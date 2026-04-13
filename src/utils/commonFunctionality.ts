export const openExternalLink = (to: string) => {
  if (to.startsWith("http")) {
    window.open(to, "_blank");
  }
};
