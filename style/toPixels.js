export default function toPixels(val) {
    return isNaN(val) ? val : val + 'px';
  }