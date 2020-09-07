/**
 * Draw a rounded react stroke.
 * @param ctx Canvas context
 * @param center Center coordinates of the diagram
 * @param size Size of the diagram
 * @param radius The degree of corner bending
 */
export const roundedRectStroke = (
    ctx: CanvasRenderingContext2D,
    center: {x: number, y: number},
    size: {width: number, height: number},
    radius: number): void => {
  const {x, y} = center;
  const {width, height} = size;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
