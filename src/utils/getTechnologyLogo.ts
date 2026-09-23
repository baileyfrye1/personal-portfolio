const logoModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/logos/*.{svg,png}",
  { eager: true },
);

const technologyLogos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop()?.replace(/\.(svg|png)$/, "");
    return [name, mod.default];
  }),
);

export function getTechnologyLogo(technologies: string[]): ImageMetadata[] {
  return technologies.map((tech) => technologyLogos[tech]);
}
