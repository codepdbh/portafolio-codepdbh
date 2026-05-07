export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugToImagePath(slug: string): string {
  return `/src/assets/projects/${slug}.png`;
}
