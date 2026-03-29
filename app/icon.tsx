import { ImageResponse } from "next/og";

export const size = {
  width: 192,
  height: 192,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #4f46e5 0%, #6366f1 45%, #312e81 100%)",
        color: "white",
        fontSize: 96,
        fontWeight: 700,
        fontFamily: "Arial, Helvetica, sans-serif",
        borderRadius: 42,
      }}
    >
      ✒
    </div>,
    {
      ...size,
    },
  );
}
