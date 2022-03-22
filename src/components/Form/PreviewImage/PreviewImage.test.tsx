import React from "react";
import { render } from "@testing-library/react";

import PreviewImage from "./PreviewImage";

describe("PreviewImage", () => {
  test("renders the PreviewImage Component", () => {
    render(
      <PreviewImage
        images={[
          {
            fileName: "Image 1",
            url: "https://cdn.pixabay.com/photo/2016/11/19/16/40/clouds-1840241_1280.jpg",
          },
          {
            fileName: "Image 2",
            url: "https://www.maxpixel.net/static/photo/1x/Sai-Gon-By-Night-Fullhd-Wallpaper-3914364.jpg",
          },
          {
            fileName: "Image 3",
            url: "https://www.maxpixel.net/static/photo/1x/Desktop-Wallpaper-Hd-Wallpaper-Full-Hd-Wallpaper-5923955.jpg",
          },
        ]}
      />
    );
  });
});
