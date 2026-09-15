import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#00C2A8",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        MB
      </div>
    ),
    { ...size }
  );
}
