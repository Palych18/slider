declare module "*.scss" {
  type Classes = {
    [className: string]: string;
  };
  const classes: Classes;
  export = classes;
}
