interface DefaultAuthLogoProps {
  width?: number | string;
  height?: number | string;
}

const defaultAuthLogoPng = "/images/b3-auth-logo.png";

export const DefaultAuthLogo = ({ width = 360, height = "auto" }: DefaultAuthLogoProps) => (
  <img
    src={defaultAuthLogoPng}
    alt="B3 Intelligence Beyond the Black Box"
    width={width}
    height={typeof height === "number" ? height : undefined}
    style={{
      width,
      height,
      display: "block",
    }}
  />
);
