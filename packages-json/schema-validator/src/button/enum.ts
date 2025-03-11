/**
 * 对 vant 中 shap 和 variant 进行了组合
 */
export enum EButtonVariant {

  DEFAULT = "default",

  /**
   * 线形按钮
   */
  OUTLINE = "outline",

  /**
   * 虚线按钮
   */
  DASHED = "dashed",

  /**
   * 实线按钮
   */
  SOLID = "solid",

  /**
   * 虚幻按钮
   */
  FILLED = "filled",

  /**
   * 是否为圆角按钮
   */
  ROUND = "round",

  /**
   * 是否为圆形按钮
   */
  CIRCLE = "circle"
}

export enum EButtonType {
  PRIMARY = "primary",

  /**
   * 默认
   */
  DEFAULT = "default",

  /**
   * 虚线按钮
   */
  DASHED = "dashed",
  TEXT = "text",
  LINK = "link",
}
