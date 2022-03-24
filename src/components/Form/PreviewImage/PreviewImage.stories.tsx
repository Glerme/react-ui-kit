import { action } from "@storybook/addon-actions";
import { Story, ComponentMeta } from "@storybook/react";

import PreviewImage from "./PreviewImage";

import { PreviewImageProps } from "./PreviewImage.types";

export default {
  title: "Form/Preview Image",
  component: PreviewImage,
  argTypes: {
    images: {
      defaultValue: [
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
      ],
    },
  },
} as ComponentMeta<typeof PreviewImage>;

const Template: Story<PreviewImageProps> = (args) => {
  return <PreviewImage {...args} />;
};

export const Default = Template.bind({});

export const RemoveFiles = Template.bind({});

RemoveFiles.args = {
  removeFiles: action("Removed"),
};
