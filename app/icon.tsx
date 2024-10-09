import { ImageResponse } from "next/og";

// Needs to be multiple of 48x48 for the favicon to appear in the browser search results.
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "50%",
        }}
      >
        <div style={{ position: "absolute", left: 0, color: "black" }}>A</div>
        <div style={{ position: "absolute", left: 10, color: "black" }}>A</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
